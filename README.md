
# DIO | Resumos git e github

Intensivao de Angular Realizado na DIO 

[Digital Innovation One](https://web.dio.me/home?tab=feed)

## 👀📝 Documentação

- [Documentação Git](https://git-scm.com/doc)
- [Documentação GitHub](https://github.com/SergioPaulo-ft)

## 💾 Resumo das Aulas 

| Aulas | Resumos |
|------|--------|
|Gravando Alterações no Repositório local | [Resumo]
()|

## Inserindo Codigo
```
git config
git config --global user.name "eumesmo" 
git config --global user.email myemail@gmail.com
git config --global defaultBranch main
git config --global credential.helper store

git clone https://github.com/SergioPaulo-ft/tabuada.git
(necessario utilizar token para criar um clone no repositorio)

git config --global --show-origin credential.helper
cat .gitconfig
cat .git-credentials

mkdir repo-local (criando uma pasta)
cd repo-local (abrindo uma pasta)
git init (inicia um repositorio git)
touch README.md(cria uma arquivo na pasta)
git add . (salva todas as modificações no diretorio)
git commit -m"add meus cursos"
git log (ver commit realizado)


git add Readme.md
git status
git commit -m"commit de atualização"

echo nomedapasta/ > .gitignore(ignora a pasta)
touch aulas/.gitkeep

```

## Referencias
-[Digital Innovation One]().