const SUPABASE_URL = 'https://frbmbjirrybrfhgeciij.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyYm1iamlycnlicmZoZ2VjaWlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAwNjI0MzQsImV4cCI6MTk3NTYzODQzNH0.yBcxYAIHsNPLt47MZKdzWfykIdTzjBPHOnskDd2lhos';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getPets() {
    const response = await client
        .from('pets')
        .select();
    return response.data;
}

export async function getPet(id) {
    const response = await client
        .from('pets')
        .select()
        .match({ id: id })
        .single();
    return response.data;
}