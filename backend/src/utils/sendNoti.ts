async function sendDiscordNotification(mentorPair: any) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error('Discord Webhook URL is not set in .env file.');
    return;
  }

  const embed = {
    title: '🎉 A Senior Has Been Found! 🎉',
    description: `Congratulations! **${mentorPair.junior.displayName}** has correctly identified their senior: **${mentorPair.senior.displayName}**!`,
    color: 0x5865f2,
    fields: [
      { name: 'Senior', value: mentorPair.senior.displayName, inline: true },
      { name: 'Junior', value: mentorPair.junior.displayName, inline: true },
    ],
    thumbnail: {
      url: mentorPair.senior.profilePic,
    },
    footer: {
      text: `Pair confirmed at: ${new Date(mentorPair.foundAt).toLocaleString()}`,
    },
  };

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ embeds: [embed] }),
    });
  } catch (error) {
    console.error('Failed to send Discord notification:', error);
  }
}

export { sendDiscordNotification };
