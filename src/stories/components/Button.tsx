import React from 'react';
import './button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp, library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  rounded?: boolean,
  label: string;
  /**
   * Optional click handler
   */
  icon?: string,
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  rounded = true,
  label,
  icon,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const round = rounded ? 'storybook-button--round' : 'storybook-button--corner';
  const _icon: any = { iconName: icon }
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode, round].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {icon && <span className='storybook-button--icon'>
        <FontAwesomeIcon icon={_icon} />
      </span>
      }
      {label}
    </button>
  );
};
