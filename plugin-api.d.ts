/* plugin-typings are auto-generated. Do not update them directly. See plugin-docs/ for instructions. */
declare type ArgFreeEventType =
  | 'selectionchange'
  | 'currentpagechange'
  | 'close'
  | 'timerstart'
  | 'timerstop'
  | 'timerpause'
  | 'timerresume'
  | 'timeradjust'
  | 'timerdone'
interface PluginAPI {
  readonly isReadOnly: boolean
  readonly mode: 'default' | 'textreview' | 'panel' | 'codegen' | 'linkpreview' | 'auth'
  readonly apiVersion: '1.0.0'
  readonly command: string
  readonly editorType: 'figma' | 'figjam' | 'inspect'
  readonly pluginId?: string
  readonly widgetId?: string
  readonly fileKey: string | undefined
  skipInvisibleInstanceChildren: boolean
  readonly timer?: TimerAPI
  readonly viewport: ViewportAPI
  readonly currentUser: User | null
  readonly activeUsers: ActiveUser[]
  readonly textreview?: TextReviewAPI
  readonly codegen: CodegenAPI
  readonly payments?: PaymentsAPI
  readonly relatedLinks?: RelatedLinksAPI
  closePlugin(message?: string): void
  notify(message: string, options?: NotificationOptions): NotificationHandler
  commitUndo(): void
  triggerUndo(): void
  saveVersionHistoryAsync(title: string, description?: string): Promise<VersionHistoryResult>
  showUI(html: string, options?: ShowUIOptions): void
  readonly ui: UIAPI
  readonly clientStorage: ClientStorageAPI
  readonly parameters: ParametersAPI
  getNodeById(id: string): BaseNode | null
  getStyleById(id: string): BaseStyle | null
  getSelectionColors(): null | { paints: Paint[]; styles: PaintStyle[] }
  readonly root: DocumentNode
  currentPage: PageNode
  on(type: ArgFreeEventType, callback: () => void): void
  on(type: 'run', callback: (event: RunEvent) => void): void
  on(type: 'drop', callback: (event: DropEvent) => boolean): void
  on(type: 'documentchange', callback: (event: DocumentChangeEvent) => void): void
  on(
    type: 'textreview',
    callback: (event: TextReviewEvent) => Promise<TextReviewRange[]> | TextReviewRange[],
  ): void
  /**
   * @deprecated The method should not be used
   */
  on(
    type: 'codegen',
    callback: (event: CodegenEvent) => Promise<CodegenResult[]> | CodegenResult[],
  ): void

  once(type: ArgFreeEventType, callback: () => void): void
  once(type: 'run', callback: (event: RunEvent) => void): void
  once(type: 'drop', callback: (event: DropEvent) => boolean): void
  once(type: 'documentchange', callback: (event: DocumentChangeEvent) => void): void
  once(
    type: 'textreview',
    callback: (event: TextReviewEvent) => Promise<TextReviewRange[]> | TextReviewRange[],
  ): void
  /**
   * @deprecated The method should not be used
   */
  once(
    type: 'codegen',
    callback: (event: CodegenEvent) => Promise<CodegenResult[]> | CodegenResult[],
  ): void

  off(type: ArgFreeEventType, callback: () => void): void
  off(type: 'run', callback: (event: RunEvent) => void): void
  off(type: 'drop', callback: (event: DropEvent) => boolean): void
  off(type: 'documentchange', callback: (event: DocumentChangeEvent) => void): void
  off(
    type: 'textreview',
    callback: (event: TextReviewEvent) => Promise<TextReviewRange[]> | TextReviewRange[],
  ): void
  /**
   * @deprecated The method should not be used
   */
  off(
    type: 'codegen',
    callback: (event: CodegenEvent) => Promise<CodegenResult[]> | CodegenResult[],
  ): void

  readonly mixed: unique symbol
  createRectangle(): RectangleNode
  createLine(): LineNode
  createEllipse(): EllipseNode
  createPolygon(): PolygonNode
  createStar(): StarNode
  createVector(): VectorNode
  createText(): TextNode
  createFrame(): FrameNode
  createComponent(): ComponentNode
  createPage(): PageNode
  createSlice(): SliceNode
  createSticky(): StickyNode
  createConnector(): ConnectorNode
  createShapeWithText(): ShapeWithTextNode
  createCodeBlock(): CodeBlockNode
  createSection(): SectionNode
  createTable(numRows?: number, numColumns?: number): TableNode
  createNodeFromJSXAsync(jsx: any): Promise<SceneNode>
  createBooleanOperation(): BooleanOperationNode
  createPaintStyle(): PaintStyle
  createTextStyle(): TextStyle
  createEffectStyle(): EffectStyle
  createGridStyle(): GridStyle
  getLocalPaintStyles(): PaintStyle[]
  getLocalTextStyles(): TextStyle[]
  getLocalEffectStyles(): EffectStyle[]
  getLocalGridStyles(): GridStyle[]
  moveLocalPaintStyleAfter(targetNode: PaintStyle, reference: PaintStyle | null): void
  moveLocalTextStyleAfter(targetNode: TextStyle, reference: TextStyle | null): void
  moveLocalEffectStyleAfter(targetNode: EffectStyle, reference: EffectStyle | null): void
  moveLocalGridStyleAfter(targetNode: GridStyle, reference: GridStyle | null): void
  moveLocalPaintFolderAfter(targetFolder: string, reference: string | null): void
  moveLocalTextFolderAfter(targetFolder: string, reference: string | null): void
  moveLocalEffectFolderAfter(targetFolder: string, reference: string | null): void
  moveLocalGridFolderAfter(targetFolder: string, reference: string | null): void
  importComponentByKeyAsync(key: string): Promise<ComponentNode>
  importComponentSetByKeyAsync(key: string): Promise<ComponentSetNode>
  importStyleByKeyAsync(key: string): Promise<BaseStyle>
  listAvailableFontsAsync(): Promise<Font[]>
  loadFontAsync(fontName: FontName): Promise<void>
  readonly hasMissingFont: boolean
  createNodeFromSvg(svg: string): FrameNode
  createImage(data: Uint8Array): Image
  createImageAsync(src: string): Promise<Image>
  getImageByHash(hash: string): Image | null
  createVideoAsync(data: Uint8Array): Promise<Video>
  createLinkPreviewAsync(url: string): Promise<EmbedNode | LinkUnfurlNode>
  createGif(hash: string): MediaNode
  combineAsVariants(
    nodes: ReadonlyArray<ComponentNode>,
    parent: BaseNode & ChildrenMixin,
    index?: number,
  ): ComponentSetNode
  group(nodes: ReadonlyArray<BaseNode>, parent: BaseNode & ChildrenMixin, index?: number): GroupNode
  flatten(
    nodes: ReadonlyArray<BaseNode>,
    parent?: BaseNode & ChildrenMixin,
    index?: number,
  ): VectorNode
  union(
    nodes: ReadonlyArray<BaseNode>,
    parent: BaseNode & ChildrenMixin,
    index?: number,
  ): BooleanOperationNode
  subtract(
    nodes: ReadonlyArray<BaseNode>,
    parent: BaseNode & ChildrenMixin,
    index?: number,
  ): BooleanOperationNode
  intersect(
    nodes: ReadonlyArray<BaseNode>,
    parent: BaseNode & ChildrenMixin,
    index?: number,
  ): BooleanOperationNode
  exclude(
    nodes: ReadonlyArray<BaseNode>,
    parent: BaseNode & ChildrenMixin,
    index?: number,
  ): BooleanOperationNode
  ungroup(node: SceneNode & ChildrenMixin): Array<SceneNode>
  base64Encode(data: Uint8Array): string
  base64Decode(data: string): Uint8Array
  getFileThumbnailNode(): FrameNode | ComponentNode | ComponentSetNode | SectionNode | null
  setFileThumbnailNodeAsync(
    node: FrameNode | ComponentNode | ComponentSetNode | SectionNode | null,
  ): Promise<void>
}
declare type RelatedLink = {
  readonly name: string
  readonly url: string
}
declare type RelatedLinkWithNodeId = RelatedLink & { nodeId: string }
interface VersionHistoryResult {
  id: string
}
declare type PaymentStatus = {
  type: 'UNPAID' | 'PAID' | 'NOT_SUPPORTED'
}
interface PaymentsAPI {
  readonly status: PaymentStatus
  setPaymentStatusInDevelopment(status: PaymentStatus): void
  getUserFirstRanSecondsAgo(): number
  initiateCheckoutAsync(options?: {
    interstitial?: 'PAID_FEATURE' | 'TRIAL_ENDED' | 'SKIP'
  }): Promise<void>
  requestCheckout(): void
  getPluginPaymentTokenAsync(): Promise<string>
}

interface RelatedLinksAPI {
  on(
    type: 'linkpreview',
    callback: (event: LinkPreviewEvent) => Promise<LinkPreviewResult> | LinkPreviewResult,
  ): void
  on(type: 'auth', callback: (event: AuthEvent) => Promise<AuthResult> | AuthResult): void
  once(
    type: 'linkpreview',
    callback: (event: LinkPreviewEvent) => Promise<LinkPreviewResult> | LinkPreviewResult,
  ): void
  once(type: 'auth', callback: (event: AuthEvent) => Promise<AuthResult> | AuthResult): void
  off(
    type: 'linkpreview',
    callback: (event: LinkPreviewEvent) => Promise<LinkPreviewResult> | LinkPreviewResult,
  ): void
  off(type: 'auth', callback: (event: AuthEvent) => Promise<AuthResult> | AuthResult): void
}

interface ClientStorageAPI {
  getAsync(key: string): Promise<any | undefined>
  setAsync(key: string, value: any): Promise<void>
  deleteAsync(key: string): Promise<void>
  keysAsync(): Promise<string[]>
}
interface NotificationOptions {
  timeout?: number
  error?: boolean
  onDequeue?: (reason: NotifyDequeueReason) => void
  button?: {
    text: string
    action: () => boolean | void
  }
}
declare type NotifyDequeueReason = 'timeout' | 'dismiss' | 'action_button_click'
interface NotificationHandler {
  cancel: () => void
}
interface ShowUIOptions {
  visible?: boolean
  title?: string
  width?: number
  height?: number
  position?: {
    x: number
    y: number
  }
  themeColors?: boolean
}
interface UIPostMessageOptions {
  origin?: string
}
interface OnMessageProperties {
  origin: string
}
declare type MessageEventHandler = (pluginMessage: any, props: OnMessageProperties) => void
interface UIAPI {
  show(): void
  hide(): void
  resize(width: number, height: number): void
  reposition(x: number, y: number): void
  close(): void
  postMessage(pluginMessage: any, options?: UIPostMessageOptions): void
  onmessage: MessageEventHandler | undefined
  on(type: 'message', callback: MessageEventHandler): void
  once(type: 'message', callback: MessageEventHandler): void
  off(type: 'message', callback: MessageEventHandler): void
}
interface TimerAPI {
  readonly remaining: number
  readonly total: number
  readonly state: 'STOPPED' | 'PAUSED' | 'RUNNING'
  pause: () => void
  resume: () => void
  start: (seconds: number) => void
  stop: () => void
}
interface ViewportAPI {
  center: Vector
  zoom: number
  scrollAndZoomIntoView(nodes: ReadonlyArray<BaseNode>): void
  readonly bounds: Rect
}
interface TextReviewAPI {
  requestToBeEnabledAsync(): Promise<void>
  requestToBeDisabledAsync(): Promise<void>
  readonly isEnabled: boolean
}

interface CodegenAPI {
  on(
    type: 'generate',
    callback: (event: CodegenEvent) => Promise<CodegenResult[]> | CodegenResult[],
  ): void
  on(
    type: 'preferenceschange',
    callback: (event: CodegenPreferencesEvent) => Promise<void>,
  ): Promise<void> | void
  once(
    type: 'generate',
    callback: (event: CodegenEvent) => Promise<CodegenResult[]> | CodegenResult[],
  ): void
  once(
    type: 'preferenceschange',
    callback: (event: CodegenPreferencesEvent) => Promise<void>,
  ): Promise<void> | void
  off(
    type: 'generate',
    callback: (event: CodegenEvent) => Promise<CodegenResult[]> | CodegenResult,
  ): void
  off(
    type: 'preferenceschange',
    callback: (event: CodegenPreferencesEvent) => Promise<void>,
  ): Promise<void> | void
  readonly preferences: CodegenPreferences
  refresh: () => void
}

declare type CodegenPreferences = {
  readonly unit: 'pixel' | 'scaled'
  readonly scaleFactor?: number
  readonly customSettings: Record<string, string>
}

declare type CodegenPreferencesEvent = {
  propertyName: string
}

interface ParameterValues {
  [key: string]: any
}
interface SuggestionResults {
  setSuggestions(
    suggestions: Array<
      | string
      | {
          name: string
          data?: any
          icon?: string | Uint8Array
          iconUrl?: string
        }
    >,
  ): void
  setError(message: string): void
  setLoadingMessage(message: string): void
}
declare type ParameterInputEvent<ParametersType = ParameterValues> = {
  query: string
  key: string
  parameters: Partial<ParametersType>
  result: SuggestionResults
}
interface ParametersAPI {
  on(type: 'input', callback: (event: ParameterInputEvent) => void): void
  once(type: 'input', callback: (event: ParameterInputEvent) => void): void
  off(type: 'input', callback: (event: ParameterInputEvent) => void): void
}
type RunEvent = RunParametersEvent | OpenRelatedLinkEvent

interface RunParametersEvent<ParametersType = ParameterValues | undefined> {
  command: string
  parameters: ParametersType
}
interface OpenRelatedLinkEvent {
  command: 'open-related-link'
  link: {
    url: string
    name: string
  }
}
interface DropEvent {
  node: BaseNode | SceneNode
  x: number
  y: number
  absoluteX: number
  absoluteY: number
  items: DropItem[]
  files: DropFile[]
  dropMetadata?: any
}
interface DropItem {
  type: string
  data: string
}
interface DropFile {
  name: string
  type: string
  getBytesAsync(): Promise<Uint8Array>
  getTextAsync(): Promise<string>
}
interface DocumentChangeEvent {
  documentChanges: DocumentChange[]
}
interface BaseDocumentChange {
  id: string
  origin: 'LOCAL' | 'REMOTE'
}
interface BaseNodeChange extends BaseDocumentChange {
  node: SceneNode | RemovedNode
}
interface RemovedNode {
  readonly removed: true
  readonly type: NodeType
  readonly id: string
}
interface CreateChange extends BaseNodeChange {
  type: 'CREATE'
}
interface DeleteChange extends BaseNodeChange {
  type: 'DELETE'
}
interface PropertyChange extends BaseNodeChange {
  type: 'PROPERTY_CHANGE'
  properties: NodeChangeProperty[]
}
interface BaseStyleChange extends BaseDocumentChange {
  style: PaintStyle | TextStyle | GridStyle | EffectStyle | null
}
interface StyleCreateChange extends BaseStyleChange {
  type: 'STYLE_CREATE'
}
interface StyleDeleteChange extends BaseStyleChange {
  type: 'STYLE_DELETE'
  style: null
}
interface StylePropertyChange extends BaseStyleChange {
  type: 'STYLE_PROPERTY_CHANGE'
  properties: StyleChangeProperty[]
}
declare type DocumentChange =
  | CreateChange
  | DeleteChange
  | PropertyChange
  | StyleCreateChange
  | StyleDeleteChange
  | StylePropertyChange
declare type NodeChangeProperty =
  | 'pointCount'
  | 'name'
  | 'width'
  | 'height'
  | 'parent'
  | 'pluginData'
  | 'constraints'
  | 'locked'
  | 'visible'
  | 'opacity'
  | 'blendMode'
  | 'layoutGrids'
  | 'guides'
  | 'characters'
  | 'styledTextSegments'
  | 'vectorNetwork'
  | 'effects'
  | 'exportSettings'
  | 'arcData'
  | 'autoRename'
  | 'fontName'
  | 'innerRadius'
  | 'fontSize'
  | 'lineHeight'
  | 'leadingTrim'
  | 'paragraphIndent'
  | 'paragraphSpacing'
  | 'listSpacing'
  | 'hangingPunctuation'
  | 'hangingList'
  | 'letterSpacing'
  | 'textAlignHorizontal'
  | 'textAlignVertical'
  | 'textCase'
  | 'textDecoration'
  | 'textAutoResize'
  | 'fills'
  | 'topLeftRadius'
  | 'topRightRadius'
  | 'bottomLeftRadius'
  | 'bottomRightRadius'
  | 'constrainProportions'
  | 'strokes'
  | 'strokeWeight'
  | 'strokeAlign'
  | 'strokeCap'
  | 'strokeJoin'
  | 'strokeMiterLimit'
  | 'booleanOperation'
  | 'overflowDirection'
  | 'dashPattern'
  | 'backgrounds'
  | 'handleMirroring'
  | 'cornerRadius'
  | 'cornerSmoothing'
  | 'relativeTransform'
  | 'x'
  | 'y'
  | 'rotation'
  | 'isMask'
  | 'clipsContent'
  | 'type'
  | 'overlayPositionType'
  | 'overlayBackgroundInteraction'
  | 'overlayBackground'
  | 'prototypeStartNode'
  | 'prototypeBackgrounds'
  | 'expanded'
  | 'fillStyleId'
  | 'strokeStyleId'
  | 'backgroundStyleId'
  | 'textStyleId'
  | 'effectStyleId'
  | 'gridStyleId'
  | 'description'
  | 'layoutMode'
  | 'paddingLeft'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'itemSpacing'
  | 'layoutAlign'
  | 'counterAxisSizingMode'
  | 'primaryAxisSizingMode'
  | 'primaryAxisAlignItems'
  | 'counterAxisAlignItems'
  | 'layoutGrow'
  | 'layoutPositioning'
  | 'itemReverseZIndex'
  | 'hyperlink'
  | 'mediaData'
  | 'stokeTopWeight'
  | 'strokeBottomWeight'
  | 'strokeLeftWeight'
  | 'strokeRightWeight'
  | 'reactions'
  | 'flowStartingPoints'
  | 'shapeType'
  | 'connectorStart'
  | 'connectorEnd'
  | 'connectorLineType'
  | 'connectorStartStrokeCap'
  | 'connectorEndStrokeCap'
  | 'codeLanguage'
  | 'widgetSyncedState'
  | 'componentPropertyDefinitions'
  | 'componentPropertyReferences'
  | 'componentProperties'
  | 'embedData'
  | 'linkUnfurlData'
  | 'text'
  | 'authorVisible'
  | 'authorName'
  | 'code'
  | 'textBackground'
declare type StyleChangeProperty =
  | 'name'
  | 'pluginData'
  | 'type'
  | 'description'
  | 'remote'
  | 'documentationLinks'
  | 'fontSize'
  | 'textDecoration'
  | 'letterSpacing'
  | 'lineHeight'
  | 'leadingTrim'
  | 'paragraphIndent'
  | 'paragraphSpacing'
  | 'listSpacing'
  | 'hangingPunctuation'
  | 'hangingList'
  | 'textCase'
  | 'paint'
  | 'effects'
  | 'layoutGrids'
declare type TextReviewEvent = {
  text: string
}
declare type TextReviewRange = {
  start: number
  end: number
  suggestions: string[]
  color?: 'RED' | 'GREEN' | 'BLUE'
}

declare type CodegenEvent = {
  node: SceneNode
  language: string
}

declare type CodegenResult = {
  title: string
  code: string
  language:
    | 'TYPESCRIPT'
    | 'CPP'
    | 'RUBY'
    | 'CSS'
    | 'JAVASCRIPT'
    | 'HTML'
    | 'JSON'
    | 'GRAPHQL'
    | 'PYTHON'
    | 'GO'
    | 'SQL'
    | 'SWIFT'
    | 'KOTLIN'
    | 'RUST'
    | 'BASH'
    | 'PLAINTEXT'
}

declare type LinkPreviewEvent = {
  link: RelatedLink
}

declare type LinkPreviewResult =
  | {
      type: 'AUTH_REQUIRED'
    }
  | {
      type: 'PLAIN_TEXT'
      text: string
    }
  | null

declare type AuthEvent = {
  links: RelatedLink[]
}

declare type AuthResult = {
  type: 'AUTH_SUCCESS'
} | null

declare type Transform = [[number, number, number], [number, number, number]]
interface Vector {
  readonly x: number
  readonly y: number
}
interface Rect {
  readonly x: number
  readonly y: number
  readonly width: number
  readonly height: number
}
interface RGB {
  readonly r: number
  readonly g: number
  readonly b: number
}
interface RGBA {
  readonly r: number
  readonly g: number
  readonly b: number
  readonly a: number
}
interface FontName {
  readonly family: string
  readonly style: string
}
declare type TextCase =
  | 'ORIGINAL'
  | 'UPPER'
  | 'LOWER'
  | 'TITLE'
  | 'SMALL_CAPS'
  | 'SMALL_CAPS_FORCED'
declare type TextDecoration = 'NONE' | 'UNDERLINE' | 'STRIKETHROUGH'
interface ArcData {
  readonly startingAngle: number
  readonly endingAngle: number
  readonly innerRadius: number
}
interface DropShadowEffect {
  readonly type: 'DROP_SHADOW'
  readonly color: RGBA
  readonly offset: Vector
  readonly radius: number
  readonly spread?: number
  readonly visible: boolean
  readonly blendMode: BlendMode
  readonly showShadowBehindNode?: boolean
}
interface InnerShadowEffect {
  readonly type: 'INNER_SHADOW'
  readonly color: RGBA
  readonly offset: Vector
  readonly radius: number
  readonly spread?: number
  readonly visible: boolean
  readonly blendMode: BlendMode
}
interface BlurEffect {
  readonly type: 'LAYER_BLUR' | 'BACKGROUND_BLUR'
  readonly radius: number
  readonly visible: boolean
}
declare type Effect = DropShadowEffect | InnerShadowEffect | BlurEffect
declare type ConstraintType = 'MIN' | 'CENTER' | 'MAX' | 'STRETCH' | 'SCALE'
interface Constraints {
  readonly horizontal: ConstraintType
  readonly vertical: ConstraintType
}
interface ColorStop {
  readonly position: number
  readonly color: RGBA
}
interface ImageFilters {
  readonly exposure?: number
  readonly contrast?: number
  readonly saturation?: number
  readonly temperature?: number
  readonly tint?: number
  readonly highlights?: number
  readonly shadows?: number
}
interface SolidPaint {
  readonly type: 'SOLID'
  readonly color: RGB
  readonly visible?: boolean
  readonly opacity?: number
  readonly blendMode?: BlendMode
}
interface GradientPaint {
  readonly type: 'GRADIENT_LINEAR' | 'GRADIENT_RADIAL' | 'GRADIENT_ANGULAR' | 'GRADIENT_DIAMOND'
  readonly gradientTransform: Transform
  readonly gradientStops: ReadonlyArray<ColorStop>
  readonly visible?: boolean
  readonly opacity?: number
  readonly blendMode?: BlendMode
}
interface ImagePaint {
  readonly type: 'IMAGE'
  readonly scaleMode: 'FILL' | 'FIT' | 'CROP' | 'TILE'
  readonly imageHash: string | null
  readonly imageTransform?: Transform
  readonly scalingFactor?: number
  readonly rotation?: number
  readonly filters?: ImageFilters
  readonly visible?: boolean
  readonly opacity?: number
  readonly blendMode?: BlendMode
}
interface VideoPaint {
  readonly type: 'VIDEO'
  readonly scaleMode: 'FILL' | 'FIT' | 'CROP' | 'TILE'
  readonly videoHash: string | null
  readonly videoTransform?: Transform
  readonly scalingFactor?: number
  readonly rotation?: number
  readonly filters?: ImageFilters
  readonly visible?: boolean
  readonly opacity?: number
  readonly blendMode?: BlendMode
}
declare type Paint = SolidPaint | GradientPaint | ImagePaint | VideoPaint
interface Guide {
  readonly axis: 'X' | 'Y'
  readonly offset: number
}
interface RowsColsLayoutGrid {
  readonly pattern: 'ROWS' | 'COLUMNS'
  readonly alignment: 'MIN' | 'MAX' | 'STRETCH' | 'CENTER'
  readonly gutterSize: number
  readonly count: number
  readonly sectionSize?: number
  readonly offset?: number
  readonly visible?: boolean
  readonly color?: RGBA
}
interface GridLayoutGrid {
  readonly pattern: 'GRID'
  readonly sectionSize: number
  readonly visible?: boolean
  readonly color?: RGBA
}
declare type LayoutGrid = RowsColsLayoutGrid | GridLayoutGrid
interface ExportSettingsConstraints {
  readonly type: 'SCALE' | 'WIDTH' | 'HEIGHT'
  readonly value: number
}
interface ExportSettingsImage {
  readonly format: 'JPG' | 'PNG'
  readonly contentsOnly?: boolean
  readonly useAbsoluteBounds?: boolean
  readonly suffix?: string
  readonly constraint?: ExportSettingsConstraints
}
interface ExportSettingsSVGBase {
  readonly contentsOnly?: boolean
  readonly useAbsoluteBounds?: boolean
  readonly suffix?: string
  readonly svgOutlineText?: boolean
  readonly svgIdAttribute?: boolean
  readonly svgSimplifyStroke?: boolean
}
interface ExportSettingsSVG extends ExportSettingsSVGBase {
  readonly format: 'SVG'
}
interface ExportSettingsSVGString extends ExportSettingsSVGBase {
  readonly format: 'SVG_STRING'
}
interface ExportSettingsPDF {
  readonly format: 'PDF'
  readonly contentsOnly?: boolean
  readonly useAbsoluteBounds?: boolean
  readonly suffix?: string
}
interface ExportSettingsREST {
  readonly format: 'JSON_REST_V1'
}
declare type ExportSettings = ExportSettingsImage | ExportSettingsSVG | ExportSettingsPDF
declare type WindingRule = 'NONZERO' | 'EVENODD'
interface VectorVertex {
  readonly x: number
  readonly y: number
  readonly strokeCap?: StrokeCap
  readonly strokeJoin?: StrokeJoin
  readonly cornerRadius?: number
  readonly handleMirroring?: HandleMirroring
}
interface VectorSegment {
  readonly start: number
  readonly end: number
  readonly tangentStart?: Vector
  readonly tangentEnd?: Vector
}
interface VectorRegion {
  readonly windingRule: WindingRule
  readonly loops: ReadonlyArray<ReadonlyArray<number>>
  readonly fills?: ReadonlyArray<Paint>
  readonly fillStyleId?: string
}
interface VectorNetwork {
  readonly vertices: ReadonlyArray<VectorVertex>
  readonly segments: ReadonlyArray<VectorSegment>
  readonly regions?: ReadonlyArray<VectorRegion>
}
interface VectorPath {
  readonly windingRule: WindingRule | 'NONE'
  readonly data: string
}
declare type VectorPaths = ReadonlyArray<VectorPath>
interface LetterSpacing {
  readonly value: number
  readonly unit: 'PIXELS' | 'PERCENT'
}
declare type LineHeight =
  | {
      readonly value: number
      readonly unit: 'PIXELS' | 'PERCENT'
    }
  | {
      readonly unit: 'AUTO'
    }
declare type LeadingTrim = 'CAP_HEIGHT' | 'NONE'
declare type HyperlinkTarget = {
  type: 'URL' | 'NODE'
  value: string
}
declare type TextListOptions = {
  type: 'ORDERED' | 'UNORDERED' | 'NONE'
}
declare type BlendMode =
  | 'PASS_THROUGH'
  | 'NORMAL'
  | 'DARKEN'
  | 'MULTIPLY'
  | 'LINEAR_BURN'
  | 'COLOR_BURN'
  | 'LIGHTEN'
  | 'SCREEN'
  | 'LINEAR_DODGE'
  | 'COLOR_DODGE'
  | 'OVERLAY'
  | 'SOFT_LIGHT'
  | 'HARD_LIGHT'
  | 'DIFFERENCE'
  | 'EXCLUSION'
  | 'HUE'
  | 'SATURATION'
  | 'COLOR'
  | 'LUMINOSITY'
interface Font {
  fontName: FontName
}
interface StyledTextSegment {
  characters: string
  start: number
  end: number
  fontSize: number
  fontName: FontName
  fontWeight: number
  textDecoration: TextDecoration
  textCase: TextCase
  lineHeight: LineHeight
  letterSpacing: LetterSpacing
  fills: Paint[]
  textStyleId: string
  fillStyleId: string
  listOptions: TextListOptions
  indentation: number
  hyperlink: HyperlinkTarget | null
}
declare type Reaction = {
  action: Action | null
  trigger: Trigger | null
}
declare type Action =
  | {
      readonly type: 'BACK' | 'CLOSE'
    }
  | {
      readonly type: 'URL'
      url: string
    }
  | {
      readonly type: 'UPDATE_MEDIA_RUNTIME'
      readonly destinationId: string | null
      readonly mediaAction:
        | 'PLAY'
        | 'PAUSE'
        | 'TOGGLE_PLAY_PAUSE'
        | 'MUTE'
        | 'UNMUTE'
        | 'TOGGLE_MUTE_UNMUTE'
    }
  | {
      readonly type: 'UPDATE_MEDIA_RUNTIME'
      readonly destinationId?: string | null
      readonly mediaAction: 'SKIP_FORWARD' | 'SKIP_BACKWARD'
      readonly amountToSkip: number
    }
  | {
      readonly type: 'UPDATE_MEDIA_RUNTIME'
      readonly destinationId?: string | null
      readonly mediaAction: 'SKIP_TO'
      readonly newTimestamp: number
    }
  | {
      readonly type: 'NODE'
      readonly destinationId: string | null
      readonly navigation: Navigation
      readonly transition: Transition | null
      readonly preserveScrollPosition: boolean
      readonly overlayRelativePosition?: Vector
      readonly resetVideoPosition?: boolean
    }
interface SimpleTransition {
  readonly type: 'DISSOLVE' | 'SMART_ANIMATE' | 'SCROLL_ANIMATE'
  readonly easing: Easing
  readonly duration: number
}
interface DirectionalTransition {
  readonly type: 'MOVE_IN' | 'MOVE_OUT' | 'PUSH' | 'SLIDE_IN' | 'SLIDE_OUT'
  readonly direction: 'LEFT' | 'RIGHT' | 'TOP' | 'BOTTOM'
  readonly matchLayers: boolean
  readonly easing: Easing
  readonly duration: number
}
declare type Transition = SimpleTransition | DirectionalTransition
declare type Trigger =
  | {
      readonly type: 'ON_CLICK' | 'ON_HOVER' | 'ON_PRESS' | 'ON_DRAG'
    }
  | {
      readonly type: 'AFTER_TIMEOUT'
      readonly timeout: number
    }
  | {
      readonly type: 'MOUSE_ENTER' | 'MOUSE_LEAVE' | 'MOUSE_UP' | 'MOUSE_DOWN'
      readonly delay: number
    }
  | {
      readonly type: 'ON_KEY_DOWN'
      readonly device: 'KEYBOARD' | 'XBOX_ONE' | 'PS4' | 'SWITCH_PRO' | 'UNKNOWN_CONTROLLER'
      readonly keyCodes: ReadonlyArray<number>
    }
  | {
      readonly type: 'ON_MEDIA_HIT'
      readonly mediaHitTime: number
    }
  | {
      readonly type: 'ON_MEDIA_END'
    }
declare type Navigation = 'NAVIGATE' | 'SWAP' | 'OVERLAY' | 'SCROLL_TO' | 'CHANGE_TO'
interface Easing {
  readonly type:
    | 'EASE_IN'
    | 'EASE_OUT'
    | 'EASE_IN_AND_OUT'
    | 'LINEAR'
    | 'EASE_IN_BACK'
    | 'EASE_OUT_BACK'
    | 'EASE_IN_AND_OUT_BACK'
    | 'CUSTOM_CUBIC_BEZIER'
    | 'GENTLE'
    | 'QUICK'
    | 'BOUNCY'
    | 'SLOW'
    | 'CUSTOM_SPRING'
  readonly easingFunctionCubicBezier?: EasingFunctionBezier
  readonly easingFunctionSpring?: EasingFunctionSpring
}
interface EasingFunctionBezier {
  x1: number
  y1: number
  x2: number
  y2: number
}
interface EasingFunctionSpring {
  mass: number
  stiffness: number
  damping: number
  initialVelocity: number
}
declare type OverflowDirection = 'NONE' | 'HORIZONTAL' | 'VERTICAL' | 'BOTH'
declare type OverlayPositionType =
  | 'CENTER'
  | 'TOP_LEFT'
  | 'TOP_CENTER'
  | 'TOP_RIGHT'
  | 'BOTTOM_LEFT'
  | 'BOTTOM_CENTER'
  | 'BOTTOM_RIGHT'
  | 'MANUAL'
declare type OverlayBackground =
  | {
      readonly type: 'NONE'
    }
  | {
      readonly type: 'SOLID_COLOR'
      readonly color: RGBA
    }
declare type OverlayBackgroundInteraction = 'NONE' | 'CLOSE_ON_CLICK_OUTSIDE'
declare type PublishStatus = 'UNPUBLISHED' | 'CURRENT' | 'CHANGED'
interface ConnectorEndpointPosition {
  position: {
    x: number
    y: number
  }
}
interface ConnectorEndpointPositionAndEndpointNodeId {
  position: {
    x: number
    y: number
  }
  endpointNodeId: string
}
interface ConnectorEndpointEndpointNodeIdAndMagnet {
  endpointNodeId: string
  magnet: 'NONE' | 'AUTO' | 'TOP' | 'LEFT' | 'BOTTOM' | 'RIGHT'
}
declare type ConnectorEndpoint =
  | ConnectorEndpointPosition
  | ConnectorEndpointEndpointNodeIdAndMagnet
  | ConnectorEndpointPositionAndEndpointNodeId
declare type ConnectorStrokeCap =
  | 'NONE'
  | 'ARROW_EQUILATERAL'
  | 'ARROW_LINES'
  | 'TRIANGLE_FILLED'
  | 'DIAMOND_FILLED'
  | 'CIRCLE_FILLED'
interface BaseNodeMixin extends PluginDataMixin {
  readonly id: string
  readonly parent: (BaseNode & ChildrenMixin) | null
  name: string
  readonly removed: boolean
  readonly isAsset: boolean
  toString(): string
  remove(): void
  setRelaunchData(data: { [command: string]: string }): void
  getRelaunchData(): {
    [command: string]: string
  }
  getCSSAsync(): Promise<{ [key: string]: string }>
  getRelatedLinksAsync(options?: { includeChildren?: boolean }): Promise<RelatedLinkWithNodeId[]>
  addRelatedLinkAsync(url: string, name?: string): Promise<void>
  editRelatedLinkAsync(currentUrl: string, newValue: { name?: string; url?: string }): Promise<void>
  deleteRelatedLinkAsync(url: string): Promise<void>
}
interface PluginDataMixin {
  getPluginData(key: string): string
  setPluginData(key: string, value: string): void
  getPluginDataKeys(): string[]
  getSharedPluginData(namespace: string, key: string): string
  setSharedPluginData(namespace: string, key: string, value: string): void
  getSharedPluginDataKeys(namespace: string): string[]
}
interface SceneNodeMixin {
  visible: boolean
  locked: boolean
  readonly stuckNodes: SceneNode[]
  readonly attachedConnectors: ConnectorNode[]
  componentPropertyReferences:
    | {
        [nodeProperty in 'visible' | 'characters' | 'mainComponent']?: string
      }
    | null
}
interface StickableMixin {
  stuckTo: SceneNode | null
}
interface ChildrenMixin {
  readonly children: ReadonlyArray<SceneNode>
  appendChild(child: SceneNode): void
  insertChild(index: number, child: SceneNode): void
  findChildren(callback?: (node: SceneNode) => boolean): SceneNode[]
  findChild(callback: (node: SceneNode) => boolean): SceneNode | null
  findAll(callback?: (node: SceneNode) => boolean): SceneNode[]
  findOne(callback: (node: SceneNode) => boolean): SceneNode | null
  findAllWithCriteria<T extends NodeType[]>(criteria: {
    types: T
  }): Array<
    {
      type: T[number]
    } & SceneNode
  >
  findWidgetNodesByWidgetId(widgetId: string): Array<WidgetNode>
}
interface ConstraintMixin {
  constraints: Constraints
}
interface DimensionAndPositionMixin {
  x: number
  y: number
  readonly width: number
  readonly height: number
  relativeTransform: Transform
  readonly absoluteTransform: Transform
  readonly absoluteBoundingBox: Rect | null
}
interface LayoutMixin extends DimensionAndPositionMixin {
  readonly absoluteRenderBounds: Rect | null
  constrainProportions: boolean
  rotation: number
  layoutAlign: 'MIN' | 'CENTER' | 'MAX' | 'STRETCH' | 'INHERIT'
  layoutGrow: number
  layoutPositioning: 'AUTO' | 'ABSOLUTE'
  resize(width: number, height: number): void
  resizeWithoutConstraints(width: number, height: number): void
  rescale(scale: number): void
}
interface BlendMixin extends MinimalBlendMixin {
  isMask: boolean
  effects: ReadonlyArray<Effect>
  effectStyleId: string
}
interface ContainerMixin {
  expanded: boolean
}
interface DeprecatedBackgroundMixin {
  backgrounds: ReadonlyArray<Paint>
  backgroundStyleId: string
}
declare type StrokeCap = 'NONE' | 'ROUND' | 'SQUARE' | 'ARROW_LINES' | 'ARROW_EQUILATERAL'
declare type StrokeJoin = 'MITER' | 'BEVEL' | 'ROUND'
declare type HandleMirroring = 'NONE' | 'ANGLE' | 'ANGLE_AND_LENGTH'
interface MinimalStrokesMixin {
  strokes: ReadonlyArray<Paint>
  strokeStyleId: string
  strokeWeight: number | PluginAPI['mixed']
  strokeJoin: StrokeJoin | PluginAPI['mixed']
  strokeAlign: 'CENTER' | 'INSIDE' | 'OUTSIDE'
  dashPattern: ReadonlyArray<number>
  strokeGeometry: VectorPaths
}
interface IndividualStrokesMixin {
  strokeTopWeight: number
  strokeBottomWeight: number
  strokeLeftWeight: number
  strokeRightWeight: number
}
interface MinimalFillsMixin {
  fills: ReadonlyArray<Paint> | PluginAPI['mixed']
  fillStyleId: string | PluginAPI['mixed']
}
interface GeometryMixin extends MinimalStrokesMixin, MinimalFillsMixin {
  strokeCap: StrokeCap | PluginAPI['mixed']
  strokeMiterLimit: number
  outlineStroke(): VectorNode | null
  fillGeometry: VectorPaths
}
interface CornerMixin {
  cornerRadius: number | PluginAPI['mixed']
  cornerSmoothing: number
}
interface RectangleCornerMixin {
  topLeftRadius: number
  topRightRadius: number
  bottomLeftRadius: number
  bottomRightRadius: number
}
interface ExportMixin {
  exportSettings: ReadonlyArray<ExportSettings>
  exportAsync(settings?: ExportSettings): Promise<Uint8Array>
  exportAsync(settings: ExportSettingsSVGString): Promise<string>
  exportAsync(settings: ExportSettingsREST): Promise<Object>
}
interface FramePrototypingMixin {
  overflowDirection: OverflowDirection
  numberOfFixedChildren: number
  readonly overlayPositionType: OverlayPositionType
  readonly overlayBackground: OverlayBackground
  readonly overlayBackgroundInteraction: OverlayBackgroundInteraction
}
interface VectorLikeMixin {
  vectorNetwork: VectorNetwork
  vectorPaths: VectorPaths
  handleMirroring: HandleMirroring | PluginAPI['mixed']
}
interface ReactionMixin {
  reactions: ReadonlyArray<Reaction>
}
interface DocumentationLink {
  readonly uri: string
}
interface PublishableMixin {
  description: string
  documentationLinks: ReadonlyArray<DocumentationLink>
  readonly remote: boolean
  readonly key: string
  getPublishStatusAsync(): Promise<PublishStatus>
}
interface DefaultShapeMixin
  extends BaseNodeMixin,
    SceneNodeMixin,
    ReactionMixin,
    BlendMixin,
    GeometryMixin,
    LayoutMixin,
    ExportMixin {}

interface inferredAutoLayoutResult {
  layoutMode: 'NONE' | 'HORIZONTAL' | 'VERTICAL'
  paddingLeft: number
  paddingRight: number
  paddingTop: number
  paddingBottom: number
  counterAxisSizingMode: 'FIXED' | 'AUTO'
  primaryAxisAlignItems: 'MIN' | 'MAX' | 'CENTER' | 'SPACE_BETWEEN'
  counterAxisAlignItems: 'MIN' | 'MAX' | 'CENTER' | 'BASELINE'
  layoutAlign: 'MIN' | 'CENTER' | 'MAX' | 'STRETCH' | 'INHERIT'
  layoutGrow: number
  itemSpacing: number
  layoutPositioning: 'AUTO' | 'ABSOLUTE'
}

interface BaseFrameMixin
  extends BaseNodeMixin,
    SceneNodeMixin,
    ChildrenMixin,
    ContainerMixin,
    DeprecatedBackgroundMixin,
    GeometryMixin,
    CornerMixin,
    RectangleCornerMixin,
    BlendMixin,
    ConstraintMixin,
    LayoutMixin,
    ExportMixin,
    IndividualStrokesMixin {
  layoutMode: 'NONE' | 'HORIZONTAL' | 'VERTICAL'
  primaryAxisSizingMode: 'FIXED' | 'AUTO'
  counterAxisSizingMode: 'FIXED' | 'AUTO'
  primaryAxisAlignItems: 'MIN' | 'MAX' | 'CENTER' | 'SPACE_BETWEEN'
  counterAxisAlignItems: 'MIN' | 'MAX' | 'CENTER' | 'BASELINE'
  paddingLeft: number
  paddingRight: number
  paddingTop: number
  paddingBottom: number
  itemSpacing: number
  itemReverseZIndex: boolean
  strokesIncludedInLayout: boolean
  horizontalPadding: number
  verticalPadding: number
  layoutGrids: ReadonlyArray<LayoutGrid>
  gridStyleId: string
  clipsContent: boolean
  guides: ReadonlyArray<Guide>
  inferredAutoLayout: inferredAutoLayoutResult | null
}

interface DefaultFrameMixin extends BaseFrameMixin, FramePrototypingMixin, ReactionMixin {}
interface OpaqueNodeMixin
  extends BaseNodeMixin,
    SceneNodeMixin,
    ExportMixin,
    DimensionAndPositionMixin {}
interface MinimalBlendMixin {
  opacity: number
  blendMode: BlendMode
}
interface VariantMixin {
  readonly variantProperties: {
    [property: string]: string
  } | null
}
interface ComponentPropertiesMixin {
  readonly componentPropertyDefinitions: ComponentPropertyDefinitions
  addComponentProperty(
    propertyName: string,
    type: ComponentPropertyType,
    defaultValue: string | boolean,
    options?: ComponentPropertyOptions,
  ): string
  editComponentProperty(
    propertyName: string,
    newValue: {
      name?: string
      defaultValue?: string | boolean
      preferredValues?: InstanceSwapPreferredValue[]
    },
  ): string
  deleteComponentProperty(propertyName: string): void
}
interface TextSublayerNode extends MinimalFillsMixin {
  readonly hasMissingFont: boolean
  paragraphIndent: number
  paragraphSpacing: number
  listSpacing: number
  hangingPunctuation: boolean
  hangingList: boolean
  fontSize: number | PluginAPI['mixed']
  fontName: FontName | PluginAPI['mixed']
  readonly fontWeight: number | PluginAPI['mixed']
  textCase: TextCase | PluginAPI['mixed']
  textDecoration: TextDecoration | PluginAPI['mixed']
  letterSpacing: LetterSpacing | PluginAPI['mixed']
  lineHeight: LineHeight | PluginAPI['mixed']
  leadingTrim: LeadingTrim | PluginAPI['mixed']
  hyperlink: HyperlinkTarget | null | PluginAPI['mixed']
  characters: string
  insertCharacters(start: number, characters: string, useStyle?: 'BEFORE' | 'AFTER'): void
  deleteCharacters(start: number, end: number): void
  getRangeFontSize(start: number, end: number): number | PluginAPI['mixed']
  setRangeFontSize(start: number, end: number, value: number): void
  getRangeFontName(start: number, end: number): FontName | PluginAPI['mixed']
  setRangeFontName(start: number, end: number, value: FontName): void
  getRangeFontWeight(start: number, end: number): number | PluginAPI['mixed']
  getRangeAllFontNames(start: number, end: number): FontName[]
  getRangeTextCase(start: number, end: number): TextCase | PluginAPI['mixed']
  setRangeTextCase(start: number, end: number, value: TextCase): void
  getRangeTextDecoration(start: number, end: number): TextDecoration | PluginAPI['mixed']
  setRangeTextDecoration(start: number, end: number, value: TextDecoration): void
  getRangeLetterSpacing(start: number, end: number): LetterSpacing | PluginAPI['mixed']
  setRangeLetterSpacing(start: number, end: number, value: LetterSpacing): void
  getRangeLineHeight(start: number, end: number): LineHeight | PluginAPI['mixed']
  setRangeLineHeight(start: number, end: number, value: LineHeight): void
  getRangeHyperlink(start: number, end: number): HyperlinkTarget | null | PluginAPI['mixed']
  setRangeHyperlink(start: number, end: number, value: HyperlinkTarget | null): void
  getRangeFills(start: number, end: number): Paint[] | PluginAPI['mixed']
  setRangeFills(start: number, end: number, value: Paint[]): void
  getRangeTextStyleId(start: number, end: number): string | PluginAPI['mixed']
  setRangeTextStyleId(start: number, end: number, value: string): void
  getRangeFillStyleId(start: number, end: number): string | PluginAPI['mixed']
  setRangeFillStyleId(start: number, end: number, value: string): void
  getRangeListOptions(start: number, end: number): TextListOptions | PluginAPI['mixed']
  setRangeListOptions(start: number, end: number, value: TextListOptions): void
  getRangeIndentation(start: number, end: number): number | PluginAPI['mixed']
  setRangeIndentation(start: number, end: number, value: number): void
  getStyledTextSegments<
    StyledTextSegmentFields extends (keyof Omit<
      StyledTextSegment,
      'characters' | 'start' | 'end'
    >)[],
  >(
    fields: StyledTextSegmentFields,
    start?: number,
    end?: number,
  ): Array<
    Pick<StyledTextSegment, StyledTextSegmentFields[number] | 'characters' | 'start' | 'end'>
  >
}
interface DocumentNode extends BaseNodeMixin {
  readonly type: 'DOCUMENT'
  readonly children: ReadonlyArray<PageNode>
  appendChild(child: PageNode): void
  insertChild(index: number, child: PageNode): void
  findChildren(callback?: (node: PageNode) => boolean): Array<PageNode>
  findChild(callback: (node: PageNode) => boolean): PageNode | null
  findAll(callback?: (node: PageNode | SceneNode) => boolean): Array<PageNode | SceneNode>
  findOne(callback: (node: PageNode | SceneNode) => boolean): PageNode | SceneNode | null
  findAllWithCriteria<T extends NodeType[]>(criteria: {
    types: T
  }): Array<
    {
      type: T[number]
    } & (PageNode | SceneNode)
  >
}
interface PageNode extends BaseNodeMixin, ChildrenMixin, ExportMixin {
  readonly type: 'PAGE'
  clone(): PageNode
  guides: ReadonlyArray<Guide>
  selection: ReadonlyArray<SceneNode>
  selectedTextRange: {
    node: TextNode
    start: number
    end: number
  } | null
  flowStartingPoints: ReadonlyArray<{
    nodeId: string
    name: string
  }>
  backgrounds: ReadonlyArray<Paint>
  prototypeBackgrounds: ReadonlyArray<Paint>
  readonly prototypeStartNode: FrameNode | GroupNode | ComponentNode | InstanceNode | null
}
interface FrameNode extends DefaultFrameMixin {
  readonly type: 'FRAME'
  clone(): FrameNode
}
interface GroupNode
  extends BaseNodeMixin,
    SceneNodeMixin,
    ReactionMixin,
    ChildrenMixin,
    ContainerMixin,
    DeprecatedBackgroundMixin,
    BlendMixin,
    LayoutMixin,
    ExportMixin {
  readonly type: 'GROUP'
  clone(): GroupNode
}
interface SliceNode extends BaseNodeMixin, SceneNodeMixin, LayoutMixin, ExportMixin {
  readonly type: 'SLICE'
  clone(): SliceNode
}
interface RectangleNode
  extends DefaultShapeMixin,
    ConstraintMixin,
    CornerMixin,
    RectangleCornerMixin,
    IndividualStrokesMixin {
  readonly type: 'RECTANGLE'
  clone(): RectangleNode
}
interface LineNode extends DefaultShapeMixin, ConstraintMixin {
  readonly type: 'LINE'
  clone(): LineNode
}
interface EllipseNode extends DefaultShapeMixin, ConstraintMixin, CornerMixin {
  readonly type: 'ELLIPSE'
  clone(): EllipseNode
  arcData: ArcData
}
interface PolygonNode extends DefaultShapeMixin, ConstraintMixin, CornerMixin {
  readonly type: 'POLYGON'
  clone(): PolygonNode
  pointCount: number
}
interface StarNode extends DefaultShapeMixin, ConstraintMixin, CornerMixin {
  readonly type: 'STAR'
  clone(): StarNode
  pointCount: number
  innerRadius: number
}
interface VectorNode extends DefaultShapeMixin, ConstraintMixin, CornerMixin, VectorLikeMixin {
  readonly type: 'VECTOR'
  clone(): VectorNode
}
interface TextNode extends DefaultShapeMixin, ConstraintMixin, TextSublayerNode {
  readonly type: 'TEXT'
  clone(): TextNode
  textAlignHorizontal: 'LEFT' | 'CENTER' | 'RIGHT' | 'JUSTIFIED'
  textAlignVertical: 'TOP' | 'CENTER' | 'BOTTOM'
  textAutoResize: 'NONE' | 'WIDTH_AND_HEIGHT' | 'HEIGHT' | 'TRUNCATE'
  autoRename: boolean
  textStyleId: string | PluginAPI['mixed']
}
declare type ComponentPropertyType = 'BOOLEAN' | 'TEXT' | 'INSTANCE_SWAP' | 'VARIANT'
declare type InstanceSwapPreferredValue = {
  type: 'COMPONENT' | 'COMPONENT_SET'
  key: string
}
declare type ComponentPropertyOptions = {
  preferredValues?: InstanceSwapPreferredValue[]
}
declare type ComponentPropertyDefinitions = {
  [propertyName: string]: {
    type: ComponentPropertyType
    defaultValue: string | boolean
    preferredValues?: InstanceSwapPreferredValue[]
    variantOptions?: string[]
  }
}
interface ComponentSetNode extends BaseFrameMixin, PublishableMixin, ComponentPropertiesMixin {
  readonly type: 'COMPONENT_SET'
  clone(): ComponentSetNode
  readonly defaultVariant: ComponentNode
  readonly variantGroupProperties: {
    [property: string]: {
      values: string[]
    }
  }
}
interface ComponentNode
  extends DefaultFrameMixin,
    PublishableMixin,
    VariantMixin,
    ComponentPropertiesMixin {
  readonly type: 'COMPONENT'
  clone(): ComponentNode
  createInstance(): InstanceNode
  readonly instances: InstanceNode[]
}
declare type ComponentProperties = {
  [propertyName: string]: {
    type: ComponentPropertyType
    value: string | boolean
    preferredValues?: InstanceSwapPreferredValue[]
  }
}
interface InstanceNode extends DefaultFrameMixin, VariantMixin {
  readonly type: 'INSTANCE'
  clone(): InstanceNode
  mainComponent: ComponentNode | null
  swapComponent(componentNode: ComponentNode): void
  setProperties(properties: { [propertyName: string]: string | boolean }): void
  readonly componentProperties: ComponentProperties
  detachInstance(): FrameNode
  scaleFactor: number
  readonly exposedInstances: InstanceNode[]
  isExposedInstance: boolean
  readonly overrides: {
    id: string
    overriddenFields: NodeChangeProperty[]
  }[]
  resetOverrides(): void
}
interface BooleanOperationNode
  extends DefaultShapeMixin,
    ChildrenMixin,
    CornerMixin,
    ContainerMixin {
  readonly type: 'BOOLEAN_OPERATION'
  clone(): BooleanOperationNode
  booleanOperation: 'UNION' | 'INTERSECT' | 'SUBTRACT' | 'EXCLUDE'
}
interface StickyNode extends OpaqueNodeMixin, MinimalFillsMixin, MinimalBlendMixin {
  readonly type: 'STICKY'
  readonly text: TextSublayerNode
  authorVisible: boolean
  authorName: string
  clone(): StickyNode
}
interface StampNode extends DefaultShapeMixin, ConstraintMixin, StickableMixin {
  readonly type: 'STAMP'
  clone(): StampNode
  getAuthorAsync(): Promise<BaseUser | null>
}
interface TableNode extends OpaqueNodeMixin, MinimalFillsMixin, MinimalBlendMixin {
  readonly type: 'TABLE'
  clone(): TableNode
  readonly numRows: number
  readonly numColumns: number
  cellAt(rowIndex: number, columnIndex: number): TableCellNode
  insertRow(rowIndex: number): void
  insertColumn(columnIndex: number): void
  removeRow(rowIndex: number): void
  removeColumn(columnIndex: number): void
  moveRow(fromIndex: number, toIndex: number): void
  moveColumn(fromIndex: number, toIndex: number): void
  resizeRow(rowIndex: number, height: number): void
  resizeColumn(columnIndex: number, width: number): void
}
interface TableCellNode extends MinimalFillsMixin {
  readonly type: 'TABLE_CELL'
  readonly text: TextSublayerNode
  readonly rowIndex: number
  readonly columnIndex: number
  readonly toString: string
  readonly parent: TableNode
  readonly height: number
  readonly width: number
}
interface HighlightNode
  extends DefaultShapeMixin,
    ConstraintMixin,
    CornerMixin,
    ReactionMixin,
    VectorLikeMixin,
    StickableMixin {
  readonly type: 'HIGHLIGHT'
  clone(): HighlightNode
}
interface WashiTapeNode extends DefaultShapeMixin, StickableMixin {
  readonly type: 'WASHI_TAPE'
  clone(): WashiTapeNode
}
interface ShapeWithTextNode
  extends OpaqueNodeMixin,
    MinimalFillsMixin,
    MinimalBlendMixin,
    MinimalStrokesMixin {
  readonly type: 'SHAPE_WITH_TEXT'
  shapeType:
    | 'SQUARE'
    | 'ELLIPSE'
    | 'ROUNDED_RECTANGLE'
    | 'DIAMOND'
    | 'TRIANGLE_UP'
    | 'TRIANGLE_DOWN'
    | 'PARALLELOGRAM_RIGHT'
    | 'PARALLELOGRAM_LEFT'
    | 'ENG_DATABASE'
    | 'ENG_QUEUE'
    | 'ENG_FILE'
    | 'ENG_FOLDER'
  readonly text: TextSublayerNode
  readonly cornerRadius?: number
  rotation: number
  resize(width: number, height: number): void
  rescale(scale: number): void
  clone(): ShapeWithTextNode
}
interface CodeBlockNode extends OpaqueNodeMixin, MinimalBlendMixin {
  readonly type: 'CODE_BLOCK'
  code: string
  codeLanguage:
    | 'TYPESCRIPT'
    | 'CPP'
    | 'RUBY'
    | 'CSS'
    | 'JAVASCRIPT'
    | 'HTML'
    | 'JSON'
    | 'GRAPHQL'
    | 'PYTHON'
    | 'GO'
    | 'SQL'
    | 'SWIFT'
    | 'KOTLIN'
    | 'RUST'
    | 'BASH'
    | 'PLAINTEXT'
  clone(): CodeBlockNode
}
interface LabelSublayerNode {
  fills: Paint[] | PluginAPI['mixed']
}
interface ConnectorNode extends OpaqueNodeMixin, MinimalBlendMixin, MinimalStrokesMixin {
  readonly type: 'CONNECTOR'
  readonly text: TextSublayerNode
  readonly textBackground: LabelSublayerNode
  readonly cornerRadius?: number
  connectorLineType: 'ELBOWED' | 'STRAIGHT'
  connectorStart: ConnectorEndpoint
  connectorEnd: ConnectorEndpoint
  connectorStartStrokeCap: ConnectorStrokeCap
  connectorEndStrokeCap: ConnectorStrokeCap
  rotation: number
  clone(): ConnectorNode
}
interface WidgetNode extends OpaqueNodeMixin, StickableMixin {
  readonly type: 'WIDGET'
  readonly widgetId: string
  readonly widgetSyncedState: {
    [key: string]: any
  }
  clone(): WidgetNode
  cloneWidget(
    syncedStateOverrides: {
      [name: string]: any
    },
    syncedMapOverrides?: {
      [mapName: string]: {
        [key: string]: any
      }
    },
  ): WidgetNode
  setWidgetSyncedState(
    syncedState: {
      [name: string]: any
    },
    syncedMap?: {
      [mapName: string]: {
        [key: string]: any
      }
    },
  ): void
}
interface EmbedData {
  srcUrl: string
  canonicalUrl: string | null
  title: string | null
  description: string | null
  provider: string | null
}
interface EmbedNode extends OpaqueNodeMixin, SceneNodeMixin {
  readonly type: 'EMBED'
  readonly embedData: EmbedData
  clone(): EmbedNode
}
interface LinkUnfurlData {
  url: string
  title: string | null
  description: string | null
  provider: string | null
}
interface LinkUnfurlNode extends OpaqueNodeMixin, SceneNodeMixin {
  readonly type: 'LINK_UNFURL'
  readonly linkUnfurlData: LinkUnfurlData
  clone(): LinkUnfurlNode
}
interface MediaData {
  hash: string
}
interface MediaNode extends OpaqueNodeMixin {
  readonly type: 'MEDIA'
  readonly mediaData: MediaData
  resize(width: number, height: number): void
  resizeWithoutConstraints(width: number, height: number): void
  clone(): MediaNode
}
interface SectionNode extends ChildrenMixin, MinimalFillsMixin, OpaqueNodeMixin {
  readonly type: 'SECTION'
  clone(): SectionNode
  resizeWithoutConstraints(width: number, height: number): void
}
declare type BaseNode = DocumentNode | PageNode | SceneNode
declare type SceneNode =
  | SliceNode
  | FrameNode
  | GroupNode
  | ComponentSetNode
  | ComponentNode
  | InstanceNode
  | BooleanOperationNode
  | VectorNode
  | StarNode
  | LineNode
  | EllipseNode
  | PolygonNode
  | RectangleNode
  | TextNode
  | StickyNode
  | ConnectorNode
  | ShapeWithTextNode
  | CodeBlockNode
  | StampNode
  | WidgetNode
  | EmbedNode
  | LinkUnfurlNode
  | MediaNode
  | SectionNode
  | HighlightNode
  | WashiTapeNode
  | TableNode
declare type NodeType = BaseNode['type']
declare type StyleType = 'PAINT' | 'TEXT' | 'EFFECT' | 'GRID'
declare type InheritedStyleField =
  | 'fillStyleId'
  | 'strokeStyleId'
  | 'backgroundStyleId'
  | 'textStyleId'
  | 'effectStyleId'
  | 'gridStyleId'
  | 'strokeStyleId'
interface StyleConsumers {
  node: SceneNode
  fields: InheritedStyleField[]
}
interface BaseStyle extends PublishableMixin, PluginDataMixin {
  readonly id: string
  readonly type: StyleType
  readonly consumers: StyleConsumers[]
  name: string
  remove(): void
}
interface PaintStyle extends BaseStyle {
  type: 'PAINT'
  paints: ReadonlyArray<Paint>
}
interface TextStyle extends BaseStyle {
  type: 'TEXT'
  fontSize: number
  textDecoration: TextDecoration
  fontName: FontName
  letterSpacing: LetterSpacing
  lineHeight: LineHeight
  leadingTrim: LeadingTrim
  paragraphIndent: number
  paragraphSpacing: number
  listSpacing: number
  hangingPunctuation: boolean
  hangingList: boolean
  textCase: TextCase
}
interface EffectStyle extends BaseStyle {
  type: 'EFFECT'
  effects: ReadonlyArray<Effect>
}
interface GridStyle extends BaseStyle {
  type: 'GRID'
  layoutGrids: ReadonlyArray<LayoutGrid>
}
interface Image {
  readonly hash: string
  getBytesAsync(): Promise<Uint8Array>
  getSizeAsync(): Promise<{
    width: number
    height: number
  }>
}
interface Video {
  readonly hash: string
}
interface BaseUser {
  readonly id: string | null
  readonly name: string
  readonly photoUrl: string | null
}
interface User extends BaseUser {
  readonly color: string
  readonly sessionId: number
}
interface ActiveUser extends User {
  readonly position: Vector | null
  readonly viewport: Rect
  readonly selection: string[]
}
