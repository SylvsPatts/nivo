import PropTypes from 'prop-types'
// @ts-ignore
import { defsPropTypes, noop } from '@nivo/core'
import {
    ordinalColorsPropType,
    inheritedColorPropType,
    OrdinalColorScaleConfigScheme,
    InheritedColorConfigFromContext,
} from '@nivo/colors'
// @ts-ignore
import { LegendPropShape } from '@nivo/legends'
import { FillDirection } from './types'
import WaffleCell from './WaffleCell'
import WaffleCellHtml from './WaffleCellHtml'

const commonPropTypes = {
    total: PropTypes.number.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            value: PropTypes.number.isRequired,
        })
    ).isRequired,
    hiddenIds: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
        .isRequired,

    rows: PropTypes.number.isRequired,
    columns: PropTypes.number.isRequired,
    fillDirection: PropTypes.oneOf(['top', 'right', 'bottom', 'left']).isRequired,
    padding: PropTypes.number.isRequired,

    colors: ordinalColorsPropType.isRequired,
    emptyColor: PropTypes.string.isRequired,
    emptyOpacity: PropTypes.number.isRequired,
    borderWidth: PropTypes.number.isRequired,
    borderColor: inheritedColorPropType.isRequired,
    getBorderColor: PropTypes.func.isRequired, // computed

    isInteractive: PropTypes.bool,
    tooltipFormat: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    tooltip: PropTypes.func,

    cellSize: PropTypes.number.isRequired,
    cells: PropTypes.array.isRequired,
    origin: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
    }).isRequired,
}

export const WafflePropTypes = {
    ...commonPropTypes,
    cellComponent: PropTypes.func.isRequired,
    role: PropTypes.string.isRequired,
    ...defsPropTypes,
    legends: PropTypes.arrayOf(PropTypes.shape(LegendPropShape)).isRequired,
}

export const WaffleHtmlPropTypes = {
    ...commonPropTypes,
    cellComponent: PropTypes.func.isRequired,
}

export const WaffleCanvasPropTypes = {
    ...commonPropTypes,
    pixelRatio: PropTypes.number.isRequired,
    legends: PropTypes.arrayOf(PropTypes.shape(LegendPropShape)).isRequired,
}

const commonDefaultProps = {
    hiddenIds: [],

    fillDirection: 'bottom',
    padding: 1,

    colors: { scheme: 'nivo' },
    emptyColor: '#cccccc',
    emptyOpacity: 1,
    borderWidth: 0,
    borderColor: { from: 'color', modifiers: [['darker', 1]] },
    defs: [],
    fill: [],

    isInteractive: true,
    onClick: noop,
}

export const WaffleDefaultProps = {
    ...commonDefaultProps,
    cellComponent: WaffleCell,
    role: 'img',
    defs: [],
    fill: [],
    legends: [],
}

export const WaffleHtmlDefaultProps = {
    ...commonDefaultProps,
    cellComponent: WaffleCellHtml,
}

export const WaffleCanvasDefaultProps = {
    ...commonDefaultProps,
    legends: [],
    pixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio ?? 1 : 1,
}

export const defaultProps = {
    fillDirection: 'bottom' as FillDirection,
    padding: 1,
    colors: { scheme: 'nivo' } as OrdinalColorScaleConfigScheme,
    emptyColor: '#cccccc',
    emptyOpacity: 1,
    borderWidth: 0,
    borderColor: { from: 'color', modifiers: [['darker', 1]] } as InheritedColorConfigFromContext,
    defs: [],
    fill: [],
    isInteractive: true,
    legends: [],
    role: 'img',
    pixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio ?? 1 : 1,
}