import { createClient } from "@supabase/supabase-js";

const TABLE = "shared_grill_posts";

export function isSupabaseConfigured() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return Boolean(url?.trim() && key?.trim());
}

export function getSupabaseBrowserClient() {
  if (!isSupabaseConfigured()) return null;
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

export function rowToRecipe(row) {
  const steps = Array.isArray(row.steps) ? row.steps : [];
  return {
    id: row.id,
    title: row.title,
    author: row.author,
    cut: row.cut,
    heat: row.heat,
    time: row.grill_time,
    sauce: row.sauce ?? "塩",
    note: row.note,
    steps,
    likes: row.likes ?? 0,
    createdAt: row.created_at,
  };
}

export function recipeToInsert(recipe) {
  return {
    title: recipe.title,
    author: recipe.author,
    cut: recipe.cut,
    heat: recipe.heat,
    grill_time: recipe.time,
    sauce: recipe.sauce || "塩",
    note: recipe.note,
    steps: recipe.steps,
    likes: recipe.likes ?? 0,
  };
}

export async function fetchSharedRecipesFromDb() {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("created_at", { ascending: false })
    .limit(200);
  if (error) throw error;
  return (data ?? []).map(rowToRecipe);
}

export async function insertSharedRecipe(recipe) {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) throw new Error("Supabase is not configured");
  const { data, error } = await supabase
    .from(TABLE)
    .insert(recipeToInsert(recipe))
    .select()
    .single();
  if (error) throw error;
  return rowToRecipe(data);
}
