"use client";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  TelegramIcon,
} from "react-share";

interface Props {
  url: string;
  title: string;
}

export default function SocialShare({ url, title }: Props) {
  if (!url) return null;

  return (
    <div className="flex items-center gap-3 my-6">
      <span className="text-sm font-medium text-gray-600">
        Share:
      </span>

      <FacebookShareButton url={url} title={title}>
        <FacebookIcon size={36} round />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={36} round />
      </TwitterShareButton>

      <LinkedinShareButton url={url} title={title}>
        <LinkedinIcon size={36} round />
      </LinkedinShareButton>

      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={36} round />
      </WhatsappShareButton>

      <TelegramShareButton url={url} title={title}>
        <TelegramIcon size={36} round />
      </TelegramShareButton>
    </div>
  );
}
