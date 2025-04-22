import type { Schema, Struct } from '@strapi/strapi';

export interface SharedLinkItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_link_items';
  info: {
    displayName: 'link-item';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedMainBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_main_banners';
  info: {
    displayName: 'Main Banner';
  };
  attributes: {
    banner_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    banner_video: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    find_location_button_link: Schema.Attribute.String;
    find_location_button_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
    video_button_title: Schema.Attribute.String;
  };
}

export interface SharedNavigationBar extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigation_bars';
  info: {
    description: '';
    displayName: 'Navigation Bar';
    icon: 'bulletList';
  };
  attributes: {
    link: Schema.Attribute.String;
    main_banner: Schema.Attribute.Component<'shared.main-banner', false>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.link-item': SharedLinkItem;
      'shared.main-banner': SharedMainBanner;
      'shared.navigation-bar': SharedNavigationBar;
    }
  }
}
