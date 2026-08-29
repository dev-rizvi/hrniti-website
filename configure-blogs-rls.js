const { Client } = require('pg');

const dbConfig = {
  user: 'postgres',
  host: 'db.tpfkfjlpafhlfaovrern.supabase.co',
  database: 'postgres',
  password: 'Hrms123##&&',
  port: 5432,
};

async function configureBlogsRls() {
  console.log("Connecting to Database...");
  const client = new Client({
    ...dbConfig,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    console.log("Connected successfully!");

    console.log("Configuring RLS on blogs table...");
    await client.query(`ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;`);

    console.log("Dropping existing policies on blogs table if any...");
    await client.query(`DROP POLICY IF EXISTS "Allow public read access to blogs" ON public.blogs;`);
    await client.query(`DROP POLICY IF EXISTS "Allow public write access to blogs" ON public.blogs;`);
    await client.query(`DROP POLICY IF EXISTS "Allow public insert access to blogs" ON public.blogs;`);
    await client.query(`DROP POLICY IF EXISTS "Allow public update access to blogs" ON public.blogs;`);
    await client.query(`DROP POLICY IF EXISTS "Allow public delete access to blogs" ON public.blogs;`);

    console.log("Creating new RLS policies for blogs...");
    // 1. SELECT policy: allowed for everyone
    await client.query(`
      CREATE POLICY "Allow public read access to blogs" 
      ON public.blogs FOR SELECT USING (true);
    `);
    
    // 2. INSERT policy: allowed for all (or authenticated, but since we use Client SDK without complex auth roles setup, we allow public for simplicity)
    await client.query(`
      CREATE POLICY "Allow public insert access to blogs" 
      ON public.blogs FOR INSERT WITH CHECK (true);
    `);

    // 3. UPDATE policy: allowed for all
    await client.query(`
      CREATE POLICY "Allow public update access to blogs" 
      ON public.blogs FOR UPDATE USING (true);
    `);

    // 4. DELETE policy: allowed for all
    await client.query(`
      CREATE POLICY "Allow public delete access to blogs" 
      ON public.blogs FOR DELETE USING (true);
    `);

    console.log("RLS policies configured successfully on public.blogs!");

  } catch (err) {
    console.error("Error configuring RLS:", err);
  } finally {
    await client.end();
    console.log("Database connection closed.");
  }
}

configureBlogsRls();
