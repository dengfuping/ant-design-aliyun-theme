// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { ThemeConfig } from 'antd';

const colorPrimary = '#0064C8';
const colorPrimaryRGB = '0, 100, 200';
const colorTextHeading = 'rgba(0, 0, 0, 0.85)';

export default {
  token: {
    fontSize: 12,
    fontSizeSM: 12,
    colorBgLayout: '#f2f3f5',
    colorPrimary,
    colorInfo: colorPrimary,
    colorSuccess: '#1e8e3e',
    colorWarning: '#ffc440',
    colorError: '#d93026',
    borderRadius: 0,
    borderRadiusSM: 0,
    colorText: 'rgba(0, 0, 0, 0.65)',
    colorTextSecondary: 'rgba(0, 0, 0, 0.45)',
    colorTextHeading,
    colorBgBase: '#ffffff',
    colorBorder: '#dedede',
    colorBorderSecondary: '#ebebeb',
    colorLink: colorPrimary,
    colorLinkHover: colorPrimary,
    controlOutlineWidth: 0,
    controlOutline: '#737373',
    controlHeight: 32,
    controlHeightLG: 36,
    controlHeightSM: 24,
  },
  components: {
    Alert: {
      colorInfoBorder: '#e5f3ff',
      colorInfoBg: '#e5f3ff',
      colorSuccessBorder: '#dff4e5',
      colorSuccessBg: '#dff4e5',
      colorWarningBorder: '#fff7db',
      colorWarningBg: '#fff7db',
      colorErrorBorder: '#fcebea',
      colorErrorBg: '#fcebea',
    },
    Badge: {
      colorError: '#d93026',
    },
    Breadcrumb: {
      lastItemColor: 'rgba(0, 0, 0, 0.45)',
      linkColor: colorTextHeading,
      linkHoverColor: colorPrimary,
      // '@breadcrumb-base-color': '@text-color',
    },
    Button: {
      defaultBg: '#fafafa',
      defaultBorderColor: '#dedede',
      paddingContentHorizontal: 12,
      paddingContentHorizontalLG: 16,
      paddingContentHorizontalSM: 8,
      // '@btn-danger-bg': '@error-color',
      // '@btn-danger-border': '@error-color',
    },
    Divider: {
      verticalMarginInline: 0,
    },
    Drawer: {
      // '@drawer-title-font-size': '18px',
      // '@drawer-title-line-height': '27px',
    },
    Dropdown: {
      controlItemBgActive: 'rgba(14, 146, 255, 0.05)',
    },
    Form: {
      itemMarginBottom: 16,
    },
    Input: {
      hoverBorderColor: '#737373',
    },
    Layout: {
      bodyBg: '#ffffff',
      siderBg: '#ffffff',
    },
    Menu: {
      colorHighlight: colorTextHeading,
      horizontalLineHeight: 36,
      itemActiveBg: '#dedede',
      activeBarBorderWidth: 0,
      itemHoverBg: '#ebebeb',
      subMenuItemBg: '#f5f5f5',
      // '@menu-bg': 'transparent',
      // '@menu-item-boundary-margin': '0',
      // '@menu-item-vertical-margin': '0',
    },
    Modal: {
      // '@modal-body-padding': '0 24px',
      // '@modal-footer-border-width': '0',
      // '@modal-confirm-body-padding': '24px',
      // '@modal-confirm-title-font-size': '16px',
      // '@modal-footer-padding-vertical': '16px',
      // '@modal-footer-padding-horizontal': '24px',
      // '@modal-header-border-width': '0',
    },
    Progress: {
      lineBorderRadius: 0,
    },
    Radio: {
      buttonBg: 'transparent',
      buttonCheckedBg: 'transparent',
      colorPrimaryActive: `rgba(${colorPrimaryRGB}, 0.15)`,
      buttonPaddingInline: 16,
    },
    Select: {
      optionSelectedBg: 'rgba(14,146,255,0.05)',
    },
    Slider: {
      railBg: '#f5f5f5',
      railHoverBg: '#e1e1e1',
      trackBg: colorPrimary,
      trackHoverBg: colorPrimary,
      handleLineWidth: 1,
      handleColor: '#dedede',
      handleActiveColor: '#dedede',
      // '@slider-handle-color-hover': '#dedede',
      // '@slider-handle-color-focus': '#dedede',
      // '@slider-handle-color-tooltip-open': '#ddd',
      // '@slider-handle-color-focus-shadow': 'transparent',
      // '@slider-handle-shadow': '1px 1px 4px 0 rgba(0,0,0,.13)',
    },
    Switch: {
      colorPrimary: '#1e8e3e',
    },
    Table: {
      headerBg: '#fafafa',
      rowHoverBg: '#fafafa',
      rowSelectedBg: `rgba(${colorPrimaryRGB}, 0.1)`,
      paddingContentVertical: 12,
      headerSplitColor: 'transparent',
      selectionColumnWidth: 50,
    },
    Tabs: {
      cardGutter: -1,
      cardPaddingLG: '8px 16px',
      titleFontSize: 14,
      itemHoverColor: colorPrimary,
      // '@tabs-card-tab-active-border-top': '2px solid @primary-color',
    },
    Tooltip: {
      colorBgSpotlight: '#ffffff',
      colorTextLightSolid: colorTextHeading,
      sizePopupArrow: 8,
      // '@tooltip-max-width': '500px',
    },
    // @deprecated, should configure it in PageContainer of pro-components
    PageHeader: {
      // '@page-header-heading-title': '28px',
      // '@page-header-padding-breadcrumb': '16px',
    },
  },
} as ThemeConfig;
