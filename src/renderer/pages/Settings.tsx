import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from 'react';
import './Settings.css';

/* Static layout with placeholder text. The only logic is the Dropdown's open/close/select. */

function Section({
  children,
  danger,
}: {
  children: ReactNode;
  danger?: boolean;
}) {
  return (
    <section className={danger ? 'card card-danger' : 'card'}>
      <header className="card-header">
        <h2 className="card-title">Sample</h2>
        <p className="card-description">Sample</p>
      </header>
      <div className="card-body">{children}</div>
    </section>
  );
}

function ToggleRow({ on }: { on?: boolean }) {
  const [checked, setChecked] = useState(on ?? false);
  return (
    <div className="row">
      <div className="row-text">
        <p className="row-label">Sample</p>
        <p className="row-description">Sample</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label="Sample"
        className="switch"
        onClick={() => setChecked((c) => !c)}
      >
        <span className="switch-thumb" />
      </button>
    </div>
  );
}

function RangeField({ id }: { id: string }) {
  return (
    <div className="field">
      <div className="field-head">
        <label className="field-label" htmlFor={id}>
          Sample
        </label>
        <output className="field-value" htmlFor={id}>
          Sample
        </output>
      </div>
      <input
        id={id}
        className="range"
        type="range"
        min={0}
        max={100}
        defaultValue={50}
      />
      <p className="field-hint">Sample</p>
    </div>
  );
}

interface DropdownProps {
  options: string[];
  defaultIndex?: number;
  labelledBy?: string;
}

function Dropdown({ options, defaultIndex = 0, labelledBy }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultIndex);
  const [active, setActive] = useState(defaultIndex);
  const rootRef = useRef<HTMLDivElement>(null);
  const uid = useId();
  const listId = `${uid}-list`;
  const optionId = (i: number) => `${uid}-option-${i}`;

  // Close when clicking outside.
  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, [open]);

  function openMenu() {
    setActive(selected);
    setOpen(true);
  }

  function choose(index: number) {
    setSelected(index);
    setOpen(false);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    const last = options.length - 1;
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!open) openMenu();
        else setActive((i) => Math.min(i + 1, last));
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (!open) openMenu();
        else setActive((i) => Math.max(i - 1, 0));
        break;
      case 'Home':
        if (open) {
          e.preventDefault();
          setActive(0);
        }
        break;
      case 'End':
        if (open) {
          e.preventDefault();
          setActive(last);
        }
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (open) choose(active);
        else openMenu();
        break;
      case 'Escape':
        if (open) {
          e.preventDefault();
          setOpen(false);
        }
        break;
      case 'Tab':
        setOpen(false);
        break;
    }
  }

  return (
    <div ref={rootRef} className={open ? 'dropdown open' : 'dropdown'}>
      <button
        type="button"
        role="combobox"
        className="dropdown-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-labelledby={labelledBy}
        aria-activedescendant={open ? optionId(active) : undefined}
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={handleKeyDown}
        onKeyUp={(e) => {
          if (e.key === ' ') e.preventDefault();
        }}
      >
        <span className="dropdown-value">{options[selected]}</span>
        <svg
          className="dropdown-chevron"
          viewBox="0 0 12 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M1 1.5l5 5 5-5" />
        </svg>
      </button>

      <ul
        id={listId}
        role="listbox"
        className="dropdown-menu"
        aria-labelledby={labelledBy}
      >
        {options.map((option, i) => {
          const classes = ['dropdown-option'];
          if (i === selected) classes.push('selected');
          if (i === active) classes.push('is-active');
          return (
            // Keyboard is handled on the combobox trigger (arrows, Enter,
            // Escape) via aria-activedescendant, so options only need clicks.
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <li
              key={i}
              id={optionId(i)}
              role="option"
              aria-selected={i === selected}
              className={classes.join(' ')}
              onMouseDown={(e) => e.preventDefault()}
              onMouseEnter={() => setActive(i)}
              onClick={() => choose(i)}
            >
              <span className="dropdown-label">{option}</span>
              <svg
                className="dropdown-check"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2.5 7.5l3 3 6-6.5" />
              </svg>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function SelectField() {
  const labelId = useId();
  return (
    <div className="field">
      <span className="field-label" id={labelId}>
        Sample
      </span>
      <Dropdown labelledBy={labelId} options={['Sample', 'Sample', 'Sample']} />
    </div>
  );
}

function ModelOption({
  selected,
  onSelect,
}: {
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      className="model"
      onClick={onSelect}
    >
      <span className="model-radio" aria-hidden="true" />
      <span className="model-main">
        <span className="model-name">Sample</span>
        <span className="model-description">Sample</span>
      </span>
      <span className="model-meta">
        <span className="chip">Sample</span>
        <span className="chip">Sample</span>
        <span className="chip chip-ok">Sample</span>
      </span>
    </button>
  );
}

function ModelList() {
  const [selected, setSelected] = useState(1);
  return (
    <div className="model-list" role="radiogroup" aria-label="Sample">
      {[0, 1, 2].map((i) => (
        <ModelOption
          key={i}
          selected={selected === i}
          onSelect={() => setSelected(i)}
        />
      ))}
    </div>
  );
}

function SegmentedField() {
  const [value, setValue] = useState(0);
  return (
    <div className="field">
      <span className="field-label">Sample</span>
      <div className="segmented" role="radiogroup" aria-label="Sample">
        {[0, 1].map((i) => (
          <button
            key={i}
            type="button"
            role="radio"
            aria-checked={value === i}
            className="segment"
            onClick={() => setValue(i)}
          >
            Sample
          </button>
        ))}
      </div>
      <p className="field-hint">Sample</p>
    </div>
  );
}

function ConfirmAction() {
  const [confirming, setConfirming] = useState(false);
  const cancelRef = useRef<HTMLButtonElement>(null);

  // The button that had focus disappears when confirming starts, so move
  // focus to Cancel (the safe choice).
  useEffect(() => {
    if (confirming) cancelRef.current?.focus();
  }, [confirming]);

  return (
    <div className="row">
      <div className="row-text">
        <p className="row-label">Sample</p>
        <p className="row-description">Sample</p>
      </div>
      {confirming ? (
        <div className="inline-actions">
          <button
            type="button"
            ref={cancelRef}
            className="button button-ghost confirm-in"
            onClick={() => setConfirming(false)}
          >
            Sample
          </button>
          <button
            type="button"
            className="button button-danger confirm-in confirm-in-delay"
            onClick={() => setConfirming(false)}
          >
            Sample
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="button button-danger-outline"
          onClick={() => setConfirming(true)}
        >
          Sample
        </button>
      )}
    </div>
  );
}

function Settings() {
  return (
    <div className="settings-page">
      <h1 className="title-v2">Gurnr Settings</h1>

      {/* Model */}
      <Section>
        <ModelList />
      </Section>

      {/* Compute */}
      <Section>
        <ToggleRow on />
        <SelectField />
        <SegmentedField />
        <RangeField id="vram" />
        <SelectField />
      </Section>

      {/* Face detection */}
      <Section>
        <ToggleRow on />
        <RangeField id="confidence" />
        <RangeField id="smoothing" />
      </Section>

      {/* Filters */}
      <Section>
        <div className="field">
          <label className="field-label" htmlFor="blender">
            Sample
          </label>
          <input
            id="blender"
            className="input"
            type="text"
            placeholder="Sample"
          />
        </div>
        <ToggleRow />
        <div className="filter-head">
          <span className="field-label">Sample</span>
          <button type="button" className="button button-ghost">
            Sample
          </button>
        </div>
        <ul className="filter-list">
          <li className="filter-item">
            <span className="filter-name">Sample</span>
            <button type="button" className="icon-button" aria-label="Sample">
              ×
            </button>
          </li>
          <li className="filter-item">
            <span className="filter-name">Sample</span>
            <button type="button" className="icon-button" aria-label="Sample">
              ×
            </button>
          </li>
        </ul>
      </Section>

      {/* Data */}
      <Section danger>
        <ConfirmAction />
        <ConfirmAction />
        <ConfirmAction />
      </Section>

      <div className="actions">
        <span className="status">Sample</span>
        <button type="button" className="button button-ghost">
          Sample
        </button>
        <button type="button" className="button button-primary">
          Sample
        </button>
      </div>
    </div>
  );
}

export default Settings;
