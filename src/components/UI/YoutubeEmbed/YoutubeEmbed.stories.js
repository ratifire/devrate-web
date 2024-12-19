import YoutubeEmbed from './YoutubeEmbed';

export default {
  title: 'UI/YoutubeEmbed',
  component: YoutubeEmbed,
  tags: ['autodocs'],
  args: {
    title: 'YouTube video player',
    link: 'https://www.youtube.com/embed/j942wKiXFu8?si=9TUX9p6tlF3izLa6',
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Default = (args) => <YoutubeEmbed {...args} />;
