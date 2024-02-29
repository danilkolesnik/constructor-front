/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable */
/* eslint-disable react/no-array-index-key */
import React, { Fragment } from 'react';
import escapeHTML from 'escape-html';
import { Text } from 'slate';

function isHTML(str) {
  const doc = new DOMParser().parseFromString(str, 'text/html');
  return Array.from(doc.body.childNodes).some((node) => node.nodeType === 1);
}

export const serialize = (children) =>
  children.map((node, i) => {
    // node.text = node.text.replaceAll('[number]', 'NUMBER');
    // const isBrAdd = children.some((j) => j.code);
    if (Text.isText(node)) {
      let text = <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />;
      if (node.bold && node.italic) {
        text = (
          <b key={i}>
            <i>{text}</i>
          </b>
        );
      }
      if (node.bold) {
        text = <b key={i}>{text}</b>;
      }
      if (node.code) {
        text = (
          <span key={i} style={{ backgroundColor: 'yellow' }}>
            {text}
          </span>
        );
      }

      if (node.italic) {
        text = <em key={i}>{text}</em>;
      }

      if (node.code && node.italic) {
        text = (
          <span key={i} style={{ backgroundColor: 'yellow' }}>
            <em>{text}</em>
          </span>
        );
      }

      if (node.text === '') {
        text = <br key={i} />;
      }

      if (isHTML(node.text)) {
        // Create a new element
        const tags = [
          'div',
          'ol',
          'ul',
          'li',
          'span',
          'br',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'p',
          'em',
          'tr',
          'td',
          'b',
          'a',
          'img',
          'form',
          'input',
          'label',
          'select',
          'option',
          'textarea',
          'table',
          'thead',
          'tbody',
          'tfoot',
          'th',
          'caption',
          'iframe',
          'button',
          'blockquote',
          'code',
          'pre',
          'strong',
          'cite',
          'small',
          'sup',
          'sub',
          'del',
          'ins',
          'hr',
          'nav',
          'header',
          'footer',
          'section',
          'article',
          'aside',
          'main',
          'figure',
          'figcaption',
        ];
        let html = node.text;
        tags.forEach((tag) => {
          html = html.replaceAll(`</${tag}>,`, `</${tag}>`);
        });
        text = <span dangerouslySetInnerHTML={{ __html: html }} />;
      }
      // Handle other leaf types here...

      return <Fragment key={i}>{text}</Fragment>; // returns an html
    }

    if (!node) {
      return null;
    }

    switch (node.type) {
      case 'h1':
        return (
          <h1 key={i}>
            {serialize(node.children)}
            <br />
          </h1>
        );
      // Iterate through all headings here...
      case 'h6':
        return <h6 key={i}>{serialize(node.children)}</h6>;
      case 'quote':
        return <blockquote key={i}>{serialize(node.children)}</blockquote>;
      case 'ul':
        return <ul key={i}>{serialize(node.children)}</ul>;
      case 'ol':
        return <ol key={i}>{serialize(node.children)}</ol>;
      case 'li':
        return <li key={i}>{serialize(node.children)}</li>;
      case ',':
        return <br />;
      case 'link':
        return (
          <a href={escapeHTML(node.url)} key={i}>
            {serialize(node.children)}
          </a>
        );

      default:
        return <p key={i}>{serialize(node.children)}</p>;
    }
  });

export const serializeFront = (children) =>
  children.map((node, i) => {
    node.text = node.text.replaceAll('EXAMPLEDOC', '');
    node.text = node.text.replaceAll('ANEXD', '');
    node.text = node.text.replaceAll('ACTTD', '');
    // const isBrAdd = children.some((j) => j.code);
    if (Text.isText(node)) {
      let text = (
        <span
          dangerouslySetInnerHTML={{
            __html: escapeHTML(
              node.text
                .toString()
                .replaceAll('EXAMPLE OF DOCUMENT', '')
                .replaceAll('EXAMPLEDOC', '')
                .replaceAll('ANEXD', '')
                .replaceAll('ACTTD', ''),
            ),
          }}
        />
      );
      if (node.bold && node.italic) {
        text = (
          <b key={i}>
            <i>{text}</i>
          </b>
        );
      }
      if (node.bold) {
        text = <b key={i}>{text}</b>;
      }
      if (node.code) {
        text = (
          <span key={i} style={{ backgroundColor: 'yellow' }}>
            {text}
          </span>
        );
      }

      if (node.italic) {
        text = <em key={i}>{text}</em>;
      }

      if (node.code && node.italic) {
        text = (
          <span key={i} style={{ backgroundColor: 'yellow' }}>
            <em>{text}</em>
          </span>
        );
      }

      if (node.text === '') {
        text = <br key={i} />;
      }

      if (isHTML(node.text)) {
        // Create a new element
        const tags = [
          'div',
          'ol',
          'ul',
          'li',
          'span',
          'br',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'p',
          'em',
          'tr',
          'td',
          'b',
          'a',
          'img',
          'form',
          'input',
          'label',
          'select',
          'option',
          'textarea',
          'table',
          'thead',
          'tbody',
          'tfoot',
          'th',
          'caption',
          'iframe',
          'button',
          'blockquote',
          'code',
          'pre',
          'strong',
          'cite',
          'small',
          'sup',
          'sub',
          'del',
          'ins',
          'hr',
          'nav',
          'header',
          'footer',
          'section',
          'article',
          'aside',
          'main',
          'figure',
          'figcaption',
        ];
        let html = node.text.replaceAll('EXAMPLE OF DOCUMENT', '');
        tags.forEach((tag) => {
          html = html.replaceAll(`</${tag}>,`, `</${tag}>`);
        });
        text = <span dangerouslySetInnerHTML={{ __html: html }} />;
      }
      // Handle other leaf types here...

      return <Fragment key={i}>{text}</Fragment>; // returns an html
    }

    if (!node) {
      return null;
    }

    switch (node.type) {
      case 'h1':
        return (
          <h1 key={i}>
            {serializeFront(node.children)}
            <br />
          </h1>
        );
      // Iterate through all headings here...
      case 'h6':
        return <h6 key={i}>{serializeFront(node.children)}</h6>;
      case 'quote':
        return <blockquote key={i}>{serializeFront(node.children)}</blockquote>;
      case 'ul':
        return <ul key={i}>{serializeFront(node.children)}</ul>;
      case 'ol':
        return <ol key={i}>{serializeFront(node.children)}</ol>;
      case 'li':
        return <li key={i}>{serializeFront(node.children)}</li>;
      case ',':
        return <br />;
      case 'link':
        return (
          <a href={escapeHTML(node.url)} key={i}>
            {serializeFront(node.children)}
          </a>
        );

      default:
        return <p key={i}>{serializeFront(node.children)}</p>;
    }
  });
