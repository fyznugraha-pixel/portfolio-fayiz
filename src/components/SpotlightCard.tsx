import React from 'react';
import GlareHover from './GlareHover';

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})` | string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(233, 51, 58, 0.25)' // Using theme red as default glare color
}) => {
  return (
    <GlareHover className={`relative rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden p-8 ${className}`} glareColor={spotlightColor} glareOpacity={0.6} transitionDuration={1200} borderColor="transparent">
      {children}
    </GlareHover>
  );
};

export default SpotlightCard;
