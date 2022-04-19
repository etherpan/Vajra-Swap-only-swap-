import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.metafintec.finance/contact-us",
      },
      {
        label: "Blog",
        href: "https://medium.com/@metafintec",
      },
      {
        label: "Community",
        href: "https://docs.metafintec.finance/contact-us/communities",
      },
      {
        label: "MetaFintec Token",
        href: "https://docs.metafintec.finance/tokenomics/meftec-token",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://shop.metafintec.finance/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "https://docs.metafintec.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "hhttps://docs.metafintec.finance/click-here-for-help/troubleshooting-errors",
      },
      {
        label: "Guides",
        href: "https://docs.metafintec.finance/",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/metafintec/metafintec/blob/main/meftec.sol",
      },
      {
        label: "Documentation",
        href: "https://docs.metafintec.finance/",
      },
      {
        label: "Bug Bounty",
        href: "https://docs.metafintec.finance/developers/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.metafintec.finance/",
      },
      {
        label: "Careers",
        href: "https://docs.metafintec.finance/careers/hiring",
      },
    ],
  },
];

export const socials = [
  {
    label: "Facebook",
    icon: "Facebook",
    href: "https://facebook.com/metafintec",
  },
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/metafintectoken",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/metafintec",
      },
      //{
        //  label: "Bahasa Indonesia",
        //  href: "https://t.me/PancakeSwapIndonesia",
      //  },
      //  {
        //  label: "中文",
        //  href: "https://t.me/PancakeSwap_CN",
      //  },
      //  {
      //    label: "Tiếng Việt",
        //  href: "https://t.me/PancakeSwapVN",
      //  },
      //  {
        //  label: "Italiano",
        //  href: "https://t.me/pancakeswap_ita",
      //  },
      //  {
      //    label: "русский",
      //    href: "https://t.me/pancakeswap_ru",
      //  },
      //  {
        //  label: "Türkiye",
      //    href: "https://t.me/pancakeswapturkiye",
      //  },
      //  {
        //  label: "Português",
        //  href: "https://t.me/PancakeSwapPortuguese",
      //  },
      //  {
        //  label: "Español",
        //  href: "https://t.me/PancakeswapEs",
      //  },
      //  {
        //  label: "日本語",
        //  href: "https://t.me/pancakeswapjp",
      //  },
      //  {
      //    label: "Français",
      //    href: "https://t.me/pancakeswapfr",
      //  },
      //  {
      //    label: "Announcements",
      //    href: "https://t.me/PancakeSwapAnn",
      //  },
      //  {
        //  label: "Whale Alert",
      //    href: "https://t.me/PancakeSwapWhales",
      //  },
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://reddit.com/r/Metafintecfinance",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://instagram.com/metafintec",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/metafintec/metafintec/blob/main/meftec.sol",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "https://discord.com/channels/929639207721373757/929639965942505523",
  },
  {
    label: "Medium",
    icon: "Medium",
    href: "https://medium.com/@metafintec",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
