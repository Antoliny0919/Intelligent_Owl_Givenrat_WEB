import openpyxl


def monkey_patch_openpyxl():
    '''Openpyxl has a bug with workbooks that have wrong cell styling information.
    Monkey patch the library so it can handle these types of workbooks.'''
    from openpyxl.worksheet import _reader
    from openpyxl.cell import Cell
    def bind_cells(self):
        for idx, row in self.parser.parse():
            for cell in row:
                try:
                    style = self.ws.parent._cell_styles[cell['style_id']]
                except:  ## This is the patch, original doesn't have a try/except here
                    style = None
                c = Cell(self.ws, row=cell['row'], column=cell['column'], style_array=style)
                c._value = cell['value']
                c.data_type = cell['data_type']
                self.ws._cells[(cell['row'], cell['column'])] = c
        self.ws.formula_attributes = self.parser.array_formulae
        if self.ws._cells:
            self.ws._current_row = self.ws.max_row # use cells not row dimensions

    _reader.WorksheetReader.bind_cells = bind_cells