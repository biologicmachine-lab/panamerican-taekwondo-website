/**
 * Lighthouse CI Configuration
 * Performance monitoring and quality assurance settings
 * @see https://github.com/GoogleChrome/lighthouse-ci
 */

module.exports = {
  ci: {
    // Collection settings - which URLs to test
    collect: {
      url: [
        'https://panamericantaekwondoacademy.com',
        'https://panamericantaekwondoacademy.com/blog'
      ],
      numberOfRuns: 3  // Run tests 3 times and take median score
    },
    
    // Assertion settings - minimum acceptable scores
    assert: {
      assertions: {
        // Performance: minimum 90%
        'categories:performance': ['error', { minScore: 0.9 }],
        
        // Accessibility: minimum 95%
        'categories:accessibility': ['error', { minScore: 0.95 }],
        
        // Best Practices: minimum 90%
        'categories:best-practices': ['error', { minScore: 0.9 }],
        
        // SEO: minimum 95%
        'categories:seo': ['error', { minScore: 0.95 }]
      }
    }
  }
};
