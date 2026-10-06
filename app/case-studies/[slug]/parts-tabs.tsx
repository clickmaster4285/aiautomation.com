'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Marker } from './Shared';
import type { Block, Part } from '@/content/case-studies/clickmasters-ai-lead-response-case-study-kit';

// --------------------------------------------------------------------------- //
//  Editorial table                                                             //
// --------------------------------------------------------------------------- //

function EditorialTable({ rows }: { rows: string[][] }) {
  const [head, ...body] = rows;
  const colCount = head.length;
  const gridCols = `56px repeat(${colCount}, minmax(0, 1fr))`;

  return (
    <div className="mt-12 md:mt-16">
      {/* Header row */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="grid items-end gap-6 md:gap-8 pb-5 px-4 md:px-6 -mx-4 md:-mx-6 border-b"
        style={{
          gridTemplateColumns: gridCols,
          borderColor: 'rgba(0,0,0,0.12)',
        }}
      >
        <span aria-hidden />
        {head.map((c, i) => (
          <span
            key={i}
            className="text-[11px] font-medium uppercase tracking-[0.2em]"
            style={{ color: 'rgba(0,0,0,0.45)' }}
          >
            {c || '—'}
          </span>
        ))}
      </motion.div>

      {/* Body rows */}
      <div className="divide-y" style={{ borderColor: 'rgba(0,0,0,0.07)' }}>
        {body.map((row, rowIdx) => (
          <motion.div
            key={rowIdx}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: Math.min(rowIdx * 0.04, 0.5),
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative isolate grid items-start gap-6 md:gap-8 py-7 md:py-9 px-4 md:px-6 -mx-4 md:-mx-6"
            style={{ gridTemplateColumns: gridCols }}
          >
            {/* Hover fill — now with isolate so it stays above the page bg */}
            <span
              className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
            />

            {/* Left brand bar — aligned to the row's left edge */}
            <span
              className="pointer-events-none absolute left-0 top-4 bottom-4 w-[2px] origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
              style={{ backgroundColor: 'var(--brand)' }}
            />

            {/* Row number */}
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(rowIdx * 0.04 + 0.1, 0.6) }}
              className="font-mono text-xs tabular-nums pt-1.5 transition-colors duration-300 group-hover:text-brand"
              style={{ color: 'rgba(0,0,0,0.35)' }}
            >
              {String(rowIdx + 1).padStart(2, '0')}
            </motion.span>

            {/* Cells */}
            {row.map((cell, cellIdx) => (
              <div
                key={cellIdx}
                className={
                  cellIdx === 0
                    ? 'display text-lg md:text-2xl leading-snug text-gray-900 transition-colors duration-300 group-hover:text-brand pr-4'
                    : 'text-sm md:text-[15px] leading-relaxed pr-4'
                }
                style={cellIdx !== 0 ? { color: 'rgba(0,0,0,0.6)' } : undefined}
              >
                {cell || '—'}
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-6 px-4 md:px-6 -mx-4 md:-mx-6 flex items-center justify-between text-[11px] uppercase tracking-[0.2em]"
        style={{ color: 'rgba(0,0,0,0.35)' }}
      >
        <span>{body.length} {body.length === 1 ? 'row' : 'rows'}</span>
        <span className="flex items-center gap-2">
          <span className="size-1 rounded-full" style={{ backgroundColor: 'var(--brand)' }} />
          {colCount} {colCount === 1 ? 'column' : 'columns'}
        </span>
      </motion.div>
    </div>
  );
}

// --------------------------------------------------------------------------- //
//  Editorial list                                                             //
// --------------------------------------------------------------------------- //

function EditorialList({ items, ordered = false }: { items: string[]; ordered?: boolean }) {
  const ListTag = ordered ? 'ol' : 'ul';

  return (
    <ListTag className="mt-5 space-y-3 max-w-4xl">
      {items.map((item, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.4,
            delay: Math.min(i * 0.05, 0.4),
            ease: [0.16, 1, 0.3, 1],
          }}
          className="group flex items-start gap-4 text-sm md:text-base leading-relaxed"
          style={{ color: 'rgba(0,0,0,0.65)' }}
        >
          {ordered ? (
            <span
              className="font-mono text-xs tabular-nums pt-1 shrink-0"
              style={{ color: 'var(--brand)' }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
          ) : (
            <span
              className="mt-[0.6em] size-1.5 shrink-0 rounded-full transition-transform duration-300 group-hover:scale-125"
              style={{ backgroundColor: 'var(--brand)' }}
            />
          )}
          <span>{item}</span>
        </motion.li>
      ))}
    </ListTag>
  );
}

// --------------------------------------------------------------------------- //
//  Code block — black background                                              //
// --------------------------------------------------------------------------- //

function CodeBlock({
  code,
  language = 'text',
  filename,
}: {
  code: string;
  language?: string;
  filename?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  };

  const lines = code.replace(/\n$/, '').split('\n');

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="mt-8 max-w-4xl overflow-hidden rounded-lg bg-black"
    >
      {/* Header */}
      <div
        className="flex items-center justify-between gap-4 px-4 md:px-5 py-2.5 border-b"
        style={{ borderColor: 'rgba(255,255,255,0.1)' }}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span
            className="font-mono text-[11px] uppercase tracking-[0.15em]"
            style={{ color: 'var(--brand)' }}
          >
            {language}
          </span>
          {filename && (
            <span
              className="font-mono text-[11px] truncate"
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              {filename}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={copy}
          className="shrink-0 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors duration-200 hover:text-white"
          style={{ color: copied ? 'var(--brand)' : 'rgba(255,255,255,0.45)' }}
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      {/* Code body */}
      <div className="overflow-x-auto">
        <pre className="py-4 text-[12.5px] md:text-[13.5px] leading-relaxed">
          <code className="block font-mono">
            {lines.map((line, i) => (
              <span key={i} className="flex">
                {/* Line number */}
                <span
                  className="select-none w-10 md:w-12 shrink-0 pr-4 text-right tabular-nums"
                  style={{ color: 'rgba(255,255,255,0.25)' }}
                >
                  {i + 1}
                </span>
                {/* Line content */}
                <span
                  className="pr-4 whitespace-pre"
                  style={{ color: 'rgba(235,240,245,0.92)' }}
                >
                  {line || ' '}
                </span>
              </span>
            ))}
          </code>
        </pre>
      </div>
    </motion.div>
  );
}

// --------------------------------------------------------------------------- //
//  Block renderer                                                             //
// --------------------------------------------------------------------------- //

function BlockView({ block }: { block: Block }) {
  if (block.kind === 'page') return null;

  if (block.kind === 'heading') {
    const level = Math.min(block.level, 4);

    if (level <= 2) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 md:mt-24 mb-4 flex items-baseline gap-4 first:mt-0"
        >
          {/* <span
            className="font-mono text-xs tabular-nums shrink-0"
            style={{ color: 'var(--brand)' }}
          >
            ●
          </span> */}
          <h3 className="display text-2xl display-italic text-brand md:text-4xl text-gray-900 leading-tight">
            {block.text}
          </h3>
        </motion.div>
      );
    }

    return (
      <motion.h4
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className={
          level === 3
            ? 'mt-12 mb-3 display-italic text-lg md:text-xl font-semibold text-gray-900'
            : 'mt-8 mb-2 text-base font-semibold text-gray-800'
        }
      >
        {block.text}
      </motion.h4>
    );
  }

  if (block.kind === 'para') {
    return (
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
        className="mt-5 leading-relaxed max-w-4xl text-sm md:text-base"
        style={{ color: 'rgba(0,0,0,0.65)' }}
      >
        {block.text}
      </motion.p>
    );
  }

  if (block.kind === 'table') {
    return <EditorialTable rows={block.rows} />;
  }

  if (block.kind === 'list') {
    return <EditorialList items={block.items} ordered={block.ordered} />;
  }

  if (block.kind === 'code') {
    return (
      <CodeBlock
        code={block.code}
        language={block.language}
        filename={block.filename}
      />
    );
  }

  if (block.kind === 'image') {
    return (
      <motion.figure
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mt-8 max-w-4xl"
      >
        <Image
          src={block.src}
          alt={block.alt}
          width={block.width}
          height={block.height}
          sizes="(max-width: 768px) 100vw, 896px"
          className="h-auto w-full rounded-lg"
        />
        {block.caption && (
          <figcaption className="mt-3 text-sm text-gray-500">
            {block.caption}
          </figcaption>
        )}
      </motion.figure>
    );
  }

  return null;
}

// --------------------------------------------------------------------------- //
//  PartsTabs                                                                  //
// --------------------------------------------------------------------------- //

export function PartsTabs({ parts }: { parts: Part[] }) {
  const [active, setActive] = useState(parts[0]?.n ?? 1);
  const current = parts.find((p) => p.n === active) ?? parts[0];
  if (!current) return null;

  return (
    <section
      className="py-16 md:py-24 border-t bg-paper"
    >
      <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex items-center w-full gap-3 md:gap-4 mb-10 md:mb-14"
        >
          <Marker n="10" />
          <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(0,0,0,0.12)' }} />
          <span
            className="eyebrow whitespace-nowrap text-xs md:text-sm"
            style={{ color: 'rgba(0,0,0,0.5)' }}
          >
            Backing Document
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-14 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="display text-4xl sm:text-5xl md:text-6xl text-gray-900"
          >
            Read the
            <br />
            <span className="display-italic text-brand">full working.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md md:self-end text-sm md:text-base leading-relaxed"
            style={{ color: 'rgba(0,0,0,0.55)' }}
          >
            Twelve parts behind the case study, from the opportunity to the sources.
            Pick a tab.
          </motion.p>
        </div>

        {/* ── Tab bar — wraps, no scrollbar ── */}
        <div
          className="border-b pb-1"
          style={{ borderColor: 'rgba(0,0,0,0.1)' }}
        >
          <div
            role="tablist"
            aria-label="Backing document parts"
            className="flex flex-wrap gap-x-8 gap-y-3 md:gap-x-10"
          >
            {parts.map((p) => {
              const isActive = p.n === active;
              return (
                <button
                  key={p.n}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(p.n)}
                  className="group relative pb-3 whitespace-nowrap text-sm md:text-[15px] transition-colors duration-200"
                  style={{ color: isActive ? '#111827' : 'rgba(0,0,0,0.45)' }}
                >
                  <span
                    className="font-mono mr-2 tabular-nums text-xs"
                    style={{ color: isActive ? 'var(--brand)' : 'rgba(0,0,0,0.3)' }}
                  >
                    {String(p.n).padStart(2, '0')}
                  </span>
                  <span className="group-hover:text-gray-900 transition-colors duration-200">
                    {p.title}
                  </span>

                  {isActive && (
                    <motion.span
                      layoutId="tab-underline"
                      className="absolute left-0 right-0 -bottom-[5px] h-[2px]"
                      style={{ backgroundColor: 'var(--brand)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Active panel ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            role="tabpanel"
            className="pt-14 md:pt-20"
          >
            <div className="flex items-baseline gap-4 mb-2">
              <span className="font-mono text-xs tabular-nums text-brand">
                PART {String(current.n).padStart(2, '0')}
              </span>
              <h3 className="display text-2xl md:text-4xl text-gray-900 leading-tight">
                {current.title}
              </h3>
            </div>
            <div
              className="h-px w-full mt-6 mb-4"
              style={{ backgroundColor: 'rgba(0,0,0,0.08)' }}
            />

            <div>
              {current.blocks.map((b, i) => (
                <BlockView key={`${active}-${i}`} block={b} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}