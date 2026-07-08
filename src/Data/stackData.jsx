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



const stackCategories = [
    {
        category: "Frontend",
        items: [
            { title: "Framer", icon: FramerSolidIcon },
            { title: "TypeScript", icon: TypeScriptIcon },
            { title: "React", icon: ReactFillIcon },
            { title: "Tailwind CSS", icon: TailwindCssIcon },
            { title: "Next.js", icon: NextjsIcon },
        ]
    },
    {
        category: "Backend & Databases",
        items: [
            { title: "Python", icon: PythonFillIcon },
            { title: "PostgreSQL", icon: PostgresqlIcon },
            { title: "Node.js", icon: NodeFillIcon },
            { title: "MySQL", icon: MysqlIcon },
            { title: "Express.js", icon: ExpressjsDarkIcon },
            { title: "MongoDB", icon: MongodbIcon },
        ]
    },
    {
        category: "Tools & Ecosystem",
        items: [
            { title: "Git", icon: GitIconIcon  },
            { title: "GitHub", icon: GithubDarkIcon },
            { title: "npm", icon: NpmIcon },
            { title: "Bash", icon: BashIcon },
            { title: "VS Code", icon: VscodeIcon },
            { title: "Cursor AI", icon: CursorIcon },
        ]
    },
    {
        category: "Design & Deployment",
        items: [
            { title: "Photoshop", icon: PhotoshopIcon },
            { title: "Figma", icon: FigmaIcon },
            { title: "Vercel", icon: VercelLightIcon },
            { title: "Netlify", icon: NetlifyIcon },
        ]
    }
];

export default stackCategories;