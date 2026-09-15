"use client";

import styled from "styled-components";
import { QUERIES } from "@/constants";
import { LEGAL_DOCS } from "@/legal/operator";

interface ConsentCheckboxProps {
  /** Unique per form so ids do not collide */
  formName: "contact" | "order";
}

/**
 * Required, unchecked-by-default consent checkbox (152-ФЗ ст. 9).
 * The consent text is a standalone document (/consent), separate from the
 * privacy policy, as required since 1 Sept 2025 (156-ФЗ).
 */
export default function ConsentCheckbox({ formName }: ConsentCheckboxProps) {
  const id = `consent-${formName}`;

  return (
    <Field>
      <Checkbox
        id={id}
        type="checkbox"
        name="consent"
        value="yes"
        required
        aria-required="true"
      />
      <CheckboxLabel htmlFor={id}>
        Я даю согласие на обработку моих персональных данных для связи со мной
        и рассмотрения заявки на условиях{" "}
        <LegalLink
          href={LEGAL_DOCS.consent.path}
          target="_blank"
          rel="noopener noreferrer"
        >
          Согласия
        </LegalLink>{" "}
        и ознакомлен(а) с{" "}
        <LegalLink
          href={LEGAL_DOCS.privacy.path}
          target="_blank"
          rel="noopener noreferrer"
        >
          Политикой конфиденциальности
        </LegalLink>
      </CheckboxLabel>
      {/* Records which revision of the consent text was accepted */}
      <input
        type="hidden"
        name="consentVersion"
        value={LEGAL_DOCS.consent.version}
      />
    </Field>
  );
}

const Field = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin: 0 0 1.2rem;

  @media ${QUERIES.mobile} {
    gap: 0.6rem;
    margin-bottom: 0.9rem;
  }
`;

const CHECKMARK =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23f2f2f2' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round' d='M3 8.5l3.2 3.2L13 5'/%3E%3C/svg%3E\")";

/* Overrides the global `form input` reset in src/styles/GlobalStyles.ts */
const Checkbox = styled.input`
  appearance: none;
  -webkit-appearance: none;
  flex: 0 0 auto;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 2px 0 0;
  padding: 0;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #222;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    border-color: var(--color-details-primary);
  }

  &:focus {
    background-color: #222;
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid var(--color-details-primary);
    outline-offset: 2px;
  }

  &:checked,
  &:checked:focus {
    background-color: var(--color-details-primary);
    border-color: var(--color-details-primary);
    background-image: ${CHECKMARK};
    background-size: 14px 14px;
    background-position: center;
    background-repeat: no-repeat;
  }

  @media ${QUERIES.mobile} {
    width: 18px;
    height: 18px;
  }
`;

const CheckboxLabel = styled.label`
  display: inline;
  width: auto;
  margin: 0;
  font-size: calc(14rem / 16);
  line-height: 1.4;
  color: var(--color-body-primary);
  cursor: pointer;

  @media ${QUERIES.mobile} {
    font-size: calc(12rem / 16);
  }

  @media (max-width: 358px) {
    font-size: calc(10rem / 16);
  }
`;

const LegalLink = styled.a`
  color: var(--color-details-secondary);
  text-decoration: underline;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-details-primary);
  }
`;
