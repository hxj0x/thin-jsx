import { Ref } from "./type";
export * from "./index";

// 参考：https://github.com/ryansolid/dom-expressions/blob/8d2d82fd96a08c82b933fcf87ef521c4b54cf490/packages/dom-expressions/src/jsx.d.ts
export namespace JSX {
  ///  JSX Element
  export type Element =
    | Node
    | ArrayElement
    | (string & {})
    | number
    | boolean
    | null
    | undefined;
  interface ArrayElement extends Array<Element> {}

  // JSX.IntrinsicAttributes 接口可用于指定 JSX 框架使用的额外属性，这些属性通常不用于组件的 props 或参数 - 例如 React 中的 key
  interface IntrinsicAttributes<T> {
    ref?: Ref<T>;
  }

  // 自定义的JSX组件属性
  interface CustomAttributes<T> {
    ref?: Ref<T>;
    className?: string;
  }

  export interface IntrinsicClassAttributes<
    T extends abstract new (...args: any) => any,
  > {
    ref?: Ref<InstanceType<T>>;
  }

  interface EventHandler<E extends Event = Event> {
    (event: E): void;
  }

  // JSX是事件定义
  // 参考 GlobalEventHandlersEventMap
  interface JsxGlobalEventHandlers {
    onAbort?: EventHandler<UIEvent>;
    onAnimationcancel?: EventHandler<AnimationEvent>;
    onAnimationend?: EventHandler<AnimationEvent>;
    onAnimationiteration?: EventHandler<AnimationEvent>;
    onAnimationstart?: EventHandler<AnimationEvent>;
    onAuxclick?: EventHandler<MouseEvent>;
    onBeforeinput?: EventHandler<InputEvent>;
    onBeforetoggle?: EventHandler<Event>;
    onBlur?: EventHandler<FocusEvent>;
    onCancel?: EventHandler<Event>;
    onCanplay?: EventHandler<Event>;
    onCanplaythrough?: EventHandler<Event>;
    onChange?: EventHandler<Event>;
    onClick?: EventHandler<MouseEvent>;
    onClose?: EventHandler<Event>;
    onCompositionend?: EventHandler<CompositionEvent>;
    onCompositionstart?: EventHandler<CompositionEvent>;
    onCompositionupdate?: EventHandler<CompositionEvent>;
    onContextmenu?: EventHandler<MouseEvent>;
    onCopy?: EventHandler<ClipboardEvent>;
    onCuechange?: EventHandler<Event>;
    onCut?: EventHandler<ClipboardEvent>;
    onDblclick?: EventHandler<MouseEvent>;
    onDrag?: EventHandler<DragEvent>;
    onDragend?: EventHandler<DragEvent>;
    onDragenter?: EventHandler<DragEvent>;
    onDragleave?: EventHandler<DragEvent>;
    onDragover?: EventHandler<DragEvent>;
    onDragstart?: EventHandler<DragEvent>;
    onDrop?: EventHandler<DragEvent>;
    onDurationchange?: EventHandler<Event>;
    onEmptied?: EventHandler<Event>;
    onEnded?: EventHandler<Event>;
    onError?: EventHandler<ErrorEvent>;
    onFocus?: EventHandler<FocusEvent>;
    onFocusin?: EventHandler<FocusEvent>;
    onFocusout?: EventHandler<FocusEvent>;
    onFormdata?: EventHandler<FormDataEvent>;
    onGotpointercapture?: EventHandler<PointerEvent>;
    onInput?: EventHandler<Event>;
    onInvalid?: EventHandler<Event>;
    onKeydown?: EventHandler<KeyboardEvent>;
    onKeypress?: EventHandler<KeyboardEvent>;
    onKeyup?: EventHandler<KeyboardEvent>;
    onLoad?: EventHandler<Event>;
    onLoadeddata?: EventHandler<Event>;
    onLoadedmetadata?: EventHandler<Event>;
    onLoadstart?: EventHandler<Event>;
    onLostpointercapture?: EventHandler<PointerEvent>;
    onMousedown?: EventHandler<MouseEvent>;
    onMouseenter?: EventHandler<MouseEvent>;
    onMouseleave?: EventHandler<MouseEvent>;
    onMousemove?: EventHandler<MouseEvent>;
    onMouseout?: EventHandler<MouseEvent>;
    onMouseover?: EventHandler<MouseEvent>;
    onMouseup?: EventHandler<MouseEvent>;
    onPaste?: EventHandler<ClipboardEvent>;
    onPause?: EventHandler<Event>;
    onPlay?: EventHandler<Event>;
    onPlaying?: EventHandler<Event>;
    onPointercancel?: EventHandler<PointerEvent>;
    onPointerdown?: EventHandler<PointerEvent>;
    onPointerenter?: EventHandler<PointerEvent>;
    onPointerleave?: EventHandler<PointerEvent>;
    onPointermove?: EventHandler<PointerEvent>;
    onPointerout?: EventHandler<PointerEvent>;
    onPointerover?: EventHandler<PointerEvent>;
    onPointerup?: EventHandler<PointerEvent>;
    onProgress?: EventHandler<ProgressEvent>;
    onRatechange?: EventHandler<Event>;
    onReset?: EventHandler<Event>;
    onResize?: EventHandler<UIEvent>;
    onScroll?: EventHandler<Event>;
    onScrollend?: EventHandler<Event>;
    onSecuritypolicyviolation?: EventHandler<SecurityPolicyViolationEvent>;
    onSeeked?: EventHandler<Event>;
    onSeeking?: EventHandler<Event>;
    onSelect?: EventHandler<Event>;
    onSelectionchange?: EventHandler<Event>;
    onSelectstart?: EventHandler<Event>;
    onSlotchange?: EventHandler<Event>;
    onStalled?: EventHandler<Event>;
    onSubmit?: EventHandler<SubmitEvent>;
    onSuspend?: EventHandler<Event>;
    onTimeupdate?: EventHandler<Event>;
    onToggle?: EventHandler<Event>;
    onTouchcancel?: EventHandler<TouchEvent>;
    onTouchend?: EventHandler<TouchEvent>;
    onTouchmove?: EventHandler<TouchEvent>;
    onTouchstart?: EventHandler<TouchEvent>;
    onTransitioncancel?: EventHandler<TransitionEvent>;
    onTransitionend?: EventHandler<TransitionEvent>;
    onTransitionrun?: EventHandler<TransitionEvent>;
    onTransitionstart?: EventHandler<TransitionEvent>;
    onVolumechange?: EventHandler<Event>;
    onWaiting?: EventHandler<Event>;
    onWebkitanimationend?: EventHandler<Event>;
    onWebkitanimationiteration?: EventHandler<Event>;
    onWebkitanimationstart?: EventHandler<Event>;
    onWebkittransitionend?: EventHandler<Event>;
    onWheel?: EventHandler<WheelEvent>;
  }

  type HTMLAutocapitalize =
    | "off"
    | "none"
    | "on"
    | "sentences"
    | "words"
    | "characters";
  type HTMLDir = "ltr" | "rtl" | "auto";
  type HTMLFormEncType =
    | "application/x-www-form-urlencoded"
    | "multipart/form-data"
    | "text/plain";
  type HTMLFormMethod = "post" | "get" | "dialog";
  type HTMLCrossorigin = "anonymous" | "use-credentials" | "";
  type HTMLReferrerPolicy =
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "same-origin"
    | "strict-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url";
  type HTMLIframeSandbox =
    | "allow-downloads-without-user-activation"
    | "allow-downloads"
    | "allow-forms"
    | "allow-modals"
    | "allow-orientation-lock"
    | "allow-pointer-lock"
    | "allow-popups"
    | "allow-popups-to-escape-sandbox"
    | "allow-presentation"
    | "allow-same-origin"
    | "allow-scripts"
    | "allow-storage-access-by-user-activation"
    | "allow-top-navigation"
    | "allow-top-navigation-by-user-activation"
    | "allow-top-navigation-to-custom-protocols";
  type HTMLLinkAs =
    | "audio"
    | "document"
    | "embed"
    | "fetch"
    | "font"
    | "image"
    | "object"
    | "script"
    | "style"
    | "track"
    | "video"
    | "worker";

  // All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
  interface AriaAttributes {
    /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
    "aria-activedescendant"?: string;
    /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
    "aria-atomic"?: boolean | "false" | "true";
    /**
     * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
     * presented if they are made.
     */
    "aria-autocomplete"?: "none" | "inline" | "list" | "both";
    /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
    "aria-busy"?: boolean | "false" | "true";
    /**
     * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
     * @see aria-pressed @see aria-selected.
     */
    "aria-checked"?: boolean | "false" | "mixed" | "true";
    /**
     * Defines the total number of columns in a table, grid, or treegrid.
     * @see aria-colindex.
     */
    "aria-colcount"?: number | string;
    /**
     * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
     * @see aria-colcount @see aria-colspan.
     */
    "aria-colindex"?: number | string;
    /**
     * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
     * @see aria-colindex @see aria-rowspan.
     */
    "aria-colspan"?: number | string;
    /**
     * Identifies the element (or elements) whose contents or presence are controlled by the current element.
     * @see aria-owns.
     */
    "aria-controls"?: string;
    /** Indicates the element that represents the current item within a container or set of related elements. */
    "aria-current"?:
      | boolean
      | "false"
      | "true"
      | "page"
      | "step"
      | "location"
      | "date"
      | "time";
    /**
     * Identifies the element (or elements) that describes the object.
     * @see aria-labelledby
     */
    "aria-describedby"?: string;
    /**
     * Identifies the element that provides a detailed, extended description for the object.
     * @see aria-describedby.
     */
    "aria-details"?: string;
    /**
     * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
     * @see aria-hidden @see aria-readonly.
     */
    "aria-disabled"?: boolean | "false" | "true";
    /**
     * Indicates what functions can be performed when a dragged object is released on the drop target.
     * @deprecated in ARIA 1.1
     */
    "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup";
    /**
     * Identifies the element that provides an error message for the object.
     * @see aria-invalid @see aria-describedby.
     */
    "aria-errormessage"?: string;
    /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
    "aria-expanded"?: boolean | "false" | "true";
    /**
     * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
     * allows assistive technology to override the general default of reading in document source order.
     */
    "aria-flowto"?: string;
    /**
     * Indicates an element's "grabbed" state in a drag-and-drop operation.
     * @deprecated in ARIA 1.1
     */
    "aria-grabbed"?: boolean | "false" | "true";
    /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
    "aria-haspopup"?:
      | boolean
      | "false"
      | "true"
      | "menu"
      | "listbox"
      | "tree"
      | "grid"
      | "dialog";
    /**
     * Indicates whether the element is exposed to an accessibility API.
     * @see aria-disabled.
     */
    "aria-hidden"?: boolean | "false" | "true";
    /**
     * Indicates the entered value does not conform to the format expected by the application.
     * @see aria-errormessage.
     */
    "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling";
    /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
    "aria-keyshortcuts"?: string;
    /**
     * Defines a string value that labels the current element.
     * @see aria-labelledby.
     */
    "aria-label"?: string;
    /**
     * Identifies the element (or elements) that labels the current element.
     * @see aria-describedby.
     */
    "aria-labelledby"?: string;
    /** Defines the hierarchical level of an element within a structure. */
    "aria-level"?: number | string;
    /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
    "aria-live"?: "off" | "assertive" | "polite";
    /** Indicates whether an element is modal when displayed. */
    "aria-modal"?: boolean | "false" | "true";
    /** Indicates whether a text box accepts multiple lines of input or only a single line. */
    "aria-multiline"?: boolean | "false" | "true";
    /** Indicates that the user may select more than one item from the current selectable descendants. */
    "aria-multiselectable"?: boolean | "false" | "true";
    /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
    "aria-orientation"?: "horizontal" | "vertical";
    /**
     * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
     * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
     * @see aria-controls.
     */
    "aria-owns"?: string;
    /**
     * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
     * A hint could be a sample value or a brief description of the expected format.
     */
    "aria-placeholder"?: string;
    /**
     * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
     * @see aria-setsize.
     */
    "aria-posinset"?: number | string;
    /**
     * Indicates the current "pressed" state of toggle buttons.
     * @see aria-checked @see aria-selected.
     */
    "aria-pressed"?: boolean | "false" | "mixed" | "true";
    /**
     * Indicates that the element is not editable, but is otherwise operable.
     * @see aria-disabled.
     */
    "aria-readonly"?: boolean | "false" | "true";
    /**
     * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
     * @see aria-atomic.
     */
    "aria-relevant"?:
      | "additions"
      | "additions removals"
      | "additions text"
      | "all"
      | "removals"
      | "removals additions"
      | "removals text"
      | "text"
      | "text additions"
      | "text removals";
    /** Indicates that user input is required on the element before a form may be submitted. */
    "aria-required"?: boolean | "false" | "true";
    /** Defines a human-readable, author-localized description for the role of an element. */
    "aria-roledescription"?: string;
    /**
     * Defines the total number of rows in a table, grid, or treegrid.
     * @see aria-rowindex.
     */
    "aria-rowcount"?: number | string;
    /**
     * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
     * @see aria-rowcount @see aria-rowspan.
     */
    "aria-rowindex"?: number | string;
    /**
     * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
     * @see aria-rowindex @see aria-colspan.
     */
    "aria-rowspan"?: number | string;
    /**
     * Indicates the current "selected" state of various widgets.
     * @see aria-checked @see aria-pressed.
     */
    "aria-selected"?: boolean | "false" | "true";
    /**
     * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
     * @see aria-posinset.
     */
    "aria-setsize"?: number | string;
    /** Indicates if items in a table or grid are sorted in ascending or descending order. */
    "aria-sort"?: "none" | "ascending" | "descending" | "other";
    /** Defines the maximum allowed value for a range widget. */
    "aria-valuemax"?: number | string;
    /** Defines the minimum allowed value for a range widget. */
    "aria-valuemin"?: number | string;
    /**
     * Defines the current value for a range widget.
     * @see aria-valuetext.
     */
    "aria-valuenow"?: number | string;
    /** Defines the human readable text alternative of aria-valuenow for a range widget. */
    "aria-valuetext"?: string;
    role?:
      | "alert"
      | "alertdialog"
      | "application"
      | "article"
      | "banner"
      | "button"
      | "cell"
      | "checkbox"
      | "columnheader"
      | "combobox"
      | "complementary"
      | "contentinfo"
      | "definition"
      | "dialog"
      | "directory"
      | "document"
      | "feed"
      | "figure"
      | "form"
      | "grid"
      | "gridcell"
      | "group"
      | "heading"
      | "img"
      | "link"
      | "list"
      | "listbox"
      | "listitem"
      | "log"
      | "main"
      | "marquee"
      | "math"
      | "menu"
      | "menubar"
      | "menuitem"
      | "menuitemcheckbox"
      | "menuitemradio"
      | "meter"
      | "navigation"
      | "none"
      | "note"
      | "option"
      | "presentation"
      | "progressbar"
      | "radio"
      | "radiogroup"
      | "region"
      | "row"
      | "rowgroup"
      | "rowheader"
      | "scrollbar"
      | "search"
      | "searchbox"
      | "separator"
      | "slider"
      | "spinbutton"
      | "status"
      | "switch"
      | "tab"
      | "table"
      | "tablist"
      | "tabpanel"
      | "term"
      | "textbox"
      | "timer"
      | "toolbar"
      | "tooltip"
      | "tree"
      | "treegrid"
      | "treeitem";
  }

  interface DOMAttributes<T>
    extends CustomAttributes<T>,
      JsxGlobalEventHandlers {}

  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // [key: ClassKeys]: boolean;
    accessKey?: string;
    contenteditable?: boolean | "plaintext-only" | "inherit";
    contextmenu?: string;
    dir?: HTMLDir;
    draggable?: boolean | "false" | "true";
    hidden?: boolean | "hidden" | "until-found";
    id?: string;
    inert?: boolean;
    lang?: string;
    spellcheck?: boolean;
    style?: string;
    tabindex?: number | string;
    title?: string;
    translate?: "yes" | "no";
    about?: string;
    datatype?: string;
    inlist?: any;
    popover?: boolean | "manual" | "auto";
    prefix?: string;
    property?: string;
    resource?: string;
    typeof?: string;
    vocab?: string;
    autocapitalize?: HTMLAutocapitalize;
    slot?: string;
    color?: string;
    itemprop?: string;
    itemscope?: boolean;
    itemtype?: string;
    itemid?: string;
    itemref?: string;
    part?: string;
    exportparts?: string;
    inputmode?:
      | "none"
      | "text"
      | "tel"
      | "url"
      | "email"
      | "numeric"
      | "decimal"
      | "search";
    contentEditable?: boolean | "plaintext-only" | "inherit";
    contextMenu?: string;
    tabIndex?: number | string;
    autoCapitalize?: HTMLAutocapitalize;
    itemProp?: string;
    itemScope?: boolean;
    itemType?: string;
    itemId?: string;
    itemRef?: string;
    exportParts?: string;
    inputMode?:
      | "none"
      | "text"
      | "tel"
      | "url"
      | "email"
      | "numeric"
      | "decimal"
      | "search";
  }

  export interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
    download?: any;
    href?: string;
    hreflang?: string;
    media?: string;
    ping?: string;
    referrerpolicy?: HTMLReferrerPolicy;
    rel?: string;
    target?: string;
    type?: string;
    referrerPolicy?: HTMLReferrerPolicy;
  }
  interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> {}
  interface AreaHTMLAttributes<T> extends HTMLAttributes<T> {
    alt?: string;
    coords?: string;
    download?: any;
    href?: string;
    hreflang?: string;
    ping?: string;
    referrerpolicy?: HTMLReferrerPolicy;
    rel?: string;
    shape?: "rect" | "circle" | "poly" | "default";
    target?: string;
    referrerPolicy?: HTMLReferrerPolicy;
  }
  interface BaseHTMLAttributes<T> extends HTMLAttributes<T> {
    href?: string;
    target?: string;
  }
  interface BlockquoteHTMLAttributes<T> extends HTMLAttributes<T> {
    cite?: string;
  }
  export interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
    autofocus?: boolean;
    disabled?: boolean;
    form?: string;
    formaction?: string;
    formenctype?: HTMLFormEncType;
    formmethod?: HTMLFormMethod;
    formnovalidate?: boolean;
    formtarget?: string;
    popovertarget?: string;
    popovertargetaction?: "hide" | "show" | "toggle";
    name?: string;
    type: "submit" | "reset" | "button";
    value?: string;
    formAction?: string;
    formEnctype?: HTMLFormEncType;
    formMethod?: HTMLFormMethod;
    formNoValidate?: boolean;
    formTarget?: string;
    popoverTarget?: string;
    popoverTargetAction?: "hide" | "show" | "toggle";
  }
  interface CanvasHTMLAttributes<T> extends HTMLAttributes<T> {
    width?: number | string;
    height?: number | string;
  }
  interface ColHTMLAttributes<T> extends HTMLAttributes<T> {
    span?: number | string;
    width?: number | string;
  }
  interface ColgroupHTMLAttributes<T> extends HTMLAttributes<T> {
    span?: number | string;
  }
  interface DataHTMLAttributes<T> extends HTMLAttributes<T> {
    value?: string | string[] | number;
  }
  interface DetailsHtmlAttributes<T> extends HTMLAttributes<T> {
    open?: boolean;
    onToggle?: EventHandler<Event>;
    ontoggle?: EventHandler<Event>;
  }
  interface DialogHtmlAttributes<T> extends HTMLAttributes<T> {
    open?: boolean;
    onClose?: EventHandler<Event>;
    onCancel?: EventHandler<Event>;
  }
  interface EmbedHTMLAttributes<T> extends HTMLAttributes<T> {
    height?: number | string;
    src?: string;
    type?: string;
    width?: number | string;
  }
  interface FieldsetHTMLAttributes<T> extends HTMLAttributes<T> {
    disabled?: boolean;
    form?: string;
    name?: string;
  }
  interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
    "accept-charset"?: string;
    action?: string;
    autocomplete?: string;
    encoding?: HTMLFormEncType;
    enctype?: HTMLFormEncType;
    method?: HTMLFormMethod;
    name?: string;
    novalidate?: boolean;
    target?: string;
    noValidate?: boolean;
  }
  interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
    allow?: string;
    allowfullscreen?: boolean;
    height?: number | string;
    loading?: "eager" | "lazy";
    name?: string;
    referrerpolicy?: HTMLReferrerPolicy;
    sandbox?: HTMLIframeSandbox | string;
    src?: string;
    srcdoc?: string;
    width?: number | string;
    referrerPolicy?: HTMLReferrerPolicy;
  }
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    alt: string;
    crossorigin?: HTMLCrossorigin;
    decoding?: "sync" | "async" | "auto";
    height?: number | string;
    ismap?: boolean;
    isMap?: boolean;
    loading?: "eager" | "lazy";
    referrerpolicy?: HTMLReferrerPolicy;
    referrerPolicy?: HTMLReferrerPolicy;
    sizes?: string;
    src?: string;
    srcset?: string;
    srcSet?: string;
    usemap?: string;
    useMap?: string;
    width?: number | string;
    crossOrigin?: HTMLCrossorigin;
    elementtiming?: string;
    fetchpriority?: "high" | "low" | "auto";
  }
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    accept?: string;
    alt?: string;
    autocomplete?: string;
    autocorrect?: "on" | "off";
    autofocus?: boolean;
    capture?: boolean | string;
    checked?: boolean;
    crossorigin?: HTMLCrossorigin;
    disabled?: boolean;
    enterkeyhint?:
      | "enter"
      | "done"
      | "go"
      | "next"
      | "previous"
      | "search"
      | "send";
    form?: string;
    formaction?: string;
    formenctype?: HTMLFormEncType;
    formmethod?: HTMLFormMethod;
    formnovalidate?: boolean;
    formtarget?: string;
    height?: number | string;
    incremental?: boolean;
    list?: string;
    max?: number | string;
    maxlength?: number | string;
    min?: number | string;
    minlength?: number | string;
    multiple?: boolean;
    name?: string;
    pattern?: string;
    placeholder?: string;
    readonly?: boolean;
    results?: number;
    required?: boolean;
    size?: number | string;
    src?: string;
    step?: number | string;
    type?: string;
    value?: string | string[] | number;
    width?: number | string;
    crossOrigin?: HTMLCrossorigin;
    formAction?: string;
    formEnctype?: HTMLFormEncType;
    formMethod?: HTMLFormMethod;
    formNoValidate?: boolean;
    formTarget?: string;
    maxLength?: number | string;
    minLength?: number | string;
    readOnly?: boolean;
  }
  interface InsHTMLAttributes<T> extends HTMLAttributes<T> {
    cite?: string;
    dateTime?: string;
  }
  interface KeygenHTMLAttributes<T> extends HTMLAttributes<T> {
    autofocus?: boolean;
    challenge?: string;
    disabled?: boolean;
    form?: string;
    keytype?: string;
    keyparams?: string;
    name?: string;
  }
  interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
    for?: string;
    form?: string;
  }
  interface LiHTMLAttributes<T> extends HTMLAttributes<T> {
    value?: number | string;
  }
  interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
    as?: HTMLLinkAs;
    crossorigin?: HTMLCrossorigin;
    disabled?: boolean;
    fetchpriority?: "high" | "low" | "auto";
    href?: string;
    hreflang?: string;
    imagesizes?: string;
    imagesrcset?: string;
    integrity?: string;
    media?: string;
    referrerpolicy?: HTMLReferrerPolicy;
    rel?: string;
    sizes?: string;
    type?: string;
    crossOrigin?: HTMLCrossorigin;
    referrerPolicy?: HTMLReferrerPolicy;
  }
  interface MapHTMLAttributes<T> extends HTMLAttributes<T> {
    name?: string;
  }
  interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
    autoplay?: boolean;
    controls?: boolean;
    crossorigin?: HTMLCrossorigin;
    loop?: boolean;
    mediagroup?: string;
    muted?: boolean;
    preload?: "none" | "metadata" | "auto" | "";
    src?: string;
    crossOrigin?: HTMLCrossorigin;
    mediaGroup?: string;
  }
  interface MenuHTMLAttributes<T> extends HTMLAttributes<T> {
    label?: string;
    type?: "context" | "toolbar";
  }
  interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
    charset?: string;
    content?: string;
    "http-equiv"?: string;
    name?: string;
    media?: string;
  }
  interface MeterHTMLAttributes<T> extends HTMLAttributes<T> {
    form?: string;
    high?: number | string;
    low?: number | string;
    max?: number | string;
    min?: number | string;
    optimum?: number | string;
    value?: string | string[] | number;
  }
  interface QuoteHTMLAttributes<T> extends HTMLAttributes<T> {
    cite?: string;
  }
  interface ObjectHTMLAttributes<T> extends HTMLAttributes<T> {
    data?: string;
    form?: string;
    height?: number | string;
    name?: string;
    type?: string;
    usemap?: string;
    width?: number | string;
    useMap?: string;
  }
  interface OlHTMLAttributes<T> extends HTMLAttributes<T> {
    reversed?: boolean;
    start?: number | string;
    type?: "1" | "a" | "A" | "i" | "I";
  }
  interface OptgroupHTMLAttributes<T> extends HTMLAttributes<T> {
    disabled?: boolean;
    label?: string;
  }
  interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
    disabled?: boolean;
    label?: string;
    selected?: boolean;
    value?: string | string[] | number;
  }
  interface OutputHTMLAttributes<T> extends HTMLAttributes<T> {
    form?: string;
    for?: string;
    name?: string;
  }
  interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
    name?: string;
    value?: string | string[] | number;
  }
  interface ProgressHTMLAttributes<T> extends HTMLAttributes<T> {
    max?: number | string;
    value?: string | string[] | number;
  }
  interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
    async?: boolean;
    charset?: string;
    crossorigin?: HTMLCrossorigin;
    defer?: boolean;
    integrity?: string;
    nomodule?: boolean;
    nonce?: string;
    referrerpolicy?: HTMLReferrerPolicy;
    src?: string;
    type?: string;
    crossOrigin?: HTMLCrossorigin;
    noModule?: boolean;
    referrerPolicy?: HTMLReferrerPolicy;
  }
  interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
    autocomplete?: string;
    autofocus?: boolean;
    disabled?: boolean;
    form?: string;
    multiple?: boolean;
    name?: string;
    required?: boolean;
    size?: number | string;
    value?: string | string[] | number;
  }
  interface HTMLSlotElementAttributes<T = HTMLSlotElement>
    extends HTMLAttributes<T> {
    name?: string;
  }
  interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
    media?: string;
    sizes?: string;
    src?: string;
    srcset?: string;
    type?: string;
  }
  interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
    media?: string;
    nonce?: string;
    scoped?: boolean;
    type?: string;
  }
  interface TdHTMLAttributes<T> extends HTMLAttributes<T> {
    colspan?: number | string;
    headers?: string;
    rowspan?: number | string;
    colSpan?: number | string;
    rowSpan?: number | string;
  }
  interface TemplateHTMLAttributes<T extends HTMLTemplateElement>
    extends HTMLAttributes<T> {
    content?: DocumentFragment;
  }
  interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
    autocomplete?: string;
    autofocus?: boolean;
    cols?: number | string;
    dirname?: string;
    disabled?: boolean;
    enterkeyhint?:
      | "enter"
      | "done"
      | "go"
      | "next"
      | "previous"
      | "search"
      | "send";
    form?: string;
    maxlength?: number | string;
    minlength?: number | string;
    name?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    rows?: number | string;
    value?: string | string[] | number;
    wrap?: "hard" | "soft" | "off";
    maxLength?: number | string;
    minLength?: number | string;
    readOnly?: boolean;
  }
  interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
    colspan?: number | string;
    headers?: string;
    rowspan?: number | string;
    colSpan?: number | string;
    rowSpan?: number | string;
    scope?: "col" | "row" | "rowgroup" | "colgroup";
  }
  interface TimeHTMLAttributes<T> extends HTMLAttributes<T> {
    datetime?: string;
    dateTime?: string;
  }
  interface TrackHTMLAttributes<T> extends HTMLAttributes<T> {
    default?: boolean;
    kind?: "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
    label?: string;
    src?: string;
    srclang?: string;
  }
  interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
    height?: number | string;
    playsinline?: boolean;
    poster?: string;
    width?: number | string;
  }

  /**
   * @type {HTMLElementTagNameMap}
   */
  interface HTMLElementTags {
    a: AnchorHTMLAttributes<HTMLAnchorElement>;
    abbr: HTMLAttributes<HTMLElement>;
    address: HTMLAttributes<HTMLElement>;
    area: AreaHTMLAttributes<HTMLAreaElement>;
    article: HTMLAttributes<HTMLElement>;
    aside: HTMLAttributes<HTMLElement>;
    audio: AudioHTMLAttributes<HTMLAudioElement>;
    b: HTMLAttributes<HTMLElement>;
    base: BaseHTMLAttributes<HTMLBaseElement>;
    bdi: HTMLAttributes<HTMLElement>;
    bdo: HTMLAttributes<HTMLElement>;
    blockquote: BlockquoteHTMLAttributes<HTMLElement>;
    body: HTMLAttributes<HTMLBodyElement>;
    br: HTMLAttributes<HTMLBRElement>;
    button: ButtonHTMLAttributes<HTMLButtonElement>;
    canvas: CanvasHTMLAttributes<HTMLCanvasElement>;
    caption: HTMLAttributes<HTMLElement>;
    cite: HTMLAttributes<HTMLElement>;
    code: HTMLAttributes<HTMLElement>;
    col: ColHTMLAttributes<HTMLTableColElement>;
    colgroup: ColgroupHTMLAttributes<HTMLTableColElement>;
    data: DataHTMLAttributes<HTMLElement>;
    datalist: HTMLAttributes<HTMLDataListElement>;
    dd: HTMLAttributes<HTMLElement>;
    del: HTMLAttributes<HTMLElement>;
    details: DetailsHtmlAttributes<HTMLDetailsElement>;
    dfn: HTMLAttributes<HTMLElement>;
    dialog: DialogHtmlAttributes<HTMLDialogElement>;
    div: HTMLAttributes<HTMLDivElement>;
    dl: HTMLAttributes<HTMLDListElement>;
    dt: HTMLAttributes<HTMLElement>;
    em: HTMLAttributes<HTMLElement>;
    embed: EmbedHTMLAttributes<HTMLEmbedElement>;
    fieldset: FieldsetHTMLAttributes<HTMLFieldSetElement>;
    figcaption: HTMLAttributes<HTMLElement>;
    figure: HTMLAttributes<HTMLElement>;
    footer: HTMLAttributes<HTMLElement>;
    form: FormHTMLAttributes<HTMLFormElement>;
    h1: HTMLAttributes<HTMLHeadingElement>;
    h2: HTMLAttributes<HTMLHeadingElement>;
    h3: HTMLAttributes<HTMLHeadingElement>;
    h4: HTMLAttributes<HTMLHeadingElement>;
    h5: HTMLAttributes<HTMLHeadingElement>;
    h6: HTMLAttributes<HTMLHeadingElement>;
    head: HTMLAttributes<HTMLHeadElement>;
    header: HTMLAttributes<HTMLElement>;
    hgroup: HTMLAttributes<HTMLElement>;
    hr: HTMLAttributes<HTMLHRElement>;
    html: HTMLAttributes<HTMLHtmlElement>;
    i: HTMLAttributes<HTMLElement>;
    iframe: IframeHTMLAttributes<HTMLIFrameElement>;
    img: ImgHTMLAttributes<HTMLImageElement>;
    input: InputHTMLAttributes<HTMLInputElement>;
    ins: InsHTMLAttributes<HTMLModElement>;
    kbd: HTMLAttributes<HTMLElement>;
    label: LabelHTMLAttributes<HTMLLabelElement>;
    legend: HTMLAttributes<HTMLLegendElement>;
    li: LiHTMLAttributes<HTMLLIElement>;
    link: LinkHTMLAttributes<HTMLLinkElement>;
    main: HTMLAttributes<HTMLElement>;
    map: MapHTMLAttributes<HTMLMapElement>;
    mark: HTMLAttributes<HTMLElement>;
    menu: MenuHTMLAttributes<HTMLElement>;
    meta: MetaHTMLAttributes<HTMLMetaElement>;
    meter: MeterHTMLAttributes<HTMLElement>;
    nav: HTMLAttributes<HTMLElement>;
    noscript: HTMLAttributes<HTMLElement>;
    object: ObjectHTMLAttributes<HTMLObjectElement>;
    ol: OlHTMLAttributes<HTMLOListElement>;
    optgroup: OptgroupHTMLAttributes<HTMLOptGroupElement>;
    option: OptionHTMLAttributes<HTMLOptionElement>;
    output: OutputHTMLAttributes<HTMLElement>;
    p: HTMLAttributes<HTMLParagraphElement>;
    picture: HTMLAttributes<HTMLElement>;
    pre: HTMLAttributes<HTMLPreElement>;
    progress: ProgressHTMLAttributes<HTMLProgressElement>;
    q: QuoteHTMLAttributes<HTMLQuoteElement>;
    rp: HTMLAttributes<HTMLElement>;
    rt: HTMLAttributes<HTMLElement>;
    ruby: HTMLAttributes<HTMLElement>;
    s: HTMLAttributes<HTMLElement>;
    samp: HTMLAttributes<HTMLElement>;
    script: ScriptHTMLAttributes<HTMLScriptElement>;
    search: HTMLAttributes<HTMLElement>;
    section: HTMLAttributes<HTMLElement>;
    select: SelectHTMLAttributes<HTMLSelectElement>;
    slot: HTMLSlotElementAttributes;
    small: HTMLAttributes<HTMLElement>;
    source: SourceHTMLAttributes<HTMLSourceElement>;
    span: HTMLAttributes<HTMLSpanElement>;
    strong: HTMLAttributes<HTMLElement>;
    style: StyleHTMLAttributes<HTMLStyleElement>;
    sub: HTMLAttributes<HTMLElement>;
    summary: HTMLAttributes<HTMLElement>;
    sup: HTMLAttributes<HTMLElement>;
    table: HTMLAttributes<HTMLTableElement>;
    tbody: HTMLAttributes<HTMLTableSectionElement>;
    td: TdHTMLAttributes<HTMLTableCellElement>;
    template: TemplateHTMLAttributes<HTMLTemplateElement>;
    textarea: TextareaHTMLAttributes<HTMLTextAreaElement>;
    tfoot: HTMLAttributes<HTMLTableSectionElement>;
    th: ThHTMLAttributes<HTMLTableCellElement>;
    thead: HTMLAttributes<HTMLTableSectionElement>;
    time: TimeHTMLAttributes<HTMLElement>;
    title: HTMLAttributes<HTMLTitleElement>;
    tr: HTMLAttributes<HTMLTableRowElement>;
    track: TrackHTMLAttributes<HTMLTrackElement>;
    u: HTMLAttributes<HTMLElement>;
    ul: HTMLAttributes<HTMLUListElement>;
    var: HTMLAttributes<HTMLElement>;
    video: VideoHTMLAttributes<HTMLVideoElement>;
    wbr: HTMLAttributes<HTMLElement>;
  }

  interface ElementClass {
    // empty, libs can define requirements downstream
  }
  interface ElementAttributesProperty {
    // empty, libs can define requirements downstream
  }
  interface ElementChildrenAttribute {
    children: {};
  }

  export interface IntrinsicElements extends HTMLElementTags {}
}
