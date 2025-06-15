import React, { useState, useEffect } from 'react';

// --- MUI Core Components ---
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Container,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Paper,
  Stack,
  Card,
  CardContent,
  CardHeader,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  IconButton,
  Chip,
  Snackbar,
  Alert,
  Switch,
  Link,
  Collapse,
  Divider,
  styled,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { blue, grey } from '@mui/material/colors';

// --- MUI Icons ---
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PolicyIcon from '@mui/icons-material/Policy';
import ArticleIcon from '@mui/icons-material/Article';
import StorageIcon from '@mui/icons-material/Storage';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import SecurityIcon from '@mui/icons-material/Security';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import DatasetIcon from '@mui/icons-material/Dataset';
import RuleFolderIcon from '@mui/icons-material/RuleFolder';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GavelIcon from '@mui/icons-material/Gavel';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import BrushIcon from '@mui/icons-material/Brush';
import TuneIcon from '@mui/icons-material/Tune';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MenuIcon from '@mui/icons-material/Menu';



// --- MOCK DATA (unchanged) ---
const slashCommands = [
  {
    name: '/chat',
    description: 'Start a conversation with the AI.',
    options: '[prompt]',
    how_to_use: 'Simply type `/chat` followed by your message or question to start a direct conversation with the AI.',
    common_errors: 'If the bot doesn\'t respond, make sure it has the necessary permissions in the channel. Very long prompts might get truncated.',
    example: '`/chat Hello, can you tell me a fun fact?`',
    does_prompt: null,
  },
  {
    name: '/imagine',
    description: 'Generate an image based on a text prompt.',
    options: '[prompt]',
    how_to_use: 'Use `/imagine` with a descriptive prompt to generate an image. Be as specific as you can for better results.',
    common_errors: 'The bot may refuse to generate images for prompts that violate the safety policy. Generation can take up to 60 seconds.',
    example: '`/imagine a vibrant synthwave cityscape at sunset`',
    does_prompt: JSON.stringify({
        model: "dall-e-3",
        user_prompt: "a vibrant synthwave cityscape at sunset",
        quality: "hd",
        style: "vivid"
    }),
  },
];


// Reusable View Component
const ViewContainer = ({ icon, title, children }) => (
    <Stack spacing={3}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ pl: 1 }}>
            {icon}
            <Typography variant="h4" component="h1" fontWeight="bold">
                {title}
            </Typography>
        </Stack>
        {children}
    </Stack>
);

// --- Individual Page Views ---
const HomeView = () => (
    <ViewContainer icon={<HomeIcon color="primary" sx={{ fontSize: 36 }} />} title="Home">
        
        <Card variant="outlined">
            <CardHeader
                avatar={<InfoIcon />}
                title={<Typography variant="h6" component="h3">About Mana Nagase</Typography>}
            />
            <CardContent>
                <Typography variant="body1" color="text.secondary">
                    Welcome to Mana Nagase, your versatile AI companion for Discord, powered by Google's state-of-the-art Gemini models. Go beyond simple chatbots with a toolkit designed for advanced roleplaying, powerful image generation, multi-modal analysis, and complete user control.
                </Typography>
            </CardContent>
        </Card>

        <Card variant="outlined">
            <CardHeader
                avatar={<SmartToyIcon />}
                title={<Typography variant="h6" component="h3">Core Capabilities</Typography>}
            />
            <CardContent>
                <Stack spacing={2}>
                    <Box display="flex" alignItems="center">
                        <PsychologyIcon color="action" sx={{ mr: 2 }} />
                        <Box>
                            <Typography fontWeight="bold">Advanced AI Roleplaying</Typography>
                            <Typography variant="body2" color="text.secondary">Create custom characters with unique personalities using webhooks, or instantly import them from V2 Character Cards.</Typography>
                        </Box>
                    </Box>
                    <Divider />
                    <Box display="flex" alignItems="center">
                        <BrushIcon color="action" sx={{ mr: 2 }} />
                        <Box>
                            <Typography fontWeight="bold">Image Generation & Editing</Typography>
                            <Typography variant="body2" color="text.secondary">Use the <code style={{fontFamily: 'monospace'}}> /edit_or_generate_image</code> command to create new images from a prompt or edit existing ones with AI assistance.</Typography>
                        </Box>
                    </Box>
                     <Divider />
                    <Box display="flex" alignItems="center">
                        <PermMediaIcon color="action" sx={{ mr: 2 }} />
                        <Box>
                            <Typography fontWeight="bold">Multi-Modal Understanding</Typography>
                            <Typography variant="body2" color="text.secondary">Mana Nagase can analyze the content of images, extract audio from videos, and understand context from web links.</Typography>
                        </Box>
                    </Box>
                     <Divider />
                    <Box display="flex" alignItems="center">
                        <TuneIcon color="action" sx={{ mr: 2 }} />
                        <Box>
                            <Typography fontWeight="bold">Full User Control</Typography>
                            <Typography variant="body2" color="text.secondary">Bring your own API key, switch between different AI models on the fly, and manage your data with comprehensive reset and removal commands.</Typography>
                        </Box>
                    </Box>
                </Stack>
            </CardContent>
        </Card>

        <Card variant="outlined">
            <CardHeader
                avatar={<RocketLaunchIcon />}
                title={<Typography variant="h6" component="h3">Getting Started</Typography>}
            />
            <CardContent>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                    Ready to bring Mana Nagase to your server? The bot is open-source and designed for self-hosting, giving you maximum privacy and control. Head over to the GitHub repository to get the code and follow the setup instructions in the "Guide" tab.
                </Typography>
                <Stack direction="row" spacing={1}>
                     <Button variant="contained" startIcon={<GitHubIcon />} href="https://github.com/War004/Google-gemini-discord-bot" target="_blank" rel="noopener">
                        Get the Code on GitHub
                    </Button>
                    {/* The "Read the Guide" button has been removed as requested */}
                </Stack>
            </CardContent>
        </Card>

        <Card variant="outlined">
            <CardHeader
                avatar={<RssFeedIcon />}
                title={<Typography variant="h6" component="h3">Latest Notices</Typography>}
            />
            <CardContent sx={{ pt: 1,  "&:last-child": { pb: 2 } }}>
                <Stack spacing={2}>
                     <Alert severity="info" variant="standard">
                        <Typography fontWeight="bold">Afternoon Server Shutdown to Prevent Overheating</Typography>
                        
                        {/* --- THIS IS THE NEWLY ADDED DATE --- */}
                        <Typography variant="caption" color="text.secondary" sx={{ mb: 1 }}>
                            Posted on: June 15, 2025
                        </Typography>
                        {/* ----------------------------------- */}

                        <Typography variant="body2" component="div">
                            <strong>Daily Bot Downtime Schedule</strong>
                            <p>
                                To ensure service stability and prevent hardware damage from high afternoon heat, the bot will be offline during the following hours every day, effective immediately.
                            </p>
                            <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
                                <li><strong>Downtime Begins:</strong> 1:30 PM IST (Daily)</li>
                                <li><strong>Expected Return:</strong> 5:00 PM - 6:00 PM IST (Daily)</li>
                            </ul>
                            <p>
                                This schedule will remain in effect until temperatures consistently decrease. Thank you for your understanding.
                            </p>
                        </Typography>
                    </Alert>
                </Stack>
            </CardContent>
        </Card>
    </ViewContainer>
);

const CommandsView = () => {
    // Styled component for inline code snippets
    const CodeSpan = styled('code')(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)',
        padding: '2px 6px',
        borderRadius: theme.shape.borderRadius / 2,
        fontFamily: 'monospace',
    }));

    const commandsData = [
        {
            name: "/check_token_usage",
            description: "Check the token usage for a bot or webhook.",
            purpose: "This command calculates and displays the current token count for a selected bot or a character webhook. Tokens are consumed by the AI model with every message and are reset periodically. This tool helps you monitor usage to stay within the model's context limit (1,048,576 tokens).",
            parameters: [
                { name: "Bot/Webhook", type: "Dropdown Choice", required: true, description: "After running the command, you will be prompted to select which bot or character you want to check from a dropdown menu." }
            ]
        },
        {
            name: "/info",
            description: "Displays technical information about the bot.",
            purpose: "Provides real-time diagnostic information, including the bot's current response latency (ping) and the specific AI model that is active in the current channel. It also attaches the bot's core system instructions as a downloadable text file for transparency.",
            parameters: []
        },
        {
            name: "/add_webhook",
            description: "Adds a new character webhook to the channel.",
            purpose: "This command creates a new, independent character (as a webhook) in the channel. You must provide a name and a set of system instructions that define its personality and behavior. You can also give it a custom avatar.",
            parameters: [
                { name: "name", type: "Text", required: true, description: "The name that the character will use." },
                { name: "avatar", type: "Image File", required: false, description: "An optional custom avatar (PNG, JPG, or WEBP) for the character." },
                { name: "plain_text_instructions", type: "Text", required: true, description: "The system prompt that defines the character's personality. (Use this OR the file upload).", group: "instructions" },
                { name: "text_file_instructions", type: "Text File", required: true, description: "Upload a .txt file containing the system prompt. (Use this OR plain text).", group: "instructions" }
            ]
        },
        {
            name: "/remove_webhook",
            description: "Removes a specific webhook created by the bot.",
            purpose: "Permanently deletes a selected character webhook from the channel. This action also removes all associated data files, including its chat history and configuration.",
            parameters: [
                { name: "Webhook to Remove", type: "Dropdown Choice", required: true, description: "A dropdown menu will appear, allowing you to choose which webhook to delete." }
            ]
        },
        {
            name: "/reset_chat_history",
            description: "Resets the chat history for a bot or webhook.",
            purpose: "Wipes the conversational memory for a selected entity. This is useful for starting a fresh conversation or if the AI's context has become confused. You can choose to reset either the regular text chat history or the image generation history.",
            parameters: [
                { name: "History to Reset", type: "Dropdown Choice", required: true, description: "Select from a dropdown which bot/webhook and which type of history (Regular or Image) you want to clear." }
            ]
        },
        {
            name: "/add_v2_card_characters",
            description: "Adds a character using a V2 Character Card (PNG).",
            purpose: "Imports a character directly from a standard V2 Character Card. The bot reads the metadata embedded in the PNG file to automatically set the character's name, personality, greeting, and avatar.",
            parameters: [
                { name: "image", type: "Image File (.png)", required: true, description: "The V2 Character Card PNG file." },
                { name: "additional_image", type: "Image File", required: false, description: "An optional 'persona' image the AI can use to understand the user's appearance during roleplay." }
            ]
        },
        {
            name: "/edit_or_generate_image",
            description: "Generate or edit images using Gemini Vision.",
            purpose: "A powerful multi-modal command. If you only provide a prompt, it generates a new image. If you provide both a prompt and an image, it uses the prompt to edit the provided image.",
            parameters: [
                { name: "prompt", type: "Text", required: true, description: "The creative instructions for generating or editing the image." },
                { name: "image", type: "Image File", required: false, description: "An optional image to be edited or used as context for the generation." }
            ]
        },
        {
            name: "/change_model",
            description: "Change the AI model for the current channel.",
            purpose: "Swaps the underlying AI model that powers the bot's responses in this channel. Different models have different capabilities, context limits, and potential restrictions. This allows for fine-tuning the bot's performance.",
            parameters: [
                { name: "model_names", type: "Choice", required: true, description: "Select the desired AI model from a predefined list.", choices: ["Gemini 2.5 flash thinking v2", "Gemini 2.5 flash", "Gemini 2.0 flash", "Gemini 1.5 flash (stable)", "and more..."] }
            ]
        },
        {
            name: "/set_language",
            description: "Set the response language for the bot.",
            purpose: "Configures the language the bot will use for its interface text and responses in the current channel. This setting is saved per-channel.",
            parameters: [
                { name: "language", type: "Choice", required: true, description: "Select the desired language from a list.", choices: ["English", "हिन्दी", "日本語", "Français", "Русский", "and more..."] }
            ]
        },
        {
            name: "/set_api_key",
            description: "Set your Gemini API key for this channel.",
            purpose: "Securely saves your personal Google Gemini API key for use in this channel. This key is required for the bot to function and is stored on a per-channel basis.",
            parameters: [
                { name: "api_key", type: "Text (Secret)", required: true, description: "Your unique Google API key." }
            ]
        },
        {
            name: "/clone_user",
            description: "Clones a user's communication style.",
            purpose: "An experimental command to create an AI-powered clone of a user by analyzing their message history. This feature is not yet active.",
            parameters: [],
            status: "Under Construction"
        },
        {
            name: "/pixiv_search",
            description: "Searches for images on Pixiv.",
            purpose: "This command was used to search for images on Pixiv but has been discontinued and is no longer supported.",
            parameters: [],
            status: "Discontinued"
        },
    ];

    return (
        <ViewContainer icon={<SmartToyIcon color="primary" sx={{ fontSize: 36 }} />} title="Slash Commands">
            <Typography variant="body1" color="text.secondary" sx={{ pl: 1, mb: 2 }}>
                Here is a detailed list of available commands. Click on any command to see its parameters and purpose.
            </Typography>
            <Stack spacing={1.5}>
                {commandsData.map((command, index) => (
                    <Accordion key={index} variant="outlined" sx={{ '&:before': { display: 'none' } }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            {/* The summary part remains mostly the same, as it was already effective */}
                            <Stack direction="row" alignItems="center" spacing={2} sx={{ width: '100%', mr: 1 }}>
                                <Typography sx={{ fontFamily: 'monospace', color: 'primary.main', fontWeight: 'bold' }}>
                                    {command.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" noWrap sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                                    {command.description}
                                </Typography>
                                {command.status && <Chip label={command.status} color={command.status === "Discontinued" ? "error" : "warning"} size="small" />}
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails>
                            {/* --- REFACTORED SECTION --- */}
                            <Stack spacing={3}>
                                {/* 1. Simplified "What it Does" section (No Card wrapper) */}
                                <Box>
                                    <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                                        <HelpOutlineIcon fontSize="small" color="action" />
                                        <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                                            What it Does
                                        </Typography>
                                    </Stack>
                                    <Typography variant="body2" color="text.secondary" sx={{ pl: 3.5 }}>
                                        {command.purpose}
                                    </Typography>
                                </Box>

                                {/* 2. Simplified "Parameters" section (No Card wrapper, no Paper per parameter) */}
                                {command.parameters.length > 0 && (
                                    <Box>
                                        <Stack direction="row" spacing={1} alignItems="center" mb={1.5}>
                                            <ListAltIcon fontSize="small" color="action" />
                                            <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                                                Parameters
                                            </Typography>
                                        </Stack>
                                        <Stack
                                            divider={<Divider flexItem sx={{ my: 1 }} />} // Use dividers instead of boxes
                                            sx={{ pl: 3.5 }}
                                        >
                                            {command.parameters.map((param, pIndex) => (
                                                <Box key={pIndex} sx={{ py: 1 }}>
                                                    {/* Parameter details are now in a clean row */}
                                                    <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap">
                                                        <Typography fontWeight="bold"><CodeSpan>{param.name}</CodeSpan></Typography>
                                                        <Chip label={param.type} color="default" size="small" variant="outlined" />
                                                        <Chip label={param.required ? "Required" : "Optional"} color={param.required ? "primary" : "default"} size="small" />
                                                    </Stack>
                                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                                        {param.description}
                                                    </Typography>
                                                    {param.choices && (
                                                         <Box sx={{pt: 1, display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                                                            {param.choices.map((choice, cIndex) => (
                                                                <Chip key={cIndex} label={choice} size="small" />
                                                            ))}
                                                        </Box>
                                                    )}
                                                </Box>
                                            ))}
                                        </Stack>
                                    </Box>
                                )}
                            </Stack>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Stack>
        </ViewContainer>
    );
};

const OfflineHostingView = () => {
    // A styled component for inline code snippets
    const CodeSpan = styled('code')(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)',
        padding: '2px 6px',
        borderRadius: theme.shape.borderRadius / 2,
        fontFamily: 'monospace',
    }));

    // A styled component for code blocks
    const CodeBlock = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1.5),
        backgroundColor: theme.palette.mode === 'dark' ? grey[900] : grey[100],
        fontFamily: 'monospace',
        fontSize: '0.875rem',
        whiteSpace: 'pre-wrap',
        overflowX: 'auto',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        border: `1px solid ${theme.palette.divider}`
    }));

    const steps = [
        {
            label: 'Get the Source Code',
            description: `First, clone the repository from GitHub or download the ZIP file. Once downloaded, navigate into the project's root folder in your file explorer.`
        },
        {
            label: 'Configure API Keys',
            description: () => (
                <Stack spacing={2}>
                    <Typography>
                        You will find a file named <CodeSpan>.env</CodeSpan>. Open it in a text editor and add your values for the <CodeSpan>GOOGLE_API_KEY</CodeSpan> and <CodeSpan>DISCORD_TOKEN</CodeSpan>.
                    </Typography>
                    <Alert severity="info" variant="outlined" icon={false}>
                        <strong>Optional:</strong> If you don't add your application ID, the bot will attempt to get it automatically.
                    </Alert>
                    <Alert severity="warning" variant="outlined" icon={false}>
                        <strong>Important:</strong> Do not use single or double quotes around your keys.
                    </Alert>
                    <CodeBlock>
                        {`# Example .env file content\nGOOGLE_API_KEY=your_google_api_key_goes_here\nDISCORD_TOKEN=your_discord_bot_token_goes_here\n\n# Optional\nAPPLICATION_ID=your_application_id_goes_here`}
                    </CodeBlock>
                </Stack>
            )
        },
        {
            label: 'Set Up the Terminal',
            description: `Open a terminal or command prompt directly in the project folder. Make sure you have a recent version of Python installed on your system and that PIP (Python's package installer) is available in your terminal.`
        },
        {
            label: 'Create and Activate Virtual Environment',
            description: () => (
                <Stack spacing={1}>
                       <Typography>First, create a dedicated virtual environment to keep dependencies isolated:</Typography>
                       <CodeBlock>python -m venv apiKeys</CodeBlock>
                       <Typography>Then, activate the environment. The command differs slightly by OS:</Typography>
                       <CodeBlock>{`# On Windows:\n.\\apiKeys\\Scripts\\activate\n\n# On macOS/Linux:\nsource apiKeys/bin/activate`}</CodeBlock>
                </Stack>
            )
        },
        {
            label: 'Install Dependencies',
            description: () => (
                 <Stack spacing={1}>
                    <Typography>With your virtual environment active, run the following command to install all the required packages listed in the <CodeSpan>requirmentsWindows.txt</CodeSpan> or <CodeSpan>requirmentsLinux.txt</CodeSpan> based on your os.</Typography>
                    <CodeBlock>pip install -r requirmentsWindows.txt</CodeBlock>
                 </Stack>
            )
        },
        {
            label: 'Run the Bot',
            description: () => (
                <Stack spacing={1}>
                       <Typography>Everything is now set up! Start the bot with the final command:</Typography>
                       <CodeBlock>python public_version.py</CodeBlock>
                       <Alert severity="success" variant="outlined">
                            Congratulations! Your self-hosted bot should now be online and connected to Discord.
                       </Alert>
                </Stack>
            )
        }
    ];

    return (
        <ViewContainer icon={<StorageIcon color="primary" sx={{ fontSize: 36 }} />} title="Offline Hosting">
             <Typography variant="body1" color="text.secondary" sx={{ pl: 1, mb: 2 }}>
                  Follow these steps to get a self-hosted version of the bot running on your own machine for maximum privacy and control.
             </Typography>
            <Stepper orientation="vertical" activeStep={-1}>
                {steps.map((step, index) => (
                    <Step key={step.label} expanded>
                        <StepLabel
                             sx={{'& .MuiStepLabel-label': {fontSize: '1.1rem', fontWeight: '500'}}}
                        >
                            {step.label}
                        </StepLabel>
                        <StepContent>
                           {typeof step.description === 'function' ? step.description() : <Typography color="text.secondary">{step.description}</Typography>}
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </ViewContainer>
    );
};

const PrivacyPolicyView = () => {
    // Re-using the styled components from CommandsView for consistency
    const CodeSpan = styled('code')(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)',
        padding: '2px 6px',
        borderRadius: theme.shape.borderRadius / 2,
        fontFamily: 'monospace',
    }));

    const PolicySection = ({ title, icon, children }) => (
        <Card variant="outlined">
            <CardHeader
                avatar={icon}
                title={<Typography variant="h6" component="h3">{title}</Typography>}
            />
            <CardContent sx={{ pt: 0, '&:last-child': { pb: 2 } }}>
                {children}
            </CardContent>
        </Card>
    );

    return (
        <ViewContainer icon={<PolicyIcon color="primary" sx={{ fontSize: 36 }} />} title="Privacy Policy">
            <Typography variant="body2" color="text.secondary" sx={{ pl: 1, mb: 2 }}>
                Last Updated: June 14, 2025
            </Typography>

            <Stack spacing={3}>
                <PolicySection title="Introduction" icon={<ArticleIcon />}>
                    <Typography variant="body1" color="text.secondary">
                        Welcome to Google-gemini-discord-bot. This policy explains what data we collect, why we collect it, and how it is stored and used. Your privacy and data security are our top priorities. This website is purely informational and does not collect any personal data. This policy primarily concerns the data handled by the Discord bot.
                    </Typography>
                </PolicySection>

                <PolicySection title="What Data We Collect" icon={<StorageIcon />}>
                    <Typography variant="body1" color="text.secondary" component="div">
                        To function correctly, the bot collects several types of data:
                        <ul>
                            <li><strong>Discord Identifiers:</strong> Your Discord User ID, username, and server/channel IDs are used to manage conversations and store data in separate, organized folders.</li>
                            <li><strong>Message Content:</strong> When you interact with the bot, the content of your messages is processed and saved in chat history files (<CodeSpan>chat_history.pkl</CodeSpan>) to maintain context.</li>
                            <li><strong>User-Provided API Keys:</strong> If you use the <CodeSpan>/set_api_key</CodeSpan> command, your key is stored in an <CodeSpan>api_keys.json</CodeSpan> file to authenticate with Google's services on your behalf.</li>
                            <li><strong>Uploaded Files:</strong> The bot temporarily downloads and stores files (images, videos, etc.) you upload to process them for features like image analysis or character creation. These are kept in an <CodeSpan>attachments</CodeSpan> folder.</li>
                            <li><strong>Language Preferences:</strong> Your language choice via the <CodeSpan>/set_language</CodeSpan> command is saved in the <CodeSpan>api_keys.json</CodeSpan> file.</li>
                        </ul>
                    </Typography>
                </PolicySection>

                <PolicySection title="How We Use Your Data" icon={<SettingsIcon />}>
                     <Typography variant="body1" color="text.secondary">
                        Your data is used exclusively to provide and improve the bot's services: to generate AI responses, maintain conversation context, and fulfill specific command requests. We do not sell or share your data with any other third parties for marketing or other purposes.
                    </Typography>
                </PolicySection>

                <PolicySection title="Third-Party Services: Google Gemini" icon={<SmartToyIcon />}>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                        The bot's core functionality is powered by the Google Gemini API. To generate responses, we must send your message prompts and relevant chat history to Google. We encourage you to review Google's own policies to understand how they handle data.
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <Button variant="outlined" href="https://ai.google.dev/terms" target="_blank" rel="noopener">
                            Gemini API Terms
                        </Button>
                    </Stack>
                </PolicySection>
                
                <PolicySection title="Data Control & Retention" icon={<CategoryIcon />}>
                     <Typography variant="body1" color="text.secondary" component="div">
                        You have direct control over your data via several commands (<CodeSpan>/reset_chat_history</CodeSpan>, <CodeSpan>/remove_webhook</CodeSpan>) which permanently delete associated data from the host server.
                        <br/><br/>
                        Media files uploaded to the bot are automatically purged after 48 hours to manage storage and protect your privacy.
                    </Typography>
                </PolicySection>

                <PolicySection title="Contact Us" icon={<HelpCenterIcon />}>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                       If you have any questions or concerns about this privacy policy, feel free to reach out.
                    </Typography>
                     <Stack direction="row" spacing={1}>
                         <Button variant="contained" startIcon={<GitHubIcon />} href="https://github.com/War004/Google-gemini-discord-bot" target="_blank" rel="noopener">
                            GitHub
                        </Button>
                        <Button variant="contained" startIcon={<RssFeedIcon />} href="https://x.com/itesh_ar0" target="_blank" rel="noopener" sx={{backgroundColor: '#1DA1F2', '&:hover': {backgroundColor: '#0c85d0'}}}>
                            Twitter / X
                        </Button>
                    </Stack>
                </PolicySection>

                 <Alert severity="info" variant="standard">
                    <strong>Disclaimer:</strong> This Privacy Policy is a template provided for informational purposes only and does not constitute legal advice. For self-hosted instances, you are responsible for your own data security.
                </Alert>
            </Stack>
        </ViewContainer>
    );
};

const DataPrivacyView = () => {
    // Re-using the styled components from other views for consistency
    const CodeSpan = styled('code')(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)',
        padding: '2px 6px',
        borderRadius: theme.shape.borderRadius / 2,
        fontFamily: 'monospace',
    }));

    const Section = ({ title, icon, children }) => (
        <Card variant="outlined">
            <CardHeader
                avatar={icon}
                title={<Typography variant="h6" component="h3">{title}</Typography>}
            />
            <CardContent sx={{ pt: 0, '&:last-child': { pb: 2 } }}>
                {children}
            </CardContent>
        </Card>
    );

    return (
        <ViewContainer icon={<SecurityIcon color="primary" sx={{ fontSize: 36 }} />} title="Data Privacy & Processing">
            <Typography variant="body1" color="text.secondary" sx={{ pl: 1, mb: 2 }}>
                We believe in full transparency. This page explains in detail what happens to your data and files "behind the scenes," based directly on the bot's code.
            </Typography>

            <Stack spacing={3}>
                <Section title="Data Segregation and Storage" icon={<DatasetIcon />}>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                        Your data is never mixed with data from other channels. The bot creates a specific folder structure on the host's local file system to ensure strict separation, as defined in the <CodeSpan>get_channel_directory()</CodeSpan> and <CodeSpan>get_bot_paths()</CodeSpan> functions.
                    </Typography>
                    <Paper variant="outlined" sx={{ p: 2, backgroundColor: theme => theme.palette.mode === 'dark' ? grey[900] : grey[100] }}>
                        <Typography component="div" variant="body2" fontFamily="monospace">
                          /base_path/{'{server_id}'}/{'{channel_id}'}/{'{bot_id}'}/
                        </Typography>
                    </Paper>
                     <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }} component="div">
                        Within this structure, data is stored in specific files:
                        <ul>
                            <li><CodeSpan>chat_history.pkl</CodeSpan>: Stores the conversation memory for a bot or webhook.</li>
                            <li><CodeSpan>api_keys.json</CodeSpan>: A channel-level file storing your API key and language settings.</li>
                            <li><CodeSpan>{'{webhook_id}'}_data.json</CodeSpan>: Stores the system instructions for a specific character webhook.</li>
                        </ul>
                    </Typography>
                </Section>

                <Section title="Media File Processing" icon={<PermMediaIcon />}>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                        When you upload a file, the <CodeSpan>download_file()</CodeSpan> function in <CodeSpan>utils.py</CodeSpan> performs a specific, automated process to handle it securely:
                    </Typography>
                     <Stepper orientation="vertical" activeStep={-1}>
                        <Step expanded>
                            <StepLabel>Step 1: Download</StepLabel>
                            <StepContent><Typography color="text.secondary">The bot downloads your file from Discord's URL.</Typography></StepContent>
                        </Step>
                         <Step expanded>
                            <StepLabel>Step 2: Rename</StepLabel>
                            <StepContent><Typography color="text.secondary">The file is immediately saved and renamed to a generic, non-unique filename, such as <CodeSpan>temp_file.png</CodeSpan>.</Typography></StepContent>
                        </Step>
                         <Step expanded>
                            <StepLabel>Step 3: Overwrite</StepLabel>
                            <StepContent>
                                <Alert severity="warning" variant="outlined">
                                    This renaming process is a critical privacy feature. When you upload a new file, it replaces and overwrites the previous temporary file. Only the most recently uploaded file is ever stored on the disk, making your past uploads inaccessible to the bot or its operator.
                                </Alert>
                            </StepContent>
                        </Step>
                     </Stepper>
                </Section>

                <Section title="Data Retention and User Control" icon={<RuleFolderIcon />}>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                        You have both automated and manual control over your data's lifecycle.
                    </Typography>
                     <ul style={{ paddingLeft: '20px', margin: 0 }}>
                        <li><Typography color="text.secondary"><strong>Automated Purging:</strong> The <CodeSpan>check_expired_files()</CodeSpan> function automatically scans for media file links in the chat history. Any links older than 48 hours are removed from the bot's memory to prevent long-term access.</Typography></li>
                        <li><Typography color="text.secondary"><strong>Manual Deletion:</strong> You can permanently delete data at any time using commands like <CodeSpan>/reset_chat_history</CodeSpan> and <CodeSpan>/remove_webhook</CodeSpan>, which delete the corresponding <CodeSpan>.pkl</CodeSpan> and <CodeSpan>.json</CodeSpan> files from the server.</Typography></li>
                    </ul>
                </Section>
                
                <Section title="Third-Party Processing: Google Gemini API" icon={<SmartToyIcon />}>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                        To generate responses, the bot sends your prompts, relevant chat history, and any uploaded media data to the Google Gemini API. Google's data handling policies apply.
                    </Typography>
                     <ul style={{ paddingLeft: '20px', margin: '0 0 16px 0' }}>
                        <li><Typography color="text.secondary"><strong>Data for Review:</strong> For abuse monitoring, Google may review API content. According to their policy, this data is disconnected from your personal Google account to protect privacy.</Typography></li>
                        <li><Typography color="text.secondary"><strong>Data Caching:</strong> Google may cache inputs and outputs for up to 24 hours to improve performance.</Typography></li>
                    </ul>
                    <Typography variant="body2" color="text.secondary">
                        For complete, authoritative details, please refer to Google's official documentation:
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap', gap: 1 }}>
                         <Button variant="outlined" size="small" href="https://ai.google.dev/terms" target="_blank" rel="noopener">
                            Gemini API Terms of Service
                        </Button>
                    </Stack>
                </Section>
            </Stack>
        </ViewContainer>
    );
};

// --- Guide View ---
const GuideView = () => {
    // Re-using the styled components from other views for consistency
    const CodeSpan = styled('code')(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)',
        padding: '2px 6px',
        borderRadius: theme.shape.borderRadius / 2,
        fontFamily: 'monospace',
    }));

    const Section = ({ title, icon, children }) => (
        <Card variant="outlined">
            <CardHeader
                avatar={icon}
                title={<Typography variant="h6" component="h3">{title}</Typography>}
            />
            <CardContent sx={{ pt: 0, '&:last-child': { pb: 2 } }}>
                {children}
            </CardContent>
        </Card>
    );

    return (
        <ViewContainer icon={<MenuBookIcon color="primary" sx={{ fontSize: 36 }} />} title="User Guide">
            <Typography variant="body1" color="text.secondary" sx={{ pl: 1, mb: 2 }}>
                Welcome to Google-gemini-discord-bot! Here are some guidelines and tips to help you get the most out of the bot.
            </Typography>

            <Stack spacing={3}>
                <Section title="Terms and Conditions" icon={<GavelIcon />}>
                    <Typography variant="body1" color="text.secondary" component="div">
                        By using this bot, you agree to the following terms:
                        <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                            <li>Harmful or NSFW content should only be generated in channels marked as age-restricted by Discord.</li>
                            <li><strong>Zero Tolerance Policy:</strong> Any content involving the deception or harm of children is strictly prohibited. Generating such content will result in an immediate and permanent ban from all bot services.</li>
                            <li>Your use of the bot must also comply with the Terms of Service of both Discord and Google.</li>
                        </ul>
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap', gap: 1 }}>
                         <Button variant="outlined" size="small" href="https://discord.com/terms" target="_blank" rel="noopener">
                            Discord Terms of Service
                        </Button>
                        <Button variant="outlined" size="small" href="https://ai.google.dev/terms" target="_blank" rel="noopener">
                            Gemini API Terms of Service
                        </Button>
                    </Stack>
                    
                    {/* --- THIS IS THE NEWLY ADDED SECTION --- */}
                    <Alert severity="info" sx={{ mt: 2 }}>
                        <Typography fontWeight="bold">Note for Self-Hosted Instances</Typography>
                        <Typography variant="body2" sx={{ mt: 0.5 }}>
                            Users who host this bot on their own servers are responsible for its use and are encouraged to establish their own Terms and Conditions. The original developer is not liable for any content generated by self-hosted instances of the bot.
                        </Typography>
                    </Alert>
                    {/* -------------------------------------- */}

                </Section>
                
                <Section title="Startup Guide" icon={<RocketLaunchIcon />}>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                        Follow these steps to get the bot running in your channel for the first time.
                    </Typography>
                     <Stepper orientation="vertical" activeStep={-1}>
                        <Step expanded>
                            <StepLabel sx={{'& .MuiStepLabel-label': {fontSize: '1.1rem', fontWeight: '500'}}}>
                                Step 1: Set Your API Key (Required)
                            </StepLabel>
                            <StepContent>
                                <Typography color="text.secondary">The bot cannot function without a Google API key. Use the <CodeSpan>/set_api_key</CodeSpan> command and provide your key. This is stored securely on a per-channel basis.</Typography>
                            </StepContent>
                        </Step>
                         <Step expanded>
                            <StepLabel sx={{'& .MuiStepLabel-label': {fontSize: '1.1rem', fontWeight: '500'}}}>
                                Step 2: Set Language (Optional)
                            </StepLabel>
                            <StepContent>
                                <Typography color="text.secondary">The bot defaults to English. To change this, use the <CodeSpan>/set_language</CodeSpan> command and choose your preferred language from the list.</Typography>
                            </StepContent>
                        </Step>
                         <Step expanded>
                            <StepLabel sx={{'& .MuiStepLabel-label': {fontSize: '1.1rem', fontWeight: '500'}}}>
                                Step 3: Change AI Model (Optional)
                            </StepLabel>
                            <StepContent>
                                <Typography color="text.secondary">Different AI models have different strengths. You can switch the model for your channel at any time using the <CodeSpan>/change_model</CodeSpan> command.</Typography>
                            </StepContent>
                        </Step>
                     </Stepper>
                </Section>
                
                <Section title="Quick Notes & Tips" icon={<TipsAndUpdatesIcon />}>
                    <Paper variant="outlined" sx={{ p: 2 }}>
                        <Typography variant="h6" component="h4" gutterBottom>Tagging vs. Replying</Typography>
                        <Typography variant="body2" color="text.secondary" component="div">
                             <ul>
                                <li><strong>Tagging (@Mana Nagase):</strong> When you tag the bot, it reads the **last 20 messages** in the channel to understand the full context of the conversation. Use this for complex questions that rely on recent chat history.</li>
                                <li><strong>Replying:</strong> When you reply directly to one of the bot's messages, it **only sees the content of that specific message**. This is much more efficient and should be your default way of interacting.</li>
                            </ul>
                            <Alert severity="info" sx={{ mt: 1 }}>
                                <strong>Pro-Tip:</strong> Avoid tagging the bot too often, as it can fill up the AI's context window quickly. If you want to start a new conversation without tagging, simply use a command like <CodeSpan>/info</CodeSpan> and then **reply** to the bot's response.
                            </Alert>
                        </Typography>
                    </Paper>
                     <Paper variant="outlined" sx={{ p: 2, mt: 2 }}>
                        <Typography variant="h6" component="h4" gutterBottom>Troubleshooting Errors</Typography>
                         <Alert severity="warning" variant="outlined">
                            If you receive an error like "No response from the model" or a "Nonetype error," follow these steps:
                            <ol style={{ paddingLeft: '20px', marginTop: '8px', marginBottom: 0 }}>
                                <li>Try changing the AI model using <CodeSpan>/change_model</CodeSpan>. A model like <CodeSpan>Gemini 2.0 flash</CodeSpan> is often a stable choice.</li>
                                <li>If the error persists, try discussing a different topic to clear the AI's short-term memory.</li>
                                <li>As a last resort, use <CodeSpan>/reset_chat_history</CodeSpan> to start completely fresh.</li>
                            </ol>
                        </Alert>
                    </Paper>
                </Section>
            </Stack>
        </ViewContainer>
    );
};

// Main App Component
export default function App() {
    // This state already correctly handles the online/offline status.
    const [isOnline, setIsOnline] = useState(true); 
    
    const [activeTab, setActiveTab] = useState(0);
    const [isBottomBarVisible, setIsBottomBarVisible] = useState(true);
    const [darkMode, setDarkMode] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);


    const marqueeKeyframes = `
      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
    `;

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: blue,
            background: {
                default: darkMode ? '#0f172a' : '#f1f5f9',
                paper: darkMode ? '#1e293b' : '#ffffff',
            },
        },
        shape: {
            borderRadius: 16,
        }
    });

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // Your navItems array remains unchanged
    const navItems = [
      { label: 'Home', view: <HomeView />, icon: <HomeIcon /> },
      { label: 'Commands', view: <CommandsView />, icon: <SmartToyIcon /> },
      { label: 'Privacy Policy', view: <PrivacyPolicyView />, icon: <PolicyIcon /> },
      { label: 'Data Privacy', view: <DataPrivacyView />, icon: <SecurityIcon /> },
      { label: 'Offline Hosting', view: <OfflineHostingView />, icon: <StorageIcon /> },
      { label: 'Guide', view: <GuideView />, icon: <MenuBookIcon /> },
    ];

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Mana Nagase
            </Typography>
            <Divider />
            <List>
                {navItems.map((item, index) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton onClick={() => setActiveTab(index)}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const bottomBarStyles = {
        transition: theme.transitions.create(['background-color', 'backdrop-filter', 'box-shadow'], {
            duration: theme.transitions.duration.short,
        }),
        backgroundColor: isBottomBarVisible ? (darkMode ? 'rgba(30, 41, 59, 0.7)' : 'rgba(255, 255, 255, 0.7)') : 'transparent',
        backdropFilter: isBottomBarVisible ? 'blur(12px)' : 'none',
        boxShadow: isBottomBarVisible ? theme.shadows[4] : 'none',
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <style>{marqueeKeyframes}</style>

            <AppBar
                position="fixed"
                color="inherit"
                sx={isMobile ? { // Mobile styles
                    backgroundColor: darkMode ? 'rgba(30, 41, 59, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(12px)',
                } : { // Desktop styles (original)
                    top: 16,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 'auto',
                    backgroundColor: darkMode ? 'rgba(30, 41, 59, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: 50,
                }}
                elevation={4}
            >
                <Toolbar sx={{ minHeight: '48px !important', justifyContent: isMobile ? 'space-between' : 'center' }}>
                    {isMobile && (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    
                    {isMobile ? (
                         <Typography variant="h6" component="div">
                         </Typography>
                    ) : (
                        <Tabs
                            value={activeTab}
                            onChange={(e, val) => setActiveTab(val)}
                            variant="scrollable" 
                            scrollButtons="auto" 
                            allowScrollButtonsMobile
                            centered
                            sx={{
                                '& .MuiTabs-flexContainer': {
                                    justifyContent: 'center'
                                }
                            }}
                        >
                            {navItems.map((item, index) => (
                                <Tab key={index} label={item.label} disableRipple sx={{ textTransform: 'none', borderRadius: 50 }} />
                            ))}
                        </Tabs>
                    )}
                    
                     {/* Placeholder to balance the flex container on mobile */}
                    {isMobile && <Box sx={{ width: 48 }} />} 

                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>


            {/* Main Scrollable Content (Unchanged) */}
            <Container component="main" maxWidth="md" sx={{ pt: '100px', pb: '120px' }}>
                <Paper
                    sx={{
                        p: { xs: 2, sm: 4 },
                        borderRadius: 1,
                        bgcolor: 'background.paper',
                    }}
                    elevation={0}
                    variant="outlined"
                >
                    {navItems[activeTab].view}
                </Paper>
            </Container>


            {/* Bottom Fixed Floating Bar (WITH ALL FIXES) */}
            <Box
                component={Paper}
                position="fixed"
                sx={{
                    bottom: 16,
                    left: { xs: 16, sm: 24 },
                    right: { xs: 16, sm: 24 },
                    py: 1,
                    px: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    ...bottomBarStyles
                }}
            >
                {/* FIX #1: Correct GitHub URL */}
                <IconButton 
                    href="https://github.com/War004/Google-gemini-discord-bot" 
                    target="_blank" 
                    rel="noopener" 
                    size="small" 
                    sx={{flexShrink: 0}}
                >
                    <GitHubIcon fontSize="small"/>
                </IconButton>

                <IconButton onClick={() => setIsBottomBarVisible(!isBottomBarVisible)} size="small" sx={{flexShrink: 0}}>
                   {isBottomBarVisible ? <VisibilityOffIcon fontSize="small" /> : <RemoveRedEyeIcon fontSize="small" />}
                </IconButton>

                {/* Scrolling Marquee (Unchanged) */}
                <Box sx={{
                    flexGrow: 1,
                    overflow: 'hidden',
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    visibility: isBottomBarVisible ? 'visible' : 'hidden',
                    transition: 'visibility 0.2s'
                 }}>
                    <Box sx={{
                        display: 'flex',
                        width: '200%',
                        animation: 'marquee 20s linear infinite',
                        '& p': { whiteSpace: 'nowrap', px: 2 }
                    }}>
                        <Typography variant="body2" color="text.secondary">🎉 Hey</Typography>
                        <Typography variant="body2" color="text.secondary">✨ Rememeber the character you talk to not real</Typography>
                        <Typography variant="body2" color="text.secondary">💬 ooooooo</Typography>
                        <Typography variant="body2" color="text.secondary">🎉 Mitochorindra</Typography>
                        <Typography variant="body2" color="text.secondary">✨ Enter</Typography>
                         <Typography variant="body2" color="text.secondary">💬 eeee</Typography>
                    </Box>
                </Box>
                
                 <Box sx={{flexShrink: 0, display: 'flex', alignItems: 'center', gap: 1}}>
                    <IconButton sx={{ ml: 1 }} onClick={() => setDarkMode(!darkMode)} color="inherit" size="small">
                      {darkMode ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
                    </IconButton>

                    {/* FIX #2: Correct Invite URL */}
                    <Button 
                        href="https://discord.com/oauth2/authorize?client_id=1228578114582482955&permissions=1689934876900416&integration_type=0&scope=bot"
                        target="_blank"
                        rel="noopener"
                        variant="contained" 
                        color="primary" 
                        size="medium" 
                        sx={{display: {xs: 'none', sm: 'block'}}}
                    >
                        Invite
                    </Button>

                     <Chip
                        label={isOnline ? 'Online' : 'Offline'}
                        color={isOnline ? 'success' : 'default'}
                        size="small"
                        sx={{
                            transition: 'background-color 0.5s',
                            cursor: 'default',
                            pointerEvents: 'none',
                            '&:hover': {
                                backgroundColor: 'inherit'
                            }
                        }}
                    />
                 </Box>

            </Box>
        </ThemeProvider>
    );
}