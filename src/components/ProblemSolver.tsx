'use client';

import { useState, useCallback } from 'react';
import { cn } from '@/lib/utils/cn';

interface SolverResult {
  diagnosis: string;
  approach: string;
  timeline: string;
  experience: string;
}

export function ProblemSolver() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<SolverResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const parseResponse = useCallback((text: string): SolverResult => {
    // Extract sections from the structured response
    const diagnosisMatch = text.match(/Diagnosis[:\n]+([\s\S]*?)(?=Proposed Approach|$)/i);
    const approachMatch = text.match(/Proposed Approach[:\n]+([\s\S]*?)(?=Timeline|$)/i);
    const timelineMatch = text.match(/Timeline[:\n]+([\s\S]*?)(?=Relevant Experience|$)/i);
    const experienceMatch = text.match(/Relevant Experience[:\n]+([\s\S]*?)$/i);

    return {
      diagnosis: diagnosisMatch?.[1]?.trim() || text.trim() || 'No diagnosis available.',
      approach: approachMatch?.[1]?.trim() || 'Based on the described challenge, a phased approach with early prototyping is recommended.',
      timeline: timelineMatch?.[1]?.trim() || 'Typically 2-6 weeks for initial POC.',
      experience: experienceMatch?.[1]?.trim() || 'Relevant experience across data engineering, AI integration, and enterprise solutions.',
    };
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'user', content: input.trim() }],
          context: 'solver',
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const parsed = parseResponse(data.message || '');
      setResult(parsed);
    } catch (error) {
      console.error('Problem solver error:', error);
      setResult({
        diagnosis: 'Sorry, something went wrong.',
        approach: 'Please try again later.',
        timeline: 'N/A',
        experience: 'N/A',
      });
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, parseResponse]);

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && e.ctrlKey) {
        e.preventDefault();
        handleSubmit();
      }
    },
    [handleSubmit]
  );

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      {/* Input Card */}
      <div
        className="rounded-lg p-6"
        style={{
          backgroundColor: 'var(--surface)',
          borderColor: 'rgba(91, 184, 212, 0.3)',
          borderWidth: '1px',
          borderStyle: 'solid',
        }}
      >
        <label
          htmlFor="challenge-input"
          className="block text-[15px] font-semibold mb-3"
          style={{ color: 'var(--text-primary)' }}
        >
          Describe your challenge — Answered NOW by AI
        </label>
        <textarea
          id="challenge-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          maxLength={500}
          rows={4}
          placeholder="Example: I need to migrate 500TB of data from on-prem to GCP with zero downtime..."
          disabled={isLoading}
          className={cn(
            'w-full px-4 py-3 rounded-lg',
            'text-[13px]',
            'focus:outline-none focus:ring-2',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'resize-none'
          )}
          style={{
            backgroundColor: 'rgba(22, 24, 25, 0.4)',
            borderColor: 'rgba(91, 184, 212, 0.3)',
            borderWidth: '1px',
            borderStyle: 'solid',
            color: 'var(--text-primary)',
          }}
          aria-label="Describe your challenge — Answered NOW by AI"
        />
        <div className="flex items-center justify-between mt-3">
          <span
            className="text-[11px]"
            style={{ color: 'rgba(226, 232, 240, 0.5)' }}
          >
            {input.length}/500 characters • Ctrl+Enter to submit
          </span>
          <button
            onClick={handleSubmit}
            disabled={!input.trim() || isLoading}
            className={cn(
              'px-6 py-2 rounded-lg',
              'transition-all duration-200',
              'focus-visible:outline-none focus-visible:ring-2',
              'disabled:opacity-50 disabled:cursor-not-allowed'
            )}
            style={{
              backgroundColor: !input.trim() || isLoading
                ? 'rgba(91, 184, 212, 0.3)'
                : 'rgba(91, 184, 212, 0.8)',
              color: 'white',
            }}
            aria-label="Analyze challenge"
            type="button"
          >
            {isLoading ? 'Analyzing...' : 'Analyze'}
          </button>
        </div>
      </div>

      {/* Loading Indicator */}
      {isLoading && (
        <div className="flex items-center justify-center space-x-2 py-8">
          <div
            className="w-3 h-3 rounded-full animate-bounce"
            style={{
              backgroundColor: 'rgba(91, 184, 212, 0.6)',
              animationDelay: '0ms',
            }}
          />
          <div
            className="w-3 h-3 rounded-full animate-bounce"
            style={{
              backgroundColor: 'rgba(91, 184, 212, 0.6)',
              animationDelay: '150ms',
            }}
          />
          <div
            className="w-3 h-3 rounded-full animate-bounce"
            style={{
              backgroundColor: 'rgba(91, 184, 212, 0.6)',
              animationDelay: '300ms',
            }}
          />
        </div>
      )}

      {/* Results Cards */}
      {result && !isLoading && (
        <div className="space-y-4">
          {/* Diagnosis */}
          <div
            className="rounded-lg p-5"
            style={{
              backgroundColor: 'var(--surface)',
              borderColor: 'rgba(91, 184, 212, 0.3)',
              borderWidth: '1px',
              borderStyle: 'solid',
            }}
          >
            <h3
              className="text-[15px] font-semibold mb-3"
              style={{ color: 'var(--accent-active)' }}
            >
              Diagnosis
            </h3>
            <p
              className="text-[13px] leading-relaxed"
              style={{ color: 'rgba(226, 232, 240, 0.9)' }}
            >
              {result.diagnosis}
            </p>
          </div>

          {/* Proposed Approach */}
          <div
            className="rounded-lg p-5"
            style={{
              backgroundColor: 'var(--surface)',
              borderColor: 'rgba(91, 184, 212, 0.3)',
              borderWidth: '1px',
              borderStyle: 'solid',
            }}
          >
            <h3
              className="text-[15px] font-semibold mb-3"
              style={{ color: 'var(--accent-active)' }}
            >
              Proposed Approach
            </h3>
            <p
              className="text-[13px] leading-relaxed whitespace-pre-line"
              style={{ color: 'rgba(226, 232, 240, 0.9)' }}
            >
              {result.approach}
            </p>
          </div>

          {/* Timeline */}
          <div
            className="rounded-lg p-5"
            style={{
              backgroundColor: 'var(--surface)',
              borderColor: 'rgba(91, 184, 212, 0.3)',
              borderWidth: '1px',
              borderStyle: 'solid',
            }}
          >
            <h3
              className="text-[15px] font-semibold mb-3"
              style={{ color: 'var(--accent-active)' }}
            >
              Timeline
            </h3>
            <p
              className="text-[13px] leading-relaxed"
              style={{ color: 'rgba(226, 232, 240, 0.9)' }}
            >
              {result.timeline}
            </p>
          </div>

          {/* Relevant Experience */}
          <div
            className="rounded-lg p-5"
            style={{
              backgroundColor: 'var(--surface)',
              borderColor: 'rgba(91, 184, 212, 0.3)',
              borderWidth: '1px',
              borderStyle: 'solid',
            }}
          >
            <h3
              className="text-[15px] font-semibold mb-3"
              style={{ color: 'var(--accent-active)' }}
            >
              Relevant Experience
            </h3>
            <p
              className="text-[13px] leading-relaxed whitespace-pre-line"
              style={{ color: 'rgba(226, 232, 240, 0.9)' }}
            >
              {result.experience}
            </p>
          </div>

          {/* Disclaimer */}
          <div className="text-center">
            <p
              className="text-[11px]"
              style={{ color: 'rgba(226, 232, 240, 0.5)' }}
            >
              AI-generated analysis — not from Christian directly
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
