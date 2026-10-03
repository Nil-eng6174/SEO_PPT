import { useState, useEffect, useCallback } from 'react';

export function usePresentationNavigation(totalSections: number) {
  const [currentSection, setCurrentSection] = useState(0);

  const nextSection = useCallback(() => {
    setCurrentSection((prev) => (prev < totalSections - 1 ? prev + 1 : prev));
  }, [totalSections]);

  const previousSection = useCallback(() => {
    setCurrentSection((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const goToSection = useCallback((index: number) => {
    if (index >= 0 && index < totalSections) {
      setCurrentSection(index);
    }
  }, [totalSections]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if typing in an input
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
        return;
      }
      
      switch (e.key) {
        case 'ArrowRight':
          nextSection();
          break;
        case 'ArrowLeft':
          previousSection();
          break;
        case 'Home':
          goToSection(0);
          break;
        case 'End':
          goToSection(totalSections - 1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSection, previousSection, goToSection, totalSections]);

  return { currentSection, nextSection, previousSection, goToSection };
}
