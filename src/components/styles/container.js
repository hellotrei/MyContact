import * as Colors from './colors';

export const borderRadiusSmall = 4;
export const borderRadius = 8;
export const borderRadiusLarge = 16;
export const borderRadiusXLarge = 32;

export const contactListItem = {
  borderRadius: borderRadius,
  overflow: 'hidden',
};

export const photo = {
  borderRadius: borderRadius,
  overflow: 'hidden',
};

export const baseRounded = {
  borderRadius: borderRadius,
  overflow: 'hidden',
};

export const buttonRounded = {
  borderRadius: borderRadius - 4,
  overflow: 'hidden',
};

export const buttonBorder = {
  borderWidth: 1,
  borderColor: Colors.darkGray,
};

export const buttonDanger = {
  ...buttonRounded,
  backgroundColor: Colors.danger,
};

export const textInputBottomBorder = {
  borderBottomColor: Colors.lightGray,
  borderBottomWidth: 1,
};

export const disabled = {
  opacity: 0.5,
};

export const photoSmallDimension = {
  width: 40,
  height: 40,
  borderRadius: borderRadiusXLarge,
};

export const backButtonDimension = {
  height: 30,
  width: 30,
};

export const emptyPhoto = {
  borderRadius: borderRadiusXLarge,
  backgroundColor: Colors.primary,
  alignItems: 'center',
  justifyContent: 'center',
};
