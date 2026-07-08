import GitIconIcon from '@iconify-react/logos/git-icon';
import GithubDarkIcon from '@iconify-react/skill-icons/github-dark';
import VercelLightIcon from '@iconify-react/skill-icons/vercel-light';
import ExpressjsDarkIcon from '@iconify-react/skill-icons/expressjs-dark';
import CursorIcon from '@iconify-react/devicon/cursor';

// gilbarbara/logos serves optimized SVG logos from a public CDN
// (https://github.com/gilbarbara/logos). Each logo is available as a plain
// .svg file at https://cdn.svglogos.dev/logos/{name}.svg — there's no
// per-icon React component export from that repo, so this factory wraps the
// CDN url in a small component that behaves like a react-icons icon
// (accepts size / className / style / any other <img> prop).
const LOGOS_CDN = 'https://cdn.svglogos.dev/logos';

function createLogoIcon(slug, label) {
    const LogoIcon = ({ size = '1em', className, style, ...rest }) => (
        <img
            src={`${LOGOS_CDN}/${slug}.svg`}
            alt={label}
            width={size}
            height={size}
            className={className}
            style={{ display: 'inline-block', ...style }}
            {...rest}
        />
    );
    LogoIcon.displayName = `LogoIcon(${slug})`;
    return LogoIcon;
}

// Matches found in gilbarbara/logos
const TypeScriptIcon = createLogoIcon('typescript-icon', 'TypeScript');
const TailwindCssIcon = createLogoIcon('tailwindcss-icon', 'Tailwind CSS');
const VercelIcon = createLogoIcon('vercel-icon', 'Vercel');
const MongodbIcon = createLogoIcon('mongodb-icon', 'MongoDB');
const ExpressIcon = createLogoIcon('express', 'Express.js');
const BashIcon = createLogoIcon('bash-icon', 'Bash');
const NpmIcon = createLogoIcon('npm-icon', 'npm');
const NetlifyIcon = createLogoIcon('netlify-icon', 'Netlify');
const MysqlIcon = createLogoIcon('mysql-icon', 'MySQL');
const FigmaIcon = createLogoIcon('figma', 'Figma');
const PostgresqlIcon = createLogoIcon('postgresql', 'PostgreSQL');
const FramerSolidIcon = createLogoIcon('framer', 'Framer');
const ReactFillIcon = createLogoIcon('react', 'React');
const NextjsIcon = createLogoIcon('nextjs-icon', 'Next.js');
const VscodeIcon = createLogoIcon('visual-studio-code', 'VS Code');
const PythonFillIcon = createLogoIcon('python', 'Python');
const NodeFillIcon = createLogoIcon('nodejs-icon', 'Node.js');
const PhotoshopIcon = createLogoIcon('adobe-photoshop', 'Photoshop');
const GitIcon = createLogoIcon('git', 'Git');
const GithubFillIcon = createLogoIcon('github-icon', 'GitHub');



const experiences = [
    {
        id: 1,
        title: "Developer",
        company: "Classified",
        companyClass: "exp-span es1",
        subtitle: "Stealth, Full-Time | Mar 26 — Present",
        active: true,
        description: [],
        stack: [],
    },
    {
        id: 2,
        title: "UI & Graphic Designer",
        company: "Freelancer",
        companyClass: "exp-span",
        subtitle: "Remote, Part-Time | Jul 24 — Feb 26",
        active: false,
        description: [
            "Designed responsive websites across multiple platforms with a 98% client satisfaction rate. Optimized UI and site layouts, increasing average user engagement by 35% for global clients.",
            "",
        ],
        stack: [
            { title: "Cursor AI", icon: CursorIcon },
            { title: "Python", icon: PythonFillIcon },
            { title: "Framer", icon: FramerSolidIcon },
            { title: "Photoshop", icon: PhotoshopIcon },
            { title: "Netlify", icon: NetlifyIcon },
            { title: "Figma", icon: FigmaIcon },
            { title: "Vercel", icon: VercelLightIcon },
        ],
    },
];

export default experiences;