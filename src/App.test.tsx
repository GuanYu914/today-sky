import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('應該渲染標題', () => {
    render(<App />);
    const heading = screen.getByText('Today Sky');
    expect(heading).toBeInTheDocument();
  });

  it('應該顯示副標題', () => {
    render(<App />);
    const subtitle = screen.getByText('View the sky from anywhere in the world');
    expect(subtitle).toBeInTheDocument();
  });

  it('應該顯示功能標籤', () => {
    render(<App />);
    expect(screen.getByText(/Location Search/)).toBeInTheDocument();
    expect(screen.getByText(/Live Weather/)).toBeInTheDocument();
    expect(screen.getByText(/Wallpaper Mode/)).toBeInTheDocument();
  });
});
