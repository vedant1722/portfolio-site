import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Vedant Jain',
  description: "",
  sidebar: undefined,
  font: {
    google: "Roboto"
  },
  socials: [ 
    { 
      icon: 'github', 
      link: 'https://github.com/vedant1722', 
    }, 
    { 
      icon: 'x', 
      link: 'https://x.com/theproductguy_', 
    }
  ],
  topNav: [ 
    { text: 'About', link: '/' },
    { text: 'Blog', link: '/blog' },
  ],
  // theme: {
  //   accentColor: {
  //     dark: '#f43f5e',
  //     light: '#e11d48'
  //   }
  // }
})
