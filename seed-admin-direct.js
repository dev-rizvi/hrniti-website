const fs = require('fs');
const path = require('path');
const { Client } = require('pg');

// 1. Connection credentials
const dbConfig = {
  user: 'postgres',
  host: 'db.tpfkfjlpafhlfaovrern.supabase.co',
  database: 'postgres',
  password: 'Hrms123##&&',
  port: 5432,
};
const email = 'admin@gmail.com';
const password = 'admin@gmail.com';

async function runDirectSqlSeeder() {
  console.log("--------------------------------------------------");
  console.log("   Supabase Direct SQL Admin Auth Seeder         ");
  console.log("--------------------------------------------------");
  
  const client = new Client({
    ...dbConfig,
    ssl: { rejectUnauthorized: false } // Required for Supabase external connections
  });

  try {
    // A. Connect to Postgres database
    console.log("Connecting to Postgres database...");
    await client.connect();
    console.log("Connected successfully!");

    // B. Delete existing user from auth.users (to ensure a fresh state)
    console.log(`Clearing any existing auth record for '${email}'...`);
    await client.query('DELETE FROM auth.users WHERE email = $1', [email]);
    console.log(`Cleared matching records.`);

    // C. Install pgcrypto extension if not exists (required for bcrypt hashing)
    console.log("Installing pgcrypto extension if not exists...");
    await client.query('CREATE EXTENSION IF NOT EXISTS pgcrypto');

    // D. Insert user directly into auth.users using crypt() for bcrypt hashing
    console.log(`Inserting user '${email}' with password '${password}' directly via SQL...`);
    const insertQuery = `
      INSERT INTO auth.users (
          instance_id,
          id,
          aud,
          role,
          email,
          encrypted_password,
          email_confirmed_at,
          raw_app_meta_data,
          raw_user_meta_data,
          is_super_admin,
          created_at,
          updated_at,
          last_sign_in_at,
          phone_confirmed_at,
          confirmation_token,
          recovery_token,
          email_change_token_new,
          email_change,
          phone_change,
          phone_change_token,
          reauthentication_token,
          email_change_token_current
      ) VALUES (
          '00000000-0000-0000-0000-000000000000',
          gen_random_uuid(),
          'authenticated',
          'authenticated',
          $1,
          crypt($2, gen_salt('bf', 10)),
          NOW(),
          '{"provider":"email","providers":["email"]}',
          '{}',
          false,
          NOW(),
          NOW(),
          NOW(),
          NOW(),
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          ''
      ) RETURNING id;
    `;

    const res = await client.query(insertQuery, [email, password]);
    const newUserId = res.rows[0].id;

    console.log(`User created in auth.users (Database ID: ${newUserId})`);

    // D-2. Delete matching identities and insert email provider mapping
    console.log("Seeding identity mapping into auth.identities...");
    await client.query('DELETE FROM auth.identities WHERE email = $1', [email]);
    await client.query(`
      INSERT INTO auth.identities (
          id,
          provider_id,
          user_id,
          identity_data,
          provider,
          last_sign_in_at,
          created_at,
          updated_at
      ) VALUES (
          gen_random_uuid(),
          $1::text,
          $1::uuid,
          json_build_object('sub', $1::text, 'email', $2::text, 'email_verified', true, 'phone_verified', false),
          'email',
          NOW(),
          NOW(),
          NOW()
      );
    `, [newUserId, email]);
    console.log("Identity mapping seeded successfully!");

    // E. Add matching record to public.profiles if the table exists
    // (Next.js auth systems often use a trigger, but running this check ensures safety)
    try {
      console.log("Checking if public.profiles exists to seed corresponding profile...");
      const tableCheck = await client.query(`
        SELECT EXISTS (
          SELECT FROM information_schema.tables 
          WHERE table_schema = 'public' 
          AND table_name = 'profiles'
        );
      `);
      
      if (tableCheck.rows[0].exists) {
        await client.query(`
          INSERT INTO public.profiles (id, email, updated_at)
          VALUES ($1, $2, NOW())
          ON CONFLICT (id) DO NOTHING;
        `, [newUserId, email]);
        console.log("Public profile seeded successfully!");
      } else {
        console.log("No public.profiles table exists (skipped).");
      }
    } catch (profileErr) {
      console.log("Skipping public profile seeding: " + profileErr.message);
    }

    console.log("\n==================================================");
    console.log(`[SUCCESS] Admin user seeded successfully via SQL!`);
    console.log(`Login Email:    ${email}`);
    console.log(`Login Password: ${password}`);
    console.log("==================================================");

  } catch (err) {
    console.error("\n[ERROR] Direct SQL Seeding failed:", err.message || err);
  } finally {
    try {
      await client.end();
      console.log("Database connection closed.");
    } catch (e) {}
  }
}

runDirectSqlSeeder();
