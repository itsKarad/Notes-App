import { Transforms, Editor, Text} from 'slate'

const isBoldMarkActive = (editor) => {
    const [match] = Editor.nodes(editor, {
      match: n => n.bold === true,
      universal: true,
    });
    return !!match;
};
  
const isItalicMarkActive = (editor) => {
    const [match] = Editor.nodes(editor, {
      match: n => n.italic === true,
      universal: true,
    });
    return !!match;
};
  
const isUnderlineMarkActive = (editor) => {
    const [match] = Editor.nodes(editor, {
      match: n => n.underline === true,
      universal: true,
    });
    return !!match;
};
  
const isStrikethroughMarkActive = (editor) => {
    const [match] = Editor.nodes(editor, {
      match: n => n.strikethrough === true,
      universal: true,
    });
    return !!match;
};
  
  
const isCodeMarkActive = (editor) => {
    const [match] = Editor.nodes(editor, {
      match: n => n.code === true,
      universal: true,
    });
    return !!match;
};
  
const toggleBoldMark = (editor) => {
    console.log("Toggling bold");
    const isActive = isBoldMarkActive(editor);
    console.log(isActive);
    Transforms.setNodes(
      editor,
      {bold: !isActive},
      { match: n => Text.isText(n), split: true }
    );
}
  
const toggleItalicMark = (editor) => {
    console.log("Toggling italic");
    const isActive = isItalicMarkActive(editor);
    console.log(isActive);
    Transforms.setNodes(
      editor,
      {italic: !isActive},
      { match: n => Text.isText(n), split: true }
    );
}
  
const toggleUnderlineMark = (editor) => {
    console.log("Toggling underline");
    const isActive = isUnderlineMarkActive(editor);
    console.log(isActive);
    Transforms.setNodes(
      editor,
      {underline: !isActive, strikethrough: false},
      { match: n => Text.isText(n), split: true }
    );
}
  
const toggleStrikethroughMark = (editor) => {
    console.log("Toggling Strikethrough");
    const isActive = isStrikethroughMarkActive(editor);
    console.log(isActive);
    Transforms.setNodes(
      editor,
      {strikethrough: !isActive, underline: false},
      { match: n => Text.isText(n), split: true }
    );
}
  
const toggleCodeMark = (editor) => {
    console.log("Toggling code");
    const isActive = isCodeMarkActive(editor);
    Transforms.setNodes(
      editor,
      { code: !isActive},
      { match: n => Text.isText(n), split: true}
    );  
};

const isBulletBlockActive = (editor) => {
    const [match] = Editor.nodes(editor, {
        match: n => n.type === 'bullet',
      });
    return !!match;
}
const toggleBulletBlock = (editor) => {
    console.log("Toggling bullet block");
    const isActive = isBulletBlockActive(editor);
    Transforms.setNodes(
        editor,
        { type: isActive ? "paragraph" : "bullet" },
        { match: n => Editor.isBlock(editor, n) }
    );
}

const isNumberedBlockActive = (editor) => {
    const [match] = Editor.nodes(editor, {
        match: n => n.type === 'numbered',
      });
    return !!match;
};
const toggleNumberedBlock = (editor) => {
    console.log("Toggling numbered block");
    const isActive = isNumberedBlockActive(editor);
    Transforms.setNodes(
        editor,
        { type: isActive ? "paragraph" : "numbered" },
        { match: n => Editor.isBlock(editor, n) }
    );
};

const isH1BlockActive = (editor) => {
    const [match] = Editor.nodes(editor, {
        match: n => n.type === 'h1',
      });
    return !!match;
};
const toggleH1Block = (editor) => {
    console.log("Toggling h1 block");
    const isActive = isH1BlockActive(editor);
    Transforms.setNodes(
        editor,
        { type: isActive ? "paragraph" : "h1" },
        { match: n => Editor.isBlock(editor, n) }
    );
};

const isH2BlockActive = (editor) => {
    const [match] = Editor.nodes(editor, {
        match: n => n.type === 'h2',
      });
    return !!match;
};
const toggleH2Block = (editor) => {
    console.log("Toggling h2 block");
    const isActive = isH2BlockActive(editor);
    Transforms.setNodes(
        editor,
        { type: isActive ? "paragraph" : "h2" },
        { match: n => Editor.isBlock(editor, n) }
    );
};

const isH3BlockActive = (editor) => {
    const [match] = Editor.nodes(editor, {
        match: n => n.type === 'h3',
      });
    return !!match;
};
const toggleH3Block = (editor) => {
    console.log("Toggling h3 block");
    const isActive = isH3BlockActive(editor);
    Transforms.setNodes(
        editor,
        { type: isActive ? "paragraph" : "h3" },
        { match: n => Editor.isBlock(editor, n) }
    );
};

const isQuoteBlockActive = (editor) => {
    const [match] = Editor.nodes(editor, {
        match: n => n.type === 'quote',
      });
    return !!match;
};
const toggleQuoteBlock = (editor) => {
    console.log("Toggling Quote block");
    const isActive = isQuoteBlockActive(editor);
    console.log(isActive);
    Transforms.setNodes(
        editor,
        { type: isActive ? "paragraph" : "quote" },
        { match: n => Editor.isBlock(editor, n) }
    );
};


export 
{
    toggleBoldMark, 
    toggleCodeMark, 
    toggleItalicMark, 
    toggleStrikethroughMark, 
    toggleUnderlineMark,
    toggleBulletBlock,
    toggleNumberedBlock,
    toggleH1Block,
    toggleH2Block,
    toggleH3Block,
    toggleQuoteBlock
};