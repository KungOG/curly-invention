const path = require('path');

module.exports = {
  title: 'Kungog UI',
  sections: [
    {
      name: 'Basics',
      sections: [
        {
          name: 'Getting Started',
          sections: [
            {
              name: 'Installation',
            },
          ],
        },
      ],
      sectionDepth: 2,
    },
    {
      name: 'Components',
      sectionDepth: 1,
      sections: [
        {
          name: 'Actions',
          components: 'src/components/**/index.js',
        },
      ],
    },
  ],
  theme: {
    baseBackground: '#fdfdfc',
    link: '#274e75',
    linkHover: '#90a7bf',
    border: '#e0d2de',
    font: ['Helvetica', 'sans-serif'],
  },
  styles: function styles(theme) {
    return {
      Playground: {
        preview: {
          paddingLeft: 0,
          paddingRight: 0,
          borderWidth: [[0, 0, 1, 0]],
          borderRadius: 0,
        },
      },
      Code: {
        code: {
          // make inline code example appear the same color as links
          color: theme.color.link,
          fontSize: 14,
        },
      },
    };
  },
  styleguideComponents: {
    LogoRenderer: path.join(__dirname, 'styleguide/components/Logo'),
    StyleGuideRenderer: path.join(__dirname, 'styleguide/components/StyleGuide'),
    SectionsRenderer: path.join(__dirname, 'styleguide/components/SectionsRenderer'),
  },
  styleguideDir: path.join(__dirname, 'build'),
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          loader: 'url-loader',
        },
      ],
    },
  },
};
