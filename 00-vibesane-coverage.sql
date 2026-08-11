-- VibeSane coverage fixtures: fake, non-functional values only.
CREATE TABLE public.coverage_accounts (id bigint);
ALTER TABLE public.coverage_accounts DISABLE ROW LEVEL SECURITY;
GRANT SELECT ON public.coverage_accounts TO PUBLIC;
GRANT ALL ON public.coverage_accounts TO anon;
INSERT INTO storage.buckets (id, name, public) VALUES ('coverage', 'coverage', true);
CREATE POLICY coverage_open ON storage.objects FOR ALL USING (true) WITH CHECK (true);
GRANT EXECUTE ON FUNCTION public.coverage_fn() TO anon;
CREATE OR REPLACE FUNCTION public.coverage_fn() RETURNS void SECURITY DEFINER AS $$ BEGIN NULL; END; $$ LANGUAGE plpgsql;
