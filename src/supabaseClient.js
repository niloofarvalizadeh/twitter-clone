import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xkiamqxnhrvhthzxhbtz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhraWFtcXhuaHJ2aHRoenhoYnR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAyOTg2MTAsImV4cCI6MjA0NTg3NDYxMH0.T_8S5zJ87nm9ot9nPTgr3Hk6a6mIQghVrBW8bL9KHHM';
// making a new client
export const supabase = createClient(supabaseUrl, supabaseKey);