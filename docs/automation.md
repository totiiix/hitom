# Automatisation du blog (n8n)

### Option simple (recommandée dès maintenant)
1. Sources (RSS, veille, highlights) → n8n
2. n8n génère un fichier `.mdx` dans `/content/posts/` (via GitHub API - create file)
3. n8n déclenche `POST https://<site>/api/revalidate?secret=...` pour regénérer le blog (ISR)
4. Un humain relit sur PR si souhaité (workflow GitHub: require review).

### Points d'ancrage
- Modèle MDX: voir `content/posts/example.mdx`
- Champs frontmatter: `title`, `summary`, `date`, `lang`, `tags`

### À venir
- Passage possible à Notion/Ghost si besoin d'un CMS: garder la même route `/blog`.
