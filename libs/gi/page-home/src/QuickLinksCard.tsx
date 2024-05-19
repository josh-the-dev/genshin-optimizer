import {
  DiscordIcon,
  PatreonIcon,
  PaypalIcon,
  TwitchIcon,
} from '@genshin-optimizer/common/svgicons'
import { CardThemed } from '@genshin-optimizer/common/ui'
import {
  Article,
  Description,
  GitHub,
  Handshake,
  InsertLink,
  Scanner,
  Twitter,
  YouTube,
} from '@mui/icons-material'
import {
  Box,
  CardContent,
  CardHeader,
  Divider,
  Link,
  Typography,
} from '@mui/material'
import type { TFunction } from 'i18next'
import { useTranslation } from 'react-i18next'

const genshin_optimizer_links = [
  {
    title: () => 'Discord',
    icon: <DiscordIcon />,
    url: process.env['NX_URL_DISCORD_GO'],
  },
  {
    title: () => 'Github',
    icon: <GitHub />,
    url: process.env['NX_URL_GITHUB_GO'],
  },
  {
    title: (t: TFunction) => t`quickLinksCard.buttons.patchNotes.title`,
    icon: <Description />,
    url: `${process.env['NX_URL_GITHUB_GO']}/releases`,
  },
  {
    title: (t: TFunction) => t`quickLinksCard.buttons.tyGuide.title`,
    icon: <YouTube />,
    url: process.env['NX_URL_YOUTUBE_TUTPL'],
  },
]

const frzyc_links = [
  {
    title: () => 'Twitch',
    icon: <TwitchIcon />,
    url: process.env['NX_URL_TWITCH_FRZYC'],
  },
  {
    title: () => 'Twitter',
    icon: <Twitter />,
    url: process.env['NX_URL_TWITTER_FRZYC'],
  },
  {
    title: () => 'Patreon',
    icon: <PatreonIcon />,
    url: process.env['NX_URL_PATREON_FRZYC'],
  },
  {
    title: () => 'PayPal',
    icon: <PaypalIcon />,
    url: process.env['NX_URL_PAYPAL_FRZYC'],
  },
]

const other_links = [
  {
    title: (t: TFunction) => t`quickLinksCard.buttons.scanners.title`,
    icon: <Scanner />,
    url: '/scanner',
  },
  {
    title: (t: TFunction) => t`quickLinksCard.buttons.kqm.title`,
    icon: <Handshake />,
    url: process.env['NX_URL_WEBSITE_KQM'],
  },
  {
    title: (t: TFunction) => t`quickLinksCard.buttons.devDiscord.title`,
    icon: <DiscordIcon />,
    url: process.env['NX_URL_DISCORD_GDEV'],
  },
  {
    title: (t: TFunction) => t`quickLinksCard.buttons.good.title`,
    icon: <Article />,
    url: '/doc',
  },
]

export default function QuickLinksCard() {
  const { t } = useTranslation(['page_home', 'ui'])
  return (
    <CardThemed>
      <CardHeader
        title={<Typography variant="h5">{t`quickLinksCard.title`}</Typography>}
        avatar={<InsertLink fontSize="large" />}
      />
      <Divider />
      <CardContent
        sx={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 1 }}
      >
        <Box sx={{ border: 1, borderRadius: 4, padding: 2 }}>
          <Typography marginBottom={1} variant="h6">
            Genshin Optimizer
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            {genshin_optimizer_links.map((link) => {
              const { title, icon, url } = link
              return (
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {icon}
                  <Link target="_blank" rel="noopener" href={url}>
                    {title(t)}
                  </Link>
                </Box>
              )
            })}
          </Box>
        </Box>
        <Box sx={{ border: 1, borderRadius: 4, padding: 2 }}>
          <Typography marginBottom={1} variant="h6">
            frzyc
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            {frzyc_links.map((link) => {
              const { title, icon, url } = link
              return (
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {icon}
                  <Link target="_blank" rel="noopener" href={url}>
                    {title()}
                  </Link>
                </Box>
              )
            })}
          </Box>
        </Box>
        <Box sx={{ border: 1, borderRadius: 4, padding: 2 }}>
          <Typography marginBottom={1} variant="h6">
            Other links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            {other_links.map((link) => {
              const { title, icon, url } = link
              return (
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {icon}
                  <Link target="_blank" rel="noopener" href={url}>
                    {title(t)}
                  </Link>
                </Box>
              )
            })}
          </Box>
        </Box>
      </CardContent>
    </CardThemed>
  )
}
