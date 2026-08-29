const { Client } = require('pg');

const dbConfig = {
  user: 'postgres',
  host: 'db.tpfkfjlpafhlfaovrern.supabase.co',
  database: 'postgres',
  password: 'Hrms123##&&',
  port: 5432,
};

async function createContactSettingsTable() {
  console.log("Connecting to Database...");
  const client = new Client({
    ...dbConfig,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    console.log("Connected successfully!");

    console.log("Creating contact_settings table...");
    await client.query(`
      CREATE TABLE IF NOT EXISTS public.contact_settings (
          id integer PRIMARY KEY DEFAULT 1,
          phone text NOT NULL,
          whatsapp text NOT NULL,
          email text NOT NULL,
          location_address text NOT NULL,
          location_map_url text NOT NULL,
          updated_at timestamp with time zone DEFAULT now(),
          CONSTRAINT one_row CHECK (id = 1)
      );
    `);
    console.log("Table created.");

    console.log("Inserting default contact settings...");
    await client.query(`
      INSERT INTO public.contact_settings (id, phone, whatsapp, email, location_address, location_map_url)
      VALUES (
          1,
          '+91 8601489763',
          '+91 8601489763',
          'sales@hrniti.com',
          '5/761, Sector 5, Sector 6, Gomti Nagar, Lucknow, Uttar Pradesh 226001',
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8037305986877!2d73.01819381489912!3d19.072346987088463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c13bf63f25c7%3A0xe54d9243ab03576!2sEverest%20Nivara%20Infotech%20Park!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin'
      ) ON CONFLICT (id) DO UPDATE SET
          phone = EXCLUDED.phone,
          whatsapp = EXCLUDED.whatsapp,
          email = EXCLUDED.email,
          location_address = EXCLUDED.location_address,
          location_map_url = EXCLUDED.location_map_url;
    `);
    console.log("Default settings seeded.");

    console.log("Configuring Row Level Security (RLS) policies...");
    await client.query(`ALTER TABLE public.contact_settings ENABLE ROW LEVEL SECURITY;`);
    
    // Drop existing policies if any
    await client.query(`DROP POLICY IF EXISTS "Allow public read access to contact_settings" ON public.contact_settings;`);
    await client.query(`DROP POLICY IF EXISTS "Allow public write access to contact_settings" ON public.contact_settings;`);
    await client.query(`DROP POLICY IF EXISTS "Allow public update access to contact_settings" ON public.contact_settings;`);
    
    // Create new permissive policies
    await client.query(`
      CREATE POLICY "Allow public read access to contact_settings" 
      ON public.contact_settings FOR SELECT USING (true);
    `);
    await client.query(`
      CREATE POLICY "Allow public write access to contact_settings" 
      ON public.contact_settings FOR UPDATE USING (true);
    `);
    
    console.log("Policies configured successfully!");

  } catch (err) {
    console.error("Error creating database table:", err);
  } finally {
    await client.end();
    console.log("Database connection closed.");
  }
}

createContactSettingsTable();
