/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { Fragment } from 'react';
import escapeHTML from 'escape-html';
import { Text } from 'slate';

export const HTMLstringify = (arr) =>
  arr.map((node) => {
    // const isBrAdd = children.some((j) => j.code);
    if (Text.isText(node)) {
      let text = (
        <span
          style={{ display: 'grid', gridTemplateRows: '1fr 1fr' }}
          dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }}
        />
      );
      if (node.text.length !== 0) {
        text = `<span>
            ${node.text}
          </span>`;
        if (node.bold && node.italic) {
          text = `<b>
            <i>${node.text}</i>
          </b>`;
        }
        if (node.bold) {
          text = `<b>${node.text}</b>`;
        }
        if (node.code) {
          text = `<span style="background-color: yellow">
            ${node.text}
          </span>`;
        }

        if (node.italic) {
          text = `<em>${node.text}</em>`;
        }

        if (node.code && node.italic) {
          text = `<span style="background-color: yellow">
            <em>${node.text}</em>
          </span>`;
        }
      }

      if (node.text === '') {
        text = `<br/>`;
      }

      if (node.text === ',') {
        text = `<br/>`;
      }
      // Handle other leaf types here...

      return `${text}`;
    }

    if (!node) {
      return ``;
    }

    switch (node.type) {
      case 'h1':
        return `<h1>
            ${HTMLstringify(node.children)}
            <br />
          </h1>`;
      // Iterate through all headings here...
      case 'h6':
        return ` <p style="list-style: none;" class="separate">
            ${HTMLstringify(node.children)}
          </p>`;
      case 'quote':
        return `<blockquote>${HTMLstringify(node.children)}</blockquote>`;
      case 'ul':
        return `<ul>
            ${HTMLstringify(node.children)}
            <br />
          </ul>`;
      case 'ol':
        return `<ol>
            ${HTMLstringify(node.children)}
            <br />
          </ol>`;
      case 'li':
        return `<li>
            ${HTMLstringify(node.children)}
            <br />
          </li>`;
      case ',':
        return `<br />`;
      case 'link':
        return `<a href=${escapeHTML(node.url)}>
            ${HTMLstringify(node.children)}
          </a>`;

      default:
        return `<p key={i}>${HTMLstringify(node.children)}</p>`;
    }
  });
