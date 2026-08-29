const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// 1. Read .env.local variables manually
const envPath = path.join(__dirname, '.env.local');
let supabaseUrl = '';
let supabaseKey = '';

try {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const lines = envContent.split(/\r?\n/);
  for (const line of lines) {
    if (line.startsWith('NEXT_PUBLIC_SUPABASE_URL=')) {
      supabaseUrl = line.split('=')[1].trim();
    }
    if (line.startsWith('NEXT_PUBLIC_SUPABASE_ANON_KEY=')) {
      supabaseKey = line.split('=')[1].trim();
    }
  }
} catch (e) {
  console.error("Error: Could not read .env.local file. Make sure it exists in the root directory.", e);
  process.exit(1);
}

if (!supabaseUrl || !supabaseKey) {
  console.error("Error: NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY not found in .env.local.");
  process.exit(1);
}

// 2. Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

async function runSeeder() {
  console.log("Seeding credentials...");
  console.log(`URL: ${supabaseUrl}`);
  console.log("Email: admin@gmail.com");
  console.log("Password: admin@gmail.com");

  try {
    const { data, error } = await supabase.auth.signUp({
      email: 'admin@gmail.com',
      password: 'admin@gmail.com',
    });

    if (error) {
      // Handle case where user might already exist
      if (error.message.includes("already registered") || error.status === 400) {
        console.log("\n[INFO] User 'admin@gmail.com' is already registered in your Supabase Auth project.");
      } else {
        throw error;
      }
    } else {
      console.log("\n[SUCCESS] Sign up request submitted to Supabase!");
      console.log("User details created:", {
        id: data.user ? data.user.id : 'N/A',
        email: data.user ? data.user.email : 'admin@gmail.com',
      });
      console.log("\nNOTE: If email confirmation is enabled in your Supabase project, check your inbox or run this SQL query in Supabase SQL editor to confirm the account immediately:");
      console.log("UPDATE auth.users SET email_confirmed_at = NOW() WHERE email = 'admin@gmail.com';");
    }
  } catch (err) {
    console.error("\n[ERROR] Seeding failed:", err.message || err);
  }
}

runSeeder();
