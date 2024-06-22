// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom';

jest.mock('@/assets/fonts/OpenSans-Bold.woff', () => 'mock-bold-font', { virtual: true });
jest.mock('@/assets/fonts/OpenSans-Regular.woff', () => 'mock-regular-font', { virtual: true });
jest.mock('@/assets/fonts/OpenSans-SemiBold.woff', () => 'mock-semibold-font', { virtual: true });
