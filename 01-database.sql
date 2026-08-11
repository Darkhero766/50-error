-- VULN-01: RLS disabled
ALTER TABLE public.accounts DISABLE ROW LEVEL SECURITY;

-- VULN-02: PUBLIC grant
GRANT SELECT ON public.accounts TO PUBLIC;

-- VULN-03: anonymous grant
GRANT ALL ON public.accounts TO anon;

-- VULN-04: public storage bucket
INSERT INTO storage.buckets (id, name, public) VALUES ('test-public', 'test-public', true);

-- VULN-05: over-broad storage policy
CREATE POLICY test_anyone ON storage.objects FOR ALL USING (true) WITH CHECK (true);
