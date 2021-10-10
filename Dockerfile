FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Bhargab-Medhi/whatsapp_bot /root/mywhatsappbot
WORKDIR /root/mywhatsappbot/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
