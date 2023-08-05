import React from 'react';
import FeaturesLayout from '../../../../layout/FeaturesLayout';

const html = (<div>
    <h2>Table Component</h2>
    <p className="mb-40">
        In Report Builder, the table report item is a generalized layout report item that displays paginated report data in cells that
        are organized into rows and columns. Report data can be detail data as it is retrieved from the data source, or aggregated detail
        data organized into groups that you specify. Each table cell can contain multiple other report item, such as a text item or an
        image, etc. To add multiple report items to a cell, first add a rectangle to act as a container. Then, add the report items to the rectangle.
        <br /><br />
        To understand the table report item, it helps to understand the following:
        <br /><br />
        <ul>
            <li>The difference between detail data and grouped data.</li>
            <li>Groups, which are organized as members of group hierarchies on the horizontal axis as row groups and on the vertical axis as column groups.</li>
            <li>The purpose of table cells in the four areas of a table report item: the body, the row group headers, the column group headers, and the corner.</li>
            <li>Static and dynamic rows and columns, and how they relate to groups.</li>
        </ul>
        <br /><br />
        This article spells out these concepts to explain the structure that Report Builder add for you when you add templates and
        create groups, so you can modify the structure to suit your own needs. Report Builder provide multiple visual indicators to help
        you recognize table report item structure. For more information, see Table Report Item Cells, Rows, and Columns.
        <br /><br />
        Table UI component is inspired from the Table report item of SSRS Report Builder. Hence details on how grouping works can be referred from
        SSRS documentations and examples as well. However the expressions used are simple JavaScript expressions which is not similar to that of SSRS.
    </p>

    <h3>Understanding Detail and Grouped Data</h3>
    <p className="mb-40">
        Detail data is all the data from a report dataset as it comes back from the data source. Detail data is essentially what
        you see in the query designer results pane when you run a dataset query. The actual detail data includes calculated fields
        that you create, and is restricted by filters set on the dataset, data region, and details group. You display detail data
        on a detail row by using a simple expression such as [Quantity]. When the report runs, the detail row repeats once for
        each row in the query results at run time.
        <br /><br />
        Grouped data is detail data that is organized by a value that you specify in the group definition, such as [SalesOrder].
        You display grouped data on group rows and columns by using simple expressions that aggregate the grouped data, such
        as [Sum(Quantity)]. For more information, see Understanding Groups (Report Builder and SSRS).
    </p>

    <h3>Understanding Group Hierarchies</h3>
    <p className="mb-40">
        Groups are organized as members of group hierarchies. Row group and column group hierarchies are identical structures on
        different axes. Think of row groups as expanding down the page and column groups as expanding across the page.
        <br /><br />
        A tree structure represents nested row and column groups that have a parent/child relationship, such as a category with
        subcategories. The parent group is the root of the tree and child groups are its branches. Groups can also have an
        independent, adjacent relationship, such as sales by territory and sales by year. Multiple unrelated tree hierarchies
        are called a forest. In a table report item, row groups and columns groups are each represented as an independent
        forest. For more information, see Understanding Groups (Report Builder and SSRS).
    </p>

    <h3>Understanding Table Report Item Areas</h3>
    <p className="mb-40">
        A table report item has four possible areas for cells: the table corner, the table row group hierarchy, the table column
        group hierarchy, or the table body. The table body always exists. The other areas are optional.
        <br /><br />
        Cells in the table body area display detail and group data.
        <br /><br />
        Cells in the Row Groups area are created automatically when you create a row group. These are row group header cells and
        display row group instance values by default. For example, when you group by [SalesOrder], group instance values are the
        individual sales orders that you are grouping by.
        <br /><br />
        Cells in the Column Groups area are created automatically when you create a column group. These are column group header
        cells, and they display column group instance values by default. For example, when you group by [Year], group instance
        values are the individual years that you are grouping by.
        <br /><br />
        Cells in the table corner area are created automatically when you have both row groups and column groups defined.
        Cells in this area can display labels, or you can merge the cells and create a title.
        <br /><br />
        For more information, see Table Report Item Areas (Report Builder and SSRS).
    </p>

    <h3>Understanding Static and Dynamic Rows and Columns</h3>
    <p className="mb-40">
        A table report item organizes cells in rows and columns that are associated with groups. Group structures for row
        groups and columns are identical. This example uses row groups, but you can apply the same concepts to column groups.
        <br /><br />
        A row is either a static or dynamic. A static row is not associated with a group. When the report runs, a static row
        renders once. Table headers and footers are static rows. Static rows display labels and totals. Cells in a static
        row are scoped to the data region.
        <br /><br />
        A dynamic row is associated with one or more groups. A dynamic row renders once for every unique group value for the
        innermost group. Cells in a dynamic row are scoped to the innermost row group and column group to which the cell belongs.
        <br /><br />
        Dynamic detail rows are associated with the Details group that is automatically created when you add a table or list
        to the design surface. By definition, the Details group is the innermost group for a table report item. Cells in
        detail rows display detail data.
        <br /><br />
        Dynamic group rows are created when you add a row group or column group to an existing table report item. Cells in
        dynamic group rows display aggregated values for the default scope.
        <br /><br />
        The Add Total feature automatically creates a row outside the current group on which to display values that are
        scoped to the group. You can also add static and dynamic rows manually. Visual indicators help you understand which
        rows are static and which rows are dynamic. For more information, see Table Report Item Cells, Rows,
        and Columns (Report Builder) and SSRS.
    </p>

    <h2>Table Report Item Cells, Rows, and Columns</h2>
    <p className="mb-40">
        To control how the rows and columns of a table report item display data in a Report Builder, you must understand how
        to specify rows and columns for detail data, for group data, and for labels and totals. In many cases, you can use
        the default structures for a table, matrix, or list to display your data.
        <br /><br />
        A table report item displays detail data on detail rows and detail columns and grouped data on group rows and group
        columns. You can add and remove rows and columns to customize a table report item and control the way your
        data displays in the report.
    </p>

    <h3>Row and Column Handles</h3>
    <p className="mb-40">
        When you select a table report item, the row and column handle graphics indicate the purpose of each row and column.
        Handles indicate rows and columns that are inside a group or outside a group.
    </p>

    <h3>Group Rows</h3>
    <p className="mb-40">
        Rows inside a group repeat once per unique group value and are typically used for aggregate summaries. Rows
        outside a group repeat once with respect to the group and are used for labels or subtotals. When you select a
        table cell, row and column handles and brackets inside the table report item show the groups to which a cell belongs.
    </p>

    <h3>Displaying Data on Rows and Columns</h3>
    <p className="mb-40">
        Rows and row groups and columns and column groups have identical relationships. The following discussion describes
        how to add rows to display detail and group data on rows in a table report item, but the same principles apply to
        adding columns to display detail and grouped data.
        <br /><br />
        For each row in a table report item, a row is either inside or outside each row group. If the row is inside a row
        group, it repeats once for every unique value of the group, known as a group instance. If the row is outside a row
        group, it repeats only once in relation to that group. Rows outside all row groups are static and repeat only once
        for the data region. For example, a table header or footer row is a static row. Rows that repeat with at least
        one group are dynamic.
        <br /><br />
        When you have nested groups, a row can be inside a parent group but outside a child group. The row repeats for
        every group value in the parent group, but displays only once in relation to the child group. To display labels
        or totals for a group, add a row outside the group. To display data that changes for every group instance,
        add a row inside the group.
        <br /><br />
        When you have detail groups, each detail row is inside the detail group. The row repeats for every value in the
        dataset query result set.
    </p>
</div>);

const Component = (props) => (<FeaturesLayout {...props}>{html}</FeaturesLayout>);

export default Component;
