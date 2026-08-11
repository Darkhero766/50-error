-- VULN-06: SECURITY DEFINER without safe search_path
CREATE OR REPLACE FUNCTION public.test_admin() RETURNS void LANGUAGE plpgsql SECURITY DEFINER AS $$ BEGIN PERFORM 1; END; $$;

-- Additional database fixture
ALTER FUNCTION public.test_admin() SECURITY DEFINER;
