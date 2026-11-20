# pacman — página pessoal (versão 2)

Site estático para GitHub Pages, com foto de perfil, tema escuro discreto e botões de Discord e e-mail.

## Publicação
No terminal, dentro desta pasta:

```bash
git init
git add .
git commit -m "Atualizar página pessoal"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/pacman-site.git
git push -u origin main
```

Se o repositório já estiver conectado, use apenas:

```bash
git add .
git commit -m "Atualizar visual e foto"
git push
```

Depois confira em GitHub → repositório → Settings → Pages se a origem está como `main` e `/ (root)`.

## Links
- Discord: perfil web `https://discord.com/users/1367994563054014565`
- E-mail: `mailto:pacmantvm@proton.me`

A página não usa backend, banco de dados, bibliotecas ou requisições JavaScript externas. Isso reduz a superfície de ataque, mas não garante invulnerabilidade: proteja a conta GitHub com passkey/2FA e restrinja permissões de escrita no repositório.
