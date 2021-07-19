const style = props =>
  `color: var(--chakra-colors-brand-${
    props.colorMode === 'light' ? '600' : '300'
  });font-weight: 500;`;
const info = props => [
  {
    input: 'self.learnAboutMe()',
    return: 'Loaded data...',
  },
  {
    input: 'self.currentLocation',
    return: '"Kent, UK"',
  },

  {
    input: 'self.interests',
    return: '["web dev", "biology", "tennis"]',
  },
  {
    input: 'self.education',
    return: '"B.Sc Biochemistry - University of Kent"',
  },
  {
    input: 'self.skills',
    return: '[ "JavaScript", "Python", "React", "Next.JS", "Chakra-UI", "Tailwind", "SASS", "git"]',
  },
  {
    input: 'self.contactMe()',
    return: `["<a style="${style(
      props
    )}" rel="noopener" href="https://www.linkedin.com/in/michael-hall-86616b17b/">LinkedIn</a>", "<a style="${style(
      props
    )}" rel="noopener" href="https://github.com/mah51">Github</a>", "<a rel="noopener" style="${style(
      props
    )}" href="https://www.instagram.com/accounts/login/">Instagram</a>"]`,
  },
];

export default info;
