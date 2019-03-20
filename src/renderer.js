import { Renderer } from 'marked';
import highlightjs from 'highlight.js';

const renderer = new Renderer();

renderer.code = (code, language) => {
  const validLang = !!(language && highlightjs.getLanguage(language));

  const highlighted = validLang ? highlightjs.highlight(language, code).value : code;

  return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
};

renderer.heading = (text, level) => {
  const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

  return `
		<h${level} id="${escapedText}">
			${level < 3 ? `<a href="${window.location.toString().split('?')[0]}?scrollTo=${escapedText}">#</a> ` : ''}${text}
		</h${level}>
	`;
};

renderer.table = (header, body) => `
	<div style="overflow-x:auto;">
		<table>
			<thead>
				${header}
			</thead>
			<tbody>
				${body}
			</tbody>
		</table>
	</div>
`;

export default renderer;