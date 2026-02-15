import {
  ActionAlignItems,
  ActionBorder,
  ActionBoxShadow,
  ActionColor,
  ActionCorner,
  ActionDocumentBackground,
  ActionDocumentSize,
  ActionDocumentSizePreset,
  ActionDownloadDocument,
  ActionFill,
  ActionFlip,
  ActionFont,
  ActionFontSize,
  ActionFontStyle,
  ActionFontWeight,
  ActionImageEdit,
  ActionImageFilter,
  ActionImageFit,
  ActionLetterSpacing,
  ActionLineHeight,
  ActionOpenDocument,
  ActionPadding,
  ActionPosition,
  ActionPrintDocument,
  ActionRotate,
  ActionSize,
  ActionTextAlign,
  ActionTextDecoration,
  ActionTextShadow,
  ActionTextStroke,
  ActionTextTransform,
  ActionTextValue,
  ActionToolbarHistory,
  ActionToolbarTool,
  ActionToolbarZoom,
  PaneAddLayer,
  PaneLayerTree,
  useWaraq,
  Waraq,
  WaraqCanvas,
  WaraqContent,
  WaraqFrame,
  WaraqHeader,
  WaraqHeaderSpacer,
  WaraqKeyboardShortcuts,
  WaraqPane,
  WaraqPaneContent,
  WaraqPanel,
  WaraqPaneTitle,
  WaraqToolbar,
  WaraqToolbarGroup,
  WaraqToolbarSeparator,
} from "@codecanon/waraq"
import { Button } from "@codecanon/waraq/ui"
import { CircleQuestionMark, PlusIcon } from "lucide-react"
import { useIsBreakpoint } from "./hooks/use-breakpoint"

function Toolbar() {
  const showTools = useIsBreakpoint("min-md")
  const { tool } = useWaraq()

  return (
    <WaraqToolbar>
      {showTools && (
        <>
          <WaraqToolbarGroup>
            <ActionToolbarTool />
          </WaraqToolbarGroup>

          <WaraqToolbarSeparator />
        </>
      )}

      {tool !== "select" && (
        <>
          <WaraqToolbarGroup>
            <ActionToolbarHistory />
          </WaraqToolbarGroup>

          <WaraqToolbarSeparator />
        </>
      )}

      <ActionToolbarZoom />

      <WaraqToolbarSeparator />
      <WaraqKeyboardShortcuts asChild>
        <Button size="icon" variant="ghost" tooltip="Keyboard Shortcuts">
          <CircleQuestionMark className="size-3.5" />
        </Button>
      </WaraqKeyboardShortcuts>
    </WaraqToolbar>
  )
}

function LayersPanel() {
  return (
    <WaraqPanel title="Layers" icon={PlusIcon}>
      <WaraqPane>
        <WaraqPaneTitle>Add Layer</WaraqPaneTitle>
        <WaraqPaneContent>
          <PaneAddLayer />
        </WaraqPaneContent>
      </WaraqPane>
      <WaraqPane>
        <WaraqPaneTitle>Layers</WaraqPaneTitle>
        <WaraqPaneContent>
          <PaneLayerTree />
        </WaraqPaneContent>
      </WaraqPane>
    </WaraqPanel>
  )
}

function PropertiesPanel() {
  return (
    <WaraqPanel title="Properties">
      <WaraqPane showFor="document">
        <WaraqPaneTitle>Document</WaraqPaneTitle>
        <WaraqPaneContent>
          <ActionDocumentSize />
          <ActionDocumentSizePreset />
          <ActionDocumentBackground />
        </WaraqPaneContent>
      </WaraqPane>
      <WaraqPane showFor="layer">
        <WaraqPaneTitle>Layer</WaraqPaneTitle>
        <WaraqPaneContent>
          <ActionPosition />
          <ActionSize />
        </WaraqPaneContent>
      </WaraqPane>
      <WaraqPane showFor="layer">
        <WaraqPaneTitle>Styles</WaraqPaneTitle>
        <WaraqPaneContent>
          <ActionCorner />
          <ActionBorder />
          <ActionBoxShadow />
          <ActionPadding />
          <ActionFill />
        </WaraqPaneContent>
      </WaraqPane>
      <WaraqPane showFor="layer">
        <WaraqPaneTitle>Transform</WaraqPaneTitle>
        <WaraqPaneContent>
          <ActionRotate />
          <ActionFlip />
        </WaraqPaneContent>
      </WaraqPane>
      <WaraqPane showFor={["text"]}>
        <WaraqPaneContent>
          <ActionTextValue />
        </WaraqPaneContent>
      </WaraqPane>
      <WaraqPane showFor={["text"]}>
        <WaraqPaneTitle>Text</WaraqPaneTitle>
        <WaraqPaneContent>
          <ActionFont apiKey={import.meta.env.VITE_GOOGLE_FONTS_API_KEY} />
          <ActionFontWeight />
          <ActionColor />
          <ActionFontSize />
          <ActionLineHeight />
          <ActionLetterSpacing />
          <ActionAlignItems />
          <ActionTextAlign />
          <ActionFontStyle />
          <ActionTextDecoration />
          <ActionTextTransform />
          <ActionTextShadow />
          <ActionTextStroke />
        </WaraqPaneContent>
      </WaraqPane>
      <WaraqPane showFor={["image"]}>
        <WaraqPaneTitle>Image</WaraqPaneTitle>
        <WaraqPaneContent>
          <ActionImageEdit />
          <ActionImageFit />
        </WaraqPaneContent>
      </WaraqPane>
      <WaraqPane showFor={["image"]}>
        <WaraqPaneTitle>Filters</WaraqPaneTitle>
        <WaraqPaneContent>
          <ActionImageFilter />
        </WaraqPaneContent>
      </WaraqPane>
    </WaraqPanel>
  )
}

function App() {
  return (
    <Waraq>
      <WaraqHeader>
        <ActionOpenDocument />
        <WaraqHeaderSpacer />
        <ActionPrintDocument />
        <ActionDownloadDocument />
      </WaraqHeader>
      <WaraqContent>
        <LayersPanel />

        <WaraqCanvas>
          <WaraqFrame />
        </WaraqCanvas>

        <PropertiesPanel />
      </WaraqContent>

      <Toolbar />
    </Waraq>
  )
}

export { App }
