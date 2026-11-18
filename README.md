# Mikaela VPN — subscription page

Кастомная страница подписки Remnawave в стиле приложения Mikaela VPN (форк [remnawave/subscription-page](https://github.com/remnawave/subscription-page)).

## Установка на сервер

```bash
cd /opt/remnawave
mv subscription subscription.bak 2>/dev/null
git clone https://github.com/tneange1/subscription-page subscription
cp subscription.bak/.env subscription/.env   # или /root/sub.env.bak
cd subscription
docker compose -f docker-compose.mikaela.yml up -d --build
```

Затем в панели Remnawave → Subpage Builder вставьте содержимое `subpage-config.json`.

## Обновление

```bash
cd /opt/remnawave/subscription && git pull && docker compose -f docker-compose.mikaela.yml up -d --build
```

---

## Remnawave Subscription Page

Learn more about Remnawave [here](https://docs.rw/).

# Contributors

Check [open issues](https://github.com/remnawave/subscription-page/issues) to help the progress of this project.

<p align="center">
Thanks to the all contributors who have helped improve Remnawave:
</p>
<p align="center">
<a href="https://github.com/remnawave/subscription-page/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=remnawave/subscription-page" />
</a>
</p>
