(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/app/app.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/app/app.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidebar-tools></app-sidebar-tools>\n<app-work-zone></app-work-zone>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/color-palette/color-numeric-values/color-numeric-values.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/color-palette/color-numeric-values/color-numeric-values.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"colorNumericValuesForm\">\n    <div id=\"form-inputs\">\n        <mat-form-field class=\"medium\">\n            <input\n                autocomplete=\"off\"\n                (focus)=\"onFocus()\"\n                (focusout)=\"onFocusOut()\"\n                matInput\n                type=\"text\"\n                placeholder=\"Hex\"\n                formControlName=\"hex\"\n                (change)=\"onUserHexInput()\"\n            />\n            <mat-error>Ce code de couleur n'est pas valide!</mat-error>\n            <span matPrefix>#</span>\n        </mat-form-field>\n        <br />\n        <mat-form-field class=\"small\" (input)=\"onUserColorRGBInput()\">\n            <input\n                autocomplete=\"off\"\n                (focus)=\"onFocus()\"\n                (focusout)=\"onFocusOut()\"\n                matInput\n                type=\"number\"\n                placeholder=\"R:\"\n                formControlName=\"R\"\n                min=\"0\"\n                max=\"255\"\n            />\n            <mat-error>R doit être entre 0 et 255!</mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"small\" (input)=\"onUserColorRGBInput()\">\n            <input\n                autocomplete=\"off\"\n                (focus)=\"onFocus()\"\n                (focusout)=\"onFocusOut()\"\n                matInput\n                type=\"number\"\n                placeholder=\"G:\"\n                formControlName=\"G\"\n                min=\"0\"\n                max=\"255\"\n            />\n            <mat-error>G doit être entre 0 et 255!</mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"small\" (input)=\"onUserColorRGBInput()\">\n            <input\n                autocomplete=\"off\"\n                (focus)=\"onFocus()\"\n                (focusout)=\"onFocusOut()\"\n                matInput\n                type=\"number\"\n                placeholder=\"B:\"\n                formControlName=\"B\"\n                min=\"0\"\n                max=\"255\"\n            />\n            <mat-error>B doit être entre 0 et 255!</mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"small\" (change)=\"onUserColorRGBInput()\">\n            <input\n                autocomplete=\"off\"\n                (focus)=\"onFocus()\"\n                (focusout)=\"onFocusOut()\"\n                matInput\n                type=\"number\"\n                placeholder=\"A:\"\n                formControlName=\"A\"\n                min=\"0\"\n                max=\"1\"\n                step=\"0.1\"\n            />\n            <mat-error>Cette valeur doit être entre 0 et 1!</mat-error>\n        </mat-form-field>\n    </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/color-palette/color-palette.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/color-palette/color-palette.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div class=\"form-group\">\n        <div id=\"buttons\">\n            <button class=\"actionButton\" mat-stroked-button type=\"button\" (click)=\"onCancel()\">\n                Annuler\n            </button>\n            <button class=\"actionButton\" mat-raised-button type=\"submit\" (click)=\"onSubmit()\">\n                Choisir\n            </button>\n        </div>\n\n        <div id=\"user-color\">\n            <span> Aperçu de couleur :</span>\n            <button id=\"big-color\" class=\"color\" type=\"button\" [ngStyle]=\"getUserColorIcon()\"></button>\n            <br />\n        </div>\n\n        <app-color-picker></app-color-picker>\n        <app-color-numeric-values></app-color-numeric-values>\n        <app-color-queue (clickedColorButton)=\"onClickColorQueueButton($event)\"></app-color-queue>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/color-palette/color-picker/color-picker.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/color-palette/color-picker/color-picker.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"ColorWheelContainer\" #ColorWheelContainer>\n    <canvas id=\"canvas_picker\" #canvas_picker (click)=\"onCanvasClick($event)\"> </canvas>\n    <label>Ajouter du noir :</label>\n    <mat-slider min=\"0\" step=\"0.01\" max=\"1\" (input)=\"onSliderChange($event)\" [(ngModel)]=\"obscurity\"></mat-slider>\n    <div id=\"currentColor\" #currentColor></div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/color-palette/color-queue/color-queue.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/color-palette/color-queue/color-queue.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    Dix dernières couleurs :\n</p>\n<div id=\"buttons\">\n    <button\n        class=\"color\"\n        type=\"button\"\n        *ngFor=\"let color of colorQueue\"\n        [ngStyle]=\"getColorIcon(color)\"\n        (click)=\"onClickColorButton(color)\"\n    ></button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/modal-windows/drawing-modal-window/drawing-modal-window.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/modal-windows/drawing-modal-window/drawing-modal-window.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Création d'un nouveau dessin</h1>\n<mat-dialog-content class=\"mat-typography\" [formGroup]=\"drawingModalForm\">\n    <div id=\"userColor\">\n        <span> Couleur de fond :</span>\n        <button id=\"bigColor\" class=\"color\" type=\"button\" [ngStyle]=\"getUserColorIcon()\"></button>\n        <br />\n    </div>\n\n    <app-color-picker></app-color-picker>\n    <app-color-numeric-values></app-color-numeric-values>\n    <app-color-queue (clickedColorButton)=\"onClickColorQueueButton($event)\"></app-color-queue>\n\n    <div class=\"formGroup\">\n        <mat-form-field>\n            <input\n                matInput\n                type=\"number\"\n                (focus)=\"onFocus()\"\n                (focusout)=\"onFocusOut()\"\n                placeholder=\"Largeur\"\n                formControlName=\"width\"\n            />\n            <span matSuffix>px</span>\n            <mat-error>La largeur doit être entre 0 et 10000!</mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n            <input\n                matInput\n                type=\"number\"\n                (focus)=\"onFocus()\"\n                (focusout)=\"onFocusOut()\"\n                placeholder=\"Hauteur\"\n                formControlName=\"height\"\n            />\n            <span matSuffix>px</span>\n            <mat-error>La hauteur doit être entre 0 et 10000!</mat-error>\n        </mat-form-field>\n    </div>\n\n    <div id=\"confirmation\" [hidden]=\"emptyDrawStack\">\n        <mat-error>\n            <i class=\"fas fa-exclamation-triangle\"></i>\n            Un dessin existe déja dans votre zone de travail!\n            <i class=\"fas fa-exclamation-triangle\"></i>\n        </mat-error>\n        <mat-checkbox color=\"warn\" formControlName=\"confirm\" required>\n            Je confirme que je veux créer un nouveau dessin.\n        </mat-checkbox>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions id=\"footer\" align=\"end\">\n    <button class=\"actionButton\" mat-stroked-button type=\"button\" (click)=\"onCancel()\">Annuler</button>\n    <button\n        class=\"actionButton\"\n        mat-raised-button\n        type=\"submit\"\n        [mat-dialog-close]=\"true\"\n        [disabled]=\"drawingModalForm.invalid\"\n        (click)=\"onSubmit()\"\n    >\n        Créer!\n    </button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/modal-windows/export-file-modal-window/export-file-modal-window.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/modal-windows/export-file-modal-window/export-file-modal-window.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Exporter le dessin</h1>\n\n<mat-dialog-content class=\"mat-typography\"> </mat-dialog-content>\n<form [formGroup]=\"exportFileModalForm\">\n    <div *ngIf=\"!workZoneIsEmpty\">\n        Veuillez choisir le format de l'image à exporter :\n        <mat-form-field>\n            <mat-select formControlName=\"fileType\">\n                <mat-option value=\"{{ FILE_TYPE.SVG }}\">SVG</mat-option>\n                <mat-option value=\"{{ FILE_TYPE.BMP }}\">BMP</mat-option>\n                <mat-option value=\"{{ FILE_TYPE.JPG }}\">JPG</mat-option>\n                <mat-option value=\"{{ FILE_TYPE.PNG }}\">PNG</mat-option>\n            </mat-select>\n        </mat-form-field>\n    </div>\n</form>\n<div *ngIf=\"workZoneIsEmpty\">Vous devez tout d'abord créer un dessin pour pouvoir l'exporter ! <br /></div>\n\n<mat-dialog-actions id=\"footer\" align=\"end\">\n    <button class=\"actionButton\" mat-stroked-button type=\"button\" (click)=\"closeDialog()\">Annuler</button>\n    <button class=\"actionButton\" mat-stroked-button type=\"submit\" (click)=\"onSubmit()\" *ngIf=\"!workZoneIsEmpty\">\n        Exporter\n    </button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/modal-windows/open-file-modal-window/open-file-modal-window.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/modal-windows/open-file-modal-window/open-file-modal-window.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Ouvrir un dessin existant</h1>\n\n<mat-tab-group animationDuration=\"0ms\">\n    <mat-tab label=\"Ouvrir un fichier dans la BD\">\n        <div class=\"tab-content\" id=\"open-server\">\n            <div id=\"filters\">\n                <input\n                    autocomplete=\"off\"\n                    matInput\n                    class=\"filter\"\n                    [(ngModel)]=\"nameFilter\"\n                    placeholder=\"Filter par nom ... (entrez '$tout' pour voir tous les dessins)\"\n                    id=\"name-filter\"\n                />\n                <input\n                    autocomplete=\"off\"\n                    matInput\n                    class=\"filter\"\n                    [(ngModel)]=\"labelFilter\"\n                    placeholder=\"Filter par étiquettes ... (ex.: pomme, melon, etc.)\"\n                    id=\"label-filter\"\n                />\n            </div>\n            <div id=\"content-wrapper\">\n                <mat-dialog-content class=\"mat-typography\" [formGroup]=\"openFileModalForm\">\n                    <div *ngIf=\"!isLoading\" id=\"drawing-list\">\n                        <mat-selection-list\n                            #drawings\n                            formControlName=\"selectedDrawing\"\n                            (selectionChange)=\"handleSelection($event)\"\n                            id=\"selection-list\"\n                            required\n                        >\n                            <mat-list-option\n                                *ngFor=\"\n                                    let drawing of drawingsFromServer\n                                        | nameFilter: nameFilter\n                                        | labelFilter: labelFilter\n                                        | mySlice: nameFilter;\n                                    let i = index\n                                \"\n                                id=\"list-option\"\n                                [value]=\"drawing.drawingInfo.createdAt\"\n                            >\n                                <div id=\"drawing-option\">\n                                    <div id=\"drawing-name\">\n                                        {{ drawing.drawingInfo.name }}\n                                    </div>\n                                    <div id=\"drawing-labels-list\">\n                                        <div id=\"drawing-label\" *ngFor=\"let label of drawing.drawingInfo.labels\">\n                                            {{ label }}\n                                        </div>\n                                    </div>\n                                    <div id=\"drawing-thumbnail\">\n                                        <svg\n                                            [attr.width]=\"getWidth(drawing.drawingInfo.name)\"\n                                            [attr.height]=\"getHeight(drawing.drawingInfo.name)\"\n                                            [attr.viewBox]=\"getViewBox(drawing.drawingInfo.name)\"\n                                            [innerHTML]=\"getSVG(drawing.drawingInfo.name) | toTrustHtml\"\n                                        ></svg>\n                                    </div>\n                                    <div id=\"drawing-created-at\">\n                                        {{ convertTimeStampToDate(drawing.drawingInfo.createdAt) }}\n                                    </div>\n                                </div>\n                            </mat-list-option>\n                        </mat-selection-list>\n                        <div\n                            class=\"hidden-info\"\n                            *ngIf=\"\n                                (drawingsFromServer | nameFilter: nameFilter | labelFilter: labelFilter).length === 0\n                            \"\n                        >\n                            Aucun dessin trouvé!\n                        </div>\n                    </div>\n                    <div *ngIf=\"isLoading\" id=\"loading-div\">\n                        <img id=\"img\" [src]=\"getGifSource()\" alt=\"\" />\n                        <div>\n                            Loading ...\n                        </div>\n                    </div>\n                </mat-dialog-content>\n                <div\n                    class=\"hidden-info\"\n                    *ngIf=\"\n                        (drawingsFromServer | nameFilter: nameFilter | labelFilter: labelFilter).length > 5 &&\n                        nameFilter !== '$tout'\n                    \"\n                >\n                    {{ (drawingsFromServer | nameFilter: nameFilter | labelFilter: labelFilter).length - 5 }}\n                    {{\n                        (drawingsFromServer | nameFilter: nameFilter | labelFilter: labelFilter).length - 5 > 1\n                            ? 'dessins masqués ...'\n                            : 'dessin masqué ...'\n                    }}\n                    <a id=\"clickable\" (click)=\"unmaskAll()\">voir tout</a>\n                </div>\n            </div>\n            <div class=\"confirmation\" [hidden]=\"emptyDrawStack\" [formGroup]=\"openFileModalForm\">\n                <mat-error class=\"center\">\n                    <i class=\"fas fa-exclamation-triangle\"></i>\n                    Un dessin existe déja dans votre zone de travail!\n                    <i class=\"fas fa-exclamation-triangle\"></i>\n                </mat-error>\n                <mat-checkbox class=\"center\" color=\"warn\" formControlName=\"confirm\" required>\n                    Je confirme que je ne veux pas sauvegarder le dessin existant.\n                </mat-checkbox>\n            </div>\n            <mat-dialog-actions align=\"end\">\n                <div class=\"submit-button-group-wrapper\">\n                    <div class=\"submit-button-group\">\n                        <button\n                            class=\"actionButton\"\n                            mat-stroked-button\n                            color=\"warn\"\n                            type=\"button\"\n                            (click)=\"onDelete()\"\n                            *ngIf=\"selectedOption !== ''\"\n                        >\n                            Supprimer\n                        </button>\n                        <button class=\"actionButton\" mat-stroked-button type=\"button\" (click)=\"closeDialog()\">\n                            Annuler\n                        </button>\n                        <button\n                            class=\"actionButton\"\n                            mat-stroked-button\n                            type=\"submit\"\n                            [disabled]=\"serverFormIsInvalid()\"\n                            (click)=\"loadServerFile()\"\n                        >\n                            Ouvrir\n                        </button>\n                    </div>\n                </div>\n            </mat-dialog-actions>\n        </div>\n    </mat-tab>\n    <mat-tab label=\"Ouvrir un fichier local\">\n        <div class=\"tab-content\">\n            <mat-dialog-content class=\"mat-typography-local\" [formGroup]=\"openLocalFileModalForm\">\n                <div id=\"content-local-wrapper\">\n                    <mat-label id=\"destination-label\">Choisir un fichier local:</mat-label>\n                    <div id=\"input-wrapper\">\n                        <input\n                            id=\"destination-path\"\n                            readonly\n                            type=\"text\"\n                            placeholder=\"Nom du fichier\"\n                            [value]=\"localFileName\"\n                        />\n                        <input\n                            type=\"file\"\n                            accept=\".txt\"\n                            name=\"file\"\n                            id=\"file\"\n                            class=\"inputfile\"\n                            onclick=\"this.value = null\"\n                            (change)=\"getFileToLoad($event)\"\n                        />\n                        <label for=\"file\">\n                            <i class=\"fas fa-folder\"></i>\n                        </label>\n                    </div>\n                </div>\n            </mat-dialog-content>\n            <div class=\"confirmation\" [hidden]=\"emptyDrawStack\" [formGroup]=\"openLocalFileModalForm\">\n                <mat-error class=\"center\">\n                    <i class=\"fas fa-exclamation-triangle\"></i>\n                    Un dessin existe déja dans votre zone de travail!\n                    <i class=\"fas fa-exclamation-triangle\"></i>\n                </mat-error>\n                <mat-checkbox class=\"center\" color=\"warn\" formControlName=\"confirm\" required>\n                    Je confirme que je ne veux pas sauvegarder le dessin existant.\n                </mat-checkbox>\n            </div>\n            <mat-dialog-actions align=\"end\">\n                <div class=\"submit-button-group-wrapper\">\n                    <div class=\"submit-button-group\">\n                        <button class=\"actionButton\" mat-stroked-button type=\"button\" (click)=\"closeDialog()\">\n                            Annuler\n                        </button>\n                        <button\n                            class=\"actionButton\"\n                            mat-stroked-button\n                            type=\"submit\"\n                            [disabled]=\"localFormIsInvalid()\"\n                            (click)=\"loadLocalFile()\"\n                        >\n                            Ouvrir\n                        </button>\n                    </div>\n                </div>\n            </mat-dialog-actions>\n        </div>\n    </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/modal-windows/save-file-modal-window/save-file-modal-window.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/modal-windows/save-file-modal-window/save-file-modal-window.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Sauvegarder le dessin</h1>\n<mat-tab-group animationDuration=\"0ms\">\n    <mat-tab label=\"Sauvegarder dans la BD\">\n        <div class=\"tab-content\" *ngIf=\"!isSaving\">\n            <mat-dialog-content class=\"mat-typography\" [formGroup]=\"saveFileModalForm\">\n                <mat-label class=\"drawing-name-title\">Nom du dessin</mat-label>\n                <input\n                    autocomplete=\"off\"\n                    matInput\n                    class=\"drawing-name-input\"\n                    formControlName=\"name\"\n                    #input\n                    placeholder=\"Nom du dessin\"\n                />\n                <mat-label class=\"drawing-label-title\">Étiquettes</mat-label>\n                <div class=\"drawing-labels-list\">\n                    <mat-button-toggle\n                        class=\"label\"\n                        *ngFor=\"let label of drawingLabels\"\n                        (click)=\"toggleLabel(label)\"\n                        [disabled]=\"!selectedLabels.includes(label)\"\n                        [checked]=\"selectedLabels.includes(label)\"\n                    >\n                        {{ label }}\n                    </mat-button-toggle>\n                </div>\n                <input\n                    autocomplete=\"off\"\n                    matInput\n                    class=\"new-label-input\"\n                    formControlName=\"label\"\n                    #newLabelInput\n                    placeholder=\"Nouvelle étiquette\"\n                />\n                <button\n                    *ngIf=\"newLabelInput.value !== ''\"\n                    mat-raised-button\n                    type=\"button\"\n                    class=\"new-label-button\"\n                    [disabled]=\"saveFileModalForm.controls.label.invalid || drawingLabels.includes(newLabelInput.value)\"\n                    (click)=\"addLabel(newLabelInput.value)\"\n                >\n                    Ajouter l'étiquette\n                </button>\n            </mat-dialog-content>\n\n            <mat-dialog-actions align=\"end\">\n                <div class=\"submit-button-group-wrapper\">\n                    <div class=\"submit-button-group\">\n                        <button class=\"actionButton\" mat-stroked-button type=\"button\" (click)=\"closeDialog()\">\n                            Annuler\n                        </button>\n                        <button\n                            class=\"actionButton\"\n                            mat-stroked-button\n                            type=\"submit\"\n                            (click)=\"saveToServer()\"\n                            [disabled]=\"saveFileModalForm.controls.name.invalid\"\n                        >\n                            Sauvegarder\n                        </button>\n                    </div>\n                </div>\n            </mat-dialog-actions>\n        </div>\n    </mat-tab>\n    <mat-tab label=\"Sauvegarder localement\">\n        <div class=\"tab-content\" *ngIf=\"!isSaving\">\n            <mat-dialog-content class=\"mat-typography-local\" [formGroup]=\"saveFileLocalModalForm\">\n                <mat-label id=\"input-description\">\n                    Le nom de fichier ne doit pas contenir de '.' ou de '-' et doit être de type .txt\n                </mat-label>\n                <mat-label class=\"file-name-title\">Nom du fichier</mat-label>\n                <input\n                    autocomplete=\"off\"\n                    matInput\n                    class=\"file-name-input\"\n                    formControlName=\"filename\"\n                    #input\n                    placeholder=\"Nom du fichier\"\n                />\n            </mat-dialog-content>\n\n            <mat-dialog-actions align=\"end\">\n                <div class=\"submit-button-group-wrapper\">\n                    <div class=\"submit-button-group\">\n                        <button class=\"actionButton\" mat-stroked-button type=\"button\" (click)=\"closeDialog()\">\n                            Annuler\n                        </button>\n                        <a\n                            class=\"actionButton\"\n                            mat-stroked-button\n                            type=\"submit\"\n                            (click)=\"saveToLocal()\"\n                            [href]=\"saveToLocal ? saveFileUrl : null\"\n                            [download]=\"filename\"\n                            [disabled]=\"saveFileLocalModalForm.controls.filename.invalid\"\n                        >\n                            Sauvegarder\n                        </a>\n                    </div>\n                </div>\n            </mat-dialog-actions>\n        </div>\n    </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/modal-windows/welcome-modal-window/welcome-modal-window.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/modal-windows/welcome-modal-window/welcome-modal-window.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Bienvenue à P9, votre nouvel ami pour le design!</h1>\n<mat-dialog-content class=\"mat-typography\">\n    <h3>Dessinez ce que vous voulez!</h3>\n    <p>\n        En utilisant la toute nouvelle application web P9, vous pouvez mettre sur feuille toute idée créative qui passe\n        par votre tête! Que ce soit pour un projet d'école ou simplement un exercice pour entrainer votre cervelle\n        droite, cet outil est pour vous. Amusez-vous bien! 😊\n    </p>\n    <div id=\"user-guide-message\">\n        <a target=\"_blank\" mat-button id=\"user-guide-button\" href=\"https://github.com/xishec/P9-Wiki/wiki\">\n            <div id=\"user-guide-button-container\">\n                <div id=\"user-guide-button-text\">\n                    <i class=\"far fa-question-circle\" id=\"question-icon\"></i>\n                    <p>Guide d'utilisateur</p>\n                </div>\n            </div>\n        </a>\n        <p>\n            Consultez le guide d'utilisateur pour <br />\n            les détails concernant l'utilisation de l'application.\n        </p>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions id=\"footer\" align=\"end\">\n    <mat-checkbox color=\"primary\" id=\"checkbox\" [(ngModel)]=\"displayWelcomeModalWindow\"\n        ><p>Ne plus montrer ce message.</p></mat-checkbox\n    >\n    <button id=\"start-button\" mat-button [mat-dialog-close]=\"true\" cdkFocusInitial (click)=\"submitForm()\">\n        Commencer\n    </button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/attribute-panel.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar-tools/attribute-panel/attribute-panel.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div>\n        <app-selection-attributes [hidden]=\"currentToolName !== TOOL_NAME.Selection\"></app-selection-attributes>\n        <app-pencil-attributes [hidden]=\"currentToolName !== TOOL_NAME.Pencil\"></app-pencil-attributes>\n        <app-rectangle-attributes [hidden]=\"currentToolName !== TOOL_NAME.Rectangle\"></app-rectangle-attributes>\n        <app-brush-attributes [hidden]=\"currentToolName !== TOOL_NAME.Brush\"></app-brush-attributes>\n        <app-line-attributes [hidden]=\"currentToolName !== TOOL_NAME.Line\"></app-line-attributes>\n        <app-color-applicator-attributes\n            [hidden]=\"currentToolName !== TOOL_NAME.ColorApplicator\"\n        ></app-color-applicator-attributes>\n        <app-polygon-attributes [hidden]=\"currentToolName !== TOOL_NAME.Polygon\"></app-polygon-attributes>\n        <app-grid-attributes [hidden]=\"currentToolName !== TOOL_NAME.Grid\"></app-grid-attributes>\n        <app-stamp-attributes [hidden]=\"currentToolName !== TOOL_NAME.Stamp\"></app-stamp-attributes>\n        <app-dropper-attributes [hidden]=\"currentToolName !== TOOL_NAME.Dropper\"></app-dropper-attributes>\n        <app-ellipsis-attributes [hidden]=\"currentToolName !== TOOL_NAME.Ellipsis\"></app-ellipsis-attributes>\n        <app-pen-attributes [hidden]=\"currentToolName !== TOOL_NAME.Pen\"></app-pen-attributes>\n        <app-quill-attributes [hidden]=\"currentToolName !== TOOL_NAME.Quill\"></app-quill-attributes>\n        <app-text-attributes [hidden]=\"currentToolName !== TOOL_NAME.Text\"></app-text-attributes>\n        <app-eraser-attributes [hidden]=\"currentToolName !== TOOL_NAME.Eraser\"></app-eraser-attributes>\n        <app-magnetism-attributes [hidden]=\"currentToolName !== TOOL_NAME.Magnetism\"></app-magnetism-attributes>\n        <app-fill-attributes [hidden]=\"currentToolName !== TOOL_NAME.Fill\"></app-fill-attributes>\n        <app-spray-can-attributes [hidden]=\"currentToolName !== TOOL_NAME.SprayCan\"></app-spray-can-attributes>\n    </div>\n    <div>\n        <app-color-palette id=\"color-palette\" [hidden]=\"!showColorPalette\"></app-color-palette>\n        <app-color-attributes></app-color-attributes>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/brush-attributes/brush-attributes.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar-tools/attribute-panel/brush-attributes/brush-attributes.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div id=\"attribute-header\">\n        {{ toolName }}\n    </div>\n\n    <form [formGroup]=\"brushAttributesForm\">\n        <div class=\"attribute\">\n            <label for=\"thickness\">Épaisseur du trait</label>\n            <mat-slider\n                placeholder=\"Hex\"\n                formControlName=\"thickness\"\n                (input)=\"onSliderChange($event)\"\n                [min]=\"THICKNESS.Min\"\n                value=\"{{ brushAttributesForm.value.thickness }}\"\n            ></mat-slider>\n            <mat-form-field class=\"small\">\n                <input\n                    autocomplete=\"off\"\n                    (focus)=\"onFocus()\"\n                    (focusout)=\"onFocusOut()\"\n                    matInput\n                    type=\"number\"\n                    formControlName=\"thickness\"\n                    (input)=\"onThicknessChange()\"\n                    [min]=\"THICKNESS.Min\"\n                    [max]=\"THICKNESS.Max\"\n                />\n                <mat-error>La valeur inscrite doit être entre {{ THICKNESS.Min }} et {{ THICKNESS.Max }} px</mat-error>\n                <span matSuffix>px</span>\n            </mat-form-field>\n            <mat-form-field>\n                <mat-label>\n                    Style de pinceau\n                </mat-label>\n                <mat-select\n                    formControlName=\"style\"\n                    (selectionChange)=\"change($event.value)\"\n                    [(value)]=\"selected\"\n                    [ngClass]=\"selected ? 'class' + selected : 'class1'\"\n                >\n                    <mat-option *ngFor=\"let style of styles\" [value]=\"style\">\n                        {{ style }}\n                        <img height=\"40\" src=\"/assets/brush{{ style }}.png\" />\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/color-applicator-attributes/color-applicator-attributes.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar-tools/attribute-panel/color-applicator-attributes/color-applicator-attributes.component.html ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div id=\"attribute-header\">\n        {{ toolName }}\n    </div>\n    <div id=\"tips\">\n        <p>Clic gauche pour appliquer la couleur primaire sur la forme.</p>\n        <p>Clic droit pour appliquer la couleur secondaire sur la bordure.</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/color-attributes/color-attributes.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar-tools/attribute-panel/color-attributes/color-attributes.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div id=\"userColorButtons\">\n        <div>\n            <span> Couleur principale :</span>\n            <button\n                id=\"primary-color-button\"\n                (click)=\"onClickPrimaryColor()\"\n                class=\"color\"\n                type=\"button\"\n                [ngStyle]=\"getPrimaryColorIcon()\"\n            ></button>\n        </div>\n        <div>\n            <span> Couleur secondaire :</span>\n            <button\n                id=\"secondary-color-button\"\n                (click)=\"onClickSecondaryColor()\"\n                class=\"color\"\n                type=\"button\"\n                [ngStyle]=\"getSecondaryColorIcon()\"\n            ></button>\n        </div>\n        <div>\n            <span> Couleur de fond :</span>\n            <button\n                id=\"background-color-button\"\n                (click)=\"onClickBackgroundColor()\"\n                class=\"color\"\n                type=\"button\"\n                [ngStyle]=\"getBackgroundColorIcon()\"\n            ></button>\n        </div>\n\n        <div>\n            <button mat-stroked-button (click)=\"switchColors()\" id=\"switch-colors-button\" title=\"Intervertir\">\n                Principale <i class=\"fas fa-exchange-alt\"></i> Secondaire\n            </button>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/dropper-attributes/dropper-attributes.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar-tools/attribute-panel/dropper-attributes/dropper-attributes.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div id=\"attribute-header\">\n        {{ toolName }}\n    </div>\n\n    <div id=\"tips\">\n        <p>Clic gauche pour changer la couleur primaire.</p>\n        <p>Clic droit pour changer la couleur secondaire.</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/ellipsis-attributes/ellipsis-attributes.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar-tools/attribute-panel/ellipsis-attributes/ellipsis-attributes.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div id=\"attribute-header\">\n        {{ toolName }}\n    </div>\n\n    <form [formGroup]=\"ellipsisAttributesForm\">\n        <div class=\"attribute\">\n            <label for=\"thickness\">Épaisseur du trait</label>\n            <mat-slider\n                placeholder=\"Hex\"\n                formControlName=\"thickness\"\n                (input)=\"onSliderChange($event)\"\n                [min]=\"thickness.Min\"\n                value=\"{{ ellipsisAttributesForm.value.thickness }}\"\n            ></mat-slider>\n            <mat-form-field class=\"small\">\n                <input\n                    autocomplete=\"off\"\n                    (focus)=\"onFocus()\"\n                    (focusout)=\"onFocusOut()\"\n                    matInput\n                    type=\"number\"\n                    formControlName=\"thickness\"\n                    (input)=\"onThicknessChange()\"\n                    [min]=\"thickness.Min\"\n                    [max]=\"thickness.Max\"\n                />\n                <mat-error>La valeur inscrite doit être entre {{ thickness.Min }} et {{ thickness.Max }} px</mat-error>\n                <span matSuffix>px</span>\n            </mat-form-field>\n        </div>\n        <div id=\"attribute\">\n            <label for=\"traceType\">Type de tracé</label>\n            <mat-form-field>\n                <mat-select formControlName=\"traceType\" (selectionChange)=\"onTraceTypeChange()\">\n                    <mat-option value=\"Contour\">Contour</mat-option>\n                    <mat-option value=\"Plein\">Plein</mat-option>\n                    <mat-option value=\"Plein avec contour\">Plein avec contour</mat-option>\n                </mat-select>\n            </mat-form-field>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/eraser-attributes/eraser-attributes.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar-tools/attribute-panel/eraser-attributes/eraser-attributes.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div id=\"attribute-header\">\n        {{ toolName }}\n    </div>\n\n    <form [formGroup]=\"eraserAttributesForm\">\n        <div class=\"attribute\">\n            <label for=\"eraserSize\">Taille de l'efface</label>\n            <mat-slider\n                placeholder=\"value\"\n                formControlName=\"eraserSize\"\n                (input)=\"onSliderChange($event)\"\n                [min]=\"eraserSize.Min\"\n                [max]=\"eraserSize.Max\"\n                step=\"1\"\n                value=\"{{ eraserAttributesForm.value.eraserSize }}\"\n            ></mat-slider>\n\n            <mat-form-field class=\"small\">\n                <input\n                    autocomplete=\"off\"\n                    (focus)=\"onFocus()\"\n                    (focusout)=\"onFocusOut()\"\n                    matInput\n                    type=\"number\"\n                    formControlName=\"eraserSize\"\n                    (input)=\"onSizeChange()\"\n                    [min]=\"eraserSize.Min\"\n                    [max]=\"eraserSize.Max\"\n                />\n                <mat-error>La valeur inscrite doit être entre {{ eraserSize.Min }} et {{ eraserSize.Max }}</mat-error>\n                <span matSuffix>px</span>\n            </mat-form-field>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/fill-attributes/fill-attributes.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar-tools/attribute-panel/fill-attributes/fill-attributes.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div id=\"attribute-header\">\n        {{ toolName }}\n    </div>\n\n    <form [formGroup]=\"fillAttributesForm\">\n        <div class=\"attribute\">\n            <label for=\"thickness\">Épaisseur du trait</label>\n            <mat-slider\n                formControlName=\"thickness\"\n                (input)=\"onThicknessSliderChange($event)\"\n                [min]=\"THICKNESS.Min\"\n                [max]=\"THICKNESS.Max\"\n                value=\"{{ fillAttributesForm.value.thickness }}\"\n            ></mat-slider>\n            <mat-form-field class=\"small\">\n                <input\n                    autocomplete=\"off\"\n                    (focus)=\"onFocus()\"\n                    (focusout)=\"onFocusOut()\"\n                    matInput\n                    type=\"number\"\n                    formControlName=\"thickness\"\n                    (input)=\"onThicknessChange()\"\n                    [min]=\"THICKNESS.Min\"\n                    [max]=\"THICKNESS.Max\"\n                />\n                <mat-error>La valeur inscrite doit être entre {{ THICKNESS.Min }} et {{ THICKNESS.Max }} px</mat-error>\n                <span matSuffix>px</span>\n            </mat-form-field>\n        </div>\n        <div class=\"attribute\">\n            <label for=\"tolerance\">Tolérance</label> <br />\n            <mat-slider\n                placeholder=\"Tolérance\"\n                formControlName=\"tolerance\"\n                (input)=\"onToleranceSliderChange($event)\"\n                [min]=\"TOLERANCE.Min\"\n                [max]=\"TOLERANCE.Max\"\n                value=\"{{ fillAttributesForm.value.tolerance }}\"\n            ></mat-slider>\n            <mat-form-field class=\"small\">\n                <input\n                    autocomplete=\"off\"\n                    (focus)=\"onFocus()\"\n                    (focusout)=\"onFocusOut()\"\n                    matInput\n                    type=\"number\"\n                    formControlName=\"tolerance\"\n                    (input)=\"onToleranceChange()\"\n                    [min]=\"TOLERANCE.Min\"\n                    [max]=\"TOLERANCE.Max\"\n                />\n                <mat-error>La valeur inscrite doit être entre {{ TOLERANCE.Min }} et {{ TOLERANCE.Max }} %</mat-error>\n                <span matSuffix>%</span>\n            </mat-form-field>\n        </div>\n        <div id=\"attribute\">\n            <label for=\"traceType\">Type de tracé</label>\n            <mat-form-field>\n                <mat-select formControlName=\"traceType\" (selectionChange)=\"onTraceTypeChange()\">\n                    <mat-option value=\"Contour\">Contour</mat-option>\n                    <mat-option value=\"Plein\">Plein</mat-option>\n                    <mat-option value=\"Plein avec contour\">Plein avec contour</mat-option>\n                </mat-select>\n            </mat-form-field>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/grid-attributes/grid-attributes.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar-tools/attribute-panel/grid-attributes/grid-attributes.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div id=\"attribute-header\">\n        {{ toolName }}\n    </div>\n\n    <form [formGroup]=\"gridAttributesForm\">\n        <div class=\"attribute\">\n            <label for=\"activateGrid\">\n                Activer la grille\n                <i\n                    class=\"fas fa-info-circle\"\n                    matTooltip=\"Appuyez sur 'G' comme raccourci\"\n                    matTooltipPosition=\"after\"\n                ></i>\n            </label>\n            <br />\n            <mat-slide-toggle formControlName=\"state\" [checked]=\"onStateChange()\" color=\"primary\"></mat-slide-toggle>\n        </div>\n\n        <div class=\"attribute\">\n            <label for=\"gridSize\"> Taille des carrés</label>\n            <mat-slider\n                formControlName=\"size\"\n                (input)=\"onSizeSliderChange($event)\"\n                [min]=\"gridSize.Min\"\n                [max]=\"gridSize.Max\"\n                value=\"{{ gridAttributesForm.value.size }}\"\n                step=\"1\"\n            ></mat-slider>\n            <mat-form-field class=\"small\">\n                <input\n                    autocomplete=\"off\"\n                    (focus)=\"onFocus()\"\n                    (focusout)=\"onFocusOut()\"\n                    matInput\n                    type=\"number\"\n                    formControlName=\"size\"\n                    (input)=\"onSizeChange()\"\n                    [min]=\"gridSize.Min\"\n                    [max]=\"gridSize.Max\"\n                    step=\"1\"\n                />\n                <mat-error>La valeur inscrite doit être entre {{ gridSize.Min }} et {{ gridSize.Max }} px</mat-error>\n                <span matSuffix>px</span>\n            </mat-form-field>\n        </div>\n\n        <div class=\"attribute\">\n            <label for=\"gridOpacity\"> Opacité des traits</label>\n            <mat-slider\n                formControlName=\"opacity\"\n                (input)=\"onOpacitySliderChange($event)\"\n                [min]=\"gridOpacity.Min\"\n                [max]=\"gridOpacity.Max\"\n                value=\"{{ gridAttributesForm.value.opacity }}\"\n                step=\"0.1\"\n            ></mat-slider>\n            <mat-form-field class=\"small\">\n                <input\n                    autocomplete=\"off\"\n                    (focus)=\"onFocus()\"\n                    (focusout)=\"onFocusOut()\"\n                    matInput\n                    type=\"number\"\n                    formControlName=\"opacity\"\n                    (input)=\"onOpacityChange()\"\n                    [min]=\"gridOpacity.Min\"\n                    [max]=\"gridOpacity.Max\"\n                    step=\"0.1\"\n                />\n                <mat-error\n                    >La valeur inscrite doit être entre {{ gridOpacity.Min }} et {{ gridOpacity.Max }}\n                </mat-error>\n            </mat-form-field>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/line-attributes/line-attributes.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar-tools/attribute-panel/line-attributes/line-attributes.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div id=\"attribute-header\">\n        {{ toolName }}\n    </div>\n\n    <form [formGroup]=\"lineAttributesForm\">\n        <div class=\"attribute\">\n            <label for=\"thickness\">Épaisseur du trait</label>\n            <mat-slider\n                placeholder=\"Hex\"\n                formControlName=\"thickness\"\n                (input)=\"onSliderChange($event)\"\n                [min]=\"THICKNESS.Min\"\n                value=\"{{ lineAttributesForm.value.thickness }}\"\n            ></mat-slider>\n            <mat-form-field class=\"small\">\n                <input\n                    autocomplete=\"off\"\n                    (focus)=\"onFocus()\"\n                    (focusout)=\"onFocusOut()\"\n                    matInput\n                    type=\"number\"\n                    formControlName=\"thickness\"\n                    (input)=\"onThicknessChange()\"\n                    [min]=\"THICKNESS.Min\"\n                    [max]=\"THICKNESS.Max\"\n                />\n                <mat-error>La valeur inscrite doit être entre {{ THICKNESS.Min }} et {{ THICKNESS.Max }} px</mat-error>\n                <span matSuffix>px</span>\n            </mat-form-field>\n\n            <mat-form-field>\n                <mat-label>\n                    Style de trait\n                </mat-label>\n                <mat-select\n                    formControlName=\"lineStrokeType\"\n                    (selectionChange)=\"onLineStrokeTypeChange($event.value)\"\n                    [(value)]=\"selected\"\n                    [ngClass]=\"selected ? 'strokeType' + selected : 'strokeType1'\"\n                >\n                    <mat-option *ngFor=\"let strokeType of LineStrokeTypeChoices\" [value]=\"strokeType\">\n                        {{ strokeType }}\n                        <img height=\"40\" src=\"/assets/strokeType{{ strokeType }}.png\" />\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n\n            <mat-form-field>\n                <mat-label>\n                    Style de Jointure\n                </mat-label>\n                <mat-select formControlName=\"lineJointType\" (selectionChange)=\"onLineJointTypeChange($event.value)\">\n                    <mat-option [value]=\"1\">\n                        1 - Arrondi\n                    </mat-option>\n                    <mat-option [value]=\"2\">\n                        2 - Angle\n                    </mat-option>\n                    <mat-option [value]=\"3\">\n                        3 - Cercle\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n\n            <div *ngIf=\"circleJointSelected\">\n                <label for=\"thickness\">Diamètre des cercles</label>\n                <mat-slider\n                    placeholder=\"Hex\"\n                    formControlName=\"circleJointDiameter\"\n                    (input)=\"onCircleJointSliderChange($event)\"\n                    [min]=\"THICKNESS.Min\"\n                    value=\"{{ lineAttributesForm.value.circleJointDiameter }}\"\n                ></mat-slider>\n                <mat-form-field class=\"small\">\n                    <input\n                        autocomplete=\"off\"\n                        (focus)=\"onFocus()\"\n                        (focusout)=\"onFocusOut()\"\n                        matInput\n                        type=\"number\"\n                        formControlName=\"circleJointDiameter\"\n                        (input)=\"onCircleJointDiameterChange()\"\n                        [min]=\"THICKNESS.Min\"\n                        [max]=\"THICKNESS.Max\"\n                    />\n                    <mat-error\n                        >La valeur inscrite doit être entre {{ THICKNESS.Min }} et {{ THICKNESS.Max }} px</mat-error\n                    >\n                    <span matSuffix>px</span>\n                </mat-form-field>\n            </div>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/magnetism-attributes/magnetism-attributes.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar-tools/attribute-panel/magnetism-attributes/magnetism-attributes.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div id=\"attribute-header\">\n        {{ toolName }}\n    </div>\n\n    <form [formGroup]=\"magnetismAttributesForm\">\n        <div class=\"attribute\">\n            <label for=\"activateMagnetism\">\n                Activer le magnétisme\n                <i\n                    class=\"fas fa-info-circle\"\n                    matTooltip=\"Appuyez sur 'M' comme raccourci\"\n                    matTooltipPosition=\"after\"\n                ></i>\n            </label>\n            <br />\n            <mat-slide-toggle formControlName=\"state\" [checked]=\"onStateChange()\" color=\"primary\"></mat-slide-toggle>\n        </div>\n\n        <div class=\"attribute\">\n            <label for=\"controlPoint\">Sélection du point d'ancrage</label>\n            <div>\n                <br />\n                <mat-button-toggle-group>\n                    <mat-button-toggle\n                        *ngFor=\"let TOP_MAGNETISM_POINT of TOP_CONTROL_POINTS\"\n                        [value]=\"TOP_MAGNETISM_POINT.point\"\n                        [checked]=\"this.magnetismService.currentPoint === TOP_MAGNETISM_POINT.point\"\n                        (click)=\"setMagnetismPoint(TOP_MAGNETISM_POINT.point)\"\n                        ><img src=\"{{ TOP_MAGNETISM_POINT.img_src }}\"\n                    /></mat-button-toggle>\n                </mat-button-toggle-group>\n            </div>\n\n            <div>\n                <mat-button-toggle-group>\n                    <mat-button-toggle\n                        *ngFor=\"let CENTER_MAGNETISM_POINT of CENTER_CONTROL_POINTS\"\n                        [value]=\"CENTER_MAGNETISM_POINT.point\"\n                        [checked]=\"this.magnetismService.currentPoint === CENTER_MAGNETISM_POINT.point\"\n                        (click)=\"setMagnetismPoint(CENTER_MAGNETISM_POINT.point)\"\n                        ><img src=\"{{ CENTER_MAGNETISM_POINT.img_src }}\"\n                    /></mat-button-toggle>\n                </mat-button-toggle-group>\n            </div>\n\n            <div>\n                <mat-button-toggle-group>\n                    <mat-button-toggle\n                        *ngFor=\"let BOTTOM_MAGNETISM_POINT of BOTTOM_CONTROL_POINTS\"\n                        [value]=\"BOTTOM_MAGNETISM_POINT.point\"\n                        [checked]=\"this.magnetismService.currentPoint === BOTTOM_MAGNETISM_POINT.point\"\n                        (click)=\"setMagnetismPoint(BOTTOM_MAGNETISM_POINT.point)\"\n                        ><img src=\"{{ BOTTOM_MAGNETISM_POINT.img_src }}\"\n                    /></mat-button-toggle>\n                </mat-button-toggle-group>\n            </div>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/pen-attributes/pen-attributes.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar-tools/attribute-panel/pen-attributes/pen-attributes.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div id=\"attribute-header\">\n        {{ toolName }}\n    </div>\n\n    <form [formGroup]=\"penAttributesForm\">\n        <div class=\"attribute\">\n            <label for=\"maxThickness\">Épaisseur du trait maximum</label>\n            <mat-slider\n                placeholder=\"Hex\"\n                formControlName=\"maxThickness\"\n                (input)=\"onMaxSliderChange($event)\"\n                [min]=\"THICKNESS.Min\"\n                value=\"{{ penAttributesForm.value.maxThickness }}\"\n            ></mat-slider>\n            <mat-form-field class=\"small\">\n                <input\n                    autocomplete=\"off\"\n                    (focus)=\"onFocus()\"\n                    (focusout)=\"onFocusOut()\"\n                    matInput\n                    type=\"number\"\n                    formControlName=\"maxThickness\"\n                    (input)=\"onMaxThicknessChange()\"\n                    [min]=\"THICKNESS.Min\"\n                    [max]=\"THICKNESS.Max\"\n                />\n                <mat-error>La valeur inscrite doit être entre {{ THICKNESS.Min }} et {{ THICKNESS.Max }} px</mat-error>\n                <span matSuffix>px</span>\n            </mat-form-field>\n        </div>\n\n        <div class=\"attribute\">\n            <label for=\"minThickness\">Épaisseur du trait minimum</label>\n            <mat-slider\n                placeholder=\"Hex\"\n                formControlName=\"minThickness\"\n                (input)=\"onMinSliderChange($event)\"\n                [min]=\"THICKNESS.Min\"\n                [max]=\"penAttributesForm.value.maxThickness\"\n                value=\"{{ penAttributesForm.value.minThickness }}\"\n            ></mat-slider>\n            <mat-form-field class=\"small\">\n                <input\n                    autocomplete=\"off\"\n                    (focus)=\"onFocus()\"\n                    (focusout)=\"onFocusOut()\"\n                    matInput\n                    type=\"number\"\n                    formControlName=\"minThickness\"\n                    (input)=\"onMinThicknessChange()\"\n                    [value]=\"penAttributesForm.value.minThickness\"\n                    [min]=\"THICKNESS.Min\"\n                    [max]=\"penAttributesForm.value.maxThickness\"\n                />\n                <mat-error\n                    >La valeur inscrite doit être entre {{ THICKNESS.Min }} et\n                    {{ penAttributesForm.value.maxThickness }} px</mat-error\n                >\n                <span matSuffix>px</span>\n            </mat-form-field>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/pencil-attributes/pencil-attributes.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar-tools/attribute-panel/pencil-attributes/pencil-attributes.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div id=\"attribute-header\">\n        {{ toolName }}\n    </div>\n\n    <form [formGroup]=\"pencilAttributesForm\">\n        <div class=\"attribute\">\n            <label for=\"thickness\">Épaisseur du trait</label>\n            <mat-slider\n                placeholder=\"Hex\"\n                formControlName=\"thickness\"\n                (input)=\"onSliderChange($event)\"\n                [min]=\"THICKNESS.Min\"\n                value=\"{{ pencilAttributesForm.value.thickness }}\"\n            ></mat-slider>\n            <mat-form-field class=\"small\">\n                <input\n                    autocomplete=\"off\"\n                    (focus)=\"onFocus()\"\n                    (focusout)=\"onFocusOut()\"\n                    matInput\n                    type=\"number\"\n                    formControlName=\"thickness\"\n                    (input)=\"onThicknessChange()\"\n                    [min]=\"THICKNESS.Min\"\n                    [max]=\"THICKNESS.Max\"\n                />\n                <mat-error>La valeur inscrite doit être entre {{ THICKNESS.Min }} et {{ THICKNESS.Max }} px</mat-error>\n                <span matSuffix>px</span>\n            </mat-form-field>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/polygon-attributes/polygon-attributes.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar-tools/attribute-panel/polygon-attributes/polygon-attributes.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div id=\"attribute-header\">{{ toolName }} : {{ polygonFormType.get(polygonAttributesForm.value.nbVertices) }}</div>\n\n    <form [formGroup]=\"polygonAttributesForm\">\n        <div class=\"attribute\">\n            <div id=\"thickness\">\n                <label for=\"thickness\">Épaisseur du trait</label>\n                <mat-slider\n                    formControlName=\"thickness\"\n                    (input)=\"onThicknessSliderChange($event)\"\n                    [min]=\"thickness.Min\"\n                    value=\"{{ polygonAttributesForm.value.thickness }}\"\n                ></mat-slider>\n                <mat-form-field class=\"small\">\n                    <input\n                        autocomplete=\"off\"\n                        (focus)=\"onFocus()\"\n                        (focusout)=\"onFocusOut()\"\n                        matInput\n                        type=\"number\"\n                        formControlName=\"thickness\"\n                        (input)=\"onThicknessChange()\"\n                        [min]=\"thickness.Min\"\n                        [max]=\"thickness.Max\"\n                    />\n                    <mat-error\n                        >La valeur inscrite doit être entre {{ thickness.Min }} et {{ thickness.Max }} px</mat-error\n                    >\n                    <span matSuffix>px</span>\n                </mat-form-field>\n            </div>\n            <div id=\"traceType\">\n                <label for=\"traceType\">Type de tracé</label>\n                <mat-form-field>\n                    <mat-select formControlName=\"traceType\" (selectionChange)=\"onTraceTypeChange()\">\n                        <mat-option value=\"Contour\">Contour</mat-option>\n                        <mat-option value=\"Plein\">Plein</mat-option>\n                        <mat-option value=\"Plein avec contour\">Plein avec contour</mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div id=\"nbVertices\">\n                <label for=\"nbVertices\">Nombre de côtés</label>\n                <mat-slider\n                    formControlName=\"nbVertices\"\n                    (input)=\"onNbVerticesSliderChange($event)\"\n                    [min]=\"polygonSides.Min\"\n                    [max]=\"polygonSides.Max\"\n                    value=\"{{ polygonAttributesForm.value.nbVertices }}\"\n                ></mat-slider>\n                <mat-form-field class=\"small-polygon\">\n                    <input\n                        autocomplete=\"off\"\n                        (focus)=\"onFocus()\"\n                        (focusout)=\"onFocusOut()\"\n                        matInput\n                        type=\"number\"\n                        formControlName=\"nbVertices\"\n                        (input)=\"onNbVerticesChange()\"\n                        [min]=\"polygonSides.Min\"\n                        [max]=\"polygonSides.Max\"\n                    />\n                    <mat-error>\n                        La valeur inscrite doit être entre {{ polygonSides.Min }} et\n                        {{ polygonSides.Max }} côtés</mat-error\n                    >\n                    <span matSuffix>côtés</span>\n                </mat-form-field>\n            </div>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/quill-attributes/quill-attributes.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar-tools/attribute-panel/quill-attributes/quill-attributes.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <div id=\"attribute-header\">\n      {{ toolName }}\n  </div>\n\n  <form [formGroup]=\"quillAttributesForm\">\n      <div class=\"attribute\">\n          <label for=\"thickness\">Longueur du trait</label>\n          <mat-slider\n              formControlName=\"thickness\"\n              (input)=\"onSliderChange($event)\"\n              [min]=\"THICKNESS.Min\"\n              [max]=\"THICKNESS.Max\"\n              value=\"{{ quillAttributesForm.value.thickness }}\"\n          ></mat-slider>\n          <mat-form-field class=\"small\">\n              <input\n                  autocomplete=\"off\"\n                  (focus)=\"onFocus()\"\n                  (focusout)=\"onFocusOut()\"\n                  matInput\n                  type=\"number\"\n                  formControlName=\"thickness\"\n                  (input)=\"onThicknessChange()\"\n                  [min]=\"THICKNESS.Min\"\n                  [max]=\"THICKNESS.Max\"\n              />\n              <mat-error>La valeur inscrite doit être entre {{ THICKNESS.Min }} et {{ THICKNESS.Max }} px</mat-error>\n              <span matSuffix>px</span>\n          </mat-form-field>\n      </div>\n\n      <div class=\"attribute\">\n          <label>Angle courant</label>\n          <mat-form-field id=\"angle-attribute\">\n              <input\n                  autocomplete=\"off\"\n                  (focus)=\"onFocus()\"\n                  (focusout)=\"onFocusOut()\"\n                  matInput\n                  type=\"number\"\n                  formControlName=\"angle\"\n                  (input)=\"onAngleChange()\"\n                  [value]=\"quillToolService.angle\"\n                  [min]=\"QUILL_ANGLE_ORIENTATION.Min\"\n                  [max]=\"QUILL_ANGLE_ORIENTATION.Max\"\n              />\n              <mat-error\n                  >La valeur inscrite doit être entre {{ QUILL_ANGLE_ORIENTATION.Min }} et\n                  {{ QUILL_ANGLE_ORIENTATION.Max }} degrés</mat-error\n              >\n              <span matSuffix>degré(s)</span>\n          </mat-form-field>\n      </div>\n  </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/rectangle-attributes/rectangle-attributes.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar-tools/attribute-panel/rectangle-attributes/rectangle-attributes.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div id=\"attribute-header\">\n        {{ toolName }}\n    </div>\n\n    <form [formGroup]=\"rectangleAttributesForm\">\n        <div class=\"attribute\">\n            <label for=\"thickness\">Épaisseur du trait</label>\n            <mat-slider\n                placeholder=\"Hex\"\n                formControlName=\"thickness\"\n                (input)=\"onSliderChange($event)\"\n                [min]=\"thickness.Min\"\n                value=\"{{ rectangleAttributesForm.value.thickness }}\"\n            ></mat-slider>\n            <mat-form-field class=\"small\">\n                <input\n                    autocomplete=\"off\"\n                    (focus)=\"onFocus()\"\n                    (focusout)=\"onFocusOut()\"\n                    matInput\n                    type=\"number\"\n                    formControlName=\"thickness\"\n                    (input)=\"onThicknessChange()\"\n                    [min]=\"thickness.Min\"\n                    [max]=\"thickness.Max\"\n                />\n                <mat-error>La valeur inscrite doit être entre {{ thickness.Min }} et {{ thickness.Max }} px</mat-error>\n                <span matSuffix>px</span>\n            </mat-form-field>\n        </div>\n        <div id=\"attribute\">\n            <label for=\"traceType\">Type de tracé</label>\n            <mat-form-field>\n                <mat-select formControlName=\"traceType\" (selectionChange)=\"onTraceTypeChange()\">\n                    <mat-option value=\"Contour\">Contour</mat-option>\n                    <mat-option value=\"Plein\">Plein</mat-option>\n                    <mat-option value=\"Plein avec contour\">Plein avec contour</mat-option>\n                </mat-select>\n            </mat-form-field>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/selection-attributes/selection-attributes.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar-tools/attribute-panel/selection-attributes/selection-attributes.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div id=\"attribute-header\">\n        {{ toolName }}\n    </div>\n\n    <p>\n        Sélectionnez une forme en effectuant un glisser-déposer du clique gauche.\n    </p>\n    <p>\n        Inversez la sélection en effectuant un glisser-déposer du clique droit.\n    </p>\n\n    <div id=\"clipboard-options\">\n        <p>\n            Manipulation de sélection:\n        </p>\n        <mat-button-toggle-group horizontal=\"true\" id=\"clipboard-buttons\">\n            <mat-button-toggle\n                matTooltip=\"{{ SELECT_ALL_BUTTON.tooltipName }} {{ SELECT_ALL_BUTTON.shortcut }}\"\n                matTooltipPosition=\"after\"\n                (click)=\"onButtonTrigger(SELECT_ALL_BUTTON.tooltipName)\"\n            >\n                <i class=\"{{ SELECT_ALL_BUTTON.iconName }}\"></i>\n            </mat-button-toggle>\n            <mat-button-toggle\n                matTooltip=\"{{ PASTE_BUTTON.tooltipName }} {{ PASTE_BUTTON.shortcut }}\"\n                matTooltipPosition=\"after\"\n                (click)=\"onButtonTrigger(PASTE_BUTTON.tooltipName)\"\n                [class.disabled]=\"isClippingsEmpty\"\n                [disabled]=\"isClippingsEmpty\"\n            >\n                <i *ngIf=\"!isClippingsEmpty; else inactive_paste\" class=\"{{ PASTE_BUTTON.iconName }}\"></i>\n                <ng-template #inactive_paste\n                    ><i style=\"color:grey;\" class=\"{{ PASTE_BUTTON.iconName }}\"></i\n                ></ng-template>\n            </mat-button-toggle>\n            <mat-button-toggle\n                *ngFor=\"let CLIPBOARD_BUTTON of CLIPBOARD_BUTTONS\"\n                matTooltip=\"{{ CLIPBOARD_BUTTON.tooltipName }} {{ CLIPBOARD_BUTTON.shortcut }}\"\n                matTooltipPosition=\"after\"\n                (change)=\"onButtonTrigger(CLIPBOARD_BUTTON.tooltipName)\"\n                [class.disabled]=\"!isActiveSelection\"\n                [disabled]=\"!isActiveSelection\"\n            >\n                <i *ngIf=\"isActiveSelection; else inactive_icon\" class=\"{{ CLIPBOARD_BUTTON.iconName }}\"></i>\n                <ng-template #inactive_icon\n                    ><i style=\"color:grey;\" class=\"{{ CLIPBOARD_BUTTON.iconName }}\"></i\n                ></ng-template>\n            </mat-button-toggle>\n        </mat-button-toggle-group>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/spray-can-attributes/spray-can-attributes.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar-tools/attribute-panel/spray-can-attributes/spray-can-attributes.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div id=\"attribute-header\">\n        {{ toolName }}\n    </div>\n\n    <form [formGroup]=\"sprayCanAttributesForm\">\n        <div class=\"attribute\">\n            <label for=\"thickness\">Épaisseur des particules</label>\n            <mat-slider\n                formControlName=\"thickness\"\n                (input)=\"onThicknessSliderChange($event)\"\n                [min]=\"THICKNESS.Min\"\n                [max]=\"THICKNESS.Max\"\n                value=\"{{ sprayCanAttributesForm.value.thickness }}\"\n            ></mat-slider>\n            <mat-form-field class=\"small\">\n                <input\n                    autocomplete=\"off\"\n                    (focus)=\"onFocus()\"\n                    (focusout)=\"onFocusOut()\"\n                    matInput\n                    type=\"number\"\n                    formControlName=\"thickness\"\n                    (input)=\"onThicknessChange()\"\n                    [min]=\"THICKNESS.Min\"\n                    [max]=\"THICKNESS.Max\"\n                />\n                <mat-error>La valeur inscrite doit être entre {{ THICKNESS.Min }} et {{ THICKNESS.Max }} px</mat-error>\n                <span matSuffix>px</span>\n            </mat-form-field>\n        </div>\n\n        <div class=\"attribute\">\n            <label for=\"diameter\">Diamètre de l'émission</label>\n            <mat-slider\n                formControlName=\"diameter\"\n                (input)=\"onDiameterSliderChange($event)\"\n                [min]=\"DIAMETER.Min\"\n                [max]=\"DIAMETER.Max\"\n                value=\"{{ sprayCanAttributesForm.value.diameter }}\"\n            ></mat-slider>\n            <mat-form-field class=\"small\">\n                <input\n                    autocomplete=\"off\"\n                    (focus)=\"onFocus()\"\n                    (focusout)=\"onFocusOut()\"\n                    matInput\n                    type=\"number\"\n                    formControlName=\"diameter\"\n                    (input)=\"onDiameterChange()\"\n                    [min]=\"DIAMETER.Min\"\n                    [max]=\"DIAMETER.Max\"\n                />\n                <mat-error>La valeur inscrite doit être entre {{ DIAMETER.Min }} et {{ DIAMETER.Max }} px</mat-error>\n                <span matSuffix>px</span>\n            </mat-form-field>\n        </div>\n\n        <div class=\"attribute\">\n            <label for=\"diameter\">Intervalle des émissions</label>\n            <mat-slider\n                formControlName=\"interval\"\n                (input)=\"onIntervalSliderChange($event)\"\n                [min]=\"INTERVAL.Min\"\n                [max]=\"INTERVAL.Max\"\n                value=\"{{ sprayCanAttributesForm.value.interval }}\"\n            ></mat-slider>\n            <mat-form-field id=\"intervalInput\">\n                <input\n                    autocomplete=\"off\"\n                    (focus)=\"onFocus()\"\n                    (focusout)=\"onFocusOut()\"\n                    matInput\n                    type=\"number\"\n                    formControlName=\"interval\"\n                    (input)=\"onIntervalChange()\"\n                    [min]=\"INTERVAL.Min\"\n                    [max]=\"INTERVAL.Max\"\n                />\n                <mat-error>La valeur inscrite doit être entre {{ INTERVAL.Min }} et {{ INTERVAL.Max }} ms</mat-error>\n                <span matSuffix>ms</span>\n            </mat-form-field>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/stamp-attributes/stamp-attributes.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar-tools/attribute-panel/stamp-attributes/stamp-attributes.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div id=\"attribute-header\">\n        {{ toolName }}\n    </div>\n\n    <form [formGroup]=\"stampAttributesForm\">\n        <div class=\"attribute\">\n            <label>Mise à échelle</label>\n            <mat-slider\n                placeholder=\"value\"\n                formControlName=\"scaling\"\n                (input)=\"onSliderChange($event)\"\n                [min]=\"STAMP_SCALING.Min\"\n                [max]=\"STAMP_SCALING.Max\"\n                step=\"0.1\"\n                value=\"{{ stampAttributesForm.value.scaling }}\"\n            ></mat-slider>\n\n            <mat-form-field class=\"small\">\n                <input\n                    autocomplete=\"off\"\n                    (focus)=\"onFocus()\"\n                    (focusout)=\"onFocusOut()\"\n                    matInput\n                    type=\"number\"\n                    formControlName=\"scaling\"\n                    (input)=\"onScalingChange()\"\n                    [min]=\"STAMP_SCALING.Min\"\n                    [max]=\"STAMP_SCALING.Max\"\n                />\n                <mat-error\n                    >La valeur inscrite doit être entre {{ STAMP_SCALING.Min }} et {{ STAMP_SCALING.Max }}</mat-error\n                >\n            </mat-form-field>\n        </div>\n\n        <div class=\"attribute\">\n            <label>Angle courant</label>\n            <mat-form-field id=\"angle-attribute\">\n                <input\n                    autocomplete=\"off\"\n                    (focus)=\"onFocus()\"\n                    (focusout)=\"onFocusOut()\"\n                    matInput\n                    type=\"number\"\n                    formControlName=\"angle\"\n                    (input)=\"onAngleChange()\"\n                    [value]=\"stampToolService.angle\"\n                    [min]=\"STAMP_ANGLE_ORIENTATION.Min\"\n                    [max]=\"STAMP_ANGLE_ORIENTATION.Max\"\n                />\n                <mat-error\n                    >La valeur inscrite doit être entre {{ STAMP_ANGLE_ORIENTATION.Min }} et\n                    {{ STAMP_ANGLE_ORIENTATION.Max }} degrés</mat-error\n                >\n                <span matSuffix>degré(s)</span>\n            </mat-form-field>\n        </div>\n\n        <div class=\"attribute\">\n            <mat-form-field>\n                <mat-label>Type d'étampe </mat-label>\n                <mat-select\n                    formControlName=\"stampType\"\n                    (selectionChange)=\"onStampTypeChange()\"\n                    [(value)]=\"selected\"\n                    [ngClass]=\"selected ? 'class-' + selected : 'class-NoStamp'\"\n                >\n                    <mat-option *ngFor=\"let stamp of STAMP_TYPES; let i = index\" [value]=\"i\">\n                        {{ STAMP_NAMES[i] }}\n                        <img height=\"30\" src=\"{{ STAMP_TYPES[i] }}\" />\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/text-attributes/text-attributes.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar-tools/attribute-panel/text-attributes/text-attributes.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div id=\"attribute-header\">\n        {{ toolName }}\n    </div>\n\n    <form [formGroup]=\"textAttributesForm\">\n        <div class=\"attribute\">\n            <mat-form-field>\n                <mat-select\n                    formControlName=\"font\"\n                    (selectionChange)=\"onFontChange()\"\n                    [ngStyle]=\"{ 'font-family': getCurrentFont() }\"\n                    (keydown)=\"$event.stopPropagation()\"\n                >\n                    <mat-option\n                        *ngFor=\"let FONT of FONTS\"\n                        [ngStyle]=\"{ 'font-family': FONT.fontFamily }\"\n                        value=\"{{ FONT.fontFamily }}\"\n                    >\n                        {{ FONT.fontName }}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field id=\"small\">\n                <input\n                    autocomplete=\"off\"\n                    (focus)=\"onFocus()\"\n                    (focusout)=\"onFocusOut()\"\n                    matInput\n                    type=\"number\"\n                    formControlName=\"fontSize\"\n                    (input)=\"onFontSizeChange()\"\n                    [min]=\"fontSize.Min\"\n                    [max]=\"fontSize.Max\"\n                    (keydown)=\"$event.stopPropagation()\"\n                />\n                <mat-error>La valeur inscrite doit être entre {{ fontSize.Min }} et {{ fontSize.Max }} </mat-error>\n            </mat-form-field>\n\n            <br />\n            <mat-button-toggle-group formControlName=\"align\" (click)=\"onAlignChange()\">\n                <mat-button-toggle matTooltip=\"Aligner à gauche\" value=\"start\"\n                    ><i class=\"fas fa-align-left\"></i\n                ></mat-button-toggle>\n\n                <mat-button-toggle matTooltip=\"Aligner au centre\" value=\"middle\"\n                    ><i class=\"fas fa-align-center\"></i\n                ></mat-button-toggle>\n\n                <mat-button-toggle matTooltip=\"Aligner à droite\" value=\"end\"\n                    ><i class=\"fas fa-align-right\"></i\n                ></mat-button-toggle>\n            </mat-button-toggle-group>\n\n            <mat-button-toggle matTooltip=\"Gras\" (click)=\"onBoldChange()\"\n                ><i class=\"fas fa-bold\"></i\n            ></mat-button-toggle>\n\n            <mat-button-toggle matTooltip=\"Italique\" (click)=\"onItalicChange()\"\n                ><i class=\"fas fa-italic\"></i\n            ></mat-button-toggle>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/sidebar-tools.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar-tools/sidebar-tools.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"sidebar\">\n    <div id=\"tools-buttons\">\n        <mat-button-toggle-group vertical=\"true\" value=\"Sélection\">\n            <mat-button-toggle\n                *ngFor=\"let TOOL_BUTTON_INFO of TOOLS_BUTTON_INFO; let i = index\"\n                matTooltip=\"{{ TOOL_BUTTON_INFO.tooltipName }} {{ TOOL_BUTTON_INFO.shortcut }}\"\n                matTooltipPosition=\"after\"\n                (click)=\"onChangeTool(i)\"\n                (contextmenu)=\"onRightClick(i)\"\n                value=\"{{ TOOL_BUTTON_INFO.tooltipName }}\"\n                [checked]=\"getChecked(i)\"\n            >\n                <img\n                    *ngIf=\"i === TRACING_TOOL_POSITION || i === SHAPE_TOOL_POSITION\"\n                    src=\"../../../assets/triangle.png\"\n                />\n                <i *ngIf=\"i === TRACING_TOOL_POSITION\" [ngClass]=\"getTracingToolClass()\"> </i>\n                <i *ngIf=\"i === SHAPE_TOOL_POSITION\" [ngClass]=\"getShapeToolClass()\"> </i>\n                <i\n                    *ngIf=\"i !== TRACING_TOOL_POSITION && i !== SHAPE_TOOL_POSITION\"\n                    class=\"{{ TOOL_BUTTON_INFO.iconName }}\"\n                >\n                </i>\n            </mat-button-toggle>\n        </mat-button-toggle-group>\n\n        <mat-button-toggle-group vertical=\"true\" id=\"file-buttons\">\n            <mat-button-toggle\n                *ngFor=\"let FILE_BUTTON_INFO of FILES_BUTTON_INFO\"\n                matTooltip=\"{{ FILE_BUTTON_INFO.tooltipName }} {{ FILE_BUTTON_INFO.shortcut }}\"\n                matTooltipPosition=\"after\"\n                (click)=\"onChangeFileTool(FILE_BUTTON_INFO.tooltipName)\"\n                [disabled]=\"checkIfCantUndoRedo(FILE_BUTTON_INFO.tooltipName)\"\n            >\n                <i\n                    [style.color]=\"checkIfCantUndoRedo(FILE_BUTTON_INFO.tooltipName) ? 'silver' : 'black'\"\n                    class=\"{{ FILE_BUTTON_INFO.iconName }}\"\n                ></i>\n            </mat-button-toggle>\n        </mat-button-toggle-group>\n    </div>\n    <app-attribute-panel (click)=\"onClickAttributePanel()\"></app-attribute-panel>\n</div>\n\n<mat-button-toggle-group *ngIf=\"showTracingTools\" id=\"tracing-tools\">\n    <mat-button-toggle\n        *ngFor=\"let buttonInfo of TRACING_BUTTON_INFO\"\n        matTooltip=\"{{ buttonInfo.tooltipName }} {{ buttonInfo.shortcut }}\"\n        matTooltipPosition=\"above\"\n        (click)=\"onChangeTracingTool(buttonInfo.tooltipName)\"\n        value=\"{{ buttonInfo.tooltipName }}\"\n        [checked]=\"currentToolName === buttonInfo.tooltipName\"\n    >\n        <i class=\"{{ buttonInfo.iconName }}\"> </i>\n    </mat-button-toggle>\n</mat-button-toggle-group>\n\n<mat-button-toggle-group *ngIf=\"showShapeTools\" id=\"shape-tools\">\n    <mat-button-toggle\n        *ngFor=\"let buttonInfo of SHAPE_BUTTON_INFO\"\n        matTooltip=\"{{ buttonInfo.tooltipName }} {{ buttonInfo.shortcut }}\"\n        matTooltipPosition=\"above\"\n        (click)=\"onChangeShapeTool(buttonInfo.tooltipName)\"\n        value=\"{{ buttonInfo.tooltipName }}\"\n        [checked]=\"currentToolName === buttonInfo.tooltipName\"\n    >\n        <i class=\"{{ buttonInfo.iconName }}\"> </i>\n    </mat-button-toggle>\n</mat-button-toggle-group>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/work-zone/work-zone.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/work-zone/work-zone.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg\n    #svgpad\n    [ngClass]=\"{ 'stop-scrolling': modalIsDisplayed }\"\n    [attr.width]=\"drawingInfo.width + 'px'\"\n    [attr.height]=\"drawingInfo.height + 'px'\"\n    [ngStyle]=\"getCursorStyle()\"\n>\n    <rect (click)=\"onClickRectangle()\" />\n</svg>\n\n<svg\n    class=\"grid\"\n    *ngIf=\"gridIsActive\"\n    [ngClass]=\"{ 'stop-scrolling': modalIsDisplayed }\"\n    [attr.width]=\"drawingInfo.width\"\n    [attr.height]=\"drawingInfo.height\"\n>\n    <defs>\n        <pattern id=\"smallGrid\" [attr.width]=\"gridSize\" [attr.height]=\"gridSize\" patternUnits=\"userSpaceOnUse\">\n            <path\n                d=\"M 200 0 L 0 0 0 200\"\n                fill=\"none\"\n                stroke=\"gray\"\n                stroke-width=\"2\"\n                [attr.stroke-opacity]=\"gridOpacity\"\n            />\n        </pattern>\n        <pattern id=\"grid\" [attr.width]=\"gridSize\" [attr.height]=\"gridSize\" patternUnits=\"userSpaceOnUse\">\n            <rect width=\"200\" height=\"200\" fill=\"url(#smallGrid)\" />\n        </pattern>\n    </defs>\n    <rect\n        class=\"grid\"\n        [attr.height]=\"drawingInfo.height + 'px'\"\n        [attr.width]=\"drawingInfo.width + 'px'\"\n        fill=\"url(#grid)\"\n    />\n</svg>\n"

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/app/app.component */ "./src/app/components/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _services_drawing_modal_window_drawing_modal_window_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/drawing-modal-window/drawing-modal-window.service */ "./src/app/services/drawing-modal-window/drawing-modal-window.service.ts");
/* harmony import */ var _services_event_listener_event_listener_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/event-listener/event-listener.service */ "./src/app/services/event-listener/event-listener.service.ts");
/* harmony import */ var _services_tools_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/tools/color-tool/color-tool.service */ "./src/app/services/tools/color-tool/color-tool.service.ts");
/* harmony import */ var _services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/tools/tool-selector/tool-selector.service */ "./src/app/services/tools/tool-selector/tool-selector.service.ts");
/* harmony import */ var _services_welcome_modal_window_welcome_modal_window_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/welcome-modal-window/welcome-modal-window.service */ "./src/app/services/welcome-modal-window/welcome-modal-window.service.ts");
/* harmony import */ var _attribute_panel_attribute_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @attribute-panel/attribute-panel.component */ "./src/app/components/sidebar-tools/attribute-panel/attribute-panel.component.ts");
/* harmony import */ var _attribute_panel_brush_attributes_brush_attributes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @attribute-panel/brush-attributes/brush-attributes.component */ "./src/app/components/sidebar-tools/attribute-panel/brush-attributes/brush-attributes.component.ts");
/* harmony import */ var _attribute_panel_color_applicator_attributes_color_applicator_attributes_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @attribute-panel/color-applicator-attributes/color-applicator-attributes.component */ "./src/app/components/sidebar-tools/attribute-panel/color-applicator-attributes/color-applicator-attributes.component.ts");
/* harmony import */ var _attribute_panel_color_attributes_color_attributes_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @attribute-panel/color-attributes/color-attributes.component */ "./src/app/components/sidebar-tools/attribute-panel/color-attributes/color-attributes.component.ts");
/* harmony import */ var _attribute_panel_pencil_attributes_pencil_attributes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @attribute-panel/pencil-attributes/pencil-attributes.component */ "./src/app/components/sidebar-tools/attribute-panel/pencil-attributes/pencil-attributes.component.ts");
/* harmony import */ var _attribute_panel_rectangle_attributes_rectangle_attributes_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @attribute-panel/rectangle-attributes/rectangle-attributes.component */ "./src/app/components/sidebar-tools/attribute-panel/rectangle-attributes/rectangle-attributes.component.ts");
/* harmony import */ var _classes_pipes_labelFilter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../classes/pipes/labelFilter */ "./src/classes/pipes/labelFilter.ts");
/* harmony import */ var _classes_pipes_mySlice__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../classes/pipes/mySlice */ "./src/classes/pipes/mySlice.ts");
/* harmony import */ var _classes_pipes_nameFilter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../classes/pipes/nameFilter */ "./src/classes/pipes/nameFilter.ts");
/* harmony import */ var _classes_pipes_toTrustHtml__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../classes/pipes/toTrustHtml */ "./src/classes/pipes/toTrustHtml.ts");
/* harmony import */ var _components_color_palette_color_numeric_values_color_numeric_values_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/color-palette/color-numeric-values/color-numeric-values.component */ "./src/app/components/color-palette/color-numeric-values/color-numeric-values.component.ts");
/* harmony import */ var _components_color_palette_color_palette_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/color-palette/color-palette.component */ "./src/app/components/color-palette/color-palette.component.ts");
/* harmony import */ var _components_color_palette_color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/color-palette/color-picker/color-picker.component */ "./src/app/components/color-palette/color-picker/color-picker.component.ts");
/* harmony import */ var _components_color_palette_color_queue_color_queue_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/color-palette/color-queue/color-queue.component */ "./src/app/components/color-palette/color-queue/color-queue.component.ts");
/* harmony import */ var _components_modal_windows_drawing_modal_window_drawing_modal_window_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/modal-windows/drawing-modal-window/drawing-modal-window.component */ "./src/app/components/modal-windows/drawing-modal-window/drawing-modal-window.component.ts");
/* harmony import */ var _components_modal_windows_export_file_modal_window_export_file_modal_window_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/modal-windows/export-file-modal-window/export-file-modal-window.component */ "./src/app/components/modal-windows/export-file-modal-window/export-file-modal-window.component.ts");
/* harmony import */ var _components_modal_windows_open_file_modal_window_open_file_modal_window_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/modal-windows/open-file-modal-window/open-file-modal-window.component */ "./src/app/components/modal-windows/open-file-modal-window/open-file-modal-window.component.ts");
/* harmony import */ var _components_modal_windows_save_file_modal_window_save_file_modal_window_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/modal-windows/save-file-modal-window/save-file-modal-window.component */ "./src/app/components/modal-windows/save-file-modal-window/save-file-modal-window.component.ts");
/* harmony import */ var _components_modal_windows_welcome_modal_window_welcome_modal_window_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/modal-windows/welcome-modal-window/welcome-modal-window.component */ "./src/app/components/modal-windows/welcome-modal-window/welcome-modal-window.component.ts");
/* harmony import */ var _components_sidebar_tools_attribute_panel_dropper_attributes_dropper_attributes_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/sidebar-tools/attribute-panel/dropper-attributes/dropper-attributes.component */ "./src/app/components/sidebar-tools/attribute-panel/dropper-attributes/dropper-attributes.component.ts");
/* harmony import */ var _components_sidebar_tools_attribute_panel_ellipsis_attributes_ellipsis_attributes_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/sidebar-tools/attribute-panel/ellipsis-attributes/ellipsis-attributes.component */ "./src/app/components/sidebar-tools/attribute-panel/ellipsis-attributes/ellipsis-attributes.component.ts");
/* harmony import */ var _components_sidebar_tools_attribute_panel_eraser_attributes_eraser_attributes_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/sidebar-tools/attribute-panel/eraser-attributes/eraser-attributes.component */ "./src/app/components/sidebar-tools/attribute-panel/eraser-attributes/eraser-attributes.component.ts");
/* harmony import */ var _components_sidebar_tools_attribute_panel_fill_attributes_fill_attributes_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/sidebar-tools/attribute-panel/fill-attributes/fill-attributes.component */ "./src/app/components/sidebar-tools/attribute-panel/fill-attributes/fill-attributes.component.ts");
/* harmony import */ var _components_sidebar_tools_attribute_panel_grid_attributes_grid_attributes_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/sidebar-tools/attribute-panel/grid-attributes/grid-attributes.component */ "./src/app/components/sidebar-tools/attribute-panel/grid-attributes/grid-attributes.component.ts");
/* harmony import */ var _components_sidebar_tools_attribute_panel_line_attributes_line_attributes_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/sidebar-tools/attribute-panel/line-attributes/line-attributes.component */ "./src/app/components/sidebar-tools/attribute-panel/line-attributes/line-attributes.component.ts");
/* harmony import */ var _components_sidebar_tools_attribute_panel_magnetism_attributes_magnetism_attributes_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/sidebar-tools/attribute-panel/magnetism-attributes/magnetism-attributes.component */ "./src/app/components/sidebar-tools/attribute-panel/magnetism-attributes/magnetism-attributes.component.ts");
/* harmony import */ var _components_sidebar_tools_attribute_panel_pen_attributes_pen_attributes_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/sidebar-tools/attribute-panel/pen-attributes/pen-attributes.component */ "./src/app/components/sidebar-tools/attribute-panel/pen-attributes/pen-attributes.component.ts");
/* harmony import */ var _components_sidebar_tools_attribute_panel_polygon_attributes_polygon_attributes_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/sidebar-tools/attribute-panel/polygon-attributes/polygon-attributes.component */ "./src/app/components/sidebar-tools/attribute-panel/polygon-attributes/polygon-attributes.component.ts");
/* harmony import */ var _components_sidebar_tools_attribute_panel_quill_attributes_quill_attributes_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/sidebar-tools/attribute-panel/quill-attributes/quill-attributes.component */ "./src/app/components/sidebar-tools/attribute-panel/quill-attributes/quill-attributes.component.ts");
/* harmony import */ var _components_sidebar_tools_attribute_panel_selection_attributes_selection_attributes_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/sidebar-tools/attribute-panel/selection-attributes/selection-attributes.component */ "./src/app/components/sidebar-tools/attribute-panel/selection-attributes/selection-attributes.component.ts");
/* harmony import */ var _components_sidebar_tools_attribute_panel_spray_can_attributes_spray_can_attributes_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/sidebar-tools/attribute-panel/spray-can-attributes/spray-can-attributes.component */ "./src/app/components/sidebar-tools/attribute-panel/spray-can-attributes/spray-can-attributes.component.ts");
/* harmony import */ var _components_sidebar_tools_attribute_panel_stamp_attributes_stamp_attributes_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/sidebar-tools/attribute-panel/stamp-attributes/stamp-attributes.component */ "./src/app/components/sidebar-tools/attribute-panel/stamp-attributes/stamp-attributes.component.ts");
/* harmony import */ var _components_sidebar_tools_attribute_panel_text_attributes_text_attributes_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/sidebar-tools/attribute-panel/text-attributes/text-attributes.component */ "./src/app/components/sidebar-tools/attribute-panel/text-attributes/text-attributes.component.ts");
/* harmony import */ var _components_sidebar_tools_sidebar_tools_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/sidebar-tools/sidebar-tools.component */ "./src/app/components/sidebar-tools/sidebar-tools.component.ts");
/* harmony import */ var _components_work_zone_work_zone_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/work-zone/work-zone.component */ "./src/app/components/work-zone/work-zone.component.ts");
/* harmony import */ var _services_draw_stack_draw_stack_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./services/draw-stack/draw-stack.service */ "./src/app/services/draw-stack/draw-stack.service.ts");
/* harmony import */ var _services_server_drawing_saver_drawing_saver_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./services/server/drawing-saver/drawing-saver.service */ "./src/app/services/server/drawing-saver/drawing-saver.service.ts");
/* harmony import */ var _services_undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./services/undo-redoer/undo-redoer.service */ "./src/app/services/undo-redoer/undo-redoer.service.ts");






// *********** Angular Material ******************

// ************************************************

// *************** Services **********************





// ************************************************















// tslint:disable-next-line: max-line-length










// tslint:disable-next-line: max-line-length




// tslint:disable-next-line: max-line-length

// tslint:disable-next-line: max-line-length








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _classes_pipes_mySlice__WEBPACK_IMPORTED_MODULE_20__["MySlice"],
                _classes_pipes_labelFilter__WEBPACK_IMPORTED_MODULE_19__["LabelFilter"],
                _classes_pipes_nameFilter__WEBPACK_IMPORTED_MODULE_21__["NameFilter"],
                _classes_pipes_toTrustHtml__WEBPACK_IMPORTED_MODULE_22__["ToTrustHtmlPipe"],
                _components_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _attribute_panel_attribute_panel_component__WEBPACK_IMPORTED_MODULE_13__["AttributePanelComponent"],
                _components_work_zone_work_zone_component__WEBPACK_IMPORTED_MODULE_47__["WorkZoneComponent"],
                _components_sidebar_tools_sidebar_tools_component__WEBPACK_IMPORTED_MODULE_46__["SidebarToolsComponent"],
                _components_modal_windows_drawing_modal_window_drawing_modal_window_component__WEBPACK_IMPORTED_MODULE_27__["DrawingModalWindowComponent"],
                _components_color_palette_color_palette_component__WEBPACK_IMPORTED_MODULE_24__["ColorPaletteComponent"],
                _components_color_palette_color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_25__["ColorPickerComponent"],
                _components_modal_windows_welcome_modal_window_welcome_modal_window_component__WEBPACK_IMPORTED_MODULE_31__["WelcomeModalWindowComponent"],
                _components_color_palette_color_queue_color_queue_component__WEBPACK_IMPORTED_MODULE_26__["ColorQueueComponent"],
                _attribute_panel_pencil_attributes_pencil_attributes_component__WEBPACK_IMPORTED_MODULE_17__["PencilAttributesComponent"],
                _attribute_panel_rectangle_attributes_rectangle_attributes_component__WEBPACK_IMPORTED_MODULE_18__["RectangleAttributesComponent"],
                _attribute_panel_brush_attributes_brush_attributes_component__WEBPACK_IMPORTED_MODULE_14__["BrushAttributesComponent"],
                _attribute_panel_color_attributes_color_attributes_component__WEBPACK_IMPORTED_MODULE_16__["ColorAttributesComponent"],
                _attribute_panel_color_applicator_attributes_color_applicator_attributes_component__WEBPACK_IMPORTED_MODULE_15__["ColorApplicatorAttributesComponent"],
                _components_color_palette_color_numeric_values_color_numeric_values_component__WEBPACK_IMPORTED_MODULE_23__["ColorNumericValuesComponent"],
                _components_modal_windows_open_file_modal_window_open_file_modal_window_component__WEBPACK_IMPORTED_MODULE_29__["OpenFileModalWindowComponent"],
                _components_sidebar_tools_attribute_panel_polygon_attributes_polygon_attributes_component__WEBPACK_IMPORTED_MODULE_40__["PolygonAttributesComponent"],
                _components_sidebar_tools_attribute_panel_grid_attributes_grid_attributes_component__WEBPACK_IMPORTED_MODULE_36__["GridAttributesComponent"],
                _components_sidebar_tools_attribute_panel_line_attributes_line_attributes_component__WEBPACK_IMPORTED_MODULE_37__["LineAttributesComponent"],
                _components_sidebar_tools_attribute_panel_stamp_attributes_stamp_attributes_component__WEBPACK_IMPORTED_MODULE_44__["StampAttributesComponent"],
                _components_sidebar_tools_attribute_panel_dropper_attributes_dropper_attributes_component__WEBPACK_IMPORTED_MODULE_32__["DropperAttributesComponent"],
                _components_sidebar_tools_attribute_panel_ellipsis_attributes_ellipsis_attributes_component__WEBPACK_IMPORTED_MODULE_33__["EllipsisAttributesComponent"],
                _components_modal_windows_save_file_modal_window_save_file_modal_window_component__WEBPACK_IMPORTED_MODULE_30__["SaveFileModalWindowComponent"],
                _components_sidebar_tools_attribute_panel_selection_attributes_selection_attributes_component__WEBPACK_IMPORTED_MODULE_42__["SelectionAttributesComponent"],
                _components_modal_windows_export_file_modal_window_export_file_modal_window_component__WEBPACK_IMPORTED_MODULE_28__["ExportFileModalWindowComponent"],
                _components_sidebar_tools_attribute_panel_pen_attributes_pen_attributes_component__WEBPACK_IMPORTED_MODULE_39__["PenAttributesComponent"],
                _components_sidebar_tools_attribute_panel_text_attributes_text_attributes_component__WEBPACK_IMPORTED_MODULE_45__["TextAttributesComponent"],
                _components_sidebar_tools_attribute_panel_eraser_attributes_eraser_attributes_component__WEBPACK_IMPORTED_MODULE_34__["EraserAttributesComponent"],
                _components_sidebar_tools_attribute_panel_fill_attributes_fill_attributes_component__WEBPACK_IMPORTED_MODULE_35__["FillAttributesComponent"],
                _components_sidebar_tools_attribute_panel_magnetism_attributes_magnetism_attributes_component__WEBPACK_IMPORTED_MODULE_38__["MagnetismAttributesComponent"],
                _components_sidebar_tools_attribute_panel_quill_attributes_quill_attributes_component__WEBPACK_IMPORTED_MODULE_41__["QuillAttributesComponent"],
                _components_sidebar_tools_attribute_panel_spray_can_attributes_spray_can_attributes_component__WEBPACK_IMPORTED_MODULE_43__["SprayCanAttributesComponent"],
            ],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
            ],
            entryComponents: [
                _components_modal_windows_welcome_modal_window_welcome_modal_window_component__WEBPACK_IMPORTED_MODULE_31__["WelcomeModalWindowComponent"],
                _components_modal_windows_drawing_modal_window_drawing_modal_window_component__WEBPACK_IMPORTED_MODULE_27__["DrawingModalWindowComponent"],
                _components_modal_windows_open_file_modal_window_open_file_modal_window_component__WEBPACK_IMPORTED_MODULE_29__["OpenFileModalWindowComponent"],
                _components_modal_windows_save_file_modal_window_save_file_modal_window_component__WEBPACK_IMPORTED_MODULE_30__["SaveFileModalWindowComponent"],
                _components_modal_windows_export_file_modal_window_export_file_modal_window_component__WEBPACK_IMPORTED_MODULE_28__["ExportFileModalWindowComponent"],
            ],
            providers: [
                _services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_11__["ToolSelectorService"],
                _services_drawing_modal_window_drawing_modal_window_service__WEBPACK_IMPORTED_MODULE_8__["DrawingModalWindowService"],
                _services_welcome_modal_window_welcome_modal_window_service__WEBPACK_IMPORTED_MODULE_12__["WelcomeModalWindowService"],
                _services_tools_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_10__["ColorToolService"],
                _services_event_listener_event_listener_service__WEBPACK_IMPORTED_MODULE_9__["EventListenerService"],
                _services_draw_stack_draw_stack_service__WEBPACK_IMPORTED_MODULE_48__["DrawStackService"],
                _services_server_drawing_saver_drawing_saver_service__WEBPACK_IMPORTED_MODULE_49__["DrawingSaverService"],
                _services_undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_50__["UndoRedoerService"],
            ],
            bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app/app.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/app/app.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/app/app.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/modal-manager/modal-manager.service */ "./src/app/services/modal-manager/modal-manager.service.ts");
/* harmony import */ var _components_modal_windows_welcome_modal_window_welcome_modal_window_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/modal-windows/welcome-modal-window/welcome-modal-window.component */ "./src/app/components/modal-windows/welcome-modal-window/welcome-modal-window.component.ts");
/* harmony import */ var _services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/shortcut-manager/shortcut-manager.service */ "./src/app/services/shortcut-manager/shortcut-manager.service.ts");
/* harmony import */ var _services_welcome_modal_window_welcome_modal_window_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/welcome-modal-window/welcome-modal-window.service */ "./src/app/services/welcome-modal-window/welcome-modal-window.service.ts");







var AppComponent = /** @class */ (function () {
    function AppComponent(welcomeModalWindowService, dialog, shortcutManagerService, modalManagerService) {
        this.welcomeModalWindowService = welcomeModalWindowService;
        this.dialog = dialog;
        this.shortcutManagerService = shortcutManagerService;
        this.modalManagerService = modalManagerService;
        this.displayWelcomeModalWindow = false;
        this.modalIsDisplayed = false;
        this.isOnInput = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modalManagerService.currentModalIsDisplayed.subscribe(function (modalIsDisplayed) {
            _this.modalIsDisplayed = modalIsDisplayed;
        });
        this.shortcutManagerService.currentIsOnInput.subscribe(function (isOnInput) {
            _this.isOnInput = isOnInput;
        });
        this.displayWelcomeModalWindow = this.welcomeModalWindowService.getValueFromLocalStorage();
        if (!this.modalIsDisplayed) {
            this.openWelcomeModalWindow();
        }
    };
    AppComponent.prototype.openWelcomeModalWindow = function () {
        var _this = this;
        if (this.displayWelcomeModalWindow) {
            var dialogRef = this.dialog.open(_components_modal_windows_welcome_modal_window_welcome_modal_window_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeModalWindowComponent"], {
                panelClass: 'myapp-max-width-dialog',
                disableClose: true,
                autoFocus: false,
            });
            this.modalManagerService.setModalIsDisplayed(true);
            dialogRef.afterClosed().subscribe(function (displayWelcomeModalWindow) {
                if (!displayWelcomeModalWindow) {
                    displayWelcomeModalWindow = displayWelcomeModalWindow.toString();
                    _this.welcomeModalWindowService.setValueToLocalStorage(displayWelcomeModalWindow);
                }
                _this.modalManagerService.setModalIsDisplayed(false);
            });
        }
    };
    AppComponent.prototype.shouldAllowShortcut = function () {
        return !this.modalIsDisplayed && !this.isOnInput;
    };
    AppComponent.prototype.onRightClick = function (event) {
        event.preventDefault();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_welcome_modal_window_welcome_modal_window_service__WEBPACK_IMPORTED_MODULE_6__["WelcomeModalWindowService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_5__["ShortcutManagerService"] },
        { type: src_app_services_modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_3__["ModalManagerService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:contextmenu', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "onRightClick", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/components/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_welcome_modal_window_welcome_modal_window_service__WEBPACK_IMPORTED_MODULE_6__["WelcomeModalWindowService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_5__["ShortcutManagerService"],
            src_app_services_modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_3__["ModalManagerService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/color-palette/color-numeric-values/color-numeric-values.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/color-palette/color-numeric-values/color-numeric-values.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".medium {\n  margin-top: 20px;\n  width: 100px;\n}\n\n.small {\n  margin: 0 5px;\n  width: 50px;\n}\n\n#form-inputs {\n  margin-left: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2NvbG9yLXBhbGV0dGUvY29sb3ItbnVtZXJpYy12YWx1ZXMvY29sb3ItbnVtZXJpYy12YWx1ZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29sb3ItcGFsZXR0ZS9jb2xvci1udW1lcmljLXZhbHVlcy9jb2xvci1udW1lcmljLXZhbHVlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNFSjs7QURDQTtFQUNJLGlCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbG9yLXBhbGV0dGUvY29sb3ItbnVtZXJpYy12YWx1ZXMvY29sb3ItbnVtZXJpYy12YWx1ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVkaXVtIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbn1cbi5zbWFsbCB7XG4gICAgbWFyZ2luOiAwIDVweDtcbiAgICB3aWR0aDogNTBweDtcbn1cblxuI2Zvcm0taW5wdXRzIHtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbn1cbiIsIi5tZWRpdW0ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5zbWFsbCB7XG4gIG1hcmdpbjogMCA1cHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4jZm9ybS1pbnB1dHMge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/color-palette/color-numeric-values/color-numeric-values.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/color-palette/color-numeric-values/color-numeric-values.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ColorNumericValuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorNumericValuesComponent", function() { return ColorNumericValuesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shortcut-manager/shortcut-manager.service */ "./src/app/services/shortcut-manager/shortcut-manager.service.ts");
/* harmony import */ var src_app_services_tools_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tools/color-tool/color-tool.service */ "./src/app/services/tools/color-tool/color-tool.service.ts");
/* harmony import */ var _constants_color_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../constants/color-constants */ "./src/constants/color-constants.ts");






var ColorNumericValuesComponent = /** @class */ (function () {
    function ColorNumericValuesComponent(formBuilder, colorToolService, shortcutManagerService) {
        this.colorToolService = colorToolService;
        this.shortcutManagerService = shortcutManagerService;
        this.previewColor = _constants_color_constants__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_WHITE"];
        this.formBuilder = formBuilder;
        this.initializeForm();
    }
    ColorNumericValuesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.colorToolService.selectedColorType.subscribe(function () {
            _this.previewColor = _this.colorToolService.getColorOnFocus();
            _this.setColorNumericValues();
        });
        this.colorToolService.previewColor.subscribe(function (previewColor) {
            _this.previewColor = previewColor;
            _this.setColorNumericValues();
        });
    };
    ColorNumericValuesComponent.prototype.initializeForm = function () {
        this.colorNumericValuesForm = this.formBuilder.group({
            hex: ['000000', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^([A-Fa-f0-9]{6}$)')]],
            R: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(255)]],
            G: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(255)]],
            B: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(255)]],
            A: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(1)]],
        });
    };
    ColorNumericValuesComponent.prototype.setColorNumericValues = function () {
        this.setHexValues();
        this.setRGBValues();
    };
    ColorNumericValuesComponent.prototype.setHexValues = function () {
        this.colorNumericValuesForm.controls.hex.setValue(this.previewColor.slice(0, 6));
    };
    ColorNumericValuesComponent.prototype.setRGBValues = function () {
        this.colorNumericValuesForm.controls.R.setValue(parseInt(this.previewColor.slice(0, 2), 16));
        this.colorNumericValuesForm.controls.G.setValue(parseInt(this.previewColor.slice(2, 4), 16));
        this.colorNumericValuesForm.controls.B.setValue(parseInt(this.previewColor.slice(4, 6), 16));
        this.colorNumericValuesForm.controls.A.setValue((parseInt(this.previewColor.slice(6, 8), 16) / 255).toFixed(1));
    };
    ColorNumericValuesComponent.prototype.onUserHexInput = function () {
        if (this.colorNumericValuesForm.valid) {
            var opacity = this.colorToolService.getPreviewColorOpacityHex();
            this.previewColor = this.colorNumericValuesForm.value.hex + opacity;
            this.setColorNumericValues();
            this.colorToolService.changePreviewColor(this.previewColor);
        }
        else {
            this.setHexValues();
        }
    };
    ColorNumericValuesComponent.prototype.onUserColorRGBInput = function () {
        var previewColor = this.colorToolService.translateRGBToHex(this.colorNumericValuesForm.value.R, this.colorNumericValuesForm.value.G, this.colorNumericValuesForm.value.B, this.colorNumericValuesForm.value.A);
        this.previewColor = previewColor;
        this.setColorNumericValues();
        this.colorToolService.changePreviewColor(this.previewColor);
    };
    ColorNumericValuesComponent.prototype.onFocus = function () {
        this.shortcutManagerService.changeIsOnInput(true);
    };
    ColorNumericValuesComponent.prototype.onFocusOut = function () {
        this.shortcutManagerService.changeIsOnInput(false);
    };
    ColorNumericValuesComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_tools_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_4__["ColorToolService"] },
        { type: src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__["ShortcutManagerService"] }
    ]; };
    ColorNumericValuesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-color-numeric-values',
            template: __webpack_require__(/*! raw-loader!./color-numeric-values.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/color-palette/color-numeric-values/color-numeric-values.component.html"),
            styles: [__webpack_require__(/*! ./color-numeric-values.component.scss */ "./src/app/components/color-palette/color-numeric-values/color-numeric-values.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_tools_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_4__["ColorToolService"],
            src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__["ShortcutManagerService"]])
    ], ColorNumericValuesComponent);
    return ColorNumericValuesComponent;
}());



/***/ }),

/***/ "./src/app/components/color-palette/color-palette.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/color-palette/color-palette.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  height: 455px;\n}\n\n#user-color {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n#user-color span {\n  width: 190px;\n}\n\n#big-color {\n  -webkit-transform: scale(1.4);\n          transform: scale(1.4);\n}\n\n.color {\n  width: 0;\n  height: 0;\n  padding: 10px;\n  border-radius: 100%;\n  border: 1px solid black;\n  margin: 5px;\n  outline: none;\n  -webkit-transition: ease-in-out 0.2s;\n  transition: ease-in-out 0.2s;\n}\n\n.color:hover:not(#bigColor) {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n\n.color:active:not(#bigColor) {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n#buttons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n#buttons button {\n  padding: 0 30px;\n  margin: 0px 10px;\n  margin-bottom: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2NvbG9yLXBhbGV0dGUvY29sb3ItcGFsZXR0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb2xvci1wYWxldHRlL2NvbG9yLXBhbGV0dGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NKOztBRENJO0VBQ0ksWUFBQTtBQ0NSOztBREdBO0VBQ0ksNkJBQUE7VUFBQSxxQkFBQTtBQ0FKOztBREdBO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFBQSw0QkFBQTtBQ0FKOztBREVBO0VBQ0ksNkJBQUE7VUFBQSxxQkFBQTtBQ0NKOztBRENBO0VBQ0ksMkJBQUE7VUFBQSxtQkFBQTtBQ0VKOztBRENBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNFSjs7QURBSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb2xvci1wYWxldHRlL2NvbG9yLXBhbGV0dGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDQ1NXB4O1xufVxuXG4jdXNlci1jb2xvciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgc3BhbiB7XG4gICAgICAgIHdpZHRoOiAxOTBweDtcbiAgICB9XG59XG5cbiNiaWctY29sb3Ige1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbn1cblxuLmNvbG9yIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4ycztcbn1cbi5jb2xvcjpob3Zlcjpub3QoI2JpZ0NvbG9yKSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuLmNvbG9yOmFjdGl2ZTpub3QoI2JpZ0NvbG9yKSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuI2J1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG59XG4iLCIjY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA0NTVweDtcbn1cblxuI3VzZXItY29sb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiN1c2VyLWNvbG9yIHNwYW4ge1xuICB3aWR0aDogMTkwcHg7XG59XG5cbiNiaWctY29sb3Ige1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG59XG5cbi5jb2xvciB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW46IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4ycztcbn1cblxuLmNvbG9yOmhvdmVyOm5vdCgjYmlnQ29sb3IpIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4uY29sb3I6YWN0aXZlOm5vdCgjYmlnQ29sb3IpIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuI2J1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiNidXR0b25zIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgbWFyZ2luOiAwcHggMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/color-palette/color-palette.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/color-palette/color-palette.component.ts ***!
  \*********************************************************************/
/*! exports provided: ColorPaletteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPaletteComponent", function() { return ColorPaletteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_tools_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tools/color-tool/color-tool.service */ "./src/app/services/tools/color-tool/color-tool.service.ts");
/* harmony import */ var src_constants_color_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants/color-constants */ "./src/constants/color-constants.ts");




var ColorPaletteComponent = /** @class */ (function () {
    function ColorPaletteComponent(colorToolService) {
        this.colorToolService = colorToolService;
        this.selectedColorType = src_constants_color_constants__WEBPACK_IMPORTED_MODULE_3__["COLOR_TYPE"].primaryColor;
        this.previewColor = src_constants_color_constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_WHITE"];
    }
    ColorPaletteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.colorToolService.previewColor.subscribe(function (previewColor) {
            _this.previewColor = previewColor;
        });
        this.colorToolService.selectedColorType.subscribe(function (selectedColorType) {
            if (selectedColorType) {
                _this.selectedColorType = selectedColorType;
                _this.previewColor = _this.colorToolService.getColorOnFocus();
            }
        });
    };
    ColorPaletteComponent.prototype.onClickColorQueueButton = function (color) {
        this.previewColor = color;
    };
    ColorPaletteComponent.prototype.onSubmit = function () {
        this.colorToolService.changeColorOnFocus(this.previewColor);
        this.colorToolService.addColorToQueue(this.previewColor);
        this.colorToolService.changeShowColorPalette(false);
        this.colorToolService.changeSelectedColorType(undefined);
    };
    ColorPaletteComponent.prototype.onCancel = function () {
        this.colorToolService.changeShowColorPalette(false);
        this.colorToolService.changeSelectedColorType(undefined);
    };
    ColorPaletteComponent.prototype.getUserColorIcon = function () {
        return {
            backgroundColor: '#' + this.previewColor,
        };
    };
    ColorPaletteComponent.ctorParameters = function () { return [
        { type: src_app_services_tools_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_2__["ColorToolService"] }
    ]; };
    ColorPaletteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-color-palette',
            template: __webpack_require__(/*! raw-loader!./color-palette.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/color-palette/color-palette.component.html"),
            styles: [__webpack_require__(/*! ./color-palette.component.scss */ "./src/app/components/color-palette/color-palette.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tools_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_2__["ColorToolService"]])
    ], ColorPaletteComponent);
    return ColorPaletteComponent;
}());



/***/ }),

/***/ "./src/app/components/color-palette/color-picker/color-picker.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/color-palette/color-picker/color-picker.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#ColorWheelContainer {\n  margin: auto;\n  margin-top: 10px;\n  width: 50%;\n  height: 200px;\n  width: 150px;\n}\n#ColorWheelContainer label {\n  position: relative;\n  left: -35px;\n  top: 10px;\n  margin-top: 20px;\n  font-size: 70%;\n  color: #999999;\n}\n#ColorWheelContainer mat-slider {\n  padding-top: 0px;\n  padding-bottom: 20px;\n  width: 150px;\n}\n#ColorWheelContainer #currentColor {\n  position: absolute;\n  display: none;\n  top: 0;\n  width: 0;\n  height: 0;\n  padding: 10px;\n  border: 1px solid #ffffff;\n  margin: 5px;\n  border-radius: 100%;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2NvbG9yLXBhbGV0dGUvY29sb3ItcGlja2VyL2NvbG9yLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb2xvci1wYWxldHRlL2NvbG9yLXBpY2tlci9jb2xvci1waWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNDSjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNDUjtBREVJO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNBUjtBREdJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb2xvci1wYWxldHRlL2NvbG9yLXBpY2tlci9jb2xvci1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjQ29sb3JXaGVlbENvbnRhaW5lciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAxNTBweDtcblxuICAgIGxhYmVsIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiAtMzVweDtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDcwJTtcbiAgICAgICAgY29sb3I6ICM5OTk5OTk7XG4gICAgfVxuXG4gICAgbWF0LXNsaWRlciB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgfVxuXG4gICAgI2N1cnJlbnRDb2xvciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG59XG4iLCIjQ29sb3JXaGVlbENvbnRhaW5lciB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuI0NvbG9yV2hlZWxDb250YWluZXIgbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0zNXB4O1xuICB0b3A6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogNzAlO1xuICBjb2xvcjogIzk5OTk5OTtcbn1cbiNDb2xvcldoZWVsQ29udGFpbmVyIG1hdC1zbGlkZXIge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuI0NvbG9yV2hlZWxDb250YWluZXIgI2N1cnJlbnRDb2xvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/color-palette/color-picker/color-picker.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/color-palette/color-picker/color-picker.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ColorPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerComponent", function() { return ColorPickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tools_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/tools/color-tool/color-tool.service */ "./src/app/services/tools/color-tool/color-tool.service.ts");



var ColorPickerComponent = /** @class */ (function () {
    function ColorPickerComponent(colorToolService, renderer) {
        this.colorToolService = colorToolService;
        this.renderer = renderer;
        this.obscurity = 0;
    }
    ColorPickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var img = new Image();
        img.src = '../../../assets/color-wheel.png';
        this.canvas = this.canvasPicker.nativeElement;
        this.context = this.canvas.getContext('2d');
        img.onload = function () {
            _this.context.drawImage(img, 0, 0);
        };
    };
    ColorPickerComponent.prototype.onSliderChange = function (event) {
        if (event.value === null) {
            return;
        }
        this.obscurity = event.value;
        this.renderer.setStyle(this.canvasPicker.nativeElement, 'filter', 'brightness(' + (1 - this.obscurity) * 100 + '%)');
    };
    ColorPickerComponent.prototype.onCanvasClick = function (event) {
        var x = event.offsetX;
        var y = event.offsetY;
        var pixel = this.context.getImageData(x, y, 1, 1).data;
        if (this.obscurity !== 1 && pixel[0] + pixel[1] + pixel[2] + pixel[3] === 0) {
            return;
        }
        var newHex = this.colorToolService.translateRGBToHex(pixel[0] - pixel[0] * this.obscurity, pixel[1] - pixel[1] * this.obscurity, pixel[2] - pixel[2] * this.obscurity);
        var opacity = this.colorToolService.getPreviewColorOpacityHex();
        this.colorToolService.changePreviewColor(newHex + opacity);
    };
    ColorPickerComponent.ctorParameters = function () { return [
        { type: _services_tools_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_2__["ColorToolService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas_picker', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ColorPickerComponent.prototype, "canvasPicker", void 0);
    ColorPickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-color-picker',
            template: __webpack_require__(/*! raw-loader!./color-picker.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/color-palette/color-picker/color-picker.component.html"),
            styles: [__webpack_require__(/*! ./color-picker.component.scss */ "./src/app/components/color-palette/color-picker/color-picker.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tools_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_2__["ColorToolService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], ColorPickerComponent);
    return ColorPickerComponent;
}());



/***/ }),

/***/ "./src/app/components/color-palette/color-queue/color-queue.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/color-palette/color-queue/color-queue.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  color: #999999;\n  font-size: 11.2px;\n  margin: 5px 0;\n  margin-left: 40px;\n}\n\n#buttons {\n  margin-bottom: 10px;\n  margin-left: 40px;\n  height: 25px;\n}\n\n#buttons .color {\n  width: 0;\n  height: 0;\n  padding: 8px;\n  border: 1px solid #d0d0d0;\n  margin: 2px;\n  border-radius: 100%;\n  outline: none;\n  -webkit-transition: ease-in-out 0.2s;\n  transition: ease-in-out 0.2s;\n}\n\n#buttons .color:hover:not(#bigColor) {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n\n#buttons .color:active:not(#bigColor) {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2NvbG9yLXBhbGV0dGUvY29sb3ItcXVldWUvY29sb3ItcXVldWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29sb3ItcGFsZXR0ZS9jb2xvci1xdWV1ZS9jb2xvci1xdWV1ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURDSTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQUEsNEJBQUE7QUNDUjs7QURDSTtFQUNJLDZCQUFBO1VBQUEscUJBQUE7QUNDUjs7QURDSTtFQUNJLDJCQUFBO1VBQUEsbUJBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29sb3ItcGFsZXR0ZS9jb2xvci1xdWV1ZS9jb2xvci1xdWV1ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICAgIGNvbG9yOiByZ2IoMTUzLCAxNTMsIDE1Myk7XG4gICAgZm9udC1zaXplOiAxMS4ycHg7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbn1cblxuI2J1dHRvbnMge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuXG4gICAgLmNvbG9yIHtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDBkMGQwO1xuICAgICAgICBtYXJnaW46IDJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4ycztcbiAgICB9XG4gICAgLmNvbG9yOmhvdmVyOm5vdCgjYmlnQ29sb3IpIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIH1cbiAgICAuY29sb3I6YWN0aXZlOm5vdCgjYmlnQ29sb3IpIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG59XG4iLCJwIHtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGZvbnQtc2l6ZTogMTEuMnB4O1xuICBtYXJnaW46IDVweCAwO1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cblxuI2J1dHRvbnMge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuI2J1dHRvbnMgLmNvbG9yIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDBkMGQwO1xuICBtYXJnaW46IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4ycztcbn1cbiNidXR0b25zIC5jb2xvcjpob3Zlcjpub3QoI2JpZ0NvbG9yKSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cbiNidXR0b25zIC5jb2xvcjphY3RpdmU6bm90KCNiaWdDb2xvcikge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/color-palette/color-queue/color-queue.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/color-palette/color-queue/color-queue.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ColorQueueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorQueueComponent", function() { return ColorQueueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_tools_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tools/color-tool/color-tool.service */ "./src/app/services/tools/color-tool/color-tool.service.ts");



var ColorQueueComponent = /** @class */ (function () {
    function ColorQueueComponent(colorToolService) {
        this.colorToolService = colorToolService;
        this.colorQueue = [];
        this.clickedColorButton = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ColorQueueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.colorToolService.colorQueue.subscribe(function (colorQueue) {
            _this.colorQueue = colorQueue;
        });
    };
    ColorQueueComponent.prototype.onClickColorButton = function (color) {
        this.clickedColorButton.emit(color);
    };
    ColorQueueComponent.prototype.getColorIcon = function (color) {
        return { backgroundColor: '#' + color };
    };
    ColorQueueComponent.ctorParameters = function () { return [
        { type: src_app_services_tools_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_2__["ColorToolService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ColorQueueComponent.prototype, "clickedColorButton", void 0);
    ColorQueueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-color-queue',
            template: __webpack_require__(/*! raw-loader!./color-queue.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/color-palette/color-queue/color-queue.component.html"),
            styles: [__webpack_require__(/*! ./color-queue.component.scss */ "./src/app/components/color-palette/color-queue/color-queue.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tools_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_2__["ColorToolService"]])
    ], ColorQueueComponent);
    return ColorQueueComponent;
}());



/***/ }),

/***/ "./src/app/components/modal-windows/drawing-modal-window/drawing-modal-window.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/modal-windows/drawing-modal-window/drawing-modal-window.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".formGroup {\n  margin: 0 30px;\n}\n.formGroup mat-form-field {\n  width: 110px;\n  margin: 20px 10px;\n}\n.formGroup mat-form-field span {\n  color: #888888;\n  margin-right: 5px;\n}\n#userColor {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 10px;\n}\n#userColor .color {\n  margin-left: 10px;\n}\n#userColor #bigColor {\n  padding: 15px;\n}\n.color {\n  width: 0;\n  height: 0;\n  padding: 10px;\n  border: 1px solid #d0d0d0;\n  margin: 5px;\n  border-radius: 100%;\n  outline: none;\n}\n.actionButton {\n  width: 90px;\n  margin: 0px 20px;\n  margin-top: -10px;\n  margin-bottom: 20px;\n}\n#confirmation {\n  margin-bottom: 20px;\n}\n#confirmation #warning {\n  background-color: red;\n}\n#confirmation mat-error {\n  margin-bottom: 10px;\n}\n.mat-typography {\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL21vZGFsLXdpbmRvd3MvZHJhd2luZy1tb2RhbC13aW5kb3cvZHJhd2luZy1tb2RhbC13aW5kb3cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwtd2luZG93cy9kcmF3aW5nLW1vZGFsLXdpbmRvdy9kcmF3aW5nLW1vZGFsLXdpbmRvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjtBRENJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDQ1I7QURDUTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0NaO0FESUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLG1CQUFBO0FDREo7QURHSTtFQUNJLGlCQUFBO0FDRFI7QURJSTtFQUNJLGFBQUE7QUNGUjtBRE1BO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDSEo7QURNQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNISjtBRE1BO0VBQ0ksbUJBQUE7QUNISjtBREtJO0VBQ0kscUJBQUE7QUNIUjtBRE1JO0VBQ0ksbUJBQUE7QUNKUjtBRFFBO0VBQ0ksa0JBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwtd2luZG93cy9kcmF3aW5nLW1vZGFsLXdpbmRvdy9kcmF3aW5nLW1vZGFsLXdpbmRvdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtR3JvdXAge1xuICAgIG1hcmdpbjogMCAzMHB4O1xuXG4gICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICB3aWR0aDogMTEwcHg7XG4gICAgICAgIG1hcmdpbjogMjBweCAxMHB4O1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6ICM4ODg4ODg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuI3VzZXJDb2xvciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAuY29sb3Ige1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG5cbiAgICAjYmlnQ29sb3Ige1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgIH1cbn1cblxuLmNvbG9yIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDBkMGQwO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmFjdGlvbkJ1dHRvbiB7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgbWFyZ2luOiAwcHggMjBweDtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4jY29uZmlybWF0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgI3dhcm5pbmcge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgfVxuXG4gICAgbWF0LWVycm9yIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG59XG5cbi5tYXQtdHlwb2dyYXBoeSB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuIiwiLmZvcm1Hcm91cCB7XG4gIG1hcmdpbjogMCAzMHB4O1xufVxuLmZvcm1Hcm91cCBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMTBweDtcbiAgbWFyZ2luOiAyMHB4IDEwcHg7XG59XG4uZm9ybUdyb3VwIG1hdC1mb3JtLWZpZWxkIHNwYW4ge1xuICBjb2xvcjogIzg4ODg4ODtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbiN1c2VyQ29sb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbiN1c2VyQ29sb3IgLmNvbG9yIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4jdXNlckNvbG9yICNiaWdDb2xvciB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5jb2xvciB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMGQwZDA7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYWN0aW9uQnV0dG9uIHtcbiAgd2lkdGg6IDkwcHg7XG4gIG1hcmdpbjogMHB4IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4jY29uZmlybWF0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbiNjb25maXJtYXRpb24gI3dhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG4jY29uZmlybWF0aW9uIG1hdC1lcnJvciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tYXQtdHlwb2dyYXBoeSB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/modal-windows/drawing-modal-window/drawing-modal-window.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/modal-windows/drawing-modal-window/drawing-modal-window.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DrawingModalWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingModalWindowComponent", function() { return DrawingModalWindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/modal-manager/modal-manager.service */ "./src/app/services/modal-manager/modal-manager.service.ts");
/* harmony import */ var src_app_services_server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/server/drawing-loader/drawing-loader.service */ "./src/app/services/server/drawing-loader/drawing-loader.service.ts");
/* harmony import */ var src_app_services_undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/undo-redoer/undo-redoer.service */ "./src/app/services/undo-redoer/undo-redoer.service.ts");
/* harmony import */ var src_constants_color_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/constants/color-constants */ "./src/constants/color-constants.ts");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var _services_drawing_modal_window_drawing_modal_window_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/drawing-modal-window/drawing-modal-window.service */ "./src/app/services/drawing-modal-window/drawing-modal-window.service.ts");
/* harmony import */ var _services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/shortcut-manager/shortcut-manager.service */ "./src/app/services/shortcut-manager/shortcut-manager.service.ts");
/* harmony import */ var _services_tools_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/tools/color-tool/color-tool.service */ "./src/app/services/tools/color-tool/color-tool.service.ts");












var DrawingModalWindowComponent = /** @class */ (function () {
    function DrawingModalWindowComponent(formBuilder, dialogRef, drawingModalWindowService, colorToolService, shortcutManagerService, modalManagerService, drawingLoaderService, undoRedoerService) {
        this.dialogRef = dialogRef;
        this.drawingModalWindowService = drawingModalWindowService;
        this.colorToolService = colorToolService;
        this.shortcutManagerService = shortcutManagerService;
        this.modalManagerService = modalManagerService;
        this.drawingLoaderService = drawingLoaderService;
        this.undoRedoerService = undoRedoerService;
        this.emptyDrawStack = true;
        this.formBuilder = formBuilder;
    }
    DrawingModalWindowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.colorToolService.previewColor.subscribe(function (previewColor) {
            _this.previewColor = previewColor;
        });
        this.drawingLoaderService.emptyDrawStack.subscribe(function (emptyDrawStack) {
            _this.emptyDrawStack = emptyDrawStack;
        });
        this.previewColor =
            this.colorToolService.backgroundColor === undefined
                ? src_constants_color_constants__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_WHITE"]
                : this.colorToolService.backgroundColor.value;
        this.initializeForm();
    };
    DrawingModalWindowComponent.prototype.initializeForm = function () {
        this.drawingModalForm = this.formBuilder.group({
            confirm: this.emptyDrawStack,
            width: [window.innerWidth - src_constants_constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_WIDTH"], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(10000)]],
            height: [window.innerHeight, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(10000)]],
        });
    };
    DrawingModalWindowComponent.prototype.onSubmit = function () {
        this.undoRedoerService.initializeStacks();
        this.drawingModalWindowService.changeDrawingInfo(this.drawingModalForm.value.width, this.drawingModalForm.value.height, this.previewColor);
        this.drawingLoaderService.currentDrawing.next({
            svg: '',
            drawingInfo: {
                name: '',
                createdAt: 0,
                lastModified: 0,
                labels: [],
                idStack: [],
                width: 0,
                height: 0,
                color: '',
            },
        });
        this.colorToolService.changeBackgroundColor(this.previewColor);
        this.colorToolService.addColorToQueue(this.previewColor);
        this.modalManagerService.setModalIsDisplayed(false);
    };
    DrawingModalWindowComponent.prototype.onResize = function () {
        if (!this.drawingModalForm.controls.width.dirty && !this.drawingModalForm.controls.height.dirty) {
            this.drawingModalForm.controls.width.setValue(window.innerWidth - src_constants_constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_WIDTH"]);
            this.drawingModalForm.controls.height.setValue(window.innerHeight);
        }
    };
    DrawingModalWindowComponent.prototype.onCancel = function () {
        this.dialogRef.close();
        this.modalManagerService.setModalIsDisplayed(false);
    };
    DrawingModalWindowComponent.prototype.getUserColorIcon = function () {
        return { backgroundColor: '#' + this.previewColor };
    };
    DrawingModalWindowComponent.prototype.onClickColorQueueButton = function (previewColor) {
        this.previewColor = previewColor;
    };
    DrawingModalWindowComponent.prototype.onFocus = function () {
        this.shortcutManagerService.changeIsOnInput(true);
    };
    DrawingModalWindowComponent.prototype.onFocusOut = function () {
        this.shortcutManagerService.changeIsOnInput(false);
    };
    DrawingModalWindowComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: _services_drawing_modal_window_drawing_modal_window_service__WEBPACK_IMPORTED_MODULE_9__["DrawingModalWindowService"] },
        { type: _services_tools_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_11__["ColorToolService"] },
        { type: _services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_10__["ShortcutManagerService"] },
        { type: src_app_services_modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_4__["ModalManagerService"] },
        { type: src_app_services_server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_5__["DrawingLoaderService"] },
        { type: src_app_services_undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_6__["UndoRedoerService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DrawingModalWindowComponent.prototype, "onResize", null);
    DrawingModalWindowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-drawing-modal-window',
            template: __webpack_require__(/*! raw-loader!./drawing-modal-window.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/modal-windows/drawing-modal-window/drawing-modal-window.component.html"),
            styles: [__webpack_require__(/*! ./drawing-modal-window.component.scss */ "./src/app/components/modal-windows/drawing-modal-window/drawing-modal-window.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _services_drawing_modal_window_drawing_modal_window_service__WEBPACK_IMPORTED_MODULE_9__["DrawingModalWindowService"],
            _services_tools_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_11__["ColorToolService"],
            _services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_10__["ShortcutManagerService"],
            src_app_services_modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_4__["ModalManagerService"],
            src_app_services_server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_5__["DrawingLoaderService"],
            src_app_services_undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_6__["UndoRedoerService"]])
    ], DrawingModalWindowComponent);
    return DrawingModalWindowComponent;
}());



/***/ }),

/***/ "./src/app/components/modal-windows/export-file-modal-window/export-file-modal-window.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/modal-windows/export-file-modal-window/export-file-modal-window.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwtd2luZG93cy9leHBvcnQtZmlsZS1tb2RhbC13aW5kb3cvZXhwb3J0LWZpbGUtbW9kYWwtd2luZG93LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/modal-windows/export-file-modal-window/export-file-modal-window.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/modal-windows/export-file-modal-window/export-file-modal-window.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ExportFileModalWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportFileModalWindowComponent", function() { return ExportFileModalWindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/modal-manager/modal-manager.service */ "./src/app/services/modal-manager/modal-manager.service.ts");
/* harmony import */ var src_app_services_server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/server/drawing-loader/drawing-loader.service */ "./src/app/services/server/drawing-loader/drawing-loader.service.ts");
/* harmony import */ var src_app_services_tools_export_tool_export_tool_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tools/export-tool/export-tool.service */ "./src/app/services/tools/export-tool/export-tool.service.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");








var ExportFileModalWindowComponent = /** @class */ (function () {
    function ExportFileModalWindowComponent(formBuilder, dialogRef, modalManagerService, exportToolService, drawingLoaderService) {
        this.dialogRef = dialogRef;
        this.modalManagerService = modalManagerService;
        this.exportToolService = exportToolService;
        this.drawingLoaderService = drawingLoaderService;
        this.workZoneIsEmpty = true;
        this.FILE_TYPE = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["FILE_TYPE"];
        this.formBuilder = formBuilder;
    }
    ExportFileModalWindowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initializeForm();
        this.drawingLoaderService.emptyDrawStack.subscribe(function (isEmpty) {
            _this.workZoneIsEmpty = isEmpty;
        });
    };
    ExportFileModalWindowComponent.prototype.initializeForm = function () {
        this.exportFileModalForm = this.formBuilder.group({
            fileType: [src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["FILE_TYPE"].SVG],
        });
    };
    ExportFileModalWindowComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
        this.modalManagerService.setModalIsDisplayed(false);
    };
    ExportFileModalWindowComponent.prototype.onSubmit = function () {
        this.exportToolService.saveFile(this.exportFileModalForm.controls.fileType.value);
        this.closeDialog();
    };
    ExportFileModalWindowComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: src_app_services_modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_4__["ModalManagerService"] },
        { type: src_app_services_tools_export_tool_export_tool_service__WEBPACK_IMPORTED_MODULE_6__["ExportToolService"] },
        { type: src_app_services_server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_5__["DrawingLoaderService"] }
    ]; };
    ExportFileModalWindowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-export-file-modal-window',
            template: __webpack_require__(/*! raw-loader!./export-file-modal-window.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/modal-windows/export-file-modal-window/export-file-modal-window.component.html"),
            styles: [__webpack_require__(/*! ./export-file-modal-window.component.scss */ "./src/app/components/modal-windows/export-file-modal-window/export-file-modal-window.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            src_app_services_modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_4__["ModalManagerService"],
            src_app_services_tools_export_tool_export_tool_service__WEBPACK_IMPORTED_MODULE_6__["ExportToolService"],
            src_app_services_server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_5__["DrawingLoaderService"]])
    ], ExportFileModalWindowComponent);
    return ExportFileModalWindowComponent;
}());



/***/ }),

/***/ "./src/app/components/modal-windows/open-file-modal-window/open-file-modal-window.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/modal-windows/open-file-modal-window/open-file-modal-window.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep.mat-dialog-content {\n  margin: 0 !important;\n}\n\n::ng-deep.mat-list-text {\n  padding-right: 0 !important;\n}\n\n#content-wrapper {\n  display: grid;\n  grid-template-rows: minmax(428px, auto) 19px;\n}\n\n.mat-typography,\n.mat-typography-local {\n  align-self: center;\n  height: 428px;\n}\n\n.mat-typography :focus,\n.mat-typography-local :focus {\n  outline: none;\n}\n\n.mat-typography-local {\n  width: 674px;\n}\n\n.tab-content {\n  height: 600px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  overflow-x: hidden;\n}\n\n#selection-list {\n  padding: 0;\n}\n\n#selection-list ::ng-deep.mat-pseudo-checkbox {\n  display: none !important;\n}\n\n#selection-list #list-option {\n  height: 100%;\n  margin-top: 10px;\n  border: 1px solid #e1e4e8;\n  border-radius: 5px;\n}\n\n#drawing-option {\n  display: grid;\n  grid-template-columns: 130px 450px 60px;\n  grid-template-rows: minmax(50px, auto) 20px;\n}\n\n#drawing-option #drawing-name {\n  grid-column: 1/2;\n  grid-row: 1/2;\n  font-size: 14px;\n  display: -webkit-box;\n  display: flex;\n  align-self: center;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n\n#drawing-option #drawing-labels-list {\n  grid-column: 2/3;\n  grid-row: 1/2;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: left;\n          justify-content: left;\n  flex-wrap: wrap;\n  align-self: center;\n}\n\n#drawing-option #drawing-labels-list #drawing-label {\n  padding: 3px 6px;\n  margin: 3px 4px;\n  min-width: 60px;\n  font-size: 12px;\n  text-align: center;\n  border: 1px solid;\n  border-radius: 5px;\n}\n\n#drawing-option #drawing-thumbnail {\n  grid-column: 3/4;\n  grid-row: 1/3;\n  height: 60px;\n  width: 60px;\n  padding: 0;\n  display: -webkit-box;\n  display: flex;\n  align-self: center;\n}\n\n#drawing-option #drawing-created-at {\n  grid-column: 1/3;\n  grid-row: 2/3;\n  font-size: 10px;\n  line-height: 1;\n  align-self: center;\n  color: #586069;\n}\n\nmat-list-option[aria-selected=true] {\n  background: #dddddd;\n}\n\n#filters {\n  margin-top: 10px;\n  width: 626px;\n  align-self: center;\n  margin-right: 42px;\n}\n\n.filter {\n  height: 24px;\n  padding: 2px 4px 2px 40px;\n  margin: 4px 0;\n  color: #586069;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  outline: none;\n  background-image: url('search_icon.png');\n  background-repeat: no-repeat;\n  background-position: left 8px center;\n  background-size: 20px;\n}\n\n.hidden-info {\n  text-align: center;\n  color: #8f8f8f;\n}\n\n.center {\n  display: -webkit-box;\n  display: flex;\n  align-self: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n#loading-div {\n  max-height: 600px;\n  margin: 20px;\n  text-align: center;\n}\n\n#loading-div #img {\n  width: 150px;\n}\n\n.confirmation {\n  margin-top: 20px;\n}\n\n#content-local-wrapper {\n  margin-top: 20px;\n}\n\n#input-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 10px;\n}\n\n#destination-label {\n  font-size: 16px;\n  align-self: center;\n}\n\n#destination-path {\n  margin: 0 10px 0 0;\n  text-align: left;\n  padding: 2px 4px 2px 12px;\n  color: rgba(0, 0, 0, 0.87);\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n  border: 1px solid;\n  border-color: rgba(0, 0, 0, 0.12);\n  border-radius: 2px;\n  line-height: 20px;\n  font-size: 14px;\n  outline: none;\n  cursor: default;\n  width: 100%;\n  height: 24px;\n}\n\n.inputfile {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.inputfile + label {\n  color: rgba(0, 0, 0, 0.87);\n  cursor: pointer;\n}\n\n.inputfile:focus + label {\n  outline: 1px dotted #000;\n}\n\n.inputfile:focus + label,\n.inputfile + label:hover {\n  color: #ff5722;\n}\n\n::ng-deep.mat-dialog-actions {\n  margin-bottom: 0 !important;\n  min-height: 40px;\n}\n\n.fas.fa-folder {\n  font-size: 24px;\n}\n\n.submit-button-group-wrapper {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n          flex-direction: column-reverse;\n}\n\n.submit-button-group {\n  align-self: flex-end;\n}\n\n.submit-button-group #clickable {\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n#clickable {\n  cursor: pointer;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL21vZGFsLXdpbmRvd3Mvb3Blbi1maWxlLW1vZGFsLXdpbmRvdy9vcGVuLWZpbGUtbW9kYWwtd2luZG93LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21vZGFsLXdpbmRvd3Mvb3Blbi1maWxlLW1vZGFsLXdpbmRvdy9vcGVuLWZpbGUtbW9kYWwtd2luZG93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSjs7QURFQTtFQUNJLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsNENBQUE7QUNDSjs7QURFQTs7RUFFSSxrQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURDSTs7RUFDSSxhQUFBO0FDRVI7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFLSSxVQUFBO0FDSEo7O0FEREk7RUFDSSx3QkFBQTtBQ0dSOztBREVJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtBQ0RSOztBREtBO0VBQ0ksYUFBQTtFQUNBLHVDQUFBO0VBQ0EsMkNBQUE7QUNGSjs7QURJSTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUVBLGVBQUE7RUFFQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO1VBQUEsMkJBQUE7QUNKUjs7QURPSTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNOUjs7QURRUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDTlo7O0FEVUk7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtBQ1RSOztBRFlJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBRUEsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNYUjs7QURlQTtFQUNJLG1CQUFBO0FDWko7O0FEZUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDWko7O0FEZUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBRUEsY0FBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBRUEsd0NBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7QUNmSjs7QURrQkE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUNmSjs7QURrQkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNmSjs7QURrQkE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2ZKOztBRGdCSTtFQUNJLFlBQUE7QUNkUjs7QURrQkE7RUFDSSxnQkFBQTtBQ2ZKOztBRGtCQTtFQUNJLGdCQUFBO0FDZko7O0FEa0JBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQkFBQTtBQ2ZKOztBRGtCQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ2ZKOztBRGtCQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUVBLDBCQUFBO0VBRUEsd0hBQUE7RUFFQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0FDbkJKOztBRHNCQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDbkJKOztBRHNCQTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtBQ25CSjs7QURzQkE7RUFDSSx3QkFBQTtBQ25CSjs7QURzQkE7O0VBRUksY0FBQTtBQ25CSjs7QURzQkE7RUFDSSwyQkFBQTtFQUNBLGdCQUFBO0FDbkJKOztBRHNCQTtFQUNJLGVBQUE7QUNuQko7O0FEc0JBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsOEJBQUE7VUFBQSw4QkFBQTtBQ25CSjs7QURzQkE7RUFDSSxvQkFBQTtBQ25CSjs7QURvQkk7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7QUNsQlI7O0FEc0JBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0FDbkJKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC13aW5kb3dzL29wZW4tZmlsZS1tb2RhbC13aW5kb3cvb3Blbi1maWxlLW1vZGFsLXdpbmRvdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcC5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LWxpc3QtdGV4dCB7XG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4jY29udGVudC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDQyOHB4LCBhdXRvKSAxOXB4O1xufVxuXG4ubWF0LXR5cG9ncmFwaHksXG4ubWF0LXR5cG9ncmFwaHktbG9jYWwge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDQyOHB4O1xuXG4gICAgOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG59XG5cbi5tYXQtdHlwb2dyYXBoeS1sb2NhbCB7XG4gICAgd2lkdGg6IDY3NHB4O1xufVxuXG4udGFiLWNvbnRlbnQge1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbiNzZWxlY3Rpb24tbGlzdCB7XG4gICAgOjpuZy1kZWVwLm1hdC1wc2V1ZG8tY2hlY2tib3gge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgcGFkZGluZzogMDtcblxuICAgICNsaXN0LW9wdGlvbiB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcblxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTFlNGU4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxufVxuXG4jZHJhd2luZy1vcHRpb24ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMzBweCA0NTBweCA2MHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDUwcHgsIGF1dG8pIDIwcHg7XG5cbiAgICAjZHJhd2luZy1uYW1lIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgICAgICBncmlkLXJvdzogMSAvIDI7XG5cbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIH1cblxuICAgICNkcmF3aW5nLWxhYmVscy1saXN0IHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgICAgICBncmlkLXJvdzogMSAvIDI7XG5cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcblxuICAgICAgICAjZHJhd2luZy1sYWJlbCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggNnB4O1xuICAgICAgICAgICAgbWFyZ2luOiAzcHggNHB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjZHJhd2luZy10aHVtYm5haWwge1xuICAgICAgICBncmlkLWNvbHVtbjogMyAvIDQ7XG4gICAgICAgIGdyaWQtcm93OiAxIC8gMztcblxuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgI2RyYXdpbmctY3JlYXRlZC1hdCB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xuXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICM1ODYwNjk7XG4gICAgfVxufVxuXG5tYXQtbGlzdC1vcHRpb25bYXJpYS1zZWxlY3RlZD0ndHJ1ZSddIHtcbiAgICBiYWNrZ3JvdW5kOiAjZGRkZGRkO1xufVxuXG4jZmlsdGVycyB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB3aWR0aDogNjI2cHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogNDJweDtcbn1cblxuLmZpbHRlciB7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHBhZGRpbmc6IDJweCA0cHggMnB4IDQwcHg7XG4gICAgbWFyZ2luOiA0cHggMDtcblxuICAgIGNvbG9yOiAjNTg2MDY5O1xuXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QxZDVkYTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgb3V0bGluZTogbm9uZTtcblxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3NlYXJjaF9pY29uLnBuZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCA4cHggY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweDtcbn1cblxuLmhpZGRlbi1pbmZvIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM4ZjhmOGY7XG59XG5cbi5jZW50ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jbG9hZGluZy1kaXYge1xuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xuICAgIG1hcmdpbjogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgI2ltZyB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICB9XG59XG5cbi5jb25maXJtYXRpb24ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbiNjb250ZW50LWxvY2FsLXdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbiNpbnB1dC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI2Rlc3RpbmF0aW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4jZGVzdGluYXRpb24tcGF0aCB7XG4gICAgbWFyZ2luOiAwIDEwcHggMCAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMnB4IDRweCAycHggMTJweDtcblxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uaW5wdXRmaWxlIHtcbiAgICB3aWR0aDogMC4xcHg7XG4gICAgaGVpZ2h0OiAwLjFweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4uaW5wdXRmaWxlICsgbGFiZWwge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmlucHV0ZmlsZTpmb2N1cyArIGxhYmVsIHtcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkICMwMDA7XG59XG5cbi5pbnB1dGZpbGU6Zm9jdXMgKyBsYWJlbCxcbi5pbnB1dGZpbGUgKyBsYWJlbDpob3ZlciB7XG4gICAgY29sb3I6ICNmZjU3MjI7XG59XG5cbjo6bmctZGVlcC5tYXQtZGlhbG9nLWFjdGlvbnMge1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xufVxuXG4uZmFzLmZhLWZvbGRlciB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uc3VibWl0LWJ1dHRvbi1ncm91cC13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG59XG5cbi5zdWJtaXQtYnV0dG9uLWdyb3VwIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAjY2xpY2thYmxlIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG59XG5cbiNjbGlja2FibGUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbiIsIjo6bmctZGVlcC5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1saXN0LXRleHQge1xuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5cbiNjb250ZW50LXdyYXBwZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heCg0MjhweCwgYXV0bykgMTlweDtcbn1cblxuLm1hdC10eXBvZ3JhcGh5LFxuLm1hdC10eXBvZ3JhcGh5LWxvY2FsIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBoZWlnaHQ6IDQyOHB4O1xufVxuLm1hdC10eXBvZ3JhcGh5IDpmb2N1cyxcbi5tYXQtdHlwb2dyYXBoeS1sb2NhbCA6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubWF0LXR5cG9ncmFwaHktbG9jYWwge1xuICB3aWR0aDogNjc0cHg7XG59XG5cbi50YWItY29udGVudCB7XG4gIGhlaWdodDogNjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4jc2VsZWN0aW9uLWxpc3Qge1xuICBwYWRkaW5nOiAwO1xufVxuI3NlbGVjdGlvbi1saXN0IDo6bmctZGVlcC5tYXQtcHNldWRvLWNoZWNrYm94IHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuI3NlbGVjdGlvbi1saXN0ICNsaXN0LW9wdGlvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UxZTRlODtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4jZHJhd2luZy1vcHRpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEzMHB4IDQ1MHB4IDYwcHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDUwcHgsIGF1dG8pIDIwcHg7XG59XG4jZHJhd2luZy1vcHRpb24gI2RyYXdpbmctbmFtZSB7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG4gIGdyaWQtcm93OiAxLzI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4jZHJhd2luZy1vcHRpb24gI2RyYXdpbmctbGFiZWxzLWxpc3Qge1xuICBncmlkLWNvbHVtbjogMi8zO1xuICBncmlkLXJvdzogMS8yO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuI2RyYXdpbmctb3B0aW9uICNkcmF3aW5nLWxhYmVscy1saXN0ICNkcmF3aW5nLWxhYmVsIHtcbiAgcGFkZGluZzogM3B4IDZweDtcbiAgbWFyZ2luOiAzcHggNHB4O1xuICBtaW4td2lkdGg6IDYwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuI2RyYXdpbmctb3B0aW9uICNkcmF3aW5nLXRodW1ibmFpbCB7XG4gIGdyaWQtY29sdW1uOiAzLzQ7XG4gIGdyaWQtcm93OiAxLzM7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbiNkcmF3aW5nLW9wdGlvbiAjZHJhd2luZy1jcmVhdGVkLWF0IHtcbiAgZ3JpZC1jb2x1bW46IDEvMztcbiAgZ3JpZC1yb3c6IDIvMztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBjb2xvcjogIzU4NjA2OTtcbn1cblxubWF0LWxpc3Qtb3B0aW9uW2FyaWEtc2VsZWN0ZWQ9dHJ1ZV0ge1xuICBiYWNrZ3JvdW5kOiAjZGRkZGRkO1xufVxuXG4jZmlsdGVycyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiA2MjZweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDQycHg7XG59XG5cbi5maWx0ZXIge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDJweCA0cHggMnB4IDQwcHg7XG4gIG1hcmdpbjogNHB4IDA7XG4gIGNvbG9yOiAjNTg2MDY5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDFkNWRhO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zZWFyY2hfaWNvbi5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgOHB4IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xufVxuXG4uaGlkZGVuLWluZm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjOGY4ZjhmO1xufVxuXG4uY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI2xvYWRpbmctZGl2IHtcbiAgbWF4LWhlaWdodDogNjAwcHg7XG4gIG1hcmdpbjogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2xvYWRpbmctZGl2ICNpbWcge1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5jb25maXJtYXRpb24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4jY29udGVudC1sb2NhbC13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuI2lucHV0LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI2Rlc3RpbmF0aW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbiNkZXN0aW5hdGlvbi1wYXRoIHtcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAycHggNHB4IDJweCAxMnB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLmlucHV0ZmlsZSB7XG4gIHdpZHRoOiAwLjFweDtcbiAgaGVpZ2h0OiAwLjFweDtcbiAgb3BhY2l0eTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmlucHV0ZmlsZSArIGxhYmVsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmlucHV0ZmlsZTpmb2N1cyArIGxhYmVsIHtcbiAgb3V0bGluZTogMXB4IGRvdHRlZCAjMDAwO1xufVxuXG4uaW5wdXRmaWxlOmZvY3VzICsgbGFiZWwsXG4uaW5wdXRmaWxlICsgbGFiZWw6aG92ZXIge1xuICBjb2xvcjogI2ZmNTcyMjtcbn1cblxuOjpuZy1kZWVwLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogNDBweDtcbn1cblxuLmZhcy5mYS1mb2xkZXIge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5zdWJtaXQtYnV0dG9uLWdyb3VwLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbn1cblxuLnN1Ym1pdC1idXR0b24tZ3JvdXAge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cbi5zdWJtaXQtYnV0dG9uLWdyb3VwICNjbGlja2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4jY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/modal-windows/open-file-modal-window/open-file-modal-window.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/modal-windows/open-file-modal-window/open-file-modal-window.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: OpenFileModalWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenFileModalWindowComponent", function() { return OpenFileModalWindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/modal-manager/modal-manager.service */ "./src/app/services/modal-manager/modal-manager.service.ts");
/* harmony import */ var src_app_services_server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/server/drawing-loader/drawing-loader.service */ "./src/app/services/server/drawing-loader/drawing-loader.service.ts");
/* harmony import */ var src_app_services_server_file_manager_file_manager_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/server/file-manager/file-manager.service */ "./src/app/services/server/file-manager/file-manager.service.ts");
/* harmony import */ var src_app_services_undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/undo-redoer/undo-redoer.service */ "./src/app/services/undo-redoer/undo-redoer.service.ts");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");











var OpenFileModalWindowComponent = /** @class */ (function () {
    function OpenFileModalWindowComponent(formBuilder, dialogRef, modalManagerService, fileManagerService, drawingLoaderService, undoRedoerService, snackBar) {
        this.dialogRef = dialogRef;
        this.modalManagerService = modalManagerService;
        this.fileManagerService = fileManagerService;
        this.drawingLoaderService = drawingLoaderService;
        this.undoRedoerService = undoRedoerService;
        this.snackBar = snackBar;
        this.drawingsFromServer = [];
        this.SVGs = new Map([]);
        this.emptyDrawStack = true;
        this.localFileName = '';
        this.fileToLoad = null;
        this.formBuilder = formBuilder;
    }
    OpenFileModalWindowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initializeForms();
        this.isLoading = true;
        this.localFileName = '';
        this.fileManagerService
            .getAllDrawings()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (subject) {
            if (subject === undefined) {
                _this.snackBar.open('Erreur de chargement! Le serveur n\'est peut-être pas ouvert.', 'OK', {
                    duration: src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_10__["SNACKBAR_DURATION"],
                });
                _this.isLoading = false;
                return false;
            }
            else {
                return true;
            }
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (drawings) { return drawings.sort(function (a, b) { return b.drawingInfo.createdAt - a.drawingInfo.createdAt; }); }))
            .subscribe(function (drawings) {
            drawings.forEach(function (drawing) {
                _this.drawingsFromServer.push(drawing);
            });
            _this.isLoading = false;
        });
        this.drawingLoaderService.emptyDrawStack.subscribe(function (emptyDrawStack) {
            _this.emptyDrawStack = emptyDrawStack;
        });
        this.randomGifIndex = Math.floor(Math.random() * src_constants_constants__WEBPACK_IMPORTED_MODULE_9__["GIFS"].length);
    };
    OpenFileModalWindowComponent.prototype.downloadAndUpdateSVG = function (drawing, drawingInfo, url) {
        var _this = this;
        this.SVGs.set(drawingInfo.name, url);
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var blob, text;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        blob = xhr.response;
                        return [4 /*yield*/, new Response(blob).text()];
                    case 1:
                        text = _a.sent();
                        drawing.svg = this.extractInnerHTML(text);
                        return [2 /*return*/];
                }
            });
        }); };
        xhr.open('GET', 'https://cors-anywhere.herokuapp.com/' + url);
        xhr.send();
    };
    OpenFileModalWindowComponent.prototype.extractInnerHTML = function (text) {
        return text.slice(text.indexOf('>') + 1, text.indexOf('</svg>'));
    };
    OpenFileModalWindowComponent.prototype.initializeForms = function () {
        this.openFileModalForm = this.formBuilder.group({
            selectedDrawing: [[this.selectedOption], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirm: false,
        });
        this.openLocalFileModalForm = this.formBuilder.group({
            confirm: false,
        });
    };
    OpenFileModalWindowComponent.prototype.initializeUndoRedoStacks = function () {
        this.undoRedoerService.initializeStacks();
        this.undoRedoerService.fromLoader = true;
    };
    OpenFileModalWindowComponent.prototype.handleSelection = function (event) {
        this.selectedOption = event.option.selected ? event.option.value : 0;
        this.openFileModalForm.controls.selectedDrawing.setValue([this.selectedOption]);
    };
    OpenFileModalWindowComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
        this.modalManagerService.setModalIsDisplayed(false);
    };
    OpenFileModalWindowComponent.prototype.loadServerFile = function () {
        var _this = this;
        this.initializeUndoRedoStacks();
        var selectedDrawing = this.drawingsFromServer.find(function (drawing) { return drawing.drawingInfo.createdAt === _this.selectedOption; });
        this.drawingLoaderService.currentDrawing.next(selectedDrawing);
        this.closeDialog();
    };
    OpenFileModalWindowComponent.prototype.loadLocalFile = function () {
        this.initializeUndoRedoStacks();
        this.drawingLoaderService.currentDrawing.next(this.fileToLoad);
        this.closeDialog();
    };
    OpenFileModalWindowComponent.prototype.getFileToLoad = function (event) {
        var _this = this;
        var reader = new FileReader();
        var target = event.target;
        var files = target.files;
        if (files.length !== 0) {
            reader.readAsText(files[0]);
            reader.onload = function () {
                try {
                    var localFileContent = JSON.parse(reader.result);
                    _this.fileToLoad = localFileContent;
                    _this.localFileName = _this.fileToLoad.drawingInfo.name;
                }
                catch (error) {
                    _this.fileToLoad = null;
                    _this.localFileName = '';
                    _this.snackBar.open('Le fichier choisi n\'est pas valide, veuillez réessayer.', 'OK', {
                        duration: src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_10__["SNACKBAR_DURATION"],
                    });
                }
            };
        }
    };
    OpenFileModalWindowComponent.prototype.serverFormIsInvalid = function () {
        return (this.openFileModalForm.value.selectedDrawing[0] === '' ||
            (!this.emptyDrawStack && this.openFileModalForm.invalid));
    };
    OpenFileModalWindowComponent.prototype.localFormIsInvalid = function () {
        return this.localFileName === '' || (!this.emptyDrawStack && this.openLocalFileModalForm.invalid);
    };
    OpenFileModalWindowComponent.prototype.getGifSource = function () {
        return src_constants_constants__WEBPACK_IMPORTED_MODULE_9__["GIFS"][this.randomGifIndex];
    };
    OpenFileModalWindowComponent.prototype.onDelete = function () {
        var _this = this;
        var selectedDrawing = this.drawingsFromServer.find(function (drawing) { return drawing.drawingInfo.createdAt === _this.selectedOption; });
        this.fileManagerService.deleteDrawing(selectedDrawing.drawingInfo.createdAt).subscribe(function (createdAt) {
            if (createdAt === selectedDrawing.drawingInfo.createdAt) {
                _this.drawingsFromServer = _this.drawingsFromServer.filter(function (drawing) {
                    return drawing.drawingInfo.createdAt !== createdAt;
                });
                _this.snackBar.open('Suppression réussie!', 'OK', {
                    duration: src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_10__["SNACKBAR_DURATION"],
                });
            }
            else {
                _this.snackBar.open('Erreur de suppression du côté serveur!', 'OK', {
                    duration: src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_10__["SNACKBAR_DURATION"],
                });
            }
        });
    };
    OpenFileModalWindowComponent.prototype.getDimensions = function (drawingName) {
        var i = this.findIndexByName(drawingName);
        var height = this.drawingsFromServer[i].drawingInfo.height;
        var width = this.drawingsFromServer[i].drawingInfo.width;
        return [width, height];
    };
    OpenFileModalWindowComponent.prototype.getViewBox = function (drawingName) {
        var dimensions = this.getDimensions(drawingName);
        return "0 0 " + dimensions[0] + " " + dimensions[1];
    };
    OpenFileModalWindowComponent.prototype.getWidth = function (drawingName) {
        var dimensions = this.getDimensions(drawingName);
        return dimensions[0] > dimensions[1] ? '100%' : '60px';
    };
    OpenFileModalWindowComponent.prototype.getHeight = function (drawingName) {
        var dimensions = this.getDimensions(drawingName);
        return dimensions[0] < dimensions[1] ? '100%' : '60px';
    };
    OpenFileModalWindowComponent.prototype.getSVG = function (drawingName) {
        var i = this.findIndexByName(drawingName);
        return this.drawingsFromServer[i].svg;
    };
    OpenFileModalWindowComponent.prototype.findIndexByName = function (drawingName) {
        var drawing = this.drawingsFromServer.find(function (el) {
            return el.drawingInfo.name === drawingName;
        });
        return this.drawingsFromServer.indexOf(drawing);
    };
    OpenFileModalWindowComponent.prototype.unmaskAll = function () {
        this.nameFilter = '$tout';
    };
    OpenFileModalWindowComponent.prototype.convertTimeStampToDate = function (timestamp) {
        var currentTimestamp = Date.now();
        if (this.numberOfDaysBetween(timestamp, currentTimestamp) < 7) {
            var differenceInMs = currentTimestamp - timestamp;
            return 'Créé il y a ' + this.msToDaysHoursMinutes(differenceInMs);
        }
        var date = new Date(timestamp);
        var creationDate = date.getFullYear + "/" + date.getMonth + "/" + date.getDay + " \u00E0 " +
            (date.getHours + ":" + date.getMinutes + ":" + date.getSeconds + "}");
        return 'Créé le ' + creationDate;
    };
    OpenFileModalWindowComponent.prototype.numberOfDaysBetween = function (timestamp1, timestamp2) {
        var numberDaysDate1 = Math.floor(timestamp1 / src_constants_constants__WEBPACK_IMPORTED_MODULE_9__["NUMBER_OF_MS"].day);
        var numberDaysDate2 = Math.floor(timestamp2 / src_constants_constants__WEBPACK_IMPORTED_MODULE_9__["NUMBER_OF_MS"].day);
        return numberDaysDate2 - numberDaysDate1;
    };
    OpenFileModalWindowComponent.prototype.msToDaysHoursMinutes = function (differenceInMs) {
        var days = Math.floor(differenceInMs / src_constants_constants__WEBPACK_IMPORTED_MODULE_9__["NUMBER_OF_MS"].day);
        var hours = Math.floor((differenceInMs % src_constants_constants__WEBPACK_IMPORTED_MODULE_9__["NUMBER_OF_MS"].day) / src_constants_constants__WEBPACK_IMPORTED_MODULE_9__["NUMBER_OF_MS"].hours);
        var minutes = Math.floor((differenceInMs % src_constants_constants__WEBPACK_IMPORTED_MODULE_9__["NUMBER_OF_MS"].hours) / src_constants_constants__WEBPACK_IMPORTED_MODULE_9__["NUMBER_OF_MS"].minutes);
        var daysDisplay = days <= 1 ? ' jour, ' : ' jours, ';
        var hoursDisplay = hours <= 1 ? ' heure et ' : ' heures et ';
        var minutesDisplay = minutes <= 1 ? ' minute ' : ' minutes';
        return days + daysDisplay + hours + hoursDisplay + minutes + minutesDisplay;
    };
    OpenFileModalWindowComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: src_app_services_modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_5__["ModalManagerService"] },
        { type: src_app_services_server_file_manager_file_manager_service__WEBPACK_IMPORTED_MODULE_7__["FileManagerService"] },
        { type: src_app_services_server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_6__["DrawingLoaderService"] },
        { type: src_app_services_undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_8__["UndoRedoerService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
    ]; };
    OpenFileModalWindowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-open-file-modal-window',
            template: __webpack_require__(/*! raw-loader!./open-file-modal-window.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/modal-windows/open-file-modal-window/open-file-modal-window.component.html"),
            styles: [__webpack_require__(/*! ./open-file-modal-window.component.scss */ "./src/app/components/modal-windows/open-file-modal-window/open-file-modal-window.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            src_app_services_modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_5__["ModalManagerService"],
            src_app_services_server_file_manager_file_manager_service__WEBPACK_IMPORTED_MODULE_7__["FileManagerService"],
            src_app_services_server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_6__["DrawingLoaderService"],
            src_app_services_undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_8__["UndoRedoerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], OpenFileModalWindowComponent);
    return OpenFileModalWindowComponent;
}());



/***/ }),

/***/ "./src/app/components/modal-windows/save-file-modal-window/save-file-modal-window.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/modal-windows/save-file-modal-window/save-file-modal-window.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-typography,\n.mat-typography-local {\n  display: grid;\n  align-self: center;\n  padding: 15px 40px;\n}\n\n.mat-typography {\n  grid-template-columns: 140px 315px 185px;\n  grid-template-rows: 30px 10px auto 10px 30px;\n}\n\n.mat-typography-local {\n  grid-template-columns: 140px 500px;\n  grid-template-rows: 30px 20px 30px;\n}\n\n#input-description {\n  grid-column: 1/3;\n  grid-row: 3/4;\n  align-self: center;\n  font-size: 14px;\n  font-style: italic;\n  color: #ff5722;\n}\n\n.file-name-title {\n  grid-column: 1/2;\n  grid-row: 1/2;\n}\n\n.file-name-input {\n  grid-column: 2/3;\n  grid-row: 1/2;\n  width: 492px;\n}\n\n.tab-content {\n  height: 280px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  overflow-x: hidden;\n}\n\n.drawing-name-title {\n  grid-column: 1/2;\n  grid-row: 1/2;\n}\n\n.drawing-label-title {\n  grid-column: 1/2;\n  grid-row: 3/4;\n}\n\n.drawing-name-input {\n  grid-column: 2/4;\n  grid-row: 1/2;\n  width: 492px;\n}\n\n.drawing-labels-list {\n  grid-column: 2/4;\n  grid-row: 3/4;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: left;\n          justify-content: left;\n  flex-wrap: wrap;\n}\n\n.new-label-input {\n  grid-column: 2/3;\n  grid-row: 5/6;\n  width: 307px;\n}\n\n.new-label-button {\n  grid-column: 3/4;\n  grid-row: 5/6;\n  text-align: center;\n  line-height: 0;\n  margin-right: 20px;\n  padding: 0;\n}\n\n.drawing-name-title,\n.drawing-label-title,\n.file-name-title {\n  align-self: center;\n  font-size: 14px;\n}\n\n.drawing-name-input,\n.new-label-input,\n.file-name-input {\n  padding-left: 8px;\n  align-self: center;\n  margin: 0;\n  font-size: 14px;\n}\n\n.label {\n  padding: 3px 6px;\n  margin: 3px 4px;\n  min-width: 60px;\n  font-size: 12px;\n  text-align: center;\n  border-style: dashed;\n  border-radius: 5px;\n}\n\n::ng-deep.mat-dialog-actions {\n  margin-bottom: 0 !important;\n}\n\n.fas.fa-folder {\n  font-size: 24px;\n}\n\n.submit-button-group-wrapper {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n          flex-direction: column-reverse;\n}\n\n.submit-button-group {\n  align-self: flex-end;\n}\n\n.cdk-focused {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL21vZGFsLXdpbmRvd3Mvc2F2ZS1maWxlLW1vZGFsLXdpbmRvdy9zYXZlLWZpbGUtbW9kYWwtd2luZG93LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21vZGFsLXdpbmRvd3Mvc2F2ZS1maWxlLW1vZGFsLXdpbmRvdy9zYXZlLWZpbGUtbW9kYWwtd2luZG93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSx3Q0FBQTtFQUNBLDRDQUFBO0FDQ0o7O0FERUE7RUFDSSxrQ0FBQTtFQUNBLGtDQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBRUEsWUFBQTtBQ0RKOztBRElBO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FDREo7O0FESUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUVBLFlBQUE7QUNGSjs7QURLQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7RUFDQSxlQUFBO0FDSEo7O0FETUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFFQSxZQUFBO0FDSko7O0FET0E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNMSjs7QURRQTs7O0VBR0ksa0JBQUE7RUFDQSxlQUFBO0FDTEo7O0FEUUE7OztFQUdJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0xKOztBRFFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNMSjs7QURRQTtFQUNJLDJCQUFBO0FDTEo7O0FEUUE7RUFDSSxlQUFBO0FDTEo7O0FEUUE7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw4QkFBQTtVQUFBLDhCQUFBO0FDTEo7O0FEUUE7RUFDSSxvQkFBQTtBQ0xKOztBRFFBO0VBQ0ksYUFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC13aW5kb3dzL3NhdmUtZmlsZS1tb2RhbC13aW5kb3cvc2F2ZS1maWxlLW1vZGFsLXdpbmRvdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdHlwb2dyYXBoeSxcbi5tYXQtdHlwb2dyYXBoeS1sb2NhbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweCA0MHB4O1xufVxuXG4ubWF0LXR5cG9ncmFwaHkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTQwcHggMzE1cHggMTg1cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4IDEwcHggYXV0byAxMHB4IDMwcHg7XG59XG5cbi5tYXQtdHlwb2dyYXBoeS1sb2NhbCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNDBweCA1MDBweDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggMjBweCAzMHB4O1xufVxuXG4jaW5wdXQtZGVzY3JpcHRpb24ge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICBncmlkLXJvdzogMyAvIDQ7XG5cbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBjb2xvcjogI2ZmNTcyMjtcbn1cblxuLmZpbGUtbmFtZS10aXRsZSB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbn1cblxuLmZpbGUtbmFtZS1pbnB1dCB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGdyaWQtcm93OiAxIC8gMjtcblxuICAgIHdpZHRoOiA0OTJweDtcbn1cblxuLnRhYi1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDI4MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4uZHJhd2luZy1uYW1lLXRpdGxlIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xufVxuXG4uZHJhd2luZy1sYWJlbC10aXRsZSB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAzIC8gNDtcbn1cblxuLmRyYXdpbmctbmFtZS1pbnB1dCB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xuICAgIGdyaWQtcm93OiAxIC8gMjtcblxuICAgIHdpZHRoOiA0OTJweDtcbn1cblxuLmRyYXdpbmctbGFiZWxzLWxpc3Qge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcbiAgICBncmlkLXJvdzogMyAvIDQ7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5uZXctbGFiZWwtaW5wdXQge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBncmlkLXJvdzogNSAvIDY7XG5cbiAgICB3aWR0aDogMzA3cHg7XG59XG5cbi5uZXctbGFiZWwtYnV0dG9uIHtcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XG4gICAgZ3JpZC1yb3c6IDUgLyA2O1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uZHJhd2luZy1uYW1lLXRpdGxlLFxuLmRyYXdpbmctbGFiZWwtdGl0bGUsXG4uZmlsZS1uYW1lLXRpdGxlIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZHJhd2luZy1uYW1lLWlucHV0LFxuLm5ldy1sYWJlbC1pbnB1dCxcbi5maWxlLW5hbWUtaW5wdXQge1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubGFiZWwge1xuICAgIHBhZGRpbmc6IDNweCA2cHg7XG4gICAgbWFyZ2luOiAzcHggNHB4O1xuICAgIG1pbi13aWR0aDogNjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuOjpuZy1kZWVwLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG4uZmFzLmZhLWZvbGRlciB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uc3VibWl0LWJ1dHRvbi1ncm91cC13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG59XG5cbi5zdWJtaXQtYnV0dG9uLWdyb3VwIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLmNkay1mb2N1c2VkIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuIiwiLm1hdC10eXBvZ3JhcGh5LFxuLm1hdC10eXBvZ3JhcGh5LWxvY2FsIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDQwcHg7XG59XG5cbi5tYXQtdHlwb2dyYXBoeSB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTQwcHggMzE1cHggMTg1cHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzBweCAxMHB4IGF1dG8gMTBweCAzMHB4O1xufVxuXG4ubWF0LXR5cG9ncmFwaHktbG9jYWwge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE0MHB4IDUwMHB4O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggMjBweCAzMHB4O1xufVxuXG4jaW5wdXQtZGVzY3JpcHRpb24ge1xuICBncmlkLWNvbHVtbjogMS8zO1xuICBncmlkLXJvdzogMy80O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogI2ZmNTcyMjtcbn1cblxuLmZpbGUtbmFtZS10aXRsZSB7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG4gIGdyaWQtcm93OiAxLzI7XG59XG5cbi5maWxlLW5hbWUtaW5wdXQge1xuICBncmlkLWNvbHVtbjogMi8zO1xuICBncmlkLXJvdzogMS8yO1xuICB3aWR0aDogNDkycHg7XG59XG5cbi50YWItY29udGVudCB7XG4gIGhlaWdodDogMjgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4uZHJhd2luZy1uYW1lLXRpdGxlIHtcbiAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgZ3JpZC1yb3c6IDEvMjtcbn1cblxuLmRyYXdpbmctbGFiZWwtdGl0bGUge1xuICBncmlkLWNvbHVtbjogMS8yO1xuICBncmlkLXJvdzogMy80O1xufVxuXG4uZHJhd2luZy1uYW1lLWlucHV0IHtcbiAgZ3JpZC1jb2x1bW46IDIvNDtcbiAgZ3JpZC1yb3c6IDEvMjtcbiAgd2lkdGg6IDQ5MnB4O1xufVxuXG4uZHJhd2luZy1sYWJlbHMtbGlzdCB7XG4gIGdyaWQtY29sdW1uOiAyLzQ7XG4gIGdyaWQtcm93OiAzLzQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ubmV3LWxhYmVsLWlucHV0IHtcbiAgZ3JpZC1jb2x1bW46IDIvMztcbiAgZ3JpZC1yb3c6IDUvNjtcbiAgd2lkdGg6IDMwN3B4O1xufVxuXG4ubmV3LWxhYmVsLWJ1dHRvbiB7XG4gIGdyaWQtY29sdW1uOiAzLzQ7XG4gIGdyaWQtcm93OiA1LzY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmRyYXdpbmctbmFtZS10aXRsZSxcbi5kcmF3aW5nLWxhYmVsLXRpdGxlLFxuLmZpbGUtbmFtZS10aXRsZSB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZHJhd2luZy1uYW1lLWlucHV0LFxuLm5ldy1sYWJlbC1pbnB1dCxcbi5maWxlLW5hbWUtaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmxhYmVsIHtcbiAgcGFkZGluZzogM3B4IDZweDtcbiAgbWFyZ2luOiAzcHggNHB4O1xuICBtaW4td2lkdGg6IDYwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItc3R5bGU6IGRhc2hlZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG46Om5nLWRlZXAubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG4uZmFzLmZhLWZvbGRlciB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLnN1Ym1pdC1idXR0b24tZ3JvdXAtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xufVxuXG4uc3VibWl0LWJ1dHRvbi1ncm91cCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG4uY2RrLWZvY3VzZWQge1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/modal-windows/save-file-modal-window/save-file-modal-window.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/modal-windows/save-file-modal-window/save-file-modal-window.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SaveFileModalWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveFileModalWindowComponent", function() { return SaveFileModalWindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/modal-manager/modal-manager.service */ "./src/app/services/modal-manager/modal-manager.service.ts");
/* harmony import */ var src_app_services_server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/server/drawing-loader/drawing-loader.service */ "./src/app/services/server/drawing-loader/drawing-loader.service.ts");
/* harmony import */ var src_app_services_server_drawing_saver_drawing_saver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/server/drawing-saver/drawing-saver.service */ "./src/app/services/server/drawing-saver/drawing-saver.service.ts");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");










var SaveFileModalWindowComponent = /** @class */ (function () {
    function SaveFileModalWindowComponent(formBuilderServer, formBuilderLocal, dialogRef, modalManagerService, drawingSaverService, drawingLoaderService, snackBar) {
        this.dialogRef = dialogRef;
        this.modalManagerService = modalManagerService;
        this.drawingSaverService = drawingSaverService;
        this.drawingLoaderService = drawingLoaderService;
        this.snackBar = snackBar;
        this.drawingLabels = ['Art Abstrait', 'Art Contemporain', 'Expressionnisme', 'Minimalisme'];
        this.selectedLabels = [];
        this.saveFileUrl = '';
        this.filename = '';
        this.createdAt = 0;
        this.lastModified = 0;
        this.formBuilderServer = formBuilderServer;
        this.formBuilderLocal = formBuilderLocal;
    }
    SaveFileModalWindowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initializeForm();
        this.drawingLoaderService.currentDrawing.subscribe(function (currentDrawing) {
            _this.saveFileModalForm.controls.name.setValue(currentDrawing.drawingInfo.name);
            currentDrawing.drawingInfo.labels.forEach(function (label) {
                if (!_this.drawingLabels.includes(label)) {
                    _this.drawingLabels.push(label);
                }
            });
            _this.selectedLabels = Array.from(currentDrawing.drawingInfo.labels);
            _this.createdAt = currentDrawing.drawingInfo.createdAt === null ? 0 : currentDrawing.drawingInfo.createdAt;
            _this.lastModified = currentDrawing.drawingInfo.lastModified;
        });
        this.drawingSaverService.currentErrorMessage.subscribe(function (errorMessage) {
            _this.errorMessage = errorMessage;
        });
        this.isSaving = false;
    };
    SaveFileModalWindowComponent.prototype.initializeForm = function () {
        this.saveFileModalForm = this.formBuilderServer.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]],
            label: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[A-Za-z0-9àÀéÉèÈôÔîÏçÇùÙ]*')]],
        });
        this.saveFileLocalModalForm = this.formBuilderLocal.group({
            filename: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('([a-zA-Z0-9s_\\():])+(?:|.txt)$')],
            ],
        });
    };
    SaveFileModalWindowComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
        this.modalManagerService.setModalIsDisplayed(false);
    };
    SaveFileModalWindowComponent.prototype.saveToServer = function () {
        var _this = this;
        var drawingSavingInfo = {
            name: this.saveFileModalForm.value.name,
            drawingLabels: this.selectedLabels,
            createdAt: this.createdAt,
            lastModified: this.lastModified,
        };
        this.drawingSaverService.sendFileToServer(drawingSavingInfo);
        this.isSaving = true;
        this.drawingSaverService.currentIsSaved
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (subject) { return subject !== undefined; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe(function (drawingIsSaved) {
            if (drawingIsSaved) {
                _this.snackBar.open('Sauvegarde réussie!', 'OK', {
                    duration: src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_9__["SNACKBAR_DURATION"],
                });
                _this.closeDialog();
            }
            else {
                _this.snackBar.open("Sauvegarde \u00E9chou\u00E9e...\n" + _this.errorMessage, 'OK', {
                    duration: src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_9__["SNACKBAR_DURATION"],
                });
            }
            _this.isSaving = false;
            _this.drawingSaverService.currentIsSaved.next(undefined);
        });
    };
    SaveFileModalWindowComponent.prototype.saveToLocal = function () {
        if (this.drawingLoaderService.emptyDrawStack.value) {
            this.snackBar.open('Sauvegarde échouée...\nAucun dessin dans la zone de travail!', 'OK', {
                duration: src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_9__["SNACKBAR_DURATION"],
            });
            return false;
        }
        this.saveFileUrl = this.drawingSaverService.getLocalFileDownloadUrl();
        this.filename = this.saveFileLocalModalForm.value.filename;
        this.closeDialog();
        return true;
    };
    SaveFileModalWindowComponent.prototype.addLabel = function (newLabel) {
        if (this.selectedLabels.length >= src_constants_constants__WEBPACK_IMPORTED_MODULE_8__["MAX_NB_LABELS"]) {
            this.snackBar.open("Veuillez choisir au maximum " + src_constants_constants__WEBPACK_IMPORTED_MODULE_8__["MAX_NB_LABELS"] + " \u00E9tiquettes.", 'OK', {
                duration: src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_9__["SNACKBAR_DURATION"],
            });
            return;
        }
        this.drawingLabels.push(newLabel);
        this.selectedLabels.push(newLabel);
        this.saveFileModalForm.controls.label.setValue('');
    };
    SaveFileModalWindowComponent.prototype.toggleLabel = function (label) {
        this.selectedLabels.includes(label) ? this.deselect(label) : this.select(label);
    };
    SaveFileModalWindowComponent.prototype.deselect = function (label) {
        this.selectedLabels = this.selectedLabels.filter(function (selectedLabel) {
            return selectedLabel !== label;
        });
    };
    SaveFileModalWindowComponent.prototype.select = function (label) {
        this.selectedLabels.length >= src_constants_constants__WEBPACK_IMPORTED_MODULE_8__["MAX_NB_LABELS"]
            ? this.snackBar.open("Veuillez choisir au maximum " + src_constants_constants__WEBPACK_IMPORTED_MODULE_8__["MAX_NB_LABELS"] + " \u00E9tiquettes.", 'OK', {
                duration: src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_9__["SNACKBAR_DURATION"],
            })
            : this.selectedLabels.push(label);
    };
    SaveFileModalWindowComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: src_app_services_modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_5__["ModalManagerService"] },
        { type: src_app_services_server_drawing_saver_drawing_saver_service__WEBPACK_IMPORTED_MODULE_7__["DrawingSaverService"] },
        { type: src_app_services_server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_6__["DrawingLoaderService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
    ]; };
    SaveFileModalWindowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-save-file-modal-window',
            template: __webpack_require__(/*! raw-loader!./save-file-modal-window.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/modal-windows/save-file-modal-window/save-file-modal-window.component.html"),
            styles: [__webpack_require__(/*! ./save-file-modal-window.component.scss */ "./src/app/components/modal-windows/save-file-modal-window/save-file-modal-window.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            src_app_services_modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_5__["ModalManagerService"],
            src_app_services_server_drawing_saver_drawing_saver_service__WEBPACK_IMPORTED_MODULE_7__["DrawingSaverService"],
            src_app_services_server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_6__["DrawingLoaderService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], SaveFileModalWindowComponent);
    return SaveFileModalWindowComponent;
}());



/***/ }),

/***/ "./src/app/components/modal-windows/welcome-modal-window/welcome-modal-window.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/modal-windows/welcome-modal-window/welcome-modal-window.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n#user-guide-message {\n  text-align: center;\n  margin-top: 25px;\n}\n\n#user-guide-button {\n  padding: 0 6px 0 6px;\n  margin: 6px 8px 6px 12px;\n  min-width: 250px;\n  line-height: 24px;\n  border-radius: 3px;\n  border-color: white;\n  font-size: 14px;\n  text-align: center;\n  text-decoration: none;\n  outline: none;\n  background-color: #ff5722;\n  cursor: pointer;\n}\n\n#user-guide-button-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n#user-guide-button-text {\n  display: -webkit-box;\n  display: flex;\n}\n\n#user-guide-button-text p {\n  margin: 0;\n  padding: 5px;\n  color: white;\n}\n\n#question-icon {\n  margin: auto;\n  padding: 5px;\n  color: white;\n}\n\n#checkbox p {\n  font-size: 14px;\n}\n\n#start-button {\n  border-style: solid;\n  border-width: 1px;\n  border-color: #d8d8d8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL21vZGFsLXdpbmRvd3Mvd2VsY29tZS1tb2RhbC13aW5kb3cvd2VsY29tZS1tb2RhbC13aW5kb3cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwtd2luZG93cy93ZWxjb21lLW1vZGFsLXdpbmRvdy93ZWxjb21lLW1vZGFsLXdpbmRvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO1VBQUEsOEJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0FDQ0o7O0FEQ0k7RUFDSSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNDUjs7QURHQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0FKOztBRElJO0VBQ0ksZUFBQTtBQ0RSOztBREtBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGFsLXdpbmRvd3Mvd2VsY29tZS1tb2RhbC13aW5kb3cvd2VsY29tZS1tb2RhbC13aW5kb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZm9vdGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiN1c2VyLWd1aWRlLW1lc3NhZ2Uge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4jdXNlci1ndWlkZS1idXR0b24ge1xuICAgIHBhZGRpbmc6IDAgNnB4IDAgNnB4O1xuICAgIG1hcmdpbjogNnB4IDhweCA2cHggMTJweDtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTcyMjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiN1c2VyLWd1aWRlLWJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiN1c2VyLWd1aWRlLWJ1dHRvbi10ZXh0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxufVxuXG4jcXVlc3Rpb24taWNvbiB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNjaGVja2JveCB7XG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59XG5cbiNzdGFydC1idXR0b24ge1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjE2LCAyMTYsIDIxNik7XG59XG4iLCIjZm9vdGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4jdXNlci1ndWlkZS1tZXNzYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4jdXNlci1ndWlkZS1idXR0b24ge1xuICBwYWRkaW5nOiAwIDZweCAwIDZweDtcbiAgbWFyZ2luOiA2cHggOHB4IDZweCAxMnB4O1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiN1c2VyLWd1aWRlLWJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI3VzZXItZ3VpZGUtYnV0dG9uLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuI3VzZXItZ3VpZGUtYnV0dG9uLXRleHQgcCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiNxdWVzdGlvbi1pY29uIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2NoZWNrYm94IHAge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbiNzdGFydC1idXR0b24ge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiAjZDhkOGQ4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/modal-windows/welcome-modal-window/welcome-modal-window.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/modal-windows/welcome-modal-window/welcome-modal-window.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: WelcomeModalWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeModalWindowComponent", function() { return WelcomeModalWindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/modal-manager/modal-manager.service */ "./src/app/services/modal-manager/modal-manager.service.ts");




var WelcomeModalWindowComponent = /** @class */ (function () {
    function WelcomeModalWindowComponent(dialogRef, modalManagerService) {
        this.dialogRef = dialogRef;
        this.modalManagerService = modalManagerService;
        this.displayWelcomeModalWindow = false;
    }
    WelcomeModalWindowComponent.prototype.submitForm = function () {
        this.dialogRef.close(!this.displayWelcomeModalWindow);
        this.modalManagerService.setModalIsDisplayed(false);
    };
    WelcomeModalWindowComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: src_app_services_modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_3__["ModalManagerService"] }
    ]; };
    WelcomeModalWindowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome-modal-window',
            template: __webpack_require__(/*! raw-loader!./welcome-modal-window.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/modal-windows/welcome-modal-window/welcome-modal-window.component.html"),
            styles: [__webpack_require__(/*! ./welcome-modal-window.component.scss */ "./src/app/components/modal-windows/welcome-modal-window/welcome-modal-window.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_app_services_modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_3__["ModalManagerService"]])
    ], WelcomeModalWindowComponent);
    return WelcomeModalWindowComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/attribute-panel.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/attribute-panel.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 36px;\n  right: 0;\n  overflow: scroll;\n  overflow-x: hidden;\n  border-left: 1px solid #d0d0d0;\n  border-right: 2px solid #d0d0d0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n#container #color-palette {\n  margin: 30px 40px;\n}\n#container {\n  scrollbar-width: none;\n}\n#container::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL2F0dHJpYnV0ZS1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyLXRvb2xzL2F0dHJpYnV0ZS1wYW5lbC9hdHRyaWJ1dGUtcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsOEJBQUE7RUFDQSwrQkFBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNESjtBREdJO0VBQ0ksaUJBQUE7QUNEUjtBREtBO0VBQ0kscUJBQUE7QUNGSjtBRElBO0VBQ0ksYUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyLXRvb2xzL2F0dHJpYnV0ZS1wYW5lbC9hdHRyaWJ1dGUtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAzNnB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDBkMGQwO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNkMGQwZDA7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgI2NvbG9yLXBhbGV0dGUge1xuICAgICAgICBtYXJnaW46IDMwcHggNDBweDtcbiAgICB9XG59XG5cbiNjb250YWluZXIge1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbn1cbiNjb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuIiwiI2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDM2cHg7XG4gIHJpZ2h0OiAwO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2QwZDBkMDtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2QwZDBkMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuI2NvbnRhaW5lciAjY29sb3ItcGFsZXR0ZSB7XG4gIG1hcmdpbjogMzBweCA0MHB4O1xufVxuXG4jY29udGFpbmVyIHtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xufVxuXG4jY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/attribute-panel.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/attribute-panel.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AttributePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributePanelComponent", function() { return AttributePanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _services_tools_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/tools/color-tool/color-tool.service */ "./src/app/services/tools/color-tool/color-tool.service.ts");
/* harmony import */ var _services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/tools/tool-selector/tool-selector.service */ "./src/app/services/tools/tool-selector/tool-selector.service.ts");





var AttributePanelComponent = /** @class */ (function () {
    function AttributePanelComponent(toolSelectorService, colorToolService) {
        this.toolSelectorService = toolSelectorService;
        this.colorToolService = colorToolService;
        this.TOOL_NAME = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["TOOL_NAME"];
        this.showColorPalette = false;
    }
    AttributePanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.toolSelectorService.currentToolName.subscribe(function (toolName) {
            _this.currentToolName = toolName;
        });
        this.colorToolService.showColorPalette.subscribe(function (showColorPalette) {
            _this.showColorPalette = showColorPalette;
        });
    };
    AttributePanelComponent.ctorParameters = function () { return [
        { type: _services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_4__["ToolSelectorService"] },
        { type: _services_tools_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_3__["ColorToolService"] }
    ]; };
    AttributePanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-attribute-panel',
            template: __webpack_require__(/*! raw-loader!./attribute-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/attribute-panel.component.html"),
            styles: [__webpack_require__(/*! ./attribute-panel.component.scss */ "./src/app/components/sidebar-tools/attribute-panel/attribute-panel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_4__["ToolSelectorService"], _services_tools_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_3__["ColorToolService"]])
    ], AttributePanelComponent);
    return AttributePanelComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/brush-attributes/brush-attributes.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/brush-attributes/brush-attributes.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  padding: 30px 40px;\n  padding-bottom: 0px;\n}\n#container #attribute-header {\n  text-align: center;\n  font-weight: bold;\n}\n#container .attribute {\n  padding-top: 30px;\n}\n.mat-slider-horizontal {\n  width: 150px;\n}\n.small {\n  margin-left: 10px;\n  width: 25%;\n}\nimg {\n  position: relative;\n  top: 10px;\n  left: 5px;\n}\nmat-select {\n  white-space: nowrap;\n  display: inline;\n}\n.class1 {\n  background: url(\"/assets/brush1.png\") center/contain no-repeat;\n}\n.class2 {\n  background: url(\"/assets/brush2.png\") center/contain no-repeat;\n}\n.class3 {\n  background: url(\"/assets/brush3.png\") center/contain no-repeat;\n}\n.class4 {\n  background: url(\"/assets/brush4.png\") center/contain no-repeat;\n}\n.class5 {\n  background: url(\"/assets/brush5.png\") center/contain no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL2JydXNoLWF0dHJpYnV0ZXMvYnJ1c2gtYXR0cmlidXRlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyLXRvb2xzL2F0dHJpYnV0ZS1wYW5lbC9icnVzaC1hdHRyaWJ1dGVzL2JydXNoLWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURDSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNDUjtBREVJO0VBQ0ksaUJBQUE7QUNBUjtBRElBO0VBQ0ksWUFBQTtBQ0RKO0FESUE7RUFDSSxpQkFBQTtFQUNBLFVBQUE7QUNESjtBRElBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQ0RKO0FESUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUNESjtBRElBO0VBQ0ksOERBQUE7QUNESjtBRElBO0VBQ0ksOERBQUE7QUNESjtBRElBO0VBQ0ksOERBQUE7QUNESjtBRElBO0VBQ0ksOERBQUE7QUNESjtBRElBO0VBQ0ksOERBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci10b29scy9hdHRyaWJ1dGUtcGFuZWwvYnJ1c2gtYXR0cmlidXRlcy9icnVzaC1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMzBweCA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG5cbiAgICAjYXR0cmlidXRlLWhlYWRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmF0dHJpYnV0ZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIH1cbn1cblxuLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gICAgd2lkdGg6IDE1MHB4O1xufVxuXG4uc21hbGwge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHdpZHRoOiAyNSU7XG59XG5cbmltZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiA1cHg7XG59XG5cbm1hdC1zZWxlY3Qge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uY2xhc3MxIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvYnJ1c2gxLnBuZycpIGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0O1xufVxuXG4uY2xhc3MyIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvYnJ1c2gyLnBuZycpIGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0O1xufVxuXG4uY2xhc3MzIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvYnJ1c2gzLnBuZycpIGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0O1xufVxuXG4uY2xhc3M0IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvYnJ1c2g0LnBuZycpIGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0O1xufVxuXG4uY2xhc3M1IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvYnJ1c2g1LnBuZycpIGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0O1xufVxuIiwiI2NvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDMwcHggNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbiNjb250YWluZXIgI2F0dHJpYnV0ZS1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI2NvbnRhaW5lciAuYXR0cmlidXRlIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbi5tYXQtc2xpZGVyLWhvcml6b250YWwge1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5zbWFsbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMjUlO1xufVxuXG5pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogNXB4O1xufVxuXG5tYXQtc2VsZWN0IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uY2xhc3MxIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9icnVzaDEucG5nXCIpIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcbn1cblxuLmNsYXNzMiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYnJ1c2gyLnBuZ1wiKSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXQ7XG59XG5cbi5jbGFzczMge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2JydXNoMy5wbmdcIikgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xufVxuXG4uY2xhc3M0IHtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9icnVzaDQucG5nXCIpIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcbn1cblxuLmNsYXNzNSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYnJ1c2g1LnBuZ1wiKSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/brush-attributes/brush-attributes.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/brush-attributes/brush-attributes.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: BrushAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrushAttributesComponent", function() { return BrushAttributesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shortcut-manager/shortcut-manager.service */ "./src/app/services/shortcut-manager/shortcut-manager.service.ts");
/* harmony import */ var src_app_services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tools/attributes-manager/attributes-manager.service */ "./src/app/services/tools/attributes-manager/attributes-manager.service.ts");
/* harmony import */ var src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tools/tool-selector/tool-selector.service */ "./src/app/services/tools/tool-selector/tool-selector.service.ts");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");








var BrushAttributesComponent = /** @class */ (function () {
    function BrushAttributesComponent(formBuilder, attributesManagerService, toolSelectorService, shortcutManagerService) {
        this.formBuilder = formBuilder;
        this.attributesManagerService = attributesManagerService;
        this.toolSelectorService = toolSelectorService;
        this.shortcutManagerService = shortcutManagerService;
        this.toolName = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["TOOL_NAME"].Brush;
        this.styles = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["BRUSH_STYLES"];
        this.THICKNESS = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"];
        this.formBuilder = formBuilder;
    }
    BrushAttributesComponent.prototype.ngOnInit = function () {
        this.initializeForm();
        this.onThicknessChange();
    };
    BrushAttributesComponent.prototype.ngAfterViewInit = function () {
        this.brushToolService = this.toolSelectorService.getBrushTool();
        this.brushToolService.initializeAttributesManagerService(this.attributesManagerService);
    };
    BrushAttributesComponent.prototype.initializeForm = function () {
        this.brushAttributesForm = this.formBuilder.group({
            thickness: [
                src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"].Default,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"].Min), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"].Max)],
            ],
            style: [1],
        });
    };
    BrushAttributesComponent.prototype.onSliderChange = function (event) {
        if (src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["PREDICATE"].eventIsValid(event, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"])) {
            this.brushAttributesForm.controls.thickness.setValue(event.value);
            this.onThicknessChange();
        }
    };
    BrushAttributesComponent.prototype.onThicknessChange = function () {
        var thickness = this.brushAttributesForm.value.thickness;
        if (this.brushAttributesForm.controls.thickness.valid) {
            this.attributesManagerService.thickness.next(thickness);
        }
    };
    BrushAttributesComponent.prototype.change = function (style) {
        this.attributesManagerService.style.next(style);
    };
    BrushAttributesComponent.prototype.onFocus = function () {
        this.shortcutManagerService.changeIsOnInput(true);
    };
    BrushAttributesComponent.prototype.onFocusOut = function () {
        this.shortcutManagerService.changeIsOnInput(false);
    };
    BrushAttributesComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_4__["AttributesManagerService"] },
        { type: src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_5__["ToolSelectorService"] },
        { type: src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__["ShortcutManagerService"] }
    ]; };
    BrushAttributesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-brush-attributes',
            template: __webpack_require__(/*! raw-loader!./brush-attributes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/brush-attributes/brush-attributes.component.html"),
            providers: [src_app_services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_4__["AttributesManagerService"]],
            styles: [__webpack_require__(/*! ./brush-attributes.component.scss */ "./src/app/components/sidebar-tools/attribute-panel/brush-attributes/brush-attributes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_4__["AttributesManagerService"],
            src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_5__["ToolSelectorService"],
            src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__["ShortcutManagerService"]])
    ], BrushAttributesComponent);
    return BrushAttributesComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/color-applicator-attributes/color-applicator-attributes.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/color-applicator-attributes/color-applicator-attributes.component.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  padding: 30px 40px;\n  padding-bottom: 0px;\n}\n#container #attribute-header {\n  text-align: center;\n  font-weight: bold;\n}\n#tips {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL2NvbG9yLWFwcGxpY2F0b3ItYXR0cmlidXRlcy9jb2xvci1hcHBsaWNhdG9yLWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci10b29scy9hdHRyaWJ1dGUtcGFuZWwvY29sb3ItYXBwbGljYXRvci1hdHRyaWJ1dGVzL2NvbG9yLWFwcGxpY2F0b3ItYXR0cmlidXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0NSO0FER0E7RUFDSSxnQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyLXRvb2xzL2F0dHJpYnV0ZS1wYW5lbC9jb2xvci1hcHBsaWNhdG9yLWF0dHJpYnV0ZXMvY29sb3ItYXBwbGljYXRvci1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMzBweCA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG5cbiAgICAjYXR0cmlidXRlLWhlYWRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuXG4jdGlwcyB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cbiIsIiNjb250YWluZXIge1xuICBwYWRkaW5nOiAzMHB4IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4jY29udGFpbmVyICNhdHRyaWJ1dGUtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI3RpcHMge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/color-applicator-attributes/color-applicator-attributes.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/color-applicator-attributes/color-applicator-attributes.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: ColorApplicatorAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorApplicatorAttributesComponent", function() { return ColorApplicatorAttributesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tools/tool-selector/tool-selector.service */ "./src/app/services/tools/tool-selector/tool-selector.service.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");




var ColorApplicatorAttributesComponent = /** @class */ (function () {
    function ColorApplicatorAttributesComponent(toolSelectorService) {
        this.toolSelectorService = toolSelectorService;
        this.toolName = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TOOL_NAME"].ColorApplicator;
    }
    ColorApplicatorAttributesComponent.prototype.ngAfterViewInit = function () {
        this.colorApplicatorToolService = this.toolSelectorService.getColorApplicatorTool();
    };
    ColorApplicatorAttributesComponent.ctorParameters = function () { return [
        { type: src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_2__["ToolSelectorService"] }
    ]; };
    ColorApplicatorAttributesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-color-applicator-attributes',
            template: __webpack_require__(/*! raw-loader!./color-applicator-attributes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/color-applicator-attributes/color-applicator-attributes.component.html"),
            styles: [__webpack_require__(/*! ./color-applicator-attributes.component.scss */ "./src/app/components/sidebar-tools/attribute-panel/color-applicator-attributes/color-applicator-attributes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_2__["ToolSelectorService"]])
    ], ColorApplicatorAttributesComponent);
    return ColorApplicatorAttributesComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/color-attributes/color-attributes.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/color-attributes/color-attributes.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  margin: 30px 40px;\n}\n#container #userColorButtons {\n  margin-bottom: 10px;\n}\n#container #userColorButtons div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n#container #userColorButtons span {\n  width: 190px;\n}\n#container #userColorButtons .color {\n  width: 0;\n  height: 0;\n  padding: 10px;\n  border: 1px solid #d0d0d0;\n  margin: 5px;\n  border-radius: 100%;\n  outline: none;\n  -webkit-transition: ease-in-out 0.2s;\n  transition: ease-in-out 0.2s;\n}\n#container #userColorButtons .color:hover:not(#bigColor) {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n#container #userColorButtons .color:active:not(#bigColor) {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n#container #userColorButtons i {\n  padding: 0 10px;\n}\n#container #userColorButtons button {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL2NvbG9yLWF0dHJpYnV0ZXMvY29sb3ItYXR0cmlidXRlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyLXRvb2xzL2F0dHJpYnV0ZS1wYW5lbC9jb2xvci1hdHRyaWJ1dGVzL2NvbG9yLWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKO0FEQ0k7RUFDSSxtQkFBQTtBQ0NSO0FEQ1E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NaO0FERVE7RUFDSSxZQUFBO0FDQVo7QURHUTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQUEsNEJBQUE7QUNEWjtBREdRO0VBQ0ksNkJBQUE7VUFBQSxxQkFBQTtBQ0RaO0FER1E7RUFDSSwyQkFBQTtVQUFBLG1CQUFBO0FDRFo7QURJUTtFQUNJLGVBQUE7QUNGWjtBREtRO0VBQ0ksWUFBQTtBQ0haIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyLXRvb2xzL2F0dHJpYnV0ZS1wYW5lbC9jb2xvci1hdHRyaWJ1dGVzL2NvbG9yLWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDMwcHggNDBweDtcblxuICAgICN1c2VyQ29sb3JCdXR0b25zIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgICBkaXYge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgd2lkdGg6IDE5MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbG9yIHtcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMGQwZDA7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4ycztcbiAgICAgICAgfVxuICAgICAgICAuY29sb3I6aG92ZXI6bm90KCNiaWdDb2xvcikge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICB9XG4gICAgICAgIC5jb2xvcjphY3RpdmU6bm90KCNiaWdDb2xvcikge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGkge1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIiNjb250YWluZXIge1xuICBtYXJnaW46IDMwcHggNDBweDtcbn1cbiNjb250YWluZXIgI3VzZXJDb2xvckJ1dHRvbnMge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuI2NvbnRhaW5lciAjdXNlckNvbG9yQnV0dG9ucyBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiNjb250YWluZXIgI3VzZXJDb2xvckJ1dHRvbnMgc3BhbiB7XG4gIHdpZHRoOiAxOTBweDtcbn1cbiNjb250YWluZXIgI3VzZXJDb2xvckJ1dHRvbnMgLmNvbG9yIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QwZDBkMDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuMnM7XG59XG4jY29udGFpbmVyICN1c2VyQ29sb3JCdXR0b25zIC5jb2xvcjpob3Zlcjpub3QoI2JpZ0NvbG9yKSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cbiNjb250YWluZXIgI3VzZXJDb2xvckJ1dHRvbnMgLmNvbG9yOmFjdGl2ZTpub3QoI2JpZ0NvbG9yKSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4jY29udGFpbmVyICN1c2VyQ29sb3JCdXR0b25zIGkge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4jY29udGFpbmVyICN1c2VyQ29sb3JCdXR0b25zIGJ1dHRvbiB7XG4gIG1hcmdpbjogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/color-attributes/color-attributes.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/color-attributes/color-attributes.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ColorAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorAttributesComponent", function() { return ColorAttributesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_constants_color_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/constants/color-constants */ "./src/constants/color-constants.ts");
/* harmony import */ var _services_tools_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/tools/color-tool/color-tool.service */ "./src/app/services/tools/color-tool/color-tool.service.ts");




var ColorAttributesComponent = /** @class */ (function () {
    function ColorAttributesComponent(colorToolService) {
        this.colorToolService = colorToolService;
        this.backgroundColor = src_constants_color_constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_WHITE"];
        this.primaryColor = src_constants_color_constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_GRAY_0"];
        this.secondaryColor = src_constants_color_constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_GRAY_1"];
        this.selectedColorType = undefined;
    }
    ColorAttributesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.colorToolService.backgroundColor.subscribe(function (backgroundColor) {
            _this.backgroundColor = backgroundColor;
        });
        this.colorToolService.primaryColor.subscribe(function (primaryColor) {
            _this.primaryColor = primaryColor;
        });
        this.colorToolService.secondaryColor.subscribe(function (secondaryColor) {
            _this.secondaryColor = secondaryColor;
        });
        this.colorToolService.selectedColorType.subscribe(function (selectedColorType) {
            _this.selectedColorType = selectedColorType;
        });
    };
    ColorAttributesComponent.prototype.onClickBackgroundColor = function () {
        this.colorToolService.changeSelectedColorType(src_constants_color_constants__WEBPACK_IMPORTED_MODULE_2__["COLOR_TYPE"].backgroundColor);
        this.colorToolService.changeShowColorPalette(true);
    };
    ColorAttributesComponent.prototype.onClickPrimaryColor = function () {
        this.colorToolService.changeSelectedColorType(src_constants_color_constants__WEBPACK_IMPORTED_MODULE_2__["COLOR_TYPE"].primaryColor);
        this.colorToolService.changeShowColorPalette(true);
    };
    ColorAttributesComponent.prototype.onClickSecondaryColor = function () {
        this.colorToolService.changeSelectedColorType(src_constants_color_constants__WEBPACK_IMPORTED_MODULE_2__["COLOR_TYPE"].secondaryColor);
        this.colorToolService.changeShowColorPalette(true);
    };
    ColorAttributesComponent.prototype.getBackgroundColorIcon = function () {
        if (this.selectedColorType === src_constants_color_constants__WEBPACK_IMPORTED_MODULE_2__["COLOR_TYPE"].backgroundColor) {
            return {
                backgroundColor: '#' + this.backgroundColor,
                border: 'solid 1px black',
                transform: 'scale(1.3)',
            };
        }
        return {
            backgroundColor: '#' + this.backgroundColor,
        };
    };
    ColorAttributesComponent.prototype.getPrimaryColorIcon = function () {
        if (this.selectedColorType === src_constants_color_constants__WEBPACK_IMPORTED_MODULE_2__["COLOR_TYPE"].primaryColor) {
            return {
                backgroundColor: '#' + this.primaryColor,
                border: 'solid 1px black',
                transform: 'scale(1.3)',
            };
        }
        return {
            backgroundColor: '#' + this.primaryColor,
        };
    };
    ColorAttributesComponent.prototype.getSecondaryColorIcon = function () {
        if (this.selectedColorType === src_constants_color_constants__WEBPACK_IMPORTED_MODULE_2__["COLOR_TYPE"].secondaryColor) {
            return {
                backgroundColor: '#' + this.secondaryColor,
                border: 'solid 1px black',
                transform: 'scale(1.3)',
            };
        }
        return {
            backgroundColor: '#' + this.secondaryColor,
        };
    };
    ColorAttributesComponent.prototype.switchColors = function () {
        this.colorToolService.switchPrimarySecondary();
    };
    ColorAttributesComponent.ctorParameters = function () { return [
        { type: _services_tools_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_3__["ColorToolService"] }
    ]; };
    ColorAttributesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-color-attributes',
            template: __webpack_require__(/*! raw-loader!./color-attributes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/color-attributes/color-attributes.component.html"),
            styles: [__webpack_require__(/*! ./color-attributes.component.scss */ "./src/app/components/sidebar-tools/attribute-panel/color-attributes/color-attributes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tools_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_3__["ColorToolService"]])
    ], ColorAttributesComponent);
    return ColorAttributesComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/dropper-attributes/dropper-attributes.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/dropper-attributes/dropper-attributes.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  padding: 30px 40px;\n  padding-bottom: 0px;\n}\n#container #attribute-header {\n  text-align: center;\n  font-weight: bold;\n}\n#container #tips {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL2Ryb3BwZXItYXR0cmlidXRlcy9kcm9wcGVyLWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci10b29scy9hdHRyaWJ1dGUtcGFuZWwvZHJvcHBlci1hdHRyaWJ1dGVzL2Ryb3BwZXItYXR0cmlidXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0NSO0FERUk7RUFDSSxnQkFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyLXRvb2xzL2F0dHJpYnV0ZS1wYW5lbC9kcm9wcGVyLWF0dHJpYnV0ZXMvZHJvcHBlci1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMzBweCA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG5cbiAgICAjYXR0cmlidXRlLWhlYWRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgI3RpcHMge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cbn1cbiIsIiNjb250YWluZXIge1xuICBwYWRkaW5nOiAzMHB4IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4jY29udGFpbmVyICNhdHRyaWJ1dGUtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiNjb250YWluZXIgI3RpcHMge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/dropper-attributes/dropper-attributes.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/dropper-attributes/dropper-attributes.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: DropperAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropperAttributesComponent", function() { return DropperAttributesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");



var DropperAttributesComponent = /** @class */ (function () {
    function DropperAttributesComponent() {
        this.toolName = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["TOOL_NAME"].Dropper;
    }
    DropperAttributesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dropper-attributes',
            template: __webpack_require__(/*! raw-loader!./dropper-attributes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/dropper-attributes/dropper-attributes.component.html"),
            styles: [__webpack_require__(/*! ./dropper-attributes.component.scss */ "./src/app/components/sidebar-tools/attribute-panel/dropper-attributes/dropper-attributes.component.scss")]
        })
    ], DropperAttributesComponent);
    return DropperAttributesComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/ellipsis-attributes/ellipsis-attributes.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/ellipsis-attributes/ellipsis-attributes.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  padding: 30px 40px;\n  padding-bottom: 0px;\n}\n#container #attribute-header {\n  text-align: center;\n  font-weight: bold;\n}\n#container .attribute {\n  padding-top: 30px;\n}\n.mat-slider-horizontal {\n  width: 170px;\n}\n.small {\n  margin-left: 10px;\n  width: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL2VsbGlwc2lzLWF0dHJpYnV0ZXMvZWxsaXBzaXMtYXR0cmlidXRlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyLXRvb2xzL2F0dHJpYnV0ZS1wYW5lbC9lbGxpcHNpcy1hdHRyaWJ1dGVzL2VsbGlwc2lzLWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURDSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNDUjtBREVJO0VBQ0ksaUJBQUE7QUNBUjtBRElBO0VBQ0ksWUFBQTtBQ0RKO0FESUE7RUFDSSxpQkFBQTtFQUNBLFVBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci10b29scy9hdHRyaWJ1dGUtcGFuZWwvZWxsaXBzaXMtYXR0cmlidXRlcy9lbGxpcHNpcy1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMzBweCA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG5cbiAgICAjYXR0cmlidXRlLWhlYWRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmF0dHJpYnV0ZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIH1cbn1cblxuLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gICAgd2lkdGg6IDE3MHB4O1xufVxuXG4uc21hbGwge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHdpZHRoOiAyNSU7XG59XG4iLCIjY29udGFpbmVyIHtcbiAgcGFkZGluZzogMzBweCA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuI2NvbnRhaW5lciAjYXR0cmlidXRlLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jY29udGFpbmVyIC5hdHRyaWJ1dGUge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiAxNzBweDtcbn1cblxuLnNtYWxsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAyNSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/ellipsis-attributes/ellipsis-attributes.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/ellipsis-attributes/ellipsis-attributes.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: EllipsisAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisAttributesComponent", function() { return EllipsisAttributesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shortcut-manager/shortcut-manager.service */ "./src/app/services/shortcut-manager/shortcut-manager.service.ts");
/* harmony import */ var src_app_services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tools/attributes-manager/attributes-manager.service */ "./src/app/services/tools/attributes-manager/attributes-manager.service.ts");
/* harmony import */ var src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tools/tool-selector/tool-selector.service */ "./src/app/services/tools/tool-selector/tool-selector.service.ts");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");








var EllipsisAttributesComponent = /** @class */ (function () {
    function EllipsisAttributesComponent(formBuilder, toolSelectorService, shortcutManagerService) {
        this.formBuilder = formBuilder;
        this.toolSelectorService = toolSelectorService;
        this.shortcutManagerService = shortcutManagerService;
        this.toolName = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["TOOL_NAME"].Ellipsis;
        this.attributesManagerService = new src_app_services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_4__["AttributesManagerService"]();
        this.thickness = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"];
        this.formBuilder = formBuilder;
    }
    EllipsisAttributesComponent.prototype.ngOnInit = function () {
        this.initializeForm();
        this.onThicknessChange();
    };
    EllipsisAttributesComponent.prototype.ngAfterViewInit = function () {
        this.ellipsisToolService = this.toolSelectorService.getEllipsisTool();
        this.ellipsisToolService.initializeAttributesManagerService(this.attributesManagerService);
    };
    EllipsisAttributesComponent.prototype.initializeForm = function () {
        this.ellipsisAttributesForm = this.formBuilder.group({
            thickness: [
                src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"].Default,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"].Min), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"].Max)],
            ],
            traceType: ['Contour'],
        });
    };
    EllipsisAttributesComponent.prototype.onSliderChange = function (event) {
        if (src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["PREDICATE"].eventIsValid(event, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"])) {
            this.ellipsisAttributesForm.controls.thickness.setValue(event.value);
            this.onThicknessChange();
        }
    };
    EllipsisAttributesComponent.prototype.onThicknessChange = function () {
        var thickness = this.ellipsisAttributesForm.value.thickness;
        if (this.ellipsisAttributesForm.controls.thickness.valid) {
            this.attributesManagerService.thickness.next(thickness);
        }
    };
    EllipsisAttributesComponent.prototype.onTraceTypeChange = function () {
        var tracetype = this.ellipsisAttributesForm.value.traceType;
        this.attributesManagerService.traceType.next(tracetype);
    };
    EllipsisAttributesComponent.prototype.onFocus = function () {
        this.shortcutManagerService.changeIsOnInput(true);
    };
    EllipsisAttributesComponent.prototype.onFocusOut = function () {
        this.shortcutManagerService.changeIsOnInput(false);
    };
    EllipsisAttributesComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_5__["ToolSelectorService"] },
        { type: src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__["ShortcutManagerService"] }
    ]; };
    EllipsisAttributesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ellipsis-attributes',
            template: __webpack_require__(/*! raw-loader!./ellipsis-attributes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/ellipsis-attributes/ellipsis-attributes.component.html"),
            styles: [__webpack_require__(/*! ./ellipsis-attributes.component.scss */ "./src/app/components/sidebar-tools/attribute-panel/ellipsis-attributes/ellipsis-attributes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_5__["ToolSelectorService"],
            src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__["ShortcutManagerService"]])
    ], EllipsisAttributesComponent);
    return EllipsisAttributesComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/eraser-attributes/eraser-attributes.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/eraser-attributes/eraser-attributes.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  padding: 30px 40px;\n  padding-bottom: 0px;\n}\n#container #attribute-header {\n  text-align: center;\n  font-weight: bold;\n}\n#container .attribute {\n  padding-top: 30px;\n}\n.mat-slider-horizontal {\n  width: 170px;\n}\n.small {\n  margin-left: 10px;\n  width: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL2VyYXNlci1hdHRyaWJ1dGVzL2VyYXNlci1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL2VyYXNlci1hdHRyaWJ1dGVzL2VyYXNlci1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDQ1I7QURFSTtFQUNJLGlCQUFBO0FDQVI7QURJQTtFQUNJLFlBQUE7QUNESjtBRElBO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL2VyYXNlci1hdHRyaWJ1dGVzL2VyYXNlci1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMzBweCA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG5cbiAgICAjYXR0cmlidXRlLWhlYWRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmF0dHJpYnV0ZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIH1cbn1cblxuLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gICAgd2lkdGg6IDE3MHB4O1xufVxuXG4uc21hbGwge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHdpZHRoOiAyNSU7XG59XG4iLCIjY29udGFpbmVyIHtcbiAgcGFkZGluZzogMzBweCA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuI2NvbnRhaW5lciAjYXR0cmlidXRlLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jY29udGFpbmVyIC5hdHRyaWJ1dGUge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiAxNzBweDtcbn1cblxuLnNtYWxsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAyNSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/eraser-attributes/eraser-attributes.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/eraser-attributes/eraser-attributes.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: EraserAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EraserAttributesComponent", function() { return EraserAttributesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shortcut-manager/shortcut-manager.service */ "./src/app/services/shortcut-manager/shortcut-manager.service.ts");
/* harmony import */ var src_app_services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tools/attributes-manager/attributes-manager.service */ "./src/app/services/tools/attributes-manager/attributes-manager.service.ts");
/* harmony import */ var src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tools/tool-selector/tool-selector.service */ "./src/app/services/tools/tool-selector/tool-selector.service.ts");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");








var EraserAttributesComponent = /** @class */ (function () {
    function EraserAttributesComponent(formBuilder, attributesManagerService, toolSelectorService, shortcutManagerService) {
        this.formBuilder = formBuilder;
        this.attributesManagerService = attributesManagerService;
        this.toolSelectorService = toolSelectorService;
        this.shortcutManagerService = shortcutManagerService;
        this.toolName = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["TOOL_NAME"].Eraser;
        this.eraserSize = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["ERASER_SIZE"];
        this.formBuilder = formBuilder;
    }
    EraserAttributesComponent.prototype.ngOnInit = function () {
        this.initializeForm();
        this.eraserToolService = this.toolSelectorService.getEraserTool();
        this.eraserToolService.initializeAttributesManagerService(this.attributesManagerService);
    };
    EraserAttributesComponent.prototype.initializeForm = function () {
        this.eraserAttributesForm = this.formBuilder.group({
            eraserSize: [
                src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["ERASER_SIZE"].Default,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["ERASER_SIZE"].Min), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["ERASER_SIZE"].Max)],
            ],
        });
    };
    EraserAttributesComponent.prototype.onSliderChange = function (event) {
        if (src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["PREDICATE"].eventIsValid(event, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["ERASER_SIZE"])) {
            this.eraserAttributesForm.controls.eraserSize.setValue(event.value);
            this.onSizeChange();
        }
    };
    EraserAttributesComponent.prototype.onSizeChange = function () {
        var eraserSize = this.eraserAttributesForm.value.eraserSize;
        if (this.eraserAttributesForm.controls.eraserSize.valid) {
            this.attributesManagerService.eraserSize.next(eraserSize);
        }
    };
    EraserAttributesComponent.prototype.onFocus = function () {
        this.shortcutManagerService.changeIsOnInput(true);
    };
    EraserAttributesComponent.prototype.onFocusOut = function () {
        this.shortcutManagerService.changeIsOnInput(false);
    };
    EraserAttributesComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_4__["AttributesManagerService"] },
        { type: src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_5__["ToolSelectorService"] },
        { type: src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__["ShortcutManagerService"] }
    ]; };
    EraserAttributesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-eraser-attributes',
            template: __webpack_require__(/*! raw-loader!./eraser-attributes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/eraser-attributes/eraser-attributes.component.html"),
            styles: [__webpack_require__(/*! ./eraser-attributes.component.scss */ "./src/app/components/sidebar-tools/attribute-panel/eraser-attributes/eraser-attributes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_4__["AttributesManagerService"],
            src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_5__["ToolSelectorService"],
            src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__["ShortcutManagerService"]])
    ], EraserAttributesComponent);
    return EraserAttributesComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/fill-attributes/fill-attributes.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/fill-attributes/fill-attributes.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  padding: 30px 40px;\n  padding-bottom: 0px;\n}\n#container #attribute-header {\n  text-align: center;\n  font-weight: bold;\n}\n#container .attribute {\n  padding-top: 30px;\n}\n.mat-slider-horizontal {\n  width: 150px;\n}\n.small {\n  margin-left: 10px;\n  width: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL2ZpbGwtYXR0cmlidXRlcy9maWxsLWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci10b29scy9hdHRyaWJ1dGUtcGFuZWwvZmlsbC1hdHRyaWJ1dGVzL2ZpbGwtYXR0cmlidXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0NSO0FERUk7RUFDSSxpQkFBQTtBQ0FSO0FESUE7RUFDSSxZQUFBO0FDREo7QURJQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyLXRvb2xzL2F0dHJpYnV0ZS1wYW5lbC9maWxsLWF0dHJpYnV0ZXMvZmlsbC1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMzBweCA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG5cbiAgICAjYXR0cmlidXRlLWhlYWRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmF0dHJpYnV0ZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIH1cbn1cblxuLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gICAgd2lkdGg6IDE1MHB4O1xufVxuXG4uc21hbGwge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHdpZHRoOiAyNSU7XG59XG4iLCIjY29udGFpbmVyIHtcbiAgcGFkZGluZzogMzBweCA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuI2NvbnRhaW5lciAjYXR0cmlidXRlLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jY29udGFpbmVyIC5hdHRyaWJ1dGUge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLnNtYWxsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAyNSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/fill-attributes/fill-attributes.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/fill-attributes/fill-attributes.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: FillAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillAttributesComponent", function() { return FillAttributesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shortcut-manager/shortcut-manager.service */ "./src/app/services/shortcut-manager/shortcut-manager.service.ts");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/tools/attributes-manager/attributes-manager.service */ "./src/app/services/tools/attributes-manager/attributes-manager.service.ts");
/* harmony import */ var _services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/tools/tool-selector/tool-selector.service */ "./src/app/services/tools/tool-selector/tool-selector.service.ts");








var FillAttributesComponent = /** @class */ (function () {
    function FillAttributesComponent(formBuilder, toolSelectorService, shortcutManagerService) {
        this.formBuilder = formBuilder;
        this.toolSelectorService = toolSelectorService;
        this.shortcutManagerService = shortcutManagerService;
        this.toolName = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["TOOL_NAME"].Fill;
        this.attributesManagerService = new _services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_6__["AttributesManagerService"]();
        this.THICKNESS = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["THICKNESS"];
        this.TOLERANCE = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["TOLERANCE"];
        this.formBuilder = formBuilder;
    }
    FillAttributesComponent.prototype.ngOnInit = function () {
        this.initializeForm();
        this.onThicknessChange();
    };
    FillAttributesComponent.prototype.ngAfterViewInit = function () {
        this.fillToolService = this.toolSelectorService.getFillTool();
        this.fillToolService.initializeAttributesManagerService(this.attributesManagerService);
    };
    FillAttributesComponent.prototype.initializeForm = function () {
        this.fillAttributesForm = this.formBuilder.group({
            thickness: [
                src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["THICKNESS"].Default,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["THICKNESS"].Min), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["THICKNESS"].Max)],
            ],
            tolerance: [
                src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["TOLERANCE"].Default,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["TOLERANCE"].Min), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["TOLERANCE"].Max)],
            ],
            traceType: ['Contour'],
        });
    };
    FillAttributesComponent.prototype.onThicknessSliderChange = function (event) {
        if (src_constants_constants__WEBPACK_IMPORTED_MODULE_4__["PREDICATE"].eventIsValid(event, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["THICKNESS"])) {
            this.fillAttributesForm.controls.thickness.setValue(event.value);
            this.onThicknessChange();
        }
    };
    FillAttributesComponent.prototype.onToleranceSliderChange = function (event) {
        if (src_constants_constants__WEBPACK_IMPORTED_MODULE_4__["PREDICATE"].eventIsValid(event, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["TOLERANCE"])) {
            this.fillAttributesForm.controls.tolerance.setValue(event.value);
            this.onToleranceChange();
        }
    };
    FillAttributesComponent.prototype.onThicknessChange = function () {
        var thickness = this.fillAttributesForm.value.thickness;
        if (this.fillAttributesForm.controls.thickness.valid) {
            this.attributesManagerService.thickness.next(thickness);
        }
    };
    FillAttributesComponent.prototype.onToleranceChange = function () {
        var tolerance = this.fillAttributesForm.value.tolerance;
        if (this.fillAttributesForm.controls.tolerance.valid) {
            this.attributesManagerService.tolerance.next(tolerance);
        }
    };
    FillAttributesComponent.prototype.onTraceTypeChange = function () {
        var tracetype = this.fillAttributesForm.value.traceType;
        this.attributesManagerService.traceType.next(tracetype);
    };
    FillAttributesComponent.prototype.onFocus = function () {
        this.shortcutManagerService.changeIsOnInput(true);
    };
    FillAttributesComponent.prototype.onFocusOut = function () {
        this.shortcutManagerService.changeIsOnInput(false);
    };
    FillAttributesComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_7__["ToolSelectorService"] },
        { type: src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__["ShortcutManagerService"] }
    ]; };
    FillAttributesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fill-attributes',
            template: __webpack_require__(/*! raw-loader!./fill-attributes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/fill-attributes/fill-attributes.component.html"),
            styles: [__webpack_require__(/*! ./fill-attributes.component.scss */ "./src/app/components/sidebar-tools/attribute-panel/fill-attributes/fill-attributes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_7__["ToolSelectorService"],
            src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__["ShortcutManagerService"]])
    ], FillAttributesComponent);
    return FillAttributesComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/grid-attributes/grid-attributes.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/grid-attributes/grid-attributes.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  padding: 30px 40px;\n  padding-bottom: 0px;\n}\n#container #attribute-header {\n  text-align: center;\n  font-weight: bold;\n}\n#container .attribute {\n  padding-top: 30px;\n}\n.mat-slider-horizontal {\n  width: 170px;\n}\n.small {\n  margin-left: 10px;\n  width: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL2dyaWQtYXR0cmlidXRlcy9ncmlkLWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci10b29scy9hdHRyaWJ1dGUtcGFuZWwvZ3JpZC1hdHRyaWJ1dGVzL2dyaWQtYXR0cmlidXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0NSO0FERUk7RUFDSSxpQkFBQTtBQ0FSO0FESUE7RUFDSSxZQUFBO0FDREo7QURJQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyLXRvb2xzL2F0dHJpYnV0ZS1wYW5lbC9ncmlkLWF0dHJpYnV0ZXMvZ3JpZC1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMzBweCA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG5cbiAgICAjYXR0cmlidXRlLWhlYWRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmF0dHJpYnV0ZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIH1cbn1cblxuLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gICAgd2lkdGg6IDE3MHB4O1xufVxuXG4uc21hbGwge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHdpZHRoOiAyNSU7XG59XG4iLCIjY29udGFpbmVyIHtcbiAgcGFkZGluZzogMzBweCA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuI2NvbnRhaW5lciAjYXR0cmlidXRlLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jY29udGFpbmVyIC5hdHRyaWJ1dGUge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiAxNzBweDtcbn1cblxuLnNtYWxsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAyNSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/grid-attributes/grid-attributes.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/grid-attributes/grid-attributes.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: GridAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridAttributesComponent", function() { return GridAttributesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/server/drawing-loader/drawing-loader.service */ "./src/app/services/server/drawing-loader/drawing-loader.service.ts");
/* harmony import */ var src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shortcut-manager/shortcut-manager.service */ "./src/app/services/shortcut-manager/shortcut-manager.service.ts");
/* harmony import */ var src_app_services_tools_grid_tool_grid_tool_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tools/grid-tool/grid-tool.service */ "./src/app/services/tools/grid-tool/grid-tool.service.ts");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");








var GridAttributesComponent = /** @class */ (function () {
    function GridAttributesComponent(formBuilder, shortcutManagerService, gridToolService, drawingLoaderService) {
        this.formBuilder = formBuilder;
        this.shortcutManagerService = shortcutManagerService;
        this.gridToolService = gridToolService;
        this.drawingLoaderService = drawingLoaderService;
        this.toolName = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["TOOL_NAME"].Grid;
        this.gridSize = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["GRID_SIZE"];
        this.gridOpacity = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["GRID_OPACITY"];
        this.formBuilder = formBuilder;
    }
    GridAttributesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initializeForm();
        this.onSizeChange();
        this.gridToolService.currentState.subscribe(function (state) {
            _this.gridAttributesForm.controls.state.setValue(state);
        });
        this.gridToolService.currentSize.subscribe(function (size) {
            _this.gridAttributesForm.controls.size.setValue(size);
        });
        this.drawingLoaderService.untouchedWorkZone.subscribe(function () {
            _this.enableSlider();
        });
    };
    GridAttributesComponent.prototype.initializeForm = function () {
        this.gridAttributesForm = this.formBuilder.group({
            state: [{ value: false, disabled: true }],
            size: [
                src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["GRID_SIZE"].Default,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["GRID_SIZE"].Min), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["GRID_SIZE"].Max)],
            ],
            opacity: [
                src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["GRID_OPACITY"].Max,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["GRID_OPACITY"].Min), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["GRID_OPACITY"].Max)],
            ],
        });
    };
    GridAttributesComponent.prototype.onSizeSliderChange = function (event) {
        if (src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["PREDICATE"].eventIsValid(event, this.gridSize)) {
            this.gridAttributesForm.controls.size.setValue(event.value);
            this.onSizeChange();
        }
    };
    GridAttributesComponent.prototype.onOpacitySliderChange = function (event) {
        if (src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["PREDICATE"].eventIsValid(event, this.gridOpacity)) {
            this.gridAttributesForm.controls.opacity.setValue(event.value);
            this.onOpacityChange();
        }
    };
    GridAttributesComponent.prototype.onStateChange = function () {
        var state = this.gridAttributesForm.value.state;
        this.gridToolService.changeState(state);
    };
    GridAttributesComponent.prototype.onSizeChange = function () {
        var size = this.gridAttributesForm.value.size;
        if (this.gridAttributesForm.controls.size.valid) {
            this.gridToolService.changeSize(size);
        }
    };
    GridAttributesComponent.prototype.onOpacityChange = function () {
        var opacity = this.gridAttributesForm.value.opacity;
        if (this.gridAttributesForm.controls.opacity.valid) {
            this.gridToolService.changeOpacity(opacity);
        }
    };
    GridAttributesComponent.prototype.onFocus = function () {
        this.shortcutManagerService.changeIsOnInput(true);
    };
    GridAttributesComponent.prototype.onFocusOut = function () {
        this.shortcutManagerService.changeIsOnInput(false);
    };
    GridAttributesComponent.prototype.enableSlider = function () {
        if (!this.drawingLoaderService.untouchedWorkZone.value) {
            this.gridAttributesForm.controls.state.enable();
        }
    };
    GridAttributesComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_4__["ShortcutManagerService"] },
        { type: src_app_services_tools_grid_tool_grid_tool_service__WEBPACK_IMPORTED_MODULE_5__["GridToolService"] },
        { type: src_app_services_server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_3__["DrawingLoaderService"] }
    ]; };
    GridAttributesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grid-attributes',
            template: __webpack_require__(/*! raw-loader!./grid-attributes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/grid-attributes/grid-attributes.component.html"),
            styles: [__webpack_require__(/*! ./grid-attributes.component.scss */ "./src/app/components/sidebar-tools/attribute-panel/grid-attributes/grid-attributes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_4__["ShortcutManagerService"],
            src_app_services_tools_grid_tool_grid_tool_service__WEBPACK_IMPORTED_MODULE_5__["GridToolService"],
            src_app_services_server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_3__["DrawingLoaderService"]])
    ], GridAttributesComponent);
    return GridAttributesComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/line-attributes/line-attributes.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/line-attributes/line-attributes.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  padding: 30px 40px;\n  padding-bottom: 0px;\n}\n#container #attribute-header {\n  text-align: center;\n  font-weight: bold;\n}\n#container .attribute {\n  padding-top: 30px;\n}\n.mat-slider-horizontal {\n  width: 170px;\n}\n.small {\n  margin-left: 10px;\n  width: 25%;\n}\nimg {\n  position: relative;\n  top: 10px;\n  left: 5px;\n}\nmat-select {\n  white-space: nowrap;\n  display: inline;\n}\n.strokeType1 {\n  background: url(\"/assets/strokeType1.png\") center/contain no-repeat;\n}\n.strokeType2 {\n  background: url(\"/assets/strokeType2.png\") center/contain no-repeat;\n}\n.strokeType3 {\n  background: url(\"/assets/strokeType3.png\") center/contain no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL2xpbmUtYXR0cmlidXRlcy9saW5lLWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci10b29scy9hdHRyaWJ1dGUtcGFuZWwvbGluZS1hdHRyaWJ1dGVzL2xpbmUtYXR0cmlidXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0NSO0FERUk7RUFDSSxpQkFBQTtBQ0FSO0FESUE7RUFDSSxZQUFBO0FDREo7QURJQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQ0RKO0FESUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FDREo7QURJQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQ0RKO0FESUE7RUFDSSxtRUFBQTtBQ0RKO0FESUE7RUFDSSxtRUFBQTtBQ0RKO0FESUE7RUFDSSxtRUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyLXRvb2xzL2F0dHJpYnV0ZS1wYW5lbC9saW5lLWF0dHJpYnV0ZXMvbGluZS1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMzBweCA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG5cbiAgICAjYXR0cmlidXRlLWhlYWRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmF0dHJpYnV0ZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIH1cbn1cblxuLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gICAgd2lkdGg6IDE3MHB4O1xufVxuXG4uc21hbGwge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHdpZHRoOiAyNSU7XG59XG5cbmltZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiA1cHg7XG59XG5cbm1hdC1zZWxlY3Qge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uc3Ryb2tlVHlwZTEge1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9zdHJva2VUeXBlMS5wbmcnKSBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdDtcbn1cblxuLnN0cm9rZVR5cGUyIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvc3Ryb2tlVHlwZTIucG5nJykgY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQ7XG59XG5cbi5zdHJva2VUeXBlMyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL3N0cm9rZVR5cGUzLnBuZycpIGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0O1xufVxuIiwiI2NvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDMwcHggNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbiNjb250YWluZXIgI2F0dHJpYnV0ZS1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI2NvbnRhaW5lciAuYXR0cmlidXRlIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbi5tYXQtc2xpZGVyLWhvcml6b250YWwge1xuICB3aWR0aDogMTcwcHg7XG59XG5cbi5zbWFsbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMjUlO1xufVxuXG5pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogNXB4O1xufVxuXG5tYXQtc2VsZWN0IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uc3Ryb2tlVHlwZTEge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL3N0cm9rZVR5cGUxLnBuZ1wiKSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXQ7XG59XG5cbi5zdHJva2VUeXBlMiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvc3Ryb2tlVHlwZTIucG5nXCIpIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcbn1cblxuLnN0cm9rZVR5cGUzIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9zdHJva2VUeXBlMy5wbmdcIikgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/line-attributes/line-attributes.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/line-attributes/line-attributes.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: LineAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineAttributesComponent", function() { return LineAttributesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shortcut-manager/shortcut-manager.service */ "./src/app/services/shortcut-manager/shortcut-manager.service.ts");
/* harmony import */ var src_app_services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tools/attributes-manager/attributes-manager.service */ "./src/app/services/tools/attributes-manager/attributes-manager.service.ts");
/* harmony import */ var src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tools/tool-selector/tool-selector.service */ "./src/app/services/tools/tool-selector/tool-selector.service.ts");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");








var LineAttributesComponent = /** @class */ (function () {
    function LineAttributesComponent(formBuilder, attributeManagerService, toolSelectorService, shortcutManagerService) {
        this.formBuilder = formBuilder;
        this.attributeManagerService = attributeManagerService;
        this.toolSelectorService = toolSelectorService;
        this.shortcutManagerService = shortcutManagerService;
        this.toolName = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["TOOL_NAME"].Line;
        this.LineStrokeTypeChoices = [src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["LINE_STROKE_TYPE"].Continuous, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["LINE_STROKE_TYPE"].Dotted_line, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["LINE_STROKE_TYPE"].Dotted_circle];
        this.circleJointSelected = false;
        this.THICKNESS = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"];
        this.formBuilder = formBuilder;
    }
    LineAttributesComponent.prototype.ngOnInit = function () {
        this.initializeForm();
        this.onThicknessChange();
    };
    LineAttributesComponent.prototype.ngAfterViewInit = function () {
        this.lineToolService = this.toolSelectorService.getLineTool();
        this.lineToolService.initializeAttributesManagerService(this.attributeManagerService);
    };
    LineAttributesComponent.prototype.initializeForm = function () {
        this.lineAttributesForm = this.formBuilder.group({
            thickness: [
                src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"].Default,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"].Min), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"].Max)],
            ],
            lineStrokeType: [src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["LINE_STROKE_TYPE"].Continuous],
            lineJointType: [src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["LINE_JOINT_TYPE"].Curvy],
            circleJointDiameter: [src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"].Default, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"].Min), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"].Max)]],
        });
    };
    LineAttributesComponent.prototype.onLineStrokeTypeChange = function (lineStrokeType) {
        this.attributeManagerService.lineStrokeType.next(lineStrokeType);
    };
    LineAttributesComponent.prototype.onLineJointTypeChange = function (lineJointType) {
        this.circleJointSelected = lineJointType === src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["LINE_JOINT_TYPE"].Circle;
        this.attributeManagerService.lineJointType.next(lineJointType);
    };
    LineAttributesComponent.prototype.onCircleJointSliderChange = function (event) {
        if (src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["PREDICATE"].eventIsValid(event, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"])) {
            this.lineAttributesForm.controls.circleJointDiameter.setValue(event.value);
            this.onCircleJointDiameterChange();
        }
    };
    LineAttributesComponent.prototype.onCircleJointDiameterChange = function () {
        var jointThickness = this.lineAttributesForm.value.circleJointDiameter;
        if (this.lineAttributesForm.valid) {
            this.attributeManagerService.circleJointDiameter.next(jointThickness);
        }
    };
    LineAttributesComponent.prototype.onSliderChange = function (event) {
        if (src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["PREDICATE"].eventIsValid(event, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"])) {
            this.lineAttributesForm.controls.thickness.setValue(event.value);
            this.onThicknessChange();
        }
    };
    LineAttributesComponent.prototype.onThicknessChange = function () {
        var thickness = this.lineAttributesForm.value.thickness;
        if (this.lineAttributesForm.controls.thickness.valid) {
            this.attributeManagerService.thickness.next(thickness);
        }
    };
    LineAttributesComponent.prototype.onFocus = function () {
        this.shortcutManagerService.changeIsOnInput(true);
    };
    LineAttributesComponent.prototype.onFocusOut = function () {
        this.shortcutManagerService.changeIsOnInput(false);
    };
    LineAttributesComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_4__["AttributesManagerService"] },
        { type: src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_5__["ToolSelectorService"] },
        { type: src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__["ShortcutManagerService"] }
    ]; };
    LineAttributesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-line-attributes',
            template: __webpack_require__(/*! raw-loader!./line-attributes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/line-attributes/line-attributes.component.html"),
            providers: [src_app_services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_4__["AttributesManagerService"]],
            styles: [__webpack_require__(/*! ./line-attributes.component.scss */ "./src/app/components/sidebar-tools/attribute-panel/line-attributes/line-attributes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_4__["AttributesManagerService"],
            src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_5__["ToolSelectorService"],
            src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__["ShortcutManagerService"]])
    ], LineAttributesComponent);
    return LineAttributesComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/magnetism-attributes/magnetism-attributes.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/magnetism-attributes/magnetism-attributes.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  padding: 30px 40px;\n  padding-bottom: 0px;\n}\n#container #attribute-header {\n  text-align: center;\n  font-weight: bold;\n}\n#container .attribute {\n  padding-top: 30px;\n}\n.mat-slider-horizontal {\n  width: 170px;\n}\n.small {\n  margin-left: 10px;\n  width: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL21hZ25ldGlzbS1hdHRyaWJ1dGVzL21hZ25ldGlzbS1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL21hZ25ldGlzbS1hdHRyaWJ1dGVzL21hZ25ldGlzbS1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDQ1I7QURFSTtFQUNJLGlCQUFBO0FDQVI7QURJQTtFQUNJLFlBQUE7QUNESjtBRElBO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL21hZ25ldGlzbS1hdHRyaWJ1dGVzL21hZ25ldGlzbS1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDQwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG5cclxuICAgICNhdHRyaWJ1dGUtaGVhZGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmF0dHJpYnV0ZSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXQtc2xpZGVyLWhvcml6b250YWwge1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG59XHJcblxyXG4uc21hbGwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcbiIsIiNjb250YWluZXIge1xuICBwYWRkaW5nOiAzMHB4IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4jY29udGFpbmVyICNhdHRyaWJ1dGUtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiNjb250YWluZXIgLmF0dHJpYnV0ZSB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG4ubWF0LXNsaWRlci1ob3Jpem9udGFsIHtcbiAgd2lkdGg6IDE3MHB4O1xufVxuXG4uc21hbGwge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDI1JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/magnetism-attributes/magnetism-attributes.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/magnetism-attributes/magnetism-attributes.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: MagnetismAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagnetismAttributesComponent", function() { return MagnetismAttributesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/server/drawing-loader/drawing-loader.service */ "./src/app/services/server/drawing-loader/drawing-loader.service.ts");
/* harmony import */ var src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shortcut-manager/shortcut-manager.service */ "./src/app/services/shortcut-manager/shortcut-manager.service.ts");
/* harmony import */ var src_app_services_tools_magnetism_tool_magnetism_tool_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tools/magnetism-tool/magnetism-tool.service */ "./src/app/services/tools/magnetism-tool/magnetism-tool.service.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");







var MagnetismAttributesComponent = /** @class */ (function () {
    function MagnetismAttributesComponent(formBuilder, shortcutManagerService, magnetismService, drawingLoaderService) {
        this.formBuilder = formBuilder;
        this.shortcutManagerService = shortcutManagerService;
        this.magnetismService = magnetismService;
        this.drawingLoaderService = drawingLoaderService;
        this.toolName = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_6__["TOOL_NAME"].Magnetism;
        this.CONTROL_POINTS = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_6__["CONTROL_POINTS"];
        this.TOP_CONTROL_POINTS = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_6__["TOP_CONTROL_POINTS"];
        this.CENTER_CONTROL_POINTS = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_6__["CENTER_CONTROL_POINTS"];
        this.BOTTOM_CONTROL_POINTS = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_6__["BOTTOM_CONTROL_POINTS"];
        this.formBuilder = formBuilder;
    }
    MagnetismAttributesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initializeForm();
        this.magnetismService.isMagnetic.subscribe(function (state) {
            _this.magnetismAttributesForm.controls.state.setValue(state);
        });
        this.drawingLoaderService.untouchedWorkZone.subscribe(function () {
            _this.enableSlider();
        });
    };
    MagnetismAttributesComponent.prototype.initializeForm = function () {
        this.magnetismAttributesForm = this.formBuilder.group({
            state: [{ value: false, disabled: true }],
        });
    };
    MagnetismAttributesComponent.prototype.onStateChange = function () {
        var state = this.magnetismAttributesForm.value.state;
        this.magnetismService.changeState(state);
    };
    MagnetismAttributesComponent.prototype.onFocus = function () {
        this.shortcutManagerService.changeIsOnInput(true);
    };
    MagnetismAttributesComponent.prototype.onFocusOut = function () {
        this.shortcutManagerService.changeIsOnInput(false);
    };
    MagnetismAttributesComponent.prototype.enableSlider = function () {
        if (!this.drawingLoaderService.untouchedWorkZone.value) {
            this.magnetismAttributesForm.controls.state.enable();
        }
    };
    MagnetismAttributesComponent.prototype.setMagnetismPoint = function (value) {
        this.magnetismService.currentPoint = value;
    };
    MagnetismAttributesComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_4__["ShortcutManagerService"] },
        { type: src_app_services_tools_magnetism_tool_magnetism_tool_service__WEBPACK_IMPORTED_MODULE_5__["MagnetismToolService"] },
        { type: src_app_services_server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_3__["DrawingLoaderService"] }
    ]; };
    MagnetismAttributesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-magnetism-attributes',
            template: __webpack_require__(/*! raw-loader!./magnetism-attributes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/magnetism-attributes/magnetism-attributes.component.html"),
            styles: [__webpack_require__(/*! ./magnetism-attributes.component.scss */ "./src/app/components/sidebar-tools/attribute-panel/magnetism-attributes/magnetism-attributes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_4__["ShortcutManagerService"],
            src_app_services_tools_magnetism_tool_magnetism_tool_service__WEBPACK_IMPORTED_MODULE_5__["MagnetismToolService"],
            src_app_services_server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_3__["DrawingLoaderService"]])
    ], MagnetismAttributesComponent);
    return MagnetismAttributesComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/pen-attributes/pen-attributes.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/pen-attributes/pen-attributes.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  padding: 30px 40px;\n  padding-bottom: 0px;\n}\n#container #attribute-header {\n  text-align: center;\n  font-weight: bold;\n}\n#container .attribute {\n  padding-top: 30px;\n}\n.mat-slider-horizontal {\n  width: 150px;\n}\n.small {\n  margin-left: 10px;\n  width: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL3Blbi1hdHRyaWJ1dGVzL3Blbi1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL3Blbi1hdHRyaWJ1dGVzL3Blbi1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDQ1I7QURFSTtFQUNJLGlCQUFBO0FDQVI7QURJQTtFQUNJLFlBQUE7QUNESjtBRElBO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL3Blbi1hdHRyaWJ1dGVzL3Blbi1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMzBweCA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG5cbiAgICAjYXR0cmlidXRlLWhlYWRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmF0dHJpYnV0ZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIH1cbn1cblxuLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gICAgd2lkdGg6IDE1MHB4O1xufVxuXG4uc21hbGwge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHdpZHRoOiAyNSU7XG59XG4iLCIjY29udGFpbmVyIHtcbiAgcGFkZGluZzogMzBweCA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuI2NvbnRhaW5lciAjYXR0cmlidXRlLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jY29udGFpbmVyIC5hdHRyaWJ1dGUge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLnNtYWxsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAyNSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/pen-attributes/pen-attributes.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/pen-attributes/pen-attributes.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PenAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PenAttributesComponent", function() { return PenAttributesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shortcut-manager/shortcut-manager.service */ "./src/app/services/shortcut-manager/shortcut-manager.service.ts");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/tools/attributes-manager/attributes-manager.service */ "./src/app/services/tools/attributes-manager/attributes-manager.service.ts");
/* harmony import */ var _services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/tools/tool-selector/tool-selector.service */ "./src/app/services/tools/tool-selector/tool-selector.service.ts");








var PenAttributesComponent = /** @class */ (function () {
    function PenAttributesComponent(formBuilder, attributesManagerService, toolSelectorService, shortcutManagerService) {
        this.formBuilder = formBuilder;
        this.attributesManagerService = attributesManagerService;
        this.toolSelectorService = toolSelectorService;
        this.shortcutManagerService = shortcutManagerService;
        this.toolName = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["TOOL_NAME"].Pen;
        this.THICKNESS = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["THICKNESS"];
        this.formBuilder = formBuilder;
    }
    PenAttributesComponent.prototype.ngOnInit = function () {
        this.initializeForm();
        this.onMaxThicknessChange();
        this.onMinThicknessChange();
    };
    PenAttributesComponent.prototype.ngAfterViewInit = function () {
        this.penToolService = this.toolSelectorService.getPenTool();
        this.penToolService.initializeAttributesManagerService(this.attributesManagerService);
    };
    PenAttributesComponent.prototype.initializeForm = function () {
        this.penAttributesForm = this.formBuilder.group({
            maxThickness: [
                src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["THICKNESS"].Default,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["THICKNESS"].Min), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["THICKNESS"].Max)],
            ],
            minThickness: [
                src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["THICKNESS"].Min,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["THICKNESS"].Min), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["THICKNESS"].Max)],
            ],
        });
    };
    PenAttributesComponent.prototype.onMaxSliderChange = function (event) {
        if (src_constants_constants__WEBPACK_IMPORTED_MODULE_4__["PREDICATE"].eventIsValid(event, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["THICKNESS"])) {
            this.penAttributesForm.controls.maxThickness.setValue(event.value);
            this.onMaxThicknessChange();
        }
    };
    PenAttributesComponent.prototype.onMaxThicknessChange = function () {
        var maxThickness = this.penAttributesForm.value.maxThickness;
        if (this.penAttributesForm.controls.maxThickness.valid) {
            this.attributesManagerService.thickness.next(maxThickness);
        }
        if (this.penAttributesForm.value.minThickness > this.penAttributesForm.value.maxThickness) {
            var max = this.penAttributesForm.value.maxThickness;
            this.penAttributesForm.controls.minThickness.setValue(max);
        }
        this.penAttributesForm.controls.minThickness.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(this.penAttributesForm.value.maxThickness));
    };
    PenAttributesComponent.prototype.onMinSliderChange = function (event) {
        if (src_constants_constants__WEBPACK_IMPORTED_MODULE_4__["PREDICATE"].eventIsValid(event, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["THICKNESS"])) {
            this.penAttributesForm.controls.minThickness.setValue(event.value);
            this.onMinThicknessChange();
        }
    };
    PenAttributesComponent.prototype.onMinThicknessChange = function () {
        var minThickness = this.penAttributesForm.value.minThickness;
        if (this.penAttributesForm.controls.minThickness.valid) {
            this.attributesManagerService.minThickness.next(minThickness);
        }
    };
    PenAttributesComponent.prototype.onFocus = function () {
        this.shortcutManagerService.changeIsOnInput(true);
    };
    PenAttributesComponent.prototype.onFocusOut = function () {
        this.shortcutManagerService.changeIsOnInput(false);
    };
    PenAttributesComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_6__["AttributesManagerService"] },
        { type: _services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_7__["ToolSelectorService"] },
        { type: src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__["ShortcutManagerService"] }
    ]; };
    PenAttributesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pen-attributes',
            template: __webpack_require__(/*! raw-loader!./pen-attributes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/pen-attributes/pen-attributes.component.html"),
            providers: [_services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_6__["AttributesManagerService"]],
            styles: [__webpack_require__(/*! ./pen-attributes.component.scss */ "./src/app/components/sidebar-tools/attribute-panel/pen-attributes/pen-attributes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_6__["AttributesManagerService"],
            _services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_7__["ToolSelectorService"],
            src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__["ShortcutManagerService"]])
    ], PenAttributesComponent);
    return PenAttributesComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/pencil-attributes/pencil-attributes.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/pencil-attributes/pencil-attributes.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  padding: 30px 40px;\n  padding-bottom: 0px;\n}\n#container #attribute-header {\n  text-align: center;\n  font-weight: bold;\n}\n#container .attribute {\n  padding-top: 30px;\n}\n.mat-slider-horizontal {\n  width: 150px;\n}\n.small {\n  margin-left: 10px;\n  width: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL3BlbmNpbC1hdHRyaWJ1dGVzL3BlbmNpbC1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL3BlbmNpbC1hdHRyaWJ1dGVzL3BlbmNpbC1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDQ1I7QURFSTtFQUNJLGlCQUFBO0FDQVI7QURJQTtFQUNJLFlBQUE7QUNESjtBRElBO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL3BlbmNpbC1hdHRyaWJ1dGVzL3BlbmNpbC1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMzBweCA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG5cbiAgICAjYXR0cmlidXRlLWhlYWRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmF0dHJpYnV0ZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIH1cbn1cblxuLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gICAgd2lkdGg6IDE1MHB4O1xufVxuXG4uc21hbGwge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHdpZHRoOiAyNSU7XG59XG4iLCIjY29udGFpbmVyIHtcbiAgcGFkZGluZzogMzBweCA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuI2NvbnRhaW5lciAjYXR0cmlidXRlLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jY29udGFpbmVyIC5hdHRyaWJ1dGUge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLnNtYWxsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAyNSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/pencil-attributes/pencil-attributes.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/pencil-attributes/pencil-attributes.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PencilAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PencilAttributesComponent", function() { return PencilAttributesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shortcut-manager/shortcut-manager.service */ "./src/app/services/shortcut-manager/shortcut-manager.service.ts");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/tools/attributes-manager/attributes-manager.service */ "./src/app/services/tools/attributes-manager/attributes-manager.service.ts");
/* harmony import */ var _services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/tools/tool-selector/tool-selector.service */ "./src/app/services/tools/tool-selector/tool-selector.service.ts");








var PencilAttributesComponent = /** @class */ (function () {
    function PencilAttributesComponent(formBuilder, attributesManagerService, toolSelectorService, shortcutManagerService) {
        this.formBuilder = formBuilder;
        this.attributesManagerService = attributesManagerService;
        this.toolSelectorService = toolSelectorService;
        this.shortcutManagerService = shortcutManagerService;
        this.toolName = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["TOOL_NAME"].Pencil;
        this.THICKNESS = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["THICKNESS"];
        this.formBuilder = formBuilder;
    }
    PencilAttributesComponent.prototype.ngOnInit = function () {
        this.initializeForm();
        this.onThicknessChange();
    };
    PencilAttributesComponent.prototype.ngAfterViewInit = function () {
        this.pencilToolService = this.toolSelectorService.getPencilTool();
        this.pencilToolService.initializeAttributesManagerService(this.attributesManagerService);
    };
    PencilAttributesComponent.prototype.initializeForm = function () {
        this.pencilAttributesForm = this.formBuilder.group({
            thickness: [
                src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["THICKNESS"].Default,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["THICKNESS"].Min), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["THICKNESS"].Max)],
            ],
        });
    };
    PencilAttributesComponent.prototype.onSliderChange = function (event) {
        if (src_constants_constants__WEBPACK_IMPORTED_MODULE_4__["PREDICATE"].eventIsValid(event, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["THICKNESS"])) {
            this.pencilAttributesForm.controls.thickness.setValue(event.value);
            this.onThicknessChange();
        }
    };
    PencilAttributesComponent.prototype.onThicknessChange = function () {
        var thickness = this.pencilAttributesForm.value.thickness;
        if (this.pencilAttributesForm.controls.thickness.valid) {
            this.attributesManagerService.thickness.next(thickness);
        }
    };
    PencilAttributesComponent.prototype.onFocus = function () {
        this.shortcutManagerService.changeIsOnInput(true);
    };
    PencilAttributesComponent.prototype.onFocusOut = function () {
        this.shortcutManagerService.changeIsOnInput(false);
    };
    PencilAttributesComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_6__["AttributesManagerService"] },
        { type: _services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_7__["ToolSelectorService"] },
        { type: src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__["ShortcutManagerService"] }
    ]; };
    PencilAttributesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pencil-attributes',
            template: __webpack_require__(/*! raw-loader!./pencil-attributes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/pencil-attributes/pencil-attributes.component.html"),
            providers: [_services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_6__["AttributesManagerService"]],
            styles: [__webpack_require__(/*! ./pencil-attributes.component.scss */ "./src/app/components/sidebar-tools/attribute-panel/pencil-attributes/pencil-attributes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_6__["AttributesManagerService"],
            _services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_7__["ToolSelectorService"],
            src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__["ShortcutManagerService"]])
    ], PencilAttributesComponent);
    return PencilAttributesComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/polygon-attributes/polygon-attributes.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/polygon-attributes/polygon-attributes.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  padding: 30px 40px;\n  padding-bottom: 0px;\n}\n#container #attribute-header {\n  text-align: center;\n  font-weight: bold;\n}\n#container .attribute {\n  padding-top: 30px;\n}\n.mat-slider-horizontal {\n  width: 150px;\n}\n#nbVertices .mat-slider-horizontal {\n  width: 120px;\n}\n.small {\n  margin-left: 10px;\n  width: 25%;\n}\n.small-polygon {\n  margin-left: 10px;\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL3BvbHlnb24tYXR0cmlidXRlcy9wb2x5Z29uLWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci10b29scy9hdHRyaWJ1dGUtcGFuZWwvcG9seWdvbi1hdHRyaWJ1dGVzL3BvbHlnb24tYXR0cmlidXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0NSO0FERUk7RUFDSSxpQkFBQTtBQ0FSO0FESUE7RUFDSSxZQUFBO0FDREo7QURLSTtFQUNJLFlBQUE7QUNGUjtBRE1BO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FDSEo7QURNQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyLXRvb2xzL2F0dHJpYnV0ZS1wYW5lbC9wb2x5Z29uLWF0dHJpYnV0ZXMvcG9seWdvbi1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMzBweCA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG5cbiAgICAjYXR0cmlidXRlLWhlYWRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmF0dHJpYnV0ZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIH1cbn1cblxuLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gICAgd2lkdGg6IDE1MHB4O1xufVxuXG4jbmJWZXJ0aWNlcyB7XG4gICAgLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICB9XG59XG5cbi5zbWFsbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgd2lkdGg6IDI1JTtcbn1cblxuLnNtYWxsLXBvbHlnb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHdpZHRoOiAzMCU7XG59XG4iLCIjY29udGFpbmVyIHtcbiAgcGFkZGluZzogMzBweCA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuI2NvbnRhaW5lciAjYXR0cmlidXRlLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jY29udGFpbmVyIC5hdHRyaWJ1dGUge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuI25iVmVydGljZXMgLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiAxMjBweDtcbn1cblxuLnNtYWxsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5zbWFsbC1wb2x5Z29uIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAzMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/polygon-attributes/polygon-attributes.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/polygon-attributes/polygon-attributes.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: PolygonAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonAttributesComponent", function() { return PolygonAttributesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shortcut-manager/shortcut-manager.service */ "./src/app/services/shortcut-manager/shortcut-manager.service.ts");
/* harmony import */ var src_app_services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tools/attributes-manager/attributes-manager.service */ "./src/app/services/tools/attributes-manager/attributes-manager.service.ts");
/* harmony import */ var src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tools/tool-selector/tool-selector.service */ "./src/app/services/tools/tool-selector/tool-selector.service.ts");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");








var PolygonAttributesComponent = /** @class */ (function () {
    function PolygonAttributesComponent(formBuilder, toolSelectorService, shortcutManagerService) {
        this.formBuilder = formBuilder;
        this.toolSelectorService = toolSelectorService;
        this.shortcutManagerService = shortcutManagerService;
        this.toolName = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["TOOL_NAME"].Polygon;
        this.attributesManagerService = new src_app_services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_4__["AttributesManagerService"]();
        this.thickness = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"];
        this.polygonSides = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["POLYGON_SIDES"];
        this.polygonFormType = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["POLYGONE_FORM_TYPE"];
        this.formBuilder = formBuilder;
    }
    PolygonAttributesComponent.prototype.ngOnInit = function () {
        this.initializeForm();
        this.onThicknessChange();
    };
    PolygonAttributesComponent.prototype.ngAfterViewInit = function () {
        this.polygonToolService = this.toolSelectorService.getPolygonTool();
        this.polygonToolService.initializeAttributesManagerService(this.attributesManagerService);
    };
    PolygonAttributesComponent.prototype.initializeForm = function () {
        this.polygonAttributesForm = this.formBuilder.group({
            thickness: [
                src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"].Default,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"].Min), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"].Max)],
            ],
            traceType: ['Contour'],
            nbVertices: [
                src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["POLYGON_SIDES"].Default,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["POLYGON_SIDES"].Min), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["POLYGON_SIDES"].Max)],
            ],
        });
    };
    PolygonAttributesComponent.prototype.onThicknessSliderChange = function (event) {
        if (src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["PREDICATE"].eventIsValid(event, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"])) {
            this.polygonAttributesForm.controls.thickness.setValue(event.value);
            this.onThicknessChange();
        }
    };
    PolygonAttributesComponent.prototype.onNbVerticesSliderChange = function (event) {
        if (src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["PREDICATE"].eventIsValid(event, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["POLYGON_SIDES"])) {
            this.polygonAttributesForm.controls.nbVertices.setValue(event.value);
            this.onNbVerticesChange();
        }
    };
    PolygonAttributesComponent.prototype.onThicknessChange = function () {
        var thickness = this.polygonAttributesForm.value.thickness;
        if (this.polygonAttributesForm.controls.thickness.valid) {
            this.attributesManagerService.thickness.next(thickness);
        }
    };
    PolygonAttributesComponent.prototype.onTraceTypeChange = function () {
        var tracetype = this.polygonAttributesForm.value.traceType;
        this.attributesManagerService.traceType.next(tracetype);
    };
    PolygonAttributesComponent.prototype.onNbVerticesChange = function () {
        var nbVertices = this.polygonAttributesForm.value.nbVertices;
        this.attributesManagerService.nbVertices.next(nbVertices);
    };
    PolygonAttributesComponent.prototype.onFocus = function () {
        this.shortcutManagerService.changeIsOnInput(true);
    };
    PolygonAttributesComponent.prototype.onFocusOut = function () {
        this.shortcutManagerService.changeIsOnInput(false);
    };
    PolygonAttributesComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_5__["ToolSelectorService"] },
        { type: src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__["ShortcutManagerService"] }
    ]; };
    PolygonAttributesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-polygon-attributes',
            template: __webpack_require__(/*! raw-loader!./polygon-attributes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/polygon-attributes/polygon-attributes.component.html"),
            styles: [__webpack_require__(/*! ./polygon-attributes.component.scss */ "./src/app/components/sidebar-tools/attribute-panel/polygon-attributes/polygon-attributes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_5__["ToolSelectorService"],
            src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__["ShortcutManagerService"]])
    ], PolygonAttributesComponent);
    return PolygonAttributesComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/quill-attributes/quill-attributes.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/quill-attributes/quill-attributes.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  padding: 30px 40px;\n  padding-bottom: 0px;\n}\n#container #attribute-header {\n  text-align: center;\n  font-weight: bold;\n}\n#container .attribute {\n  padding-top: 30px;\n}\n.mat-slider-horizontal {\n  width: 150px;\n}\n.small {\n  margin-left: 10px;\n  width: 25%;\n}\n#angle-attribute {\n  width: 50%;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL3F1aWxsLWF0dHJpYnV0ZXMvcXVpbGwtYXR0cmlidXRlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyLXRvb2xzL2F0dHJpYnV0ZS1wYW5lbC9xdWlsbC1hdHRyaWJ1dGVzL3F1aWxsLWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNDTjtBREVFO0VBQ0ksaUJBQUE7QUNBTjtBRElBO0VBQ0UsWUFBQTtBQ0RGO0FESUE7RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUNERjtBRElBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci10b29scy9hdHRyaWJ1dGUtcGFuZWwvcXVpbGwtYXR0cmlidXRlcy9xdWlsbC1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDMwcHggNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcblxuICAjYXR0cmlidXRlLWhlYWRlciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5hdHRyaWJ1dGUge1xuICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gIH1cbn1cblxuLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLnNtYWxsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAyNSU7XG59XG5cbiNhbmdsZS1hdHRyaWJ1dGUge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuIiwiI2NvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDMwcHggNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbiNjb250YWluZXIgI2F0dHJpYnV0ZS1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI2NvbnRhaW5lciAuYXR0cmlidXRlIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbi5tYXQtc2xpZGVyLWhvcml6b250YWwge1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5zbWFsbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMjUlO1xufVxuXG4jYW5nbGUtYXR0cmlidXRlIHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/quill-attributes/quill-attributes.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/quill-attributes/quill-attributes.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: QuillAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuillAttributesComponent", function() { return QuillAttributesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shortcut-manager/shortcut-manager.service */ "./src/app/services/shortcut-manager/shortcut-manager.service.ts");
/* harmony import */ var src_app_services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tools/attributes-manager/attributes-manager.service */ "./src/app/services/tools/attributes-manager/attributes-manager.service.ts");
/* harmony import */ var src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tools/tool-selector/tool-selector.service */ "./src/app/services/tools/tool-selector/tool-selector.service.ts");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");








var QuillAttributesComponent = /** @class */ (function () {
    function QuillAttributesComponent(formBuilder, attributesManagerService, toolSelectorService, shortcutManagerService) {
        this.formBuilder = formBuilder;
        this.attributesManagerService = attributesManagerService;
        this.toolSelectorService = toolSelectorService;
        this.shortcutManagerService = shortcutManagerService;
        this.toolName = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["TOOL_NAME"].Quill;
        this.THICKNESS = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"];
        this.QUILL_ANGLE_ORIENTATION = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["ROTATION_ANGLE"];
        this.formBuilder = formBuilder;
    }
    QuillAttributesComponent.prototype.ngOnInit = function () {
        this.initializeForm();
        this.onThicknessChange();
        this.onAngleChange();
        this.quillToolService = this.toolSelectorService.getQuillTool();
        this.quillToolService.initializeAttributesManagerService(this.attributesManagerService);
    };
    QuillAttributesComponent.prototype.initializeForm = function () {
        this.quillAttributesForm = this.formBuilder.group({
            thickness: [
                src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"].Default,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"].Min), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"].Max)],
            ],
            angle: [
                src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["ROTATION_ANGLE"].Default,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["ROTATION_ANGLE"].Min), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["ROTATION_ANGLE"].Max)],
            ],
        });
    };
    QuillAttributesComponent.prototype.onSliderChange = function (event) {
        if (src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["PREDICATE"].eventIsValid(event, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"])) {
            this.quillAttributesForm.controls.thickness.setValue(event.value);
            this.onThicknessChange();
        }
    };
    QuillAttributesComponent.prototype.onThicknessChange = function () {
        var thickness = this.quillAttributesForm.value.thickness;
        if (this.quillAttributesForm.controls.thickness.valid) {
            this.attributesManagerService.thickness.next(thickness);
        }
    };
    QuillAttributesComponent.prototype.onAngleChange = function () {
        var quillAngle = this.quillAttributesForm.value.angle;
        if (this.quillAttributesForm.controls.angle.valid) {
            this.attributesManagerService.angle.next(quillAngle);
        }
    };
    QuillAttributesComponent.prototype.onFocus = function () {
        this.shortcutManagerService.changeIsOnInput(true);
    };
    QuillAttributesComponent.prototype.onFocusOut = function () {
        this.shortcutManagerService.changeIsOnInput(false);
    };
    QuillAttributesComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_4__["AttributesManagerService"] },
        { type: src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_5__["ToolSelectorService"] },
        { type: src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__["ShortcutManagerService"] }
    ]; };
    QuillAttributesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quill-attributes',
            template: __webpack_require__(/*! raw-loader!./quill-attributes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/quill-attributes/quill-attributes.component.html"),
            styles: [__webpack_require__(/*! ./quill-attributes.component.scss */ "./src/app/components/sidebar-tools/attribute-panel/quill-attributes/quill-attributes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_4__["AttributesManagerService"],
            src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_5__["ToolSelectorService"],
            src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__["ShortcutManagerService"]])
    ], QuillAttributesComponent);
    return QuillAttributesComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/rectangle-attributes/rectangle-attributes.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/rectangle-attributes/rectangle-attributes.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  padding: 30px 40px;\n  padding-bottom: 0px;\n}\n#container #attribute-header {\n  text-align: center;\n  font-weight: bold;\n}\n#container .attribute {\n  padding-top: 30px;\n}\n.mat-slider-horizontal {\n  width: 150px;\n}\n.small {\n  margin-left: 10px;\n  width: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL3JlY3RhbmdsZS1hdHRyaWJ1dGVzL3JlY3RhbmdsZS1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL3JlY3RhbmdsZS1hdHRyaWJ1dGVzL3JlY3RhbmdsZS1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDQ1I7QURFSTtFQUNJLGlCQUFBO0FDQVI7QURJQTtFQUNJLFlBQUE7QUNESjtBRElBO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL3JlY3RhbmdsZS1hdHRyaWJ1dGVzL3JlY3RhbmdsZS1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMzBweCA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG5cbiAgICAjYXR0cmlidXRlLWhlYWRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmF0dHJpYnV0ZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIH1cbn1cblxuLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gICAgd2lkdGg6IDE1MHB4O1xufVxuXG4uc21hbGwge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHdpZHRoOiAyNSU7XG59XG4iLCIjY29udGFpbmVyIHtcbiAgcGFkZGluZzogMzBweCA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuI2NvbnRhaW5lciAjYXR0cmlidXRlLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jY29udGFpbmVyIC5hdHRyaWJ1dGUge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLnNtYWxsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAyNSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/rectangle-attributes/rectangle-attributes.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/rectangle-attributes/rectangle-attributes.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: RectangleAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleAttributesComponent", function() { return RectangleAttributesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shortcut-manager/shortcut-manager.service */ "./src/app/services/shortcut-manager/shortcut-manager.service.ts");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/tools/attributes-manager/attributes-manager.service */ "./src/app/services/tools/attributes-manager/attributes-manager.service.ts");
/* harmony import */ var _services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/tools/tool-selector/tool-selector.service */ "./src/app/services/tools/tool-selector/tool-selector.service.ts");








var RectangleAttributesComponent = /** @class */ (function () {
    function RectangleAttributesComponent(formBuilder, toolSelectorService, shortcutManagerService) {
        this.formBuilder = formBuilder;
        this.toolSelectorService = toolSelectorService;
        this.shortcutManagerService = shortcutManagerService;
        this.toolName = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["TOOL_NAME"].Rectangle;
        this.attributesManagerService = new _services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_6__["AttributesManagerService"]();
        this.thickness = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["THICKNESS"];
        this.formBuilder = formBuilder;
    }
    RectangleAttributesComponent.prototype.ngOnInit = function () {
        this.initializeForm();
        this.onThicknessChange();
    };
    RectangleAttributesComponent.prototype.ngAfterViewInit = function () {
        this.rectangleToolService = this.toolSelectorService.getRectangleTool();
        this.rectangleToolService.initializeAttributesManagerService(this.attributesManagerService);
    };
    RectangleAttributesComponent.prototype.initializeForm = function () {
        this.rectangleAttributesForm = this.formBuilder.group({
            thickness: [
                src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["THICKNESS"].Default,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["THICKNESS"].Min), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["THICKNESS"].Max)],
            ],
            traceType: ['Contour'],
        });
    };
    RectangleAttributesComponent.prototype.onSliderChange = function (event) {
        if (src_constants_constants__WEBPACK_IMPORTED_MODULE_4__["PREDICATE"].eventIsValid(event, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["THICKNESS"])) {
            this.rectangleAttributesForm.controls.thickness.setValue(event.value);
            this.onThicknessChange();
        }
    };
    RectangleAttributesComponent.prototype.onThicknessChange = function () {
        var thickness = this.rectangleAttributesForm.value.thickness;
        if (this.rectangleAttributesForm.controls.thickness.valid) {
            this.attributesManagerService.thickness.next(thickness);
        }
    };
    RectangleAttributesComponent.prototype.onTraceTypeChange = function () {
        var tracetype = this.rectangleAttributesForm.value.traceType;
        this.attributesManagerService.traceType.next(tracetype);
    };
    RectangleAttributesComponent.prototype.onFocus = function () {
        this.shortcutManagerService.changeIsOnInput(true);
    };
    RectangleAttributesComponent.prototype.onFocusOut = function () {
        this.shortcutManagerService.changeIsOnInput(false);
    };
    RectangleAttributesComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_7__["ToolSelectorService"] },
        { type: src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__["ShortcutManagerService"] }
    ]; };
    RectangleAttributesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rectangle-attributes',
            template: __webpack_require__(/*! raw-loader!./rectangle-attributes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/rectangle-attributes/rectangle-attributes.component.html"),
            styles: [__webpack_require__(/*! ./rectangle-attributes.component.scss */ "./src/app/components/sidebar-tools/attribute-panel/rectangle-attributes/rectangle-attributes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_7__["ToolSelectorService"],
            src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__["ShortcutManagerService"]])
    ], RectangleAttributesComponent);
    return RectangleAttributesComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/selection-attributes/selection-attributes.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/selection-attributes/selection-attributes.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  padding: 30px 40px;\n  padding-bottom: 0px;\n}\n#container #attribute-header {\n  text-align: center;\n  font-weight: bold;\n}\n#container .attribute {\n  padding-top: 30px;\n}\n#clipboard-options p {\n  padding: 0 0 5 0;\n  margin: 0 0 5 0;\n}\n.mat-button-toggle-checked {\n  background: #ffffff;\n}\n.mat-button-toggle-checked * {\n  color: black;\n}\n.mat-button-toggle {\n  width: 40px;\n  height: 40px;\n  border: none;\n}\n.mat-button-toggle i {\n  font-size: 100%;\n}\n.disabled {\n  color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL3NlbGVjdGlvbi1hdHRyaWJ1dGVzL3NlbGVjdGlvbi1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL3NlbGVjdGlvbi1hdHRyaWJ1dGVzL3NlbGVjdGlvbi1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDQ1I7QURFSTtFQUNJLGlCQUFBO0FDQVI7QURLSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FETUE7RUFDSSxtQkFBQTtBQ0hKO0FESUk7RUFDSSxZQUFBO0FDRlI7QURNQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0hKO0FES0k7RUFDSSxlQUFBO0FDSFI7QURPQTtFQUNJLFdBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci10b29scy9hdHRyaWJ1dGUtcGFuZWwvc2VsZWN0aW9uLWF0dHJpYnV0ZXMvc2VsZWN0aW9uLWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAzMHB4IDQwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcblxuICAgICNhdHRyaWJ1dGUtaGVhZGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAuYXR0cmlidXRlIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgfVxufVxuXG4jY2xpcGJvYXJkLW9wdGlvbnMge1xuICAgIHAge1xuICAgICAgICBwYWRkaW5nOiAwIDAgNSAwO1xuICAgICAgICBtYXJnaW46IDAgMCA1IDA7XG4gICAgfVxufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAqIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbn1cblxuLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuXG4gICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICB9XG59XG5cbi5kaXNhYmxlZCB7XG4gICAgY29sb3I6IGdyZXk7XG59XG4iLCIjY29udGFpbmVyIHtcbiAgcGFkZGluZzogMzBweCA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuI2NvbnRhaW5lciAjYXR0cmlidXRlLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jY29udGFpbmVyIC5hdHRyaWJ1dGUge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuI2NsaXBib2FyZC1vcHRpb25zIHAge1xuICBwYWRkaW5nOiAwIDAgNSAwO1xuICBtYXJnaW46IDAgMCA1IDA7XG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cbi5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkICoge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5tYXQtYnV0dG9uLXRvZ2dsZSBpIHtcbiAgZm9udC1zaXplOiAxMDAlO1xufVxuXG4uZGlzYWJsZWQge1xuICBjb2xvcjogZ3JleTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/selection-attributes/selection-attributes.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/selection-attributes/selection-attributes.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: SelectionAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionAttributesComponent", function() { return SelectionAttributesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shortcut-manager/shortcut-manager.service */ "./src/app/services/shortcut-manager/shortcut-manager.service.ts");
/* harmony import */ var src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tools/tool-selector/tool-selector.service */ "./src/app/services/tools/tool-selector/tool-selector.service.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");





var SelectionAttributesComponent = /** @class */ (function () {
    function SelectionAttributesComponent(toolSelector, shortcutManagerService) {
        this.toolSelector = toolSelector;
        this.shortcutManagerService = shortcutManagerService;
        this.CLIPBOARD_BUTTONS = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["CLIPBOARD_BUTTON_INFO"].slice(2, 6);
        this.SELECT_ALL_BUTTON = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["CLIPBOARD_BUTTON_INFO"][0];
        this.PASTE_BUTTON = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["CLIPBOARD_BUTTON_INFO"][1];
        this.toolName = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["TOOL_NAME"].Selection;
        this.selectionToolCallbacks = new Map();
        this.isActiveSelection = false;
        this.isClippingsEmpty = true;
    }
    SelectionAttributesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.selectionTool = this.toolSelector.getSelectiontool();
        this.selectionTool.selection.isActiveSelection.subscribe(function (isActiveSelection) {
            _this.isActiveSelection = isActiveSelection;
        });
        this.selectionTool.clipBoard.isClippingsEmpty.subscribe(function (isClippingsEmpty) {
            _this.isClippingsEmpty = isClippingsEmpty;
        });
        this.selectionToolCallbacks.set(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["TOOL_NAME"].SelectAll, function () {
            _this.selectionTool.selectAll();
        });
        this.selectionToolCallbacks.set(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["TOOL_NAME"].Duplicate, function () {
            _this.selectionTool.clipBoard.duplicate();
        });
        this.selectionToolCallbacks.set(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["TOOL_NAME"].Cut, function () {
            _this.selectionTool.clipBoard.cut();
        });
        this.selectionToolCallbacks.set(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["TOOL_NAME"].Copy, function () {
            _this.selectionTool.clipBoard.copy();
        });
        this.selectionToolCallbacks.set(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["TOOL_NAME"].Paste, function () {
            _this.selectionTool.clipBoard.paste();
        });
        this.selectionToolCallbacks.set(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["TOOL_NAME"].Delete, function () {
            _this.selectionTool.clipBoard.delete();
        });
    };
    SelectionAttributesComponent.prototype.onButtonTrigger = function (tooltipName) {
        this.selectionToolCallbacks.get(tooltipName)();
    };
    SelectionAttributesComponent.prototype.onFocus = function () {
        this.shortcutManagerService.changeIsOnInput(true);
    };
    SelectionAttributesComponent.prototype.onFocusOut = function () {
        this.shortcutManagerService.changeIsOnInput(false);
    };
    SelectionAttributesComponent.ctorParameters = function () { return [
        { type: src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_3__["ToolSelectorService"] },
        { type: src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_2__["ShortcutManagerService"] }
    ]; };
    SelectionAttributesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-selection-attributes',
            template: __webpack_require__(/*! raw-loader!./selection-attributes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/selection-attributes/selection-attributes.component.html"),
            styles: [__webpack_require__(/*! ./selection-attributes.component.scss */ "./src/app/components/sidebar-tools/attribute-panel/selection-attributes/selection-attributes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_3__["ToolSelectorService"], src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_2__["ShortcutManagerService"]])
    ], SelectionAttributesComponent);
    return SelectionAttributesComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/spray-can-attributes/spray-can-attributes.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/spray-can-attributes/spray-can-attributes.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  padding: 30px 40px;\n  padding-bottom: 0px;\n}\n#container #attribute-header {\n  text-align: center;\n  font-weight: bold;\n}\n#container .attribute {\n  padding-top: 30px;\n}\n#container #intervalInput {\n  margin-left: 10px;\n  width: 80px;\n}\n.mat-slider-horizontal {\n  width: 150px;\n}\n.small {\n  margin-left: 10px;\n  width: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL3NwcmF5LWNhbi1hdHRyaWJ1dGVzL3NwcmF5LWNhbi1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL3NwcmF5LWNhbi1hdHRyaWJ1dGVzL3NwcmF5LWNhbi1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDQ1I7QURFSTtFQUNJLGlCQUFBO0FDQVI7QURFSTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQ0FSO0FESUE7RUFDSSxZQUFBO0FDREo7QURJQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyLXRvb2xzL2F0dHJpYnV0ZS1wYW5lbC9zcHJheS1jYW4tYXR0cmlidXRlcy9zcHJheS1jYW4tYXR0cmlidXRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMzBweCA0MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuXHJcbiAgICAjYXR0cmlidXRlLWhlYWRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5hdHRyaWJ1dGUge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgI2ludGVydmFsSW5wdXQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWF0LXNsaWRlci1ob3Jpem9udGFsIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLnNtYWxsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG4iLCIjY29udGFpbmVyIHtcbiAgcGFkZGluZzogMzBweCA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuI2NvbnRhaW5lciAjYXR0cmlidXRlLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jY29udGFpbmVyIC5hdHRyaWJ1dGUge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbiNjb250YWluZXIgI2ludGVydmFsSW5wdXQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbi5tYXQtc2xpZGVyLWhvcml6b250YWwge1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5zbWFsbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMjUlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/spray-can-attributes/spray-can-attributes.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/spray-can-attributes/spray-can-attributes.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: SprayCanAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SprayCanAttributesComponent", function() { return SprayCanAttributesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shortcut-manager/shortcut-manager.service */ "./src/app/services/shortcut-manager/shortcut-manager.service.ts");
/* harmony import */ var src_app_services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tools/attributes-manager/attributes-manager.service */ "./src/app/services/tools/attributes-manager/attributes-manager.service.ts");
/* harmony import */ var src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tools/tool-selector/tool-selector.service */ "./src/app/services/tools/tool-selector/tool-selector.service.ts");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");








var SprayCanAttributesComponent = /** @class */ (function () {
    function SprayCanAttributesComponent(formBuilder, toolSelectorService, shortcutManagerService) {
        this.formBuilder = formBuilder;
        this.toolSelectorService = toolSelectorService;
        this.shortcutManagerService = shortcutManagerService;
        this.toolName = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["TOOL_NAME"].SprayCan;
        this.attributesManagerService = new src_app_services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_4__["AttributesManagerService"]();
        this.THICKNESS = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["SPRAY_PARTICLE_THICKNESS"];
        this.DIAMETER = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["SPRAY_DIAMETER"];
        this.INTERVAL = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["SPRAY_INTERVAL"];
        this.formBuilder = formBuilder;
    }
    SprayCanAttributesComponent.prototype.ngOnInit = function () {
        this.initializeForm();
        this.onThicknessChange();
        this.onDiameterChange();
    };
    SprayCanAttributesComponent.prototype.ngAfterViewInit = function () {
        this.sprayCanToolService = this.toolSelectorService.getSprayCanTool();
        this.sprayCanToolService.initializeAttributesManagerService(this.attributesManagerService);
    };
    SprayCanAttributesComponent.prototype.initializeForm = function () {
        this.sprayCanAttributesForm = this.formBuilder.group({
            thickness: [
                src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["SPRAY_PARTICLE_THICKNESS"].Default,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["SPRAY_PARTICLE_THICKNESS"].Min),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["SPRAY_PARTICLE_THICKNESS"].Max),
                ],
            ],
            diameter: [
                src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["SPRAY_DIAMETER"].Default,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["SPRAY_DIAMETER"].Min), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["SPRAY_DIAMETER"].Max)],
            ],
            interval: [
                src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["SPRAY_INTERVAL"].Default,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["SPRAY_INTERVAL"].Min), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["SPRAY_INTERVAL"].Max)],
            ],
        });
    };
    SprayCanAttributesComponent.prototype.onThicknessSliderChange = function (event) {
        if (src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["PREDICATE"].eventIsValid(event, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["THICKNESS"])) {
            this.sprayCanAttributesForm.controls.thickness.setValue(event.value);
            this.onThicknessChange();
        }
    };
    SprayCanAttributesComponent.prototype.onDiameterSliderChange = function (event) {
        if (src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["PREDICATE"].eventIsValid(event, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["SPRAY_DIAMETER"])) {
            this.sprayCanAttributesForm.controls.diameter.setValue(event.value);
            this.onDiameterChange();
        }
    };
    SprayCanAttributesComponent.prototype.onIntervalSliderChange = function (event) {
        if (src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["PREDICATE"].eventIsValid(event, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["SPRAY_INTERVAL"])) {
            this.sprayCanAttributesForm.controls.interval.setValue(event.value);
            this.onIntervalChange();
        }
    };
    SprayCanAttributesComponent.prototype.onThicknessChange = function () {
        var thickness = this.sprayCanAttributesForm.value.thickness;
        if (this.sprayCanAttributesForm.controls.thickness.valid) {
            this.attributesManagerService.thickness.next(thickness);
        }
    };
    SprayCanAttributesComponent.prototype.onDiameterChange = function () {
        var diameter = this.sprayCanAttributesForm.value.diameter;
        if (this.sprayCanAttributesForm.controls.diameter.valid) {
            this.attributesManagerService.sprayDiameter.next(diameter);
        }
    };
    SprayCanAttributesComponent.prototype.onIntervalChange = function () {
        var interval = this.sprayCanAttributesForm.value.interval;
        if (this.sprayCanAttributesForm.controls.interval.valid) {
            this.attributesManagerService.sprayInterval.next(interval);
        }
    };
    SprayCanAttributesComponent.prototype.onFocus = function () {
        this.shortcutManagerService.changeIsOnInput(true);
    };
    SprayCanAttributesComponent.prototype.onFocusOut = function () {
        this.shortcutManagerService.changeIsOnInput(false);
    };
    SprayCanAttributesComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_5__["ToolSelectorService"] },
        { type: src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__["ShortcutManagerService"] }
    ]; };
    SprayCanAttributesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spray-can-attributes',
            template: __webpack_require__(/*! raw-loader!./spray-can-attributes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/spray-can-attributes/spray-can-attributes.component.html"),
            styles: [__webpack_require__(/*! ./spray-can-attributes.component.scss */ "./src/app/components/sidebar-tools/attribute-panel/spray-can-attributes/spray-can-attributes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_5__["ToolSelectorService"],
            src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__["ShortcutManagerService"]])
    ], SprayCanAttributesComponent);
    return SprayCanAttributesComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/stamp-attributes/stamp-attributes.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/stamp-attributes/stamp-attributes.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  padding: 30px 40px;\n  padding-bottom: 0px;\n}\n#container #attribute-header {\n  text-align: center;\n  font-weight: bold;\n}\n#container .attribute {\n  padding-top: 30px;\n}\n.mat-slider-horizontal {\n  width: 170px;\n}\n.small {\n  margin-left: 10px;\n  width: 25%;\n}\nimg {\n  position: relative;\n  top: 10px;\n  left: 5px;\n}\n#angle-attribute {\n  width: 50%;\n  display: block;\n}\n.class-NoStamp {\n  background: none;\n}\n.class-1 {\n  background: url(\"/assets/stamps/iconmonstr-smiley-14.svg\") center/contain no-repeat;\n}\n.class-2 {\n  background: url(\"/assets/stamps/iconmonstr-cat-7.svg\") center/contain no-repeat;\n}\n.class-3 {\n  background: url(\"/assets/stamps/iconmonstr-coin-3.svg\") center/contain no-repeat;\n}\n.class-4 {\n  background: url(\"/assets/stamps/iconmonstr-home-8.svg\") center/contain no-repeat;\n}\n.class-5 {\n  background: url(\"/assets/stamps/iconmonstr-glasses-12.svg\") center/contain no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL3N0YW1wLWF0dHJpYnV0ZXMvc3RhbXAtYXR0cmlidXRlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyLXRvb2xzL2F0dHJpYnV0ZS1wYW5lbC9zdGFtcC1hdHRyaWJ1dGVzL3N0YW1wLWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURDSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNDUjtBREVJO0VBQ0ksaUJBQUE7QUNBUjtBRElBO0VBQ0ksWUFBQTtBQ0RKO0FESUE7RUFDSSxpQkFBQTtFQUNBLFVBQUE7QUNESjtBRElBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQ0RKO0FESUE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBQ0RKO0FESUE7RUFDSSxnQkFBQTtBQ0RKO0FESUE7RUFDSSxtRkFBQTtBQ0RKO0FESUE7RUFDSSwrRUFBQTtBQ0RKO0FESUE7RUFDSSxnRkFBQTtBQ0RKO0FESUE7RUFDSSxnRkFBQTtBQ0RKO0FESUE7RUFDSSxvRkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyLXRvb2xzL2F0dHJpYnV0ZS1wYW5lbC9zdGFtcC1hdHRyaWJ1dGVzL3N0YW1wLWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAzMHB4IDQwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcblxuICAgICNhdHRyaWJ1dGUtaGVhZGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAuYXR0cmlidXRlIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgfVxufVxuXG4ubWF0LXNsaWRlci1ob3Jpem9udGFsIHtcbiAgICB3aWR0aDogMTcwcHg7XG59XG5cbi5zbWFsbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgd2lkdGg6IDI1JTtcbn1cblxuaW1nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMHB4O1xuICAgIGxlZnQ6IDVweDtcbn1cblxuI2FuZ2xlLWF0dHJpYnV0ZSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNsYXNzLU5vU3RhbXAge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5jbGFzcy0xIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvc3RhbXBzL2ljb25tb25zdHItc21pbGV5LTE0LnN2ZycpIGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0O1xufVxuXG4uY2xhc3MtMiB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL3N0YW1wcy9pY29ubW9uc3RyLWNhdC03LnN2ZycpIGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0O1xufVxuXG4uY2xhc3MtMyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL3N0YW1wcy9pY29ubW9uc3RyLWNvaW4tMy5zdmcnKSBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdDtcbn1cblxuLmNsYXNzLTQge1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9zdGFtcHMvaWNvbm1vbnN0ci1ob21lLTguc3ZnJykgY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQ7XG59XG5cbi5jbGFzcy01IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvc3RhbXBzL2ljb25tb25zdHItZ2xhc3Nlcy0xMi5zdmcnKSBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdDtcbn1cbiIsIiNjb250YWluZXIge1xuICBwYWRkaW5nOiAzMHB4IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4jY29udGFpbmVyICNhdHRyaWJ1dGUtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiNjb250YWluZXIgLmF0dHJpYnV0ZSB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG4ubWF0LXNsaWRlci1ob3Jpem9udGFsIHtcbiAgd2lkdGg6IDE3MHB4O1xufVxuXG4uc21hbGwge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDI1JTtcbn1cblxuaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDVweDtcbn1cblxuI2FuZ2xlLWF0dHJpYnV0ZSB7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY2xhc3MtTm9TdGFtcCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5jbGFzcy0xIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9zdGFtcHMvaWNvbm1vbnN0ci1zbWlsZXktMTQuc3ZnXCIpIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcbn1cblxuLmNsYXNzLTIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL3N0YW1wcy9pY29ubW9uc3RyLWNhdC03LnN2Z1wiKSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXQ7XG59XG5cbi5jbGFzcy0zIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9zdGFtcHMvaWNvbm1vbnN0ci1jb2luLTMuc3ZnXCIpIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcbn1cblxuLmNsYXNzLTQge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL3N0YW1wcy9pY29ubW9uc3RyLWhvbWUtOC5zdmdcIikgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xufVxuXG4uY2xhc3MtNSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvc3RhbXBzL2ljb25tb25zdHItZ2xhc3Nlcy0xMi5zdmdcIikgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/stamp-attributes/stamp-attributes.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/stamp-attributes/stamp-attributes.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: StampAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StampAttributesComponent", function() { return StampAttributesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shortcut-manager/shortcut-manager.service */ "./src/app/services/shortcut-manager/shortcut-manager.service.ts");
/* harmony import */ var src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tools/tool-selector/tool-selector.service */ "./src/app/services/tools/tool-selector/tool-selector.service.ts");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/tools/attributes-manager/attributes-manager.service */ "./src/app/services/tools/attributes-manager/attributes-manager.service.ts");








var StampAttributesComponent = /** @class */ (function () {
    function StampAttributesComponent(formBuilder, attributesManagerService, toolSelectorService, shortcutManagerService) {
        this.formBuilder = formBuilder;
        this.attributesManagerService = attributesManagerService;
        this.toolSelectorService = toolSelectorService;
        this.shortcutManagerService = shortcutManagerService;
        this.toolName = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_6__["TOOL_NAME"].Stamp;
        this.STAMP_SCALING = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_6__["STAMP_SCALING"];
        this.STAMP_ANGLE_ORIENTATION = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_6__["ROTATION_ANGLE"];
        this.STAMP_TYPES = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_6__["STAMP_TYPES"];
        this.STAMP_NAMES = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_6__["STAMP_NAMES"];
        this.formBuilder = formBuilder;
    }
    StampAttributesComponent.prototype.ngOnInit = function () {
        this.initializeForm();
        this.onScalingChange();
        this.stampToolService = this.toolSelectorService.getStampTool();
        this.stampToolService.initializeAttributesManagerService(this.attributesManagerService);
    };
    StampAttributesComponent.prototype.initializeForm = function () {
        this.stampAttributesForm = this.formBuilder.group({
            scaling: [
                src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_6__["STAMP_SCALING"].Default,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_6__["STAMP_SCALING"].Min), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_6__["STAMP_SCALING"].Max)],
            ],
            angle: [
                src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_6__["ROTATION_ANGLE"].Default,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_6__["ROTATION_ANGLE"].Min),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_6__["ROTATION_ANGLE"].Max),
                ],
            ],
            stampType: [0],
        });
    };
    StampAttributesComponent.prototype.onSliderChange = function (event) {
        if (src_constants_constants__WEBPACK_IMPORTED_MODULE_5__["PREDICATE"].eventIsValid(event, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_6__["STAMP_SCALING"])) {
            this.stampAttributesForm.controls.scaling.setValue(event.value);
            this.onScalingChange();
        }
    };
    StampAttributesComponent.prototype.onScalingChange = function () {
        var stampScaling = this.stampAttributesForm.value.scaling;
        if (this.stampAttributesForm.controls.scaling.valid) {
            this.attributesManagerService.scaling.next(stampScaling);
        }
    };
    StampAttributesComponent.prototype.onStampTypeChange = function () {
        var stampType = this.stampAttributesForm.value.stampType;
        this.attributesManagerService.stampType.next(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_6__["STAMPS_MAP"].get(stampType));
    };
    StampAttributesComponent.prototype.onAngleChange = function () {
        var stampAngle = this.stampAttributesForm.value.angle;
        if (this.stampAttributesForm.controls.angle.valid) {
            this.attributesManagerService.angle.next(stampAngle);
        }
    };
    StampAttributesComponent.prototype.onFocus = function () {
        this.shortcutManagerService.changeIsOnInput(true);
    };
    StampAttributesComponent.prototype.onFocusOut = function () {
        this.shortcutManagerService.changeIsOnInput(false);
    };
    StampAttributesComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_7__["AttributesManagerService"] },
        { type: src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_4__["ToolSelectorService"] },
        { type: src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__["ShortcutManagerService"] }
    ]; };
    StampAttributesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stamp-attributes',
            template: __webpack_require__(/*! raw-loader!./stamp-attributes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/stamp-attributes/stamp-attributes.component.html"),
            styles: [__webpack_require__(/*! ./stamp-attributes.component.scss */ "./src/app/components/sidebar-tools/attribute-panel/stamp-attributes/stamp-attributes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_7__["AttributesManagerService"],
            src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_4__["ToolSelectorService"],
            src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__["ShortcutManagerService"]])
    ], StampAttributesComponent);
    return StampAttributesComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/text-attributes/text-attributes.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/text-attributes/text-attributes.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  padding: 30px 40px;\n  padding-bottom: 0px;\n}\n#container #attribute-header {\n  text-align: center;\n  font-weight: bold;\n}\n#container .attribute {\n  padding-top: 30px;\n}\n.mat-slider-horizontal {\n  width: 150px;\n}\n#small {\n  margin-left: 5px;\n  width: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvYXR0cmlidXRlLXBhbmVsL3RleHQtYXR0cmlidXRlcy90ZXh0LWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci10b29scy9hdHRyaWJ1dGUtcGFuZWwvdGV4dC1hdHRyaWJ1dGVzL3RleHQtYXR0cmlidXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0NSO0FERUk7RUFDSSxpQkFBQTtBQ0FSO0FESUE7RUFDSSxZQUFBO0FDREo7QURJQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyLXRvb2xzL2F0dHJpYnV0ZS1wYW5lbC90ZXh0LWF0dHJpYnV0ZXMvdGV4dC1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMzBweCA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG5cbiAgICAjYXR0cmlidXRlLWhlYWRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmF0dHJpYnV0ZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIH1cbn1cblxuLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gICAgd2lkdGg6IDE1MHB4O1xufVxuXG4jc21hbGwge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgd2lkdGg6IDIwJTtcbn1cbiIsIiNjb250YWluZXIge1xuICBwYWRkaW5nOiAzMHB4IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4jY29udGFpbmVyICNhdHRyaWJ1dGUtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiNjb250YWluZXIgLmF0dHJpYnV0ZSB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG4ubWF0LXNsaWRlci1ob3Jpem9udGFsIHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4jc21hbGwge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICB3aWR0aDogMjAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/sidebar-tools/attribute-panel/text-attributes/text-attributes.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/sidebar-tools/attribute-panel/text-attributes/text-attributes.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: TextAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAttributesComponent", function() { return TextAttributesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shortcut-manager/shortcut-manager.service */ "./src/app/services/shortcut-manager/shortcut-manager.service.ts");
/* harmony import */ var src_app_services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tools/attributes-manager/attributes-manager.service */ "./src/app/services/tools/attributes-manager/attributes-manager.service.ts");
/* harmony import */ var src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tools/tool-selector/tool-selector.service */ "./src/app/services/tools/tool-selector/tool-selector.service.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");







var TextAttributesComponent = /** @class */ (function () {
    function TextAttributesComponent(formBuilder, toolSelectorService, shortcutManagerService, attributesManagerService) {
        this.formBuilder = formBuilder;
        this.toolSelectorService = toolSelectorService;
        this.shortcutManagerService = shortcutManagerService;
        this.attributesManagerService = attributesManagerService;
        this.toolName = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_6__["TOOL_NAME"].Text;
        this.isBold = false;
        this.isItalic = false;
        this.FONTS = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_6__["FONTS"];
        this.fontSize = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_6__["FONT_SIZE"];
        this.formBuilder = formBuilder;
    }
    TextAttributesComponent.prototype.ngOnInit = function () {
        this.initializeForm();
    };
    TextAttributesComponent.prototype.ngAfterViewInit = function () {
        this.textToolService = this.toolSelectorService.getTextTool();
        this.textToolService.initializeAttributesManagerService(this.attributesManagerService);
    };
    TextAttributesComponent.prototype.initializeForm = function () {
        this.textAttributesForm = this.formBuilder.group({
            font: ['Times New Roman, serif'],
            fontSize: [
                src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_6__["FONT_SIZE"].Default,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_6__["FONT_SIZE"].Min), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_6__["FONT_SIZE"].Max)],
            ],
            align: [src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_6__["FONT_ALIGN"].Start],
        });
    };
    TextAttributesComponent.prototype.onFontChange = function () {
        var align = this.textAttributesForm.controls.font.value;
        this.attributesManagerService.font.next(align);
    };
    TextAttributesComponent.prototype.onFontSizeChange = function () {
        var fontSize = this.textAttributesForm.controls.fontSize.value;
        if (this.textAttributesForm.controls.fontSize.valid) {
            this.attributesManagerService.fontSize.next(fontSize);
        }
    };
    TextAttributesComponent.prototype.onAlignChange = function () {
        var align = this.textAttributesForm.controls.align.value;
        this.attributesManagerService.fontAlign.next(align);
    };
    TextAttributesComponent.prototype.onBoldChange = function () {
        this.isBold = !this.isBold;
        this.attributesManagerService.boldState.next(this.isBold);
    };
    TextAttributesComponent.prototype.onItalicChange = function () {
        this.isItalic = !this.isItalic;
        this.attributesManagerService.italicState.next(this.isItalic);
    };
    TextAttributesComponent.prototype.onFocus = function () {
        this.shortcutManagerService.changeIsOnInput(true);
    };
    TextAttributesComponent.prototype.onFocusOut = function () {
        if (!this.attributesManagerService.isWritingState.value) {
            this.shortcutManagerService.changeIsOnInput(false);
        }
    };
    TextAttributesComponent.prototype.getCurrentFont = function () {
        return this.textAttributesForm.controls.font.value;
    };
    TextAttributesComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_5__["ToolSelectorService"] },
        { type: src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__["ShortcutManagerService"] },
        { type: src_app_services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_4__["AttributesManagerService"] }
    ]; };
    TextAttributesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-text-attributes',
            template: __webpack_require__(/*! raw-loader!./text-attributes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/attribute-panel/text-attributes/text-attributes.component.html"),
            styles: [__webpack_require__(/*! ./text-attributes.component.scss */ "./src/app/components/sidebar-tools/attribute-panel/text-attributes/text-attributes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_5__["ToolSelectorService"],
            src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_3__["ShortcutManagerService"],
            src_app_services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_4__["AttributesManagerService"]])
    ], TextAttributesComponent);
    return TextAttributesComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar-tools/sidebar-tools.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/sidebar-tools/sidebar-tools.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 360px;\n  background-color: #ffffff;\n  z-index: 1;\n}\n\n#tools-buttons {\n  width: 35px;\n  height: 100vh;\n}\n\n#tools-buttons mat-button-toggle-group {\n  width: 35px;\n}\n\n#file-buttons {\n  position: fixed;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n}\n\n#file-buttons .mat-button-toggle-checked {\n  background: #ffffff;\n}\n\n#file-buttons .mat-button-toggle-checked * {\n  color: black;\n}\n\n.mat-button-toggle {\n  width: 35px;\n  height: 35px;\n  border: none;\n}\n\n.mat-button-toggle i {\n  font-size: 75%;\n}\n\n#color {\n  margin-top: 3px;\n  padding: 3px;\n  width: 35px;\n}\n\n#color button {\n  width: 20px;\n  height: 20px;\n  border: 0;\n}\n\n#color #secondary {\n  background-color: pink;\n}\n\n#color #primary {\n  background-color: palevioletred;\n  position: relative;\n  top: -10px;\n  left: 10px;\n}\n\n#tracing-tools {\n  width: 180px;\n  height: 35px;\n  position: fixed;\n  top: 36px;\n  left: 36px;\n  z-index: 3;\n  border-radius: 0 2px 2px 0;\n}\n\n#shape-tools {\n  width: 108px;\n  height: 35px;\n  position: fixed;\n  top: 72px;\n  left: 36px;\n  z-index: 3;\n  border-radius: 0 2px 2px 0;\n}\n\nimg {\n  width: 35%;\n  height: 35%;\n  position: absolute;\n  top: 25px;\n  left: 25px;\n}\n\n.cdk-focused {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvc2lkZWJhci10b29scy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyLXRvb2xzL3NpZGViYXItdG9vbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUVBLFlBQUE7RUFDQSx5QkFBQTtFQUVBLFVBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDREo7O0FER0k7RUFDSSxXQUFBO0FDRFI7O0FES0E7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0ZKOztBREdJO0VBQ0ksbUJBQUE7QUNEUjs7QURFUTtFQUNJLFlBQUE7QUNBWjs7QURLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBRElJO0VBQ0ksY0FBQTtBQ0ZSOztBRE1BO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDSEo7O0FESUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNGUjs7QURJSTtFQUNJLHNCQUFBO0FDRlI7O0FESUk7RUFDSSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUNGUjs7QURNQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0FDSEo7O0FETUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtBQ0hKOztBRE1BO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDSEo7O0FETUE7RUFDSSxhQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXItdG9vbHMvc2lkZWJhci10b29scy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaWRlYmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuXG4gICAgd2lkdGg6IDM2MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cbiAgICB6LWluZGV4OiAxO1xufVxuXG4jdG9vbHMtYnV0dG9ucyB7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcblxuICAgIG1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIHtcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgfVxufVxuXG4jZmlsZS1idXR0b25zIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAqIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuXG4gICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNzUlO1xuICAgIH1cbn1cblxuI2NvbG9yIHtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICB9XG4gICAgI3NlY29uZGFyeSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG4gICAgfVxuICAgICNwcmltYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcGFsZXZpb2xldHJlZDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IC0xMHB4O1xuICAgICAgICBsZWZ0OiAxMHB4O1xuICAgIH1cbn1cblxuI3RyYWNpbmctdG9vbHMge1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMzZweDtcbiAgICBsZWZ0OiAzNnB4O1xuICAgIHotaW5kZXg6IDM7XG4gICAgYm9yZGVyLXJhZGl1czogMCAycHggMnB4IDA7XG59XG5cbiNzaGFwZS10b29scyB7XG4gICAgd2lkdGg6IDEwOHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA3MnB4O1xuICAgIGxlZnQ6IDM2cHg7XG4gICAgei1pbmRleDogMztcbiAgICBib3JkZXItcmFkaXVzOiAwIDJweCAycHggMDtcbn1cblxuaW1nIHtcbiAgICB3aWR0aDogMzUlO1xuICAgIGhlaWdodDogMzUlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI1cHg7XG4gICAgbGVmdDogMjVweDtcbn1cblxuLmNkay1mb2N1c2VkIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuIiwiI3NpZGViYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDM2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB6LWluZGV4OiAxO1xufVxuXG4jdG9vbHMtYnV0dG9ucyB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuI3Rvb2xzLWJ1dHRvbnMgbWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAge1xuICB3aWR0aDogMzVweDtcbn1cblxuI2ZpbGUtYnV0dG9ucyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuI2ZpbGUtYnV0dG9ucyAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG4jZmlsZS1idXR0b25zIC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkICoge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5tYXQtYnV0dG9uLXRvZ2dsZSBpIHtcbiAgZm9udC1zaXplOiA3NSU7XG59XG5cbiNjb2xvciB7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgcGFkZGluZzogM3B4O1xuICB3aWR0aDogMzVweDtcbn1cbiNjb2xvciBidXR0b24ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDA7XG59XG4jY29sb3IgI3NlY29uZGFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG59XG4jY29sb3IgI3ByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxldmlvbGV0cmVkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEwcHg7XG4gIGxlZnQ6IDEwcHg7XG59XG5cbiN0cmFjaW5nLXRvb2xzIHtcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAzNnB4O1xuICBsZWZ0OiAzNnB4O1xuICB6LWluZGV4OiAzO1xuICBib3JkZXItcmFkaXVzOiAwIDJweCAycHggMDtcbn1cblxuI3NoYXBlLXRvb2xzIHtcbiAgd2lkdGg6IDEwOHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA3MnB4O1xuICBsZWZ0OiAzNnB4O1xuICB6LWluZGV4OiAzO1xuICBib3JkZXItcmFkaXVzOiAwIDJweCAycHggMDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDM1JTtcbiAgaGVpZ2h0OiAzNSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNXB4O1xuICBsZWZ0OiAyNXB4O1xufVxuXG4uY2RrLWZvY3VzZWQge1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/sidebar-tools/sidebar-tools.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/sidebar-tools/sidebar-tools.component.ts ***!
  \*********************************************************************/
/*! exports provided: SidebarToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarToolsComponent", function() { return SidebarToolsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/undo-redoer/undo-redoer.service */ "./src/app/services/undo-redoer/undo-redoer.service.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tools/tool-selector/tool-selector.service */ "./src/app/services/tools/tool-selector/tool-selector.service.ts");





var SidebarToolsComponent = /** @class */ (function () {
    function SidebarToolsComponent(toolSelectorService, undoRedoerService) {
        this.toolSelectorService = toolSelectorService;
        this.undoRedoerService = undoRedoerService;
        this.TOOLS_BUTTON_INFO = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TOOLS_BUTTON_INFO"];
        this.TRACING_BUTTON_INFO = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TRACING_BUTTON_INFO"];
        this.SHAPE_BUTTON_INFO = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["SHAPE_BUTTON_INFO"];
        this.FILES_BUTTON_INFO = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["FILES_BUTTON_INFO"];
        this.TRACING_TOOL_POSITION = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TRACING_TOOL_POSITION"];
        this.SHAPE_TOOL_POSITION = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["SHAPE_TOOL_POSITION"];
        this.showTracingTools = false;
        this.showShapeTools = false;
    }
    SidebarToolsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.toolSelectorService.currentToolName.subscribe(function (currentToolName) {
            _this.currentToolName = currentToolName;
            _this.verifyToolChange();
        });
        this.currentTracingTool = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TOOL_NAME"].Pencil;
        this.currentShapeTool = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TOOL_NAME"].Rectangle;
    };
    SidebarToolsComponent.prototype.ngAfterViewInit = function () {
        this.toolSelectorService.changeTool(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TOOL_NAME"].Selection);
    };
    SidebarToolsComponent.prototype.verifyToolChange = function () {
        var _this = this;
        this.showTracingTools = false;
        this.showShapeTools = false;
        if (this.TRACING_BUTTON_INFO.filter(function (el) {
            return el.tooltipName === _this.currentToolName;
        }).length) {
            this.currentTracingTool = this.currentToolName;
        }
        if (this.SHAPE_BUTTON_INFO.filter(function (el) {
            return el.tooltipName === _this.currentToolName;
        }).length) {
            this.currentShapeTool = this.currentToolName;
        }
    };
    SidebarToolsComponent.prototype.onChangeTool = function (i) {
        this.showTracingTools = false;
        var tooltipName;
        if (i === src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TRACING_TOOL_POSITION"]) {
            tooltipName = this.currentTracingTool;
        }
        else if (i === src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["SHAPE_TOOL_POSITION"]) {
            tooltipName = this.currentShapeTool;
        }
        else {
            tooltipName = this.TOOLS_BUTTON_INFO[i].tooltipName;
        }
        this.toolSelectorService.changeTool(tooltipName);
    };
    SidebarToolsComponent.prototype.onChangeFileTool = function (tooltipName) {
        this.showTracingTools = false;
        this.showShapeTools = false;
        this.toolSelectorService.changeTool(tooltipName);
    };
    SidebarToolsComponent.prototype.onChangeTracingTool = function (tooltipName) {
        this.showTracingTools = false;
        this.currentTracingTool = tooltipName;
        this.currentToolName = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TOOL_NAME"].TracingTool;
        this.toolSelectorService.changeTool(tooltipName);
    };
    SidebarToolsComponent.prototype.onChangeShapeTool = function (tooltipName) {
        this.showShapeTools = false;
        this.currentShapeTool = tooltipName;
        this.currentToolName = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TOOL_NAME"].ShapeTool;
        this.toolSelectorService.changeTool(tooltipName);
    };
    SidebarToolsComponent.prototype.onRightClick = function (i) {
        if (i === src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TRACING_TOOL_POSITION"]) {
            this.showTracingTools = true;
            this.showShapeTools = false;
        }
        else if (i === src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["SHAPE_TOOL_POSITION"]) {
            this.showShapeTools = true;
            this.showTracingTools = false;
        }
    };
    SidebarToolsComponent.prototype.onClickAttributePanel = function () {
        this.showShapeTools = false;
        this.showTracingTools = false;
    };
    SidebarToolsComponent.prototype.getChecked = function (i) {
        var tooltipName = this.TOOLS_BUTTON_INFO[i].tooltipName;
        if (i === src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TRACING_TOOL_POSITION"]) {
            return this.currentToolName === this.currentTracingTool;
        }
        else if (i === src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["SHAPE_TOOL_POSITION"]) {
            return this.currentToolName === this.currentShapeTool;
        }
        else {
            return this.currentToolName === tooltipName;
        }
    };
    SidebarToolsComponent.prototype.getTracingToolClass = function () {
        var _this = this;
        var iconClass = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TRACING_BUTTON_INFO"][0].iconName;
        src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TRACING_BUTTON_INFO"].forEach(function (el) {
            if (el.tooltipName === _this.currentTracingTool) {
                iconClass = el.iconName;
            }
        });
        return iconClass;
    };
    SidebarToolsComponent.prototype.getShapeToolClass = function () {
        var _this = this;
        var iconClass = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["SHAPE_BUTTON_INFO"][0].iconName;
        src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["SHAPE_BUTTON_INFO"].forEach(function (el) {
            if (el.tooltipName === _this.currentShapeTool) {
                iconClass = el.iconName;
            }
        });
        return iconClass;
    };
    SidebarToolsComponent.prototype.checkIfCantUndoRedo = function (toolName) {
        if (toolName === src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TOOL_NAME"].Undo) {
            return this.undoRedoerService.undos.length <= 1;
        }
        else if (toolName === src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TOOL_NAME"].Redo) {
            return this.undoRedoerService.redos.length === 0;
        }
        return false;
    };
    SidebarToolsComponent.ctorParameters = function () { return [
        { type: _services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_4__["ToolSelectorService"] },
        { type: src_app_services_undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_2__["UndoRedoerService"] }
    ]; };
    SidebarToolsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar-tools',
            template: __webpack_require__(/*! raw-loader!./sidebar-tools.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar-tools/sidebar-tools.component.html"),
            styles: [__webpack_require__(/*! ./sidebar-tools.component.scss */ "./src/app/components/sidebar-tools/sidebar-tools.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_4__["ToolSelectorService"], src_app_services_undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_2__["UndoRedoerService"]])
    ], SidebarToolsComponent);
    return SidebarToolsComponent;
}());



/***/ }),

/***/ "./src/app/components/work-zone/work-zone.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/work-zone/work-zone.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#workZone {\n  width: 0;\n  height: 0;\n  padding: 0;\n  margin: 0;\n}\n\n.grid {\n  pointer-events: none;\n}\n\nsvg {\n  position: absolute;\n  top: 0px;\n  left: 360px;\n}\n\n.stop-scrolling {\n  position: fixed;\n  height: 100%;\n  overflow: hidden;\n}\n\n#save {\n  position: absolute;\n  top: 0px;\n  left: 360px;\n}\n\n#load {\n  position: absolute;\n  top: 0px;\n  left: 400px;\n}\n\n#input {\n  position: absolute;\n  top: 0px;\n  left: 460px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZWhjaXgvRGV2L0dpdGh1Yi9QOS9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3dvcmstem9uZS93b3JrLXpvbmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvd29yay16b25lL3dvcmstem9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dvcmstem9uZS93b3JrLXpvbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd29ya1pvbmUge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmdyaWQge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5zdmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAzNjBweDtcbn1cblxuLnN0b3Atc2Nyb2xsaW5nIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNzYXZlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMzYwcHg7XG59XG4jbG9hZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDQwMHB4O1xufVxuI2lucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogNDYwcHg7XG59XG4iLCIjd29ya1pvbmUge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5ncmlkIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbnN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDM2MHB4O1xufVxuXG4uc3RvcC1zY3JvbGxpbmcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI3NhdmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAzNjBweDtcbn1cblxuI2xvYWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiA0MDBweDtcbn1cblxuI2lucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogNDYwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/work-zone/work-zone.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/work-zone/work-zone.component.ts ***!
  \*************************************************************/
/*! exports provided: WorkZoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkZoneComponent", function() { return WorkZoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/clipboard/clipboard.service */ "./src/app/services/clipboard/clipboard.service.ts");
/* harmony import */ var src_app_services_event_listener_event_listener_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/event-listener/event-listener.service */ "./src/app/services/event-listener/event-listener.service.ts");
/* harmony import */ var src_app_services_modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/modal-manager/modal-manager.service */ "./src/app/services/modal-manager/modal-manager.service.ts");
/* harmony import */ var src_app_services_server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/server/drawing-loader/drawing-loader.service */ "./src/app/services/server/drawing-loader/drawing-loader.service.ts");
/* harmony import */ var src_app_services_server_drawing_saver_drawing_saver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/server/drawing-saver/drawing-saver.service */ "./src/app/services/server/drawing-saver/drawing-saver.service.ts");
/* harmony import */ var src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/shortcut-manager/shortcut-manager.service */ "./src/app/services/shortcut-manager/shortcut-manager.service.ts");
/* harmony import */ var src_app_services_tools_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/tools/color-tool/color-tool.service */ "./src/app/services/tools/color-tool/color-tool.service.ts");
/* harmony import */ var src_app_services_tools_grid_tool_grid_tool_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/tools/grid-tool/grid-tool.service */ "./src/app/services/tools/grid-tool/grid-tool.service.ts");
/* harmony import */ var src_app_services_tools_magnetism_tool_magnetism_tool_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/tools/magnetism-tool/magnetism-tool.service */ "./src/app/services/tools/magnetism-tool/magnetism-tool.service.ts");
/* harmony import */ var src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/tools/tool-selector/tool-selector.service */ "./src/app/services/tools/tool-selector/tool-selector.service.ts");
/* harmony import */ var src_app_services_undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/undo-redoer/undo-redoer.service */ "./src/app/services/undo-redoer/undo-redoer.service.ts");
/* harmony import */ var src_constants_color_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/constants/color-constants */ "./src/constants/color-constants.ts");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _services_draw_stack_draw_stack_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/draw-stack/draw-stack.service */ "./src/app/services/draw-stack/draw-stack.service.ts");
/* harmony import */ var _services_drawing_modal_window_drawing_modal_window_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../services/drawing-modal-window/drawing-modal-window.service */ "./src/app/services/drawing-modal-window/drawing-modal-window.service.ts");



















var WorkZoneComponent = /** @class */ (function () {
    function WorkZoneComponent(drawingModalWindowService, renderer, toolSelector, colorToolService, gridToolService, shortCutManagerService, modalManagerService, drawingLoaderService, drawingSaverService, undoRedoerService, clipboard, snackBar, magnetismToolService) {
        this.drawingModalWindowService = drawingModalWindowService;
        this.renderer = renderer;
        this.toolSelector = toolSelector;
        this.colorToolService = colorToolService;
        this.gridToolService = gridToolService;
        this.shortCutManagerService = shortCutManagerService;
        this.modalManagerService = modalManagerService;
        this.drawingLoaderService = drawingLoaderService;
        this.drawingSaverService = drawingSaverService;
        this.undoRedoerService = undoRedoerService;
        this.clipboard = clipboard;
        this.snackBar = snackBar;
        this.magnetismToolService = magnetismToolService;
        this.drawingInfo = { width: 0, height: 0, color: src_constants_color_constants__WEBPACK_IMPORTED_MODULE_14__["DEFAULT_WHITE"] };
        this.gridIsActive = false;
        this.gridSize = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_16__["GRID_SIZE"].Default;
        this.gridOpacity = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_16__["GRID_OPACITY"].Max;
        this.toolName = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_16__["TOOL_NAME"].Selection;
    }
    WorkZoneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.undoRedoerService.initializeService(this.refSVG);
        this.drawStack = new _services_draw_stack_draw_stack_service__WEBPACK_IMPORTED_MODULE_17__["DrawStackService"](this.renderer, this.drawingLoaderService, this.undoRedoerService);
        this.toolSelector.initTools(this.drawStack, this.refSVG, this.renderer);
        this.initializeEventListeners();
        this.toolSelector.currentToolName.subscribe(function (toolName) {
            _this.toolName = toolName;
        });
        this.drawingLoaderService.currentDrawing.subscribe(function (selectedDrawing) {
            if (selectedDrawing.svg !== '') {
                _this.drawingLoaderService.emptyDrawStack.next(false);
                _this.updateDrawingInfo(selectedDrawing.drawingInfo);
                _this.appendDrawingToView(selectedDrawing);
                _this.drawingLoaderService.untouchedWorkZone.next(false);
            }
            if (_this.undoRedoerService.fromLoader) {
                _this.undoRedoerService.saveCurrentState(_this.drawStack.idStack);
                _this.undoRedoerService.fromLoader = false;
            }
        });
        this.drawingModalWindowService.drawingInfo.subscribe(function (drawingInfo) {
            if (drawingInfo.width !== 0 && drawingInfo.height !== 0) {
                _this.resetWorkzone(drawingInfo);
                _this.drawingLoaderService.untouchedWorkZone.next(false);
            }
            if (_this.undoRedoerService.undos.length === 0 && !_this.undoRedoerService.fromLoader) {
                setTimeout(function () {
                    _this.undoRedoerService.saveCurrentState([]);
                }, 0);
            }
        });
        this.drawingSaverService.initializeDrawingSaverService(this.refSVG, this.drawStack);
        this.colorToolService.backgroundColor.subscribe(function (backgroundColor) {
            _this.drawingInfo.color = backgroundColor;
            _this.setRectangleBackgroundStyle();
        });
        this.gridToolService.currentState.subscribe(function (state) {
            _this.gridIsActive = state;
        });
        this.gridToolService.currentSize.subscribe(function (size) {
            _this.gridSize = size;
        });
        this.gridToolService.currentOpacity.subscribe(function (opacity) {
            _this.gridOpacity = opacity;
        });
        this.modalManagerService.currentModalIsDisplayed.subscribe(function (modalIsDisplayed) {
            _this.modalIsDisplayed = modalIsDisplayed;
        });
        this.setDefaultWorkZoneProperties();
    };
    WorkZoneComponent.prototype.setDefaultWorkZoneProperties = function () {
        this.drawingInfo.height = window.innerHeight;
        this.drawingInfo.width = window.innerWidth - src_constants_constants__WEBPACK_IMPORTED_MODULE_15__["SIDEBAR_WIDTH"];
        this.drawingInfo.color = src_constants_color_constants__WEBPACK_IMPORTED_MODULE_14__["DEFAULT_TRANSPARENT"];
        this.drawingLoaderService.emptyDrawStack.next(true);
        this.setRectangleBackgroundStyle();
    };
    WorkZoneComponent.prototype.updateDrawingInfo = function (newDrawingInfo) {
        this.drawingInfo = newDrawingInfo;
        this.drawingModalWindowService.changeDrawingInfo(this.drawingInfo.width, this.drawingInfo.height, this.drawingInfo.color);
    };
    WorkZoneComponent.prototype.appendDrawingToView = function (selectedDrawing) {
        var _this = this;
        this.renderer.setProperty(this.refSVG.nativeElement, 'innerHTML', selectedDrawing.svg);
        var idStack = Object.values(selectedDrawing.drawingInfo.idStack);
        idStack.forEach(function (id) {
            var children = Array.from(_this.refSVG.nativeElement.children);
            var child = children.filter(function (filterChild) {
                return filterChild.getAttribute('id_element') === id;
            })[0];
            _this.drawStack.push(child, false);
        });
    };
    WorkZoneComponent.prototype.initializeEventListeners = function () {
        this.eventListenerService = new src_app_services_event_listener_event_listener_service__WEBPACK_IMPORTED_MODULE_4__["EventListenerService"](this.refSVG, this.toolSelector, this.gridToolService, this.shortCutManagerService, this.modalManagerService, this.renderer, this.drawingLoaderService, this.undoRedoerService, this.clipboard, this.magnetismToolService);
        this.eventListenerService.addEventListeners();
    };
    WorkZoneComponent.prototype.resetWorkzone = function (drawingInfo) {
        var e_1, _a;
        this.drawingInfo = drawingInfo;
        this.setRectangleBackgroundStyle();
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.drawStack.reset()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                this.renderer.removeChild(this.refSVG.nativeElement, el);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.drawingLoaderService.emptyDrawStack.next(true);
    };
    WorkZoneComponent.prototype.onClickRectangle = function () {
        if (this.drawingLoaderService.untouchedWorkZone.value) {
            this.snackBar.open('Veuillez créer un nouveau dessin!', 'OK', {
                duration: src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_16__["SNACKBAR_DURATION"],
            });
        }
    };
    WorkZoneComponent.prototype.getCursorStyle = function () {
        if (this.drawingLoaderService.untouchedWorkZone.value) {
            return { cursor: 'not-allowed' };
        }
        switch (this.toolName) {
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_16__["TOOL_NAME"].Eraser:
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_16__["TOOL_NAME"].Quill:
                return { cursor: 'none' };
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_16__["TOOL_NAME"].Brush:
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_16__["TOOL_NAME"].Pencil:
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_16__["TOOL_NAME"].Rectangle:
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_16__["TOOL_NAME"].Ellipsis:
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_16__["TOOL_NAME"].Pen:
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_16__["TOOL_NAME"].Polygon:
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_16__["TOOL_NAME"].ColorApplicator:
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_16__["TOOL_NAME"].Line:
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_16__["TOOL_NAME"].SprayCan:
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_16__["TOOL_NAME"].Fill:
                return { cursor: 'crosshair' };
            default:
                return { cursor: 'default' };
        }
    };
    WorkZoneComponent.prototype.backgroundColor = function () {
        if (this.drawingLoaderService.untouchedWorkZone.value) {
            this.drawingInfo.color = src_constants_color_constants__WEBPACK_IMPORTED_MODULE_14__["DEFAULT_TRANSPARENT"];
        }
        return this.drawingInfo.color;
    };
    WorkZoneComponent.prototype.setRectangleBackgroundStyle = function () {
        if (this.drawingInfo.width > 0 || this.drawingInfo.height > 0) {
            this.renderer.setAttribute(this.refSVG.nativeElement.children[0], 'height', this.drawingInfo.height + 'px');
            this.renderer.setAttribute(this.refSVG.nativeElement.children[0], 'width', this.drawingInfo.width + 'px');
            this.renderer.setAttribute(this.refSVG.nativeElement.children[0], 'style', 'fill: #' + this.backgroundColor() + ';');
        }
    };
    WorkZoneComponent.ctorParameters = function () { return [
        { type: _services_drawing_modal_window_drawing_modal_window_service__WEBPACK_IMPORTED_MODULE_18__["DrawingModalWindowService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_12__["ToolSelectorService"] },
        { type: src_app_services_tools_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_9__["ColorToolService"] },
        { type: src_app_services_tools_grid_tool_grid_tool_service__WEBPACK_IMPORTED_MODULE_10__["GridToolService"] },
        { type: src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_8__["ShortcutManagerService"] },
        { type: src_app_services_modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_5__["ModalManagerService"] },
        { type: src_app_services_server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_6__["DrawingLoaderService"] },
        { type: src_app_services_server_drawing_saver_drawing_saver_service__WEBPACK_IMPORTED_MODULE_7__["DrawingSaverService"] },
        { type: src_app_services_undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_13__["UndoRedoerService"] },
        { type: src_app_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_3__["ClipboardService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
        { type: src_app_services_tools_magnetism_tool_magnetism_tool_service__WEBPACK_IMPORTED_MODULE_11__["MagnetismToolService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('svgpad', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], WorkZoneComponent.prototype, "refSVG", void 0);
    WorkZoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work-zone',
            template: __webpack_require__(/*! raw-loader!./work-zone.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/work-zone/work-zone.component.html"),
            styles: [__webpack_require__(/*! ./work-zone.component.scss */ "./src/app/components/work-zone/work-zone.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_drawing_modal_window_drawing_modal_window_service__WEBPACK_IMPORTED_MODULE_18__["DrawingModalWindowService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            src_app_services_tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_12__["ToolSelectorService"],
            src_app_services_tools_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_9__["ColorToolService"],
            src_app_services_tools_grid_tool_grid_tool_service__WEBPACK_IMPORTED_MODULE_10__["GridToolService"],
            src_app_services_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_8__["ShortcutManagerService"],
            src_app_services_modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_5__["ModalManagerService"],
            src_app_services_server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_6__["DrawingLoaderService"],
            src_app_services_server_drawing_saver_drawing_saver_service__WEBPACK_IMPORTED_MODULE_7__["DrawingSaverService"],
            src_app_services_undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_13__["UndoRedoerService"],
            src_app_services_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_3__["ClipboardService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            src_app_services_tools_magnetism_tool_magnetism_tool_service__WEBPACK_IMPORTED_MODULE_11__["MagnetismToolService"]])
    ], WorkZoneComponent);
    return WorkZoneComponent;
}());



/***/ }),

/***/ "./src/app/services/clipboard/clipboard.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/clipboard/clipboard.service.ts ***!
  \*********************************************************/
/*! exports provided: ClipboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardService", function() { return ClipboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _manipulator_manipulator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../manipulator/manipulator.service */ "./src/app/services/manipulator/manipulator.service.ts");
/* harmony import */ var _undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../undo-redoer/undo-redoer.service */ "./src/app/services/undo-redoer/undo-redoer.service.ts");







var ClipboardService = /** @class */ (function () {
    function ClipboardService(manipulator, undoRedoerService) {
        var _this = this;
        this.manipulator = manipulator;
        this.undoRedoerService = undoRedoerService;
        this.clippings = new Set();
        this.duplicationBuffer = new Set();
        this.pasteOffsetValue = 0;
        this.duplicateOffsetValue = 0;
        this.firstDuplication = true;
        this.isClippingsEmpty = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this.undoRedoerService.currentDuplicateOffset.subscribe(function (value) {
            _this.duplicateOffsetValue = value;
        });
        this.undoRedoerService.currentPasteOffset.subscribe(function (value) {
            _this.pasteOffsetValue = value;
        });
        this.undoRedoerService.currentClipping.subscribe(function (value) {
            if (!_this.compareClipings(value, _this.clippings)) {
                _this.pasteOffsetValue = 0;
                _this.duplicateOffsetValue = 0;
            }
        });
    }
    ClipboardService.prototype.compareClipings = function (clip1, clip2) {
        var e_1, _a;
        if (clip1.size !== clip2.size) {
            return false;
        }
        try {
            for (var clip1_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](clip1), clip1_1_1 = clip1_1.next(); !clip1_1_1.done; clip1_1_1 = clip1_1.next()) {
                var elem = clip1_1_1.value;
                if (!clip2.has(elem)) {
                    return false;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (clip1_1_1 && !clip1_1_1.done && (_a = clip1_1.return)) _a.call(clip1_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return true;
    };
    ClipboardService.prototype.initializeService = function (elementRef, renderer, drawStack, selection) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.drawStack = drawStack;
        this.selection = selection;
    };
    ClipboardService.prototype.restartDuplication = function () {
        var e_2, _a;
        this.duplicationBuffer.clear();
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.selection.selectedElements), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                this.duplicationBuffer.add(el);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.firstDuplication = true;
    };
    ClipboardService.prototype.clone = function (elementsToClone, offset) {
        var e_3, _a;
        var newSelection = new Set();
        try {
            for (var elementsToClone_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](elementsToClone), elementsToClone_1_1 = elementsToClone_1.next(); !elementsToClone_1_1.done; elementsToClone_1_1 = elementsToClone_1.next()) {
                var el = elementsToClone_1_1.value;
                var deepCopy = el.cloneNode(true);
                this.drawStack.push(deepCopy, false);
                this.manipulator.translateElement(offset, offset, deepCopy);
                this.renderer.appendChild(this.elementRef.nativeElement, deepCopy);
                newSelection.add(deepCopy);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (elementsToClone_1_1 && !elementsToClone_1_1.done && (_a = elementsToClone_1.return)) _a.call(elementsToClone_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.updateSelection(newSelection);
        this.manipulator.updateOrigins(this.selection);
    };
    ClipboardService.prototype.updateSelection = function (newSelection) {
        var e_4, _a;
        this.selection.emptySelection();
        try {
            for (var newSelection_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](newSelection), newSelection_1_1 = newSelection_1.next(); !newSelection_1_1.done; newSelection_1_1 = newSelection_1.next()) {
                var el = newSelection_1_1.value;
                this.selection.addToSelection(el);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (newSelection_1_1 && !newSelection_1_1.done && (_a = newSelection_1.return)) _a.call(newSelection_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    ClipboardService.prototype.fetchSelectionBounds = function () {
        this.clippingsBound = this.selection.selectionBox.getBoundingClientRect();
    };
    ClipboardService.prototype.handleDuplicateOutOfBounds = function () {
        this.fetchSelectionBounds();
        if (!this.isInBounds()) {
            this.duplicateOffsetValue = 0;
        }
    };
    ClipboardService.prototype.handlePasteOutOfBounds = function () {
        this.fetchSelectionBounds();
        if (!this.isInBounds()) {
            this.pasteOffsetValue = 0;
        }
    };
    ClipboardService.prototype.increasePasteOffsetValue = function () {
        this.pasteOffsetValue += src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["OFFSET_STEP"];
    };
    ClipboardService.prototype.increaseDuplicateOffsetValue = function () {
        this.duplicateOffsetValue += src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["OFFSET_STEP"];
    };
    ClipboardService.prototype.isInBounds = function () {
        var boxLeft = this.clippingsBound.x + window.scrollX - src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_WIDTH"];
        var boxTop = this.clippingsBound.y + window.scrollY;
        var parentBoxRight = this.elementRef.nativeElement.getBoundingClientRect().x +
            window.scrollX -
            src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_WIDTH"] +
            this.elementRef.nativeElement.getBoundingClientRect().width;
        var parentBoxBottom = this.elementRef.nativeElement.getBoundingClientRect().y +
            window.scrollY +
            this.elementRef.nativeElement.getBoundingClientRect().height;
        return boxLeft < parentBoxRight && boxTop < parentBoxBottom;
    };
    ClipboardService.prototype.notifyClippingsState = function () {
        if (this.clippings.size > 0) {
            this.isClippingsEmpty.next(false);
        }
        else {
            this.isClippingsEmpty.next(true);
        }
    };
    ClipboardService.prototype.cut = function () {
        var e_5, _a;
        this.firstDuplication = true;
        this.clippings.clear();
        this.duplicationBuffer.clear();
        this.fetchSelectionBounds();
        this.pasteOffsetValue = 0;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.selection.selectedElements), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                this.clippings.add(el);
                this.drawStack.delete(el);
                this.renderer.removeChild(this.elementRef.nativeElement, el);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        this.selection.emptySelection();
        this.notifyClippingsState();
        this.undoRedoerService.saveCurrentState(this.drawStack.idStack);
    };
    ClipboardService.prototype.copy = function () {
        var e_6, _a;
        this.firstDuplication = true;
        this.clippings.clear();
        this.duplicationBuffer.clear();
        this.fetchSelectionBounds();
        this.pasteOffsetValue = 0;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.selection.selectedElements), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                this.clippings.add(el);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        this.notifyClippingsState();
    };
    ClipboardService.prototype.duplicate = function () {
        var e_7, _a;
        if (this.selection.selectedElements.size === 0) {
            return;
        }
        if (this.firstDuplication && this.selection.selectedElements.size > 0) {
            this.duplicationBuffer.clear();
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.selection.selectedElements), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var el = _c.value;
                    this.duplicationBuffer.add(el);
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_7) throw e_7.error; }
            }
            this.duplicateOffsetValue = 0;
            this.firstDuplication = false;
        }
        this.handleDuplicateOutOfBounds();
        this.increaseDuplicateOffsetValue();
        this.clone(this.duplicationBuffer, this.duplicateOffsetValue);
        this.saveStateFromDuplicate();
    };
    ClipboardService.prototype.saveStateFromDuplicate = function () {
        this.undoRedoerService.saveStateAndDuplicateOffset(this.drawStack.idStack, this.duplicateOffsetValue);
    };
    ClipboardService.prototype.paste = function () {
        if (this.clippings.size === 0) {
            return;
        }
        this.firstDuplication = true;
        this.handlePasteOutOfBounds();
        this.increasePasteOffsetValue();
        this.clone(this.clippings, this.pasteOffsetValue);
        this.saveStateFromPaste();
    };
    ClipboardService.prototype.saveStateFromPaste = function () {
        this.undoRedoerService.saveStateFromPaste(this.drawStack.idStack, this.pasteOffsetValue, this.clippings);
    };
    ClipboardService.prototype.delete = function () {
        var e_8, _a;
        if (this.selection.selectedElements.size === 0) {
            return;
        }
        this.firstDuplication = true;
        this.duplicationBuffer.clear();
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.selection.selectedElements), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                this.drawStack.delete(el);
                this.renderer.removeChild(this.elementRef.nativeElement, el);
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_8) throw e_8.error; }
        }
        this.selection.emptySelection();
        this.undoRedoerService.saveCurrentState(this.drawStack.idStack);
    };
    ClipboardService.ctorParameters = function () { return [
        { type: _manipulator_manipulator_service__WEBPACK_IMPORTED_MODULE_5__["ManipulatorService"] },
        { type: _undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_6__["UndoRedoerService"] }
    ]; };
    ClipboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_manipulator_manipulator_service__WEBPACK_IMPORTED_MODULE_5__["ManipulatorService"], _undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_6__["UndoRedoerService"]])
    ], ClipboardService);
    return ClipboardService;
}());



/***/ }),

/***/ "./src/app/services/draw-stack/draw-stack.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/draw-stack/draw-stack.service.ts ***!
  \***********************************************************/
/*! exports provided: DrawStackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawStackService", function() { return DrawStackService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_classes_StackTargetInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/classes/StackTargetInfo */ "./src/classes/StackTargetInfo.ts");
/* harmony import */ var _server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../server/drawing-loader/drawing-loader.service */ "./src/app/services/server/drawing-loader/drawing-loader.service.ts");
/* harmony import */ var _undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../undo-redoer/undo-redoer.service */ "./src/app/services/undo-redoer/undo-redoer.service.ts");






var DrawStackService = /** @class */ (function () {
    function DrawStackService(renderer, drawingLoaderService, undoRedoerService) {
        this.drawingLoaderService = drawingLoaderService;
        this.undoRedoerService = undoRedoerService;
        this.stackTarget = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new src_classes_StackTargetInfo__WEBPACK_IMPORTED_MODULE_3__["StackTargetInfo"]());
        this.drawStack = new Array();
        this.idStack = new Array();
        this.currentStackTarget = this.stackTarget.asObservable();
        this.renderer = renderer;
    }
    DrawStackService.prototype.changeTargetElement = function (stackTarget) {
        this.stackTarget.next(stackTarget);
    };
    DrawStackService.prototype.getElementByPosition = function (elementPosition) {
        return this.drawStack[elementPosition];
    };
    DrawStackService.prototype.setElementByPosition = function (elementPosition, element) {
        this.drawStack[elementPosition] = element;
    };
    DrawStackService.prototype.delete = function (elementToDelete) {
        var indexOfDeletion = this.drawStack.indexOf(elementToDelete);
        this.drawStack.splice(indexOfDeletion, 1);
        this.idStack.splice(indexOfDeletion, 1);
        this.resolveDrawStackOrdering(indexOfDeletion);
        if (this.drawStack.length === 0) {
            this.drawingLoaderService.emptyDrawStack.next(true);
        }
    };
    DrawStackService.prototype.resolveDrawStackOrdering = function (displacementIndex) {
        for (var i = displacementIndex; i < this.drawStack.length; i++) {
            this.renderer.setAttribute(this.drawStack[i], 'id_element', i.toString());
        }
        for (var i = displacementIndex; i < this.idStack.length; i++) {
            this.idStack[i] = i.toString();
        }
    };
    DrawStackService.prototype.getDrawStackLength = function () {
        return this.drawStack.length;
    };
    DrawStackService.prototype.makeTargetable = function (el) {
        var _this = this;
        var position = this.drawStack.length;
        var tool = el.getAttribute('title');
        this.renderer.setAttribute(el, 'id_element', position.toString());
        this.idStack.push(el.getAttribute('id_element'));
        for (var i = 0; i < el.children.length; i++) {
            this.renderer.listen(el.children.item(i), 'mousedown', function () {
                _this.changeTargetElement(new src_classes_StackTargetInfo__WEBPACK_IMPORTED_MODULE_3__["StackTargetInfo"](parseInt(el.getAttribute('id_element'), 10), tool));
            });
            this.renderer.listen(el.children.item(i), 'mouseup', function () {
                _this.changeTargetElement(new src_classes_StackTargetInfo__WEBPACK_IMPORTED_MODULE_3__["StackTargetInfo"](parseInt(el.getAttribute('id_element'), 10), tool));
            });
        }
        return el;
    };
    DrawStackService.prototype.push = function (el, byTool) {
        if (byTool === void 0) { byTool = true; }
        this.drawStack.push(this.makeTargetable(el));
        if (this.idStack.length > 0) {
            this.drawingLoaderService.emptyDrawStack.next(false);
        }
        if (byTool) {
            this.undoRedoerService.saveCurrentState(this.idStack);
        }
    };
    DrawStackService.prototype.pop = function () {
        var result = this.drawStack.pop();
        if (this.idStack.length === 0) {
            this.drawingLoaderService.emptyDrawStack.next(true);
        }
        return result;
    };
    DrawStackService.prototype.reset = function () {
        this.drawingLoaderService.emptyDrawStack.next(true);
        this.idStack.splice(0, this.idStack.length);
        return this.drawStack.splice(0, this.drawStack.length);
    };
    DrawStackService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_4__["DrawingLoaderService"] },
        { type: _undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_5__["UndoRedoerService"] }
    ]; };
    DrawStackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_4__["DrawingLoaderService"],
            _undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_5__["UndoRedoerService"]])
    ], DrawStackService);
    return DrawStackService;
}());



/***/ }),

/***/ "./src/app/services/drawing-modal-window/drawing-modal-window.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/services/drawing-modal-window/drawing-modal-window.service.ts ***!
  \*******************************************************************************/
/*! exports provided: DrawingModalWindowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingModalWindowService", function() { return DrawingModalWindowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_constants_color_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants/color-constants */ "./src/constants/color-constants.ts");




var DrawingModalWindowService = /** @class */ (function () {
    function DrawingModalWindowService() {
        this.drawingInfo = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            width: 0,
            height: 0,
            color: src_constants_color_constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_WHITE"],
        });
    }
    DrawingModalWindowService.prototype.changeDrawingInfo = function (width, height, color) {
        this.drawingInfo.value.width = width;
        this.drawingInfo.value.height = height;
        this.drawingInfo.value.color = color;
        this.drawingInfo.next(this.drawingInfo.value);
    };
    DrawingModalWindowService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], DrawingModalWindowService);
    return DrawingModalWindowService;
}());



/***/ }),

/***/ "./src/app/services/event-listener/event-listener.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/event-listener/event-listener.service.ts ***!
  \*******************************************************************/
/*! exports provided: EventListenerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListenerService", function() { return EventListenerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../clipboard/clipboard.service */ "./src/app/services/clipboard/clipboard.service.ts");
/* harmony import */ var _modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal-manager/modal-manager.service */ "./src/app/services/modal-manager/modal-manager.service.ts");
/* harmony import */ var _server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../server/drawing-loader/drawing-loader.service */ "./src/app/services/server/drawing-loader/drawing-loader.service.ts");
/* harmony import */ var _shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shortcut-manager/shortcut-manager.service */ "./src/app/services/shortcut-manager/shortcut-manager.service.ts");
/* harmony import */ var _tools_grid_tool_grid_tool_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tools/grid-tool/grid-tool.service */ "./src/app/services/tools/grid-tool/grid-tool.service.ts");
/* harmony import */ var _tools_line_tool_line_tool_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tools/line-tool/line-tool.service */ "./src/app/services/tools/line-tool/line-tool.service.ts");
/* harmony import */ var _tools_magnetism_tool_magnetism_tool_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tools/magnetism-tool/magnetism-tool.service */ "./src/app/services/tools/magnetism-tool/magnetism-tool.service.ts");
/* harmony import */ var _tools_quill_tool_quill_tool_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../tools/quill-tool/quill-tool.service */ "./src/app/services/tools/quill-tool/quill-tool.service.ts");
/* harmony import */ var _tools_selection_tool_selection_tool_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../tools/selection-tool/selection-tool.service */ "./src/app/services/tools/selection-tool/selection-tool.service.ts");
/* harmony import */ var _tools_stamp_tool_stamp_tool_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tools/stamp-tool/stamp-tool.service */ "./src/app/services/tools/stamp-tool/stamp-tool.service.ts");
/* harmony import */ var _tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../tools/tool-selector/tool-selector.service */ "./src/app/services/tools/tool-selector/tool-selector.service.ts");
/* harmony import */ var _undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../undo-redoer/undo-redoer.service */ "./src/app/services/undo-redoer/undo-redoer.service.ts");
















var EventListenerService = /** @class */ (function () {
    function EventListenerService(workZoneSVGRef, toolSelectorService, gridToolService, shortCutManagerService, modalManagerService, renderer, drawingLoaderService, undoRedoerService, clipboardService, magnetismToolService) {
        var _this = this;
        this.workZoneSVGRef = workZoneSVGRef;
        this.toolSelectorService = toolSelectorService;
        this.gridToolService = gridToolService;
        this.shortCutManagerService = shortCutManagerService;
        this.modalManagerService = modalManagerService;
        this.renderer = renderer;
        this.drawingLoaderService = drawingLoaderService;
        this.undoRedoerService = undoRedoerService;
        this.clipboardService = clipboardService;
        this.magnetismToolService = magnetismToolService;
        this.toolName = '';
        this.isOnInput = false;
        this.isModalOpen = false;
        this.toolSelectorService.currentToolName.subscribe(function (toolName) {
            _this.toolName = toolName;
            _this.currentTool = _this.toolSelectorService.currentTool;
        });
        this.shortCutManagerService.currentIsOnInput.subscribe(function (isOnInput) {
            _this.isOnInput = isOnInput;
        });
        this.modalManagerService.currentModalIsDisplayed.subscribe(function (isModalOpen) {
            _this.isModalOpen = isModalOpen;
        });
    }
    EventListenerService.prototype.addEventListeners = function () {
        var _this = this;
        this.renderer.listen(this.workZoneSVGRef.nativeElement, 'mousemove', function (event) {
            if (_this.currentTool !== undefined && _this.shouldAllowEvent()) {
                _this.currentTool.onMouseMove(event);
            }
        });
        this.renderer.listen(this.workZoneSVGRef.nativeElement, 'mousedown', function (event) {
            if (_this.currentTool !== undefined && _this.shouldAllowEvent()) {
                _this.currentTool.onMouseDown(event);
            }
        });
        this.renderer.listen(window, 'mouseup', function (event) {
            if (_this.currentTool !== undefined && _this.shouldAllowEvent()) {
                _this.currentTool.onMouseUp(event);
            }
        });
        this.renderer.listen(this.workZoneSVGRef.nativeElement, 'mouseenter', function (event) {
            if (_this.currentTool !== undefined && _this.shouldAllowEvent()) {
                _this.currentTool.onMouseEnter(event);
            }
        });
        this.renderer.listen(this.workZoneSVGRef.nativeElement, 'mouseleave', function (event) {
            if (_this.currentTool !== undefined && _this.shouldAllowEvent()) {
                _this.currentTool.onMouseLeave(event);
            }
        });
        this.renderer.listen(this.workZoneSVGRef.nativeElement, 'wheel', function (event) {
            if ((_this.currentTool instanceof _tools_stamp_tool_stamp_tool_service__WEBPACK_IMPORTED_MODULE_13__["StampToolService"] ||
                _this.currentTool instanceof _tools_selection_tool_selection_tool_service__WEBPACK_IMPORTED_MODULE_12__["SelectionToolService"] ||
                _this.currentTool instanceof _tools_quill_tool_quill_tool_service__WEBPACK_IMPORTED_MODULE_11__["QuillToolService"]) &&
                _this.shouldAllowEvent()) {
                _this.currentTool.onWheel(event);
            }
        });
        this.renderer.listen(this.workZoneSVGRef.nativeElement, 'dblclick', function (event) {
            if (_this.currentTool instanceof _tools_line_tool_line_tool_service__WEBPACK_IMPORTED_MODULE_9__["LineToolService"] && _this.shouldAllowEvent()) {
                _this.currentTool.onDblClick(event);
            }
        });
        this.renderer.listen(window, 'keydown', function (event) {
            if (_this.currentTool !== undefined && event.ctrlKey) {
                event.preventDefault();
                if (src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROL_SHORTCUTS"].has(event.key)) {
                    _this.toolSelectorService.changeTool(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROL_SHORTCUTS"].get(event.key));
                }
                if (event.key === src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["KEYS"].z) {
                    _this.currentTool.cleanUp();
                    _this.undoRedoerService.undo();
                }
                else if (event.key === src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["KEYS"].Z) {
                    _this.currentTool.cleanUp();
                    _this.undoRedoerService.redo();
                }
                else if (event.key === src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["KEYS"].x) {
                    _this.clipboardService.cut();
                }
                else if (event.key === src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["KEYS"].v) {
                    _this.toolSelectorService.changeTool(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TOOL_NAME"].Selection);
                    _this.clipboardService.paste();
                }
                else if (event.key === src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["KEYS"].c) {
                    _this.clipboardService.copy();
                }
                else if (event.key === src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["KEYS"].d) {
                    _this.clipboardService.duplicate();
                }
                else if (event.key === src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["KEYS"].a) {
                    _this.toolSelectorService.changeTool(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TOOL_NAME"].Selection);
                    _this.toolSelectorService.getSelectiontool().selectAll();
                }
            }
            if (_this.currentTool !== undefined && _this.shouldAllowEvent()) {
                _this.currentTool.onKeyDown(event);
            }
            if (_this.shouldAllowShortcuts() && src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TOOL_NAME_SHORTCUTS"].has(event.key) && !event.ctrlKey) {
                // tslint:disable-next-line: no-non-null-assertion
                _this.toolSelectorService.changeTool(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TOOL_NAME_SHORTCUTS"].get(event.key));
            }
            if (event.key === src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["KEYS"].g && _this.shouldAllowShortcuts()) {
                _this.gridToolService.switchState();
            }
            if (event.key === src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["KEYS"].plus && _this.shouldAllowShortcuts()) {
                _this.gridToolService.incrementSize();
            }
            if (event.key === src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["KEYS"].minus && _this.shouldAllowShortcuts()) {
                _this.gridToolService.decrementSize();
            }
            if (event.key === src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["KEYS"].m && _this.shouldAllowShortcuts()) {
                _this.magnetismToolService.switchState();
            }
            if (event.key === src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["KEYS"].delete) {
                _this.clipboardService.delete();
            }
        });
        this.renderer.listen(window, 'keyup', function (event) {
            if (_this.currentTool !== undefined) {
                _this.currentTool.onKeyUp(event);
            }
        });
    };
    EventListenerService.prototype.shouldAllowShortcuts = function () {
        return !this.isOnInput && !this.isModalOpen;
    };
    EventListenerService.prototype.shouldAllowEvent = function () {
        return !this.drawingLoaderService.emptyDrawStack.value || !this.drawingLoaderService.untouchedWorkZone.value;
    };
    EventListenerService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_14__["ToolSelectorService"] },
        { type: _tools_grid_tool_grid_tool_service__WEBPACK_IMPORTED_MODULE_8__["GridToolService"] },
        { type: _shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_7__["ShortcutManagerService"] },
        { type: _modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_5__["ModalManagerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_6__["DrawingLoaderService"] },
        { type: _undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_15__["UndoRedoerService"] },
        { type: _clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_4__["ClipboardService"] },
        { type: _tools_magnetism_tool_magnetism_tool_service__WEBPACK_IMPORTED_MODULE_10__["MagnetismToolService"] }
    ]; };
    EventListenerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _tools_tool_selector_tool_selector_service__WEBPACK_IMPORTED_MODULE_14__["ToolSelectorService"],
            _tools_grid_tool_grid_tool_service__WEBPACK_IMPORTED_MODULE_8__["GridToolService"],
            _shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_7__["ShortcutManagerService"],
            _modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_5__["ModalManagerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_6__["DrawingLoaderService"],
            _undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_15__["UndoRedoerService"],
            _clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_4__["ClipboardService"],
            _tools_magnetism_tool_magnetism_tool_service__WEBPACK_IMPORTED_MODULE_10__["MagnetismToolService"]])
    ], EventListenerService);
    return EventListenerService;
}());



/***/ }),

/***/ "./src/app/services/manipulator/manipulator.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/manipulator/manipulator.service.ts ***!
  \*************************************************************/
/*! exports provided: ManipulatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManipulatorService", function() { return ManipulatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/classes/Coords2D */ "./src/classes/Coords2D.ts");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");





var RIGHT = true;
var LEFT = false;
var TOP = false;
var BOTTOM = true;
var ManipulatorService = /** @class */ (function () {
    function ManipulatorService() {
        this.isRotateOnSelf = false;
        this.boxOrigin = new src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__["Coords2D"](0, 0);
        this.selectedElementsOrigin = new Map();
        this.rotationStep = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["ROTATION_ANGLE"].Base;
    }
    ManipulatorService.prototype.initializeService = function (renderer) {
        this.renderer = renderer;
    };
    ManipulatorService.prototype.scaleSelection = function (currentMouseCoords, fromControlPoint, selection) {
        switch (Number(fromControlPoint.getAttribute('controlPointId'))) {
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["CONTROL_POINTS"].TopLeft:
                this.applyScaleCorner(currentMouseCoords, selection, LEFT, TOP);
                break;
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["CONTROL_POINTS"].TopMiddle:
                this.applyScaleY(currentMouseCoords, selection, TOP);
                break;
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["CONTROL_POINTS"].TopRight:
                this.applyScaleCorner(currentMouseCoords, selection, RIGHT, TOP);
                break;
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["CONTROL_POINTS"].CenterRight:
                this.applyScaleX(currentMouseCoords, selection, RIGHT);
                break;
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["CONTROL_POINTS"].BottomRight:
                this.applyScaleCorner(currentMouseCoords, selection, RIGHT, BOTTOM);
                break;
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["CONTROL_POINTS"].BottomMiddle:
                this.applyScaleY(currentMouseCoords, selection, BOTTOM);
                break;
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["CONTROL_POINTS"].BottomLeft:
                this.applyScaleCorner(currentMouseCoords, selection, LEFT, BOTTOM);
                break;
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["CONTROL_POINTS"].CenterLeft:
                this.applyScaleX(currentMouseCoords, selection, LEFT);
                break;
            default:
                break;
        }
    };
    ManipulatorService.prototype.initTransformMatrix = function (selection) {
        var _this = this;
        selection.selectedElements.forEach(function (element) {
            var svg = _this.renderer.createElement('svg', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
            var initScale = svg.createSVGTransform();
            var initTranslate = svg.createSVGTransform();
            initScale.setScale(1, 1);
            initTranslate.setTranslate(0, 0);
            element.transform.baseVal.insertItemBefore(initTranslate, 0);
            element.transform.baseVal.insertItemBefore(initScale, 1);
        });
    };
    ManipulatorService.prototype.getXScaleFactor = function (dx, selection, isRight) {
        // get the distance from mouse to the coords x of box
        var distFromOgXToCurrentMouse = dx + (isRight ? selection.ogSelectionBoxWidth : 0);
        var newWidth = distFromOgXToCurrentMouse + (isRight ? 0 : selection.ogSelectionBoxWidth);
        var scaleFactor = newWidth / selection.ogSelectionBoxWidth;
        return (this.isAltDown) ? 2 * scaleFactor - 1 : scaleFactor;
    };
    ManipulatorService.prototype.getXTranslate = function (dx, scaleFactor, selection, isRight) {
        var xTranslate = selection.ogSelectionBoxPositions.x - (scaleFactor * selection.ogSelectionBoxPositions.x) - (isRight ? 0 : dx);
        if (this.isAltDown) {
            xTranslate = xTranslate - (isRight ? dx : 0);
        }
        return xTranslate;
    };
    ManipulatorService.prototype.getYScaleFactor = function (dy, selection, isBottom) {
        var distFromOgYToCurrentMouse = dy + (isBottom ? selection.ogSelectionBoxHeight : 0);
        var newHeight = distFromOgYToCurrentMouse + (isBottom ? 0 : selection.ogSelectionBoxHeight);
        var scaleFactor = newHeight / selection.ogSelectionBoxHeight;
        return (this.isAltDown) ? 2 * scaleFactor - 1 : scaleFactor;
    };
    ManipulatorService.prototype.getYTranslate = function (dy, scaleFactor, selection, isBottom) {
        var yTranslate = selection.ogSelectionBoxPositions.y - (scaleFactor * selection.ogSelectionBoxPositions.y) - (isBottom ? 0 : dy);
        if (this.isAltDown) {
            yTranslate = yTranslate - (isBottom ? dy : 0);
        }
        return yTranslate;
    };
    ManipulatorService.prototype.applyRedimTransformations = function (selection, xScale, yScale, xTranslate, yTranslate) {
        selection.selectedElements.forEach(function (element) {
            element.transform.baseVal.getItem(0).setTranslate(xTranslate, yTranslate);
            element.transform.baseVal.getItem(1).setScale(xScale, yScale);
        });
    };
    ManipulatorService.prototype.getDistanceFromControlPoint = function (currentMousePos, cntrlPointPos, isRightOrBottom) {
        var distance = currentMousePos - cntrlPointPos;
        distance = isRightOrBottom ? distance : -distance;
        return distance;
    };
    ManipulatorService.prototype.applyScaleCorner = function (currentMouse, selection, isRight, isBottom) {
        var dx = this.getDistanceFromControlPoint(currentMouse.x + window.scrollX, selection.ogActiveControlPointCoords.x, isRight);
        var dy = this.getDistanceFromControlPoint(currentMouse.y + window.scrollY, selection.ogActiveControlPointCoords.y, isBottom);
        if (this.isShiftDown) {
            var notProportionalWidth = selection.ogSelectionBoxWidth + dx;
            var notProportionalHeight = selection.ogSelectionBoxHeight + dy;
            // get the scale factor for both directions
            var horizScale = notProportionalWidth / selection.ogSelectionBoxWidth;
            var vertScale = notProportionalHeight / selection.ogSelectionBoxHeight;
            // Get the smallest scale
            var scale = Math.min(Math.abs(horizScale), Math.abs(vertScale));
            // Get Dimensions of the scaled rectangle
            var proportionalWidth = Math.sign(horizScale) * scale * selection.ogSelectionBoxWidth;
            var proporionalHeight = Math.sign(vertScale) * scale * selection.ogSelectionBoxHeight;
            dx = proportionalWidth - selection.ogSelectionBoxWidth;
            dy = proporionalHeight - selection.ogSelectionBoxHeight;
        }
        var xScaleFactor = this.getXScaleFactor(dx, selection, isRight);
        var yScaleFactor = this.getYScaleFactor(dy, selection, isBottom);
        var xTranslate = this.getXTranslate(dx, xScaleFactor, selection, isRight);
        var yTranslate = this.getYTranslate(dy, yScaleFactor, selection, isBottom);
        this.applyRedimTransformations(selection, xScaleFactor, yScaleFactor, xTranslate, yTranslate);
        selection.updateFullSelectionBox();
    };
    ManipulatorService.prototype.applyScaleX = function (currentMouse, selection, isRight) {
        var dx = this.getDistanceFromControlPoint(currentMouse.x + window.scrollX, selection.ogActiveControlPointCoords.x, isRight);
        var scaleFactor = this.getXScaleFactor(dx, selection, isRight);
        var xTranslate = this.getXTranslate(dx, scaleFactor, selection, isRight);
        this.applyRedimTransformations(selection, scaleFactor, 1, xTranslate, 0);
        selection.updateFullSelectionBox();
    };
    ManipulatorService.prototype.applyScaleY = function (currentMouse, selection, isBottom) {
        var dy = this.getDistanceFromControlPoint(currentMouse.y + window.scrollY, selection.ogActiveControlPointCoords.y, isBottom);
        var scaleFactor = this.getYScaleFactor(dy, selection, isBottom);
        var yTranslate = this.getYTranslate(dy, scaleFactor, selection, isBottom);
        this.applyRedimTransformations(selection, 1, scaleFactor, 0, yTranslate);
        selection.updateFullSelectionBox();
    };
    ManipulatorService.prototype.updateOrigins = function (selection) {
        this.updateElementsOrigins(selection);
        this.boxOrigin.y = selection.selectionBox.y.baseVal.value + selection.selectionBox.height.baseVal.value / 2;
        this.boxOrigin.x = selection.selectionBox.x.baseVal.value + selection.selectionBox.width.baseVal.value / 2;
    };
    ManipulatorService.prototype.updateElementsOrigins = function (selection) {
        var e_1, _a;
        this.selectedElementsOrigin.clear();
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](selection.selectedElements), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                var origin_1 = new src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__["Coords2D"](el.getBoundingClientRect().x -
                    src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_WIDTH"] + window.scrollX +
                    el.getBoundingClientRect().width / 2, el.getBoundingClientRect().y + window.scrollY + el.getBoundingClientRect().height / 2);
                this.selectedElementsOrigin.set(el, origin_1);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    ManipulatorService.prototype.prepareForTransform = function (element) {
        if (element.transform.baseVal.numberOfItems === 0) {
            var svg = this.renderer.createElement('svg', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
            var nullTransform = svg.createSVGTransform();
            nullTransform.setTranslate(0, 0);
            element.transform.baseVal.appendItem(nullTransform);
        }
    };
    ManipulatorService.prototype.getCurrentTransformMatrix = function (element) {
        this.prepareForTransform(element);
        return element.transform.baseVal.consolidate().matrix;
    };
    ManipulatorService.prototype.applyTransformation = function (element, transform) {
        var svg = this.renderer.createElement('svg', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        var currentTransformMatrix = this.getCurrentTransformMatrix(element);
        currentTransformMatrix = transform.matrix.multiply(currentTransformMatrix);
        element.transform.baseVal.clear();
        element.transform.baseVal.appendItem(svg.createSVGTransformFromMatrix(currentTransformMatrix));
    };
    ManipulatorService.prototype.rotateSelection = function (event, selection) {
        var e_2, _a;
        var deltaY = event.deltaY;
        this.rotationStep = deltaY < 0 ? Math.abs(this.rotationStep) * -1 : Math.abs(this.rotationStep);
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](selection.selectedElements), _c = _b.next(); !_c.done; _c = _b.next()) {
                var element = _c.value;
                if (this.isRotateOnSelf) {
                    this.rotateElement(element, this.selectedElementsOrigin.get(element));
                }
                else {
                    this.rotateElement(element, this.boxOrigin);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        selection.updateFullSelectionBox();
        if (!this.isRotateOnSelf) {
            this.updateElementsOrigins(selection);
        }
    };
    ManipulatorService.prototype.rotateElement = function (element, origin) {
        var svg = this.renderer.createElement('svg', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        var rotateTransform = svg.createSVGTransform();
        rotateTransform.setRotate(this.rotationStep, origin.x, origin.y);
        this.applyTransformation(element, rotateTransform);
    };
    ManipulatorService.prototype.translateSelection = function (deltaX, deltaY, selection) {
        var e_3, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](selection.selectedElements), _c = _b.next(); !_c.done; _c = _b.next()) {
                var element = _c.value;
                this.translateElement(deltaX, deltaY, element);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        selection.updateFullSelectionBox();
    };
    ManipulatorService.prototype.translateElement = function (deltaX, deltaY, element) {
        var svg = this.renderer.createElement('svg', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        var translateTransform = svg.createSVGTransform();
        translateTransform.setTranslate(deltaX, deltaY);
        this.applyTransformation(element, translateTransform);
    };
    ManipulatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], ManipulatorService);
    return ManipulatorService;
}());



/***/ }),

/***/ "./src/app/services/modal-manager/modal-manager.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/modal-manager/modal-manager.service.ts ***!
  \*****************************************************************/
/*! exports provided: ModalManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalManagerService", function() { return ModalManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ModalManagerService = /** @class */ (function () {
    function ModalManagerService() {
        this.modalIsDisplayed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.currentModalIsDisplayed = this.modalIsDisplayed.asObservable();
    }
    ModalManagerService.prototype.setModalIsDisplayed = function (isDisplayed) {
        this.modalIsDisplayed.next(isDisplayed);
    };
    ModalManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], ModalManagerService);
    return ModalManagerService;
}());



/***/ }),

/***/ "./src/app/services/server/drawing-loader/drawing-loader.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/services/server/drawing-loader/drawing-loader.service.ts ***!
  \**************************************************************************/
/*! exports provided: DrawingLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingLoaderService", function() { return DrawingLoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DrawingLoaderService = /** @class */ (function () {
    function DrawingLoaderService() {
        this.currentDrawing = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            svg: '',
            drawingInfo: {
                name: '',
                labels: [],
                idStack: [],
                createdAt: 0,
                lastModified: 0,
                width: 0,
                height: 0,
                color: '',
            },
        });
        this.emptyDrawStack = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this.untouchedWorkZone = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
    }
    DrawingLoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], DrawingLoaderService);
    return DrawingLoaderService;
}());



/***/ }),

/***/ "./src/app/services/server/drawing-saver/drawing-saver.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/services/server/drawing-saver/drawing-saver.service.ts ***!
  \************************************************************************/
/*! exports provided: DrawingSaverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingSaverService", function() { return DrawingSaverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _drawing_modal_window_drawing_modal_window_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../drawing-modal-window/drawing-modal-window.service */ "./src/app/services/drawing-modal-window/drawing-modal-window.service.ts");
/* harmony import */ var _drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../drawing-loader/drawing-loader.service */ "./src/app/services/server/drawing-loader/drawing-loader.service.ts");
/* harmony import */ var _file_manager_file_manager_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../file-manager/file-manager.service */ "./src/app/services/server/file-manager/file-manager.service.ts");








var DrawingSaverService = /** @class */ (function () {
    function DrawingSaverService(drawingModalWindowService, drawingLoaderService, fileManagerService, sanitizer) {
        this.drawingModalWindowService = drawingModalWindowService;
        this.drawingLoaderService = drawingLoaderService;
        this.fileManagerService = fileManagerService;
        this.sanitizer = sanitizer;
        this.currentIsSaved = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](undefined);
        this.currentErrorMessage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
    }
    DrawingSaverService.prototype.initializeDrawingSaverService = function (ref, drawStackService) {
        var _this = this;
        this.workZoneRef = ref;
        this.drawStackService = drawStackService;
        this.drawingModalWindowService.drawingInfo.subscribe(function (drawingInfo) {
            _this.currentDrawingInfo = drawingInfo;
        });
    };
    DrawingSaverService.prototype.getLocalFileDownloadUrl = function () {
        var jsonObj = JSON.stringify({
            svg: this.workZoneRef.nativeElement.innerHTML,
            drawingInfo: this.currentDrawingInfo,
        });
        var blob = new Blob([jsonObj], { type: 'text/plain' });
        return this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    };
    DrawingSaverService.prototype.sendFileToServer = function (drawingSavingInfo) {
        if (this.drawingLoaderService.emptyDrawStack.value) {
            this.currentIsSaved.next(false);
            this.currentErrorMessage.next('Aucun dessin dans la zone de travail!');
        }
        else if (drawingSavingInfo.name.length > 0) {
            this.postDrawing(drawingSavingInfo);
        }
    };
    DrawingSaverService.prototype.postDrawing = function (drawingSavingInfo) {
        var _this = this;
        this.currentDrawingInfo.name = drawingSavingInfo.name;
        this.currentDrawingInfo.labels = drawingSavingInfo.drawingLabels;
        this.currentDrawingInfo.createdAt = drawingSavingInfo.createdAt;
        this.currentDrawingInfo.lastModified = drawingSavingInfo.lastModified;
        this.currentDrawingInfo.idStack = this.drawStackService.idStack;
        var drawing = {
            drawingInfo: this.currentDrawingInfo,
            svg: this.workZoneRef.nativeElement.innerHTML,
        };
        this.fileManagerService
            .postDrawing(drawing)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (subject) {
            if (subject !== undefined) {
                return true;
            }
            _this.currentErrorMessage.next('Erreur de sauvegarde du côté serveur! Le serveur n\'est peut-être pas ouvert.');
            _this.currentIsSaved.next(false);
            return false;
        }))
            .subscribe(function (receivedDrawing) {
            if (receivedDrawing.drawingInfo ||
                JSON.parse(receivedDrawing.drawingInfo).createdAt === drawingSavingInfo.createdAt) {
                _this.drawingLoaderService.currentDrawing.next(receivedDrawing);
                _this.currentIsSaved.next(true);
            }
            else {
                _this.currentErrorMessage.next('Erreur de sauvegarde du côté serveur!');
                _this.currentIsSaved.next(false);
            }
        });
    };
    DrawingSaverService.ctorParameters = function () { return [
        { type: _drawing_modal_window_drawing_modal_window_service__WEBPACK_IMPORTED_MODULE_5__["DrawingModalWindowService"] },
        { type: _drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_6__["DrawingLoaderService"] },
        { type: _file_manager_file_manager_service__WEBPACK_IMPORTED_MODULE_7__["FileManagerService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    DrawingSaverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_drawing_modal_window_drawing_modal_window_service__WEBPACK_IMPORTED_MODULE_5__["DrawingModalWindowService"],
            _drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_6__["DrawingLoaderService"],
            _file_manager_file_manager_service__WEBPACK_IMPORTED_MODULE_7__["FileManagerService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], DrawingSaverService);
    return DrawingSaverService;
}());



/***/ }),

/***/ "./src/app/services/server/file-manager/file-manager.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/services/server/file-manager/file-manager.service.ts ***!
  \**********************************************************************/
/*! exports provided: FileManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileManagerService", function() { return FileManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var FileManagerService = /** @class */ (function () {
    function FileManagerService(http) {
        this.http = http;
    }
    FileManagerService.prototype.getAllDrawings = function () {
        return this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].BASE_URL + '/api/file-manager/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getAllDrawings')));
    };
    FileManagerService.prototype.postDrawing = function (drawingInfo) {
        return this.http
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].BASE_URL + '/api/file-manager/save', drawingInfo)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('postDrawing')));
    };
    FileManagerService.prototype.deleteDrawing = function (createdAt) {
        return this.http
            .delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].BASE_URL + ("/api/file-manager/" + createdAt.toString()))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteDrawing')));
    };
    FileManagerService.prototype.handleError = function (request, result) {
        return function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    FileManagerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    FileManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FileManagerService);
    return FileManagerService;
}());



/***/ }),

/***/ "./src/app/services/shortcut-manager/shortcut-manager.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/services/shortcut-manager/shortcut-manager.service.ts ***!
  \***********************************************************************/
/*! exports provided: ShortcutManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortcutManagerService", function() { return ShortcutManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ShortcutManagerService = /** @class */ (function () {
    function ShortcutManagerService() {
        this.isOnInput = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.currentIsOnInput = this.isOnInput.asObservable();
    }
    ShortcutManagerService.prototype.changeIsOnInput = function (isOnInput) {
        this.isOnInput.next(isOnInput);
    };
    ShortcutManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], ShortcutManagerService);
    return ShortcutManagerService;
}());



/***/ }),

/***/ "./src/app/services/tools/abstract-tools/abstract-shape-tool/abstract-shape-tool.service.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/services/tools/abstract-tools/abstract-shape-tool/abstract-shape-tool.service.ts ***!
  \**************************************************************************************************/
/*! exports provided: AbstractShapeToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractShapeToolService", function() { return AbstractShapeToolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/classes/Coords2D */ "./src/classes/Coords2D.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var _abstract_tool_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../abstract-tool.service */ "./src/app/services/tools/abstract-tools/abstract-tool.service.ts");






var AbstractShapeToolService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AbstractShapeToolService, _super);
    function AbstractShapeToolService() {
        var _this = _super.call(this) || this;
        _this.currentMouseCoords = new src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__["Coords2D"](0, 0);
        _this.initialMouseCoords = new src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__["Coords2D"](0, 0);
        _this.isPreviewing = false;
        return _this;
    }
    AbstractShapeToolService.prototype.initializeService = function (elementRef, renderer, drawStack) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.drawStack = drawStack;
        this.previewRectangle = this.renderer.createElement('rect', _constants_constants__WEBPACK_IMPORTED_MODULE_4__["SVG_NS"]);
        this.renderer.setAttribute(this.previewRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].title, _constants_constants__WEBPACK_IMPORTED_MODULE_4__["TITLE_ELEMENT_TO_REMOVE"]);
    };
    Object.defineProperty(AbstractShapeToolService.prototype, "previewRectangleX", {
        get: function () {
            return this.previewRectangle.x.baseVal.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractShapeToolService.prototype, "previewRectangleY", {
        get: function () {
            return this.previewRectangle.y.baseVal.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractShapeToolService.prototype, "previewRectangleWidth", {
        get: function () {
            return this.previewRectangle.width.baseVal.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractShapeToolService.prototype, "previewRectangleHeight", {
        get: function () {
            return this.previewRectangle.height.baseVal.value;
        },
        enumerable: true,
        configurable: true
    });
    AbstractShapeToolService.prototype.updatePreviewRectangle = function () {
        var deltaX = this.currentMouseCoords.x - this.initialMouseCoords.x;
        var deltaY = this.currentMouseCoords.y - this.initialMouseCoords.y;
        // adjust x
        if (deltaX < 0) {
            deltaX *= -1;
            this.renderer.setAttribute(this.previewRectangle, 'x', (this.initialMouseCoords.x - deltaX).toString());
            this.renderer.setAttribute(this.previewRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].width, deltaX.toString());
        }
        else {
            this.renderer.setAttribute(this.previewRectangle, 'x', this.initialMouseCoords.x.toString());
            this.renderer.setAttribute(this.previewRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].width, deltaX.toString());
        }
        // adjust y
        if (deltaY < 0) {
            deltaY *= -1;
            this.renderer.setAttribute(this.previewRectangle, 'y', (this.initialMouseCoords.y - deltaY).toString());
            this.renderer.setAttribute(this.previewRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].height, deltaY.toString());
        }
        else {
            this.renderer.setAttribute(this.previewRectangle, 'y', this.initialMouseCoords.y.toString());
            this.renderer.setAttribute(this.previewRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].height, deltaY.toString());
        }
        this.renderer.setAttribute(this.previewRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].fill, 'white');
        this.renderer.setAttribute(this.previewRectangle, 'fill-opacity', '0.3');
        this.renderer.setAttribute(this.previewRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].stroke, 'black');
        this.renderer.setAttribute(this.previewRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].stroke_dasharray, '5 5');
    };
    AbstractShapeToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AbstractShapeToolService);
    return AbstractShapeToolService;
}(_abstract_tool_service__WEBPACK_IMPORTED_MODULE_5__["AbstractToolService"]));



/***/ }),

/***/ "./src/app/services/tools/abstract-tools/abstract-tool.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/services/tools/abstract-tools/abstract-tool.service.ts ***!
  \************************************************************************/
/*! exports provided: AbstractToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractToolService", function() { return AbstractToolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AbstractToolService = /** @class */ (function () {
    function AbstractToolService() {
    }
    AbstractToolService.prototype.isMouseInRef = function (event, elementRef) {
        return (event.clientX > elementRef.nativeElement.getBoundingClientRect().left + window.scrollX &&
            event.clientY > elementRef.nativeElement.getBoundingClientRect().top + window.scrollY);
    };
    AbstractToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], AbstractToolService);
    return AbstractToolService;
}());



/***/ }),

/***/ "./src/app/services/tools/abstract-tools/tracing-tool/tracing-tool.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/services/tools/abstract-tools/tracing-tool/tracing-tool.service.ts ***!
  \************************************************************************************/
/*! exports provided: TracingToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TracingToolService", function() { return TracingToolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _abstract_tool_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abstract-tool.service */ "./src/app/services/tools/abstract-tools/abstract-tool.service.ts");





var TracingToolService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TracingToolService, _super);
    function TracingToolService() {
        var _this = _super.call(this) || this;
        _this.isDrawing = false;
        _this.currentPath = '';
        _this.currentWidth = 0;
        _this.currentColorAndOpacity = '';
        _this.currentOpacity = '';
        _this.currentColor = '';
        _this.getIsDrawing = function () { return _this.isDrawing; };
        _this.getCurrentPath = function () { return _this.currentPath; };
        _this.getXPos = function (clientX) { return clientX - _this.elementRef.nativeElement.getBoundingClientRect().left; };
        _this.getYPos = function (clientY) { return clientY - _this.elementRef.nativeElement.getBoundingClientRect().top; };
        return _this;
    }
    TracingToolService.prototype.initializeService = function (elementRef, renderer, drawStack) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.drawStack = drawStack;
        this.svgPath = this.renderer.createElement('path', src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SVG_NS"]);
        this.svgWrap = this.renderer.createElement('g', src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SVG_NS"]);
        this.svgPreviewCircle = this.renderer.createElement('circle', src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SVG_NS"]);
    };
    TracingToolService.prototype.initializeAttributesManagerService = function (attributesManagerService) {
        var _this = this;
        this.attributesManagerService = attributesManagerService;
        this.attributesManagerService.thickness.subscribe(function (thickness) {
            _this.currentWidth = thickness;
        });
    };
    TracingToolService.prototype.onMouseDown = function (e) {
        this.setColorAndOpacity();
        if (e.button === src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["MOUSE"].LeftButton) {
            this.isDrawing = true;
            this.createSVGWrapper();
            var x = this.getXPos(e.clientX);
            var y = this.getYPos(e.clientY);
            this.currentPath = "M" + x + " " + y;
            this.svgPreviewCircle = this.createSVGCircle(x, y);
            this.renderer.appendChild(this.svgWrap, this.svgPreviewCircle);
            this.createSVGPath();
        }
    };
    TracingToolService.prototype.setColorAndOpacity = function () {
        this.currentColor = this.currentColorAndOpacity.slice(0, 6);
        this.currentOpacity = (parseInt(this.currentColorAndOpacity.slice(-2), 16) / 255).toFixed(1).toString();
    };
    TracingToolService.prototype.onMouseMove = function (e) {
        if (e.button === src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["MOUSE"].LeftButton && this.getIsDrawing()) {
            var x = this.getXPos(e.clientX);
            var y = this.getYPos(e.clientY);
            this.currentPath += " L" + x + " " + y;
            this.updateSVGPath();
        }
    };
    TracingToolService.prototype.onMouseUp = function (e) {
        if (e.button === src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["MOUSE"].LeftButton && this.getIsDrawing()) {
            this.isDrawing = false;
            this.currentPath = '';
            this.drawStack.push(this.svgWrap);
        }
    };
    TracingToolService.prototype.onMouseLeave = function (e) {
        this.onMouseUp(e);
    };
    // tslint:disable-next-line: no-empty
    TracingToolService.prototype.onMouseEnter = function (event) { };
    // tslint:disable-next-line: no-empty
    TracingToolService.prototype.onKeyDown = function (event) { };
    // tslint:disable-next-line: no-empty
    TracingToolService.prototype.onKeyUp = function (event) { };
    TracingToolService.prototype.createSVGWrapper = function () {
        var wrap = this.renderer.createElement('g', src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SVG_NS"]);
        this.renderer.setAttribute(wrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].stroke, '#' + this.currentColor);
        this.renderer.setAttribute(wrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].opacity, this.currentOpacity);
        this.renderer.setAttribute(wrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].fill, '#' + this.currentColor);
        this.renderer.setAttribute(wrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].title, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TOOL_NAME"].Pen);
        this.svgWrap = wrap;
        this.renderer.appendChild(this.elementRef.nativeElement, wrap);
    };
    TracingToolService.prototype.createSVGCircle = function (x, y) {
        var circle = this.renderer.createElement('circle', src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SVG_NS"]);
        this.renderer.setAttribute(circle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].stroke, 'none');
        this.renderer.setAttribute(circle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].cx, x.toString());
        this.renderer.setAttribute(circle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].cy, y.toString());
        this.renderer.setAttribute(circle, 'r', (this.currentWidth / 2).toString());
        this.renderer.setAttribute(circle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].fill, '#' + this.currentColor);
        return circle;
    };
    TracingToolService.prototype.createSVGPath = function () {
        this.svgPath = this.renderer.createElement('path', src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SVG_NS"]);
        this.renderer.setAttribute(this.svgPath, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].fill, 'none');
        this.renderer.setAttribute(this.svgPath, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].stroke_width, this.currentWidth.toString());
        this.renderer.setAttribute(this.svgPath, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].stroke_linejoin, 'round');
        this.renderer.setAttribute(this.svgPath, 'stroke-linecap', 'round');
        this.renderer.appendChild(this.svgWrap, this.svgPath);
    };
    TracingToolService.prototype.updatePreviewCircle = function (x, y) {
        this.renderer.setAttribute(this.svgPreviewCircle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].cx, x.toString());
        this.renderer.setAttribute(this.svgPreviewCircle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].cy, y.toString());
    };
    TracingToolService.prototype.updateSVGPath = function () {
        this.renderer.setAttribute(this.svgPath, 'd', this.currentPath);
    };
    TracingToolService.prototype.cleanUp = function () {
        if (this.isDrawing) {
            this.renderer.removeChild(this.elementRef.nativeElement, this.svgWrap);
            this.svgWrap = this.renderer.createElement('g', src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SVG_NS"]);
            this.currentPath = '';
            this.isDrawing = false;
        }
    };
    TracingToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TracingToolService);
    return TracingToolService;
}(_abstract_tool_service__WEBPACK_IMPORTED_MODULE_4__["AbstractToolService"]));



/***/ }),

/***/ "./src/app/services/tools/attributes-manager/attributes-manager.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/services/tools/attributes-manager/attributes-manager.service.ts ***!
  \*********************************************************************************/
/*! exports provided: AttributesManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributesManagerService", function() { return AttributesManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");




var AttributesManagerService = /** @class */ (function () {
    function AttributesManagerService() {
        this.thickness = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["THICKNESS"].Default);
        this.tolerance = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TOLERANCE"].Default);
        this.minThickness = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](1);
        this.traceType = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TRACE_TYPE"].Outline);
        this.style = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["BRUSH_STYLE"].type1);
        this.nbVertices = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](3);
        this.lineStrokeType = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["LINE_STROKE_TYPE"].Continuous);
        this.lineJointType = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["LINE_JOINT_TYPE"].Curvy);
        this.circleJointDiameter = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["THICKNESS"].Default);
        this.scaling = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["STAMP_SCALING"].Default);
        this.angle = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["ROTATION_ANGLE"].Default);
        this.stampType = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["STAMP_TYPES"][0]);
        this.eraserSize = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["ERASER_SIZE"].Default);
        this.sprayDiameter = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["SPRAY_DIAMETER"].Default);
        this.sprayInterval = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["SPRAY_INTERVAL"].Default);
        this.boldState = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.italicState = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.font = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('Times New Roman, serif');
        this.fontSize = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["FONT_SIZE"].Default);
        this.fontAlign = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["FONT_ALIGN"].Start);
        this.isWritingState = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    AttributesManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], AttributesManagerService);
    return AttributesManagerService;
}());



/***/ }),

/***/ "./src/app/services/tools/brush-tool/brush-tool.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/tools/brush-tool/brush-tool.service.ts ***!
  \*****************************************************************/
/*! exports provided: BrushToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrushToolService", function() { return BrushToolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var _abstract_tools_tracing_tool_tracing_tool_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abstract-tools/tracing-tool/tracing-tool.service */ "./src/app/services/tools/abstract-tools/tracing-tool/tracing-tool.service.ts");
/* harmony import */ var _color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../color-tool/color-tool.service */ "./src/app/services/tools/color-tool/color-tool.service.ts");






var BrushToolService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BrushToolService, _super);
    function BrushToolService(colorToolService) {
        var _this = _super.call(this) || this;
        _this.colorToolService = colorToolService;
        _this.style = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["BRUSH_STYLE"].type1;
        _this.colorToolService.primaryColor.subscribe(function (currentColor) {
            _this.currentColorAndOpacity = currentColor;
        });
        return _this;
    }
    BrushToolService.prototype.initializeService = function (elementRef, renderer, drawStack) {
        _super.prototype.initializeService.call(this, elementRef, renderer, drawStack);
    };
    BrushToolService.prototype.initializeAttributesManagerService = function (attributesManagerService) {
        var _this = this;
        _super.prototype.initializeAttributesManagerService.call(this, attributesManagerService);
        this.attributesManagerService.style.subscribe(function (style) {
            _this.style = style;
        });
    };
    BrushToolService.prototype.createSVGWrapper = function () {
        _super.prototype.createSVGWrapper.call(this);
        var filter = this.createFilter(this.style);
        this.renderer.appendChild(this.svgWrap, filter);
    };
    BrushToolService.prototype.createFilter = function (patternId) {
        var filter = this.renderer.createElement('filter', _constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        this.renderer.setAttribute(filter, 'id', this.style.toString());
        this.renderer.setAttribute(filter, 'filterUnits', 'objectBoundingBox');
        this.renderer.setAttribute(filter, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTRIBUTE"].height, '100px');
        this.renderer.setAttribute(filter, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTRIBUTE"].width, '100px');
        this.renderer.setAttribute(filter, 'x', '-50px');
        this.renderer.setAttribute(filter, 'y', '-50px');
        if (patternId === src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["BRUSH_STYLE"].type1 || patternId === src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["BRUSH_STYLE"].type2) {
            this.createGaussianBlurFilter(filter);
        }
        if (patternId !== src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["BRUSH_STYLE"].type1) {
            this.createTurbulenceDisplacementFilter(filter, patternId);
        }
        return filter;
    };
    BrushToolService.prototype.createTurbulenceDisplacementFilter = function (filter, patternId) {
        var turbulence = this.renderer.createElement('feTurbulence', _constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        this.renderer.setAttribute(turbulence, 'type', 'turbulence');
        this.renderer.setAttribute(turbulence, 'result', 'turbulence');
        var displacementMap = this.renderer.createElement('feDisplacementMap', _constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        this.renderer.setAttribute(displacementMap, 'in2', 'turbulence');
        this.renderer.setAttribute(displacementMap, 'in', 'SourceGraphic');
        this.renderer.setAttribute(displacementMap, 'scale', '10');
        this.renderer.setAttribute(displacementMap, 'xChannelSelector', 'R');
        this.renderer.setAttribute(displacementMap, 'yChannelSelector', 'G');
        switch (patternId) {
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["BRUSH_STYLE"].type2:
                this.renderer.setAttribute(turbulence, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTRIBUTE"].baseFrequency, '0.1 0.9');
                this.renderer.setAttribute(turbulence, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTRIBUTE"].numOctaves, '10');
                this.renderer.setAttribute(displacementMap, 'scale', '20');
                break;
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["BRUSH_STYLE"].type3:
                this.renderer.setAttribute(turbulence, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTRIBUTE"].baseFrequency, '0.01 0.57');
                this.renderer.setAttribute(turbulence, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTRIBUTE"].numOctaves, '2');
                break;
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["BRUSH_STYLE"].type4:
                this.renderer.setAttribute(turbulence, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTRIBUTE"].baseFrequency, '0.05');
                this.renderer.setAttribute(turbulence, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTRIBUTE"].numOctaves, '2');
                break;
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["BRUSH_STYLE"].type5:
                this.renderer.setAttribute(turbulence, 'type', 'fractalNoise');
                this.renderer.setAttribute(turbulence, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTRIBUTE"].baseFrequency, '0.9');
                this.renderer.setAttribute(turbulence, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTRIBUTE"].numOctaves, '4');
                break;
        }
        this.renderer.appendChild(filter, turbulence);
        this.renderer.appendChild(filter, displacementMap);
    };
    BrushToolService.prototype.createGaussianBlurFilter = function (filter) {
        var effect = this.renderer.createElement('feGaussianBlur', _constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        this.renderer.setAttribute(effect, 'stdDeviation', '3');
        this.renderer.appendChild(filter, effect);
    };
    BrushToolService.prototype.createSVGCircle = function (x, y) {
        var circle = _super.prototype.createSVGCircle.call(this, x, y);
        this.renderer.setAttribute(circle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTRIBUTE"].filter, "url(#" + this.style.toString() + ")");
        return circle;
    };
    BrushToolService.prototype.createSVGPath = function () {
        _super.prototype.createSVGPath.call(this);
        this.renderer.setAttribute(this.svgPath, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTRIBUTE"].filter, "url(#" + this.style + ")");
    };
    BrushToolService.ctorParameters = function () { return [
        { type: _color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_5__["ColorToolService"] }
    ]; };
    BrushToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_5__["ColorToolService"]])
    ], BrushToolService);
    return BrushToolService;
}(_abstract_tools_tracing_tool_tracing_tool_service__WEBPACK_IMPORTED_MODULE_4__["TracingToolService"]));



/***/ }),

/***/ "./src/app/services/tools/color-applicator-tool/color-applicator-tool.service.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/services/tools/color-applicator-tool/color-applicator-tool.service.ts ***!
  \***************************************************************************************/
/*! exports provided: ColorApplicatorToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorApplicatorToolService", function() { return ColorApplicatorToolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var _undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../undo-redoer/undo-redoer.service */ "./src/app/services/undo-redoer/undo-redoer.service.ts");
/* harmony import */ var _abstract_tools_abstract_tool_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../abstract-tools/abstract-tool.service */ "./src/app/services/tools/abstract-tools/abstract-tool.service.ts");
/* harmony import */ var _color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../color-tool/color-tool.service */ "./src/app/services/tools/color-tool/color-tool.service.ts");







var ColorApplicatorToolService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ColorApplicatorToolService, _super);
    function ColorApplicatorToolService(colorToolService, undoRedoerService) {
        var _this = _super.call(this) || this;
        _this.colorToolService = colorToolService;
        _this.undoRedoerService = undoRedoerService;
        _this.primaryColor = '';
        _this.secondaryColor = '';
        _this.isOnTarget = false;
        _this.colorToolService.primaryColor.subscribe(function (primaryColor) {
            _this.primaryColor = '#' + primaryColor;
        });
        _this.colorToolService.secondaryColor.subscribe(function (secondaryColor) {
            _this.secondaryColor = '#' + secondaryColor;
        });
        return _this;
    }
    ColorApplicatorToolService.prototype.initializeService = function (elementRef, renderer, drawStack) {
        var _this = this;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.drawStack = drawStack;
        this.drawStack.currentStackTarget.subscribe(function (stackTarget) {
            _this.currentStackTarget = stackTarget;
            _this.isOnTarget = true;
        });
    };
    ColorApplicatorToolService.prototype.initializeColorToolService = function (colorToolService) {
        var _this = this;
        this.colorToolService = colorToolService;
        this.colorToolService.primaryColor.subscribe(function (primaryColor) {
            _this.primaryColor = '#' + primaryColor;
        });
        this.colorToolService.secondaryColor.subscribe(function (secondaryColor) {
            _this.secondaryColor = '#' + secondaryColor;
        });
    };
    ColorApplicatorToolService.prototype.isStackTargetShape = function () {
        var isRectangle = this.currentStackTarget.toolName === src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["TOOL_NAME"].Rectangle;
        var isEllipsis = this.currentStackTarget.toolName === src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["TOOL_NAME"].Ellipsis;
        var isPolygon = this.currentStackTarget.toolName === src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["TOOL_NAME"].Polygon;
        return isRectangle || isEllipsis || isPolygon;
    };
    ColorApplicatorToolService.prototype.isFilledShape = function () {
        return this.currentStackTarget.toolName === src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["TOOL_NAME"].Fill;
    };
    ColorApplicatorToolService.prototype.changeFillColorOnShape = function () {
        if (this.drawStack
            .getElementByPosition(this.currentStackTarget.targetPosition)
            .getAttribute('fill') === 'none') {
            return;
        }
        this.renderer.setAttribute(this.drawStack.getElementByPosition(this.currentStackTarget.targetPosition), src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTRIBUTE"].fill, this.primaryColor);
        this.undoRedoerService.saveCurrentState(this.drawStack.idStack);
    };
    ColorApplicatorToolService.prototype.changeStrokeColorOnShape = function () {
        this.renderer.setAttribute(this.drawStack.getElementByPosition(this.currentStackTarget.targetPosition), src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTRIBUTE"].stroke, this.secondaryColor);
        this.undoRedoerService.saveCurrentState(this.drawStack.idStack);
    };
    ColorApplicatorToolService.prototype.changeFillColorOnFilledShape = function () {
        var filledShapeWrap = this.drawStack.getElementByPosition(this.currentStackTarget.targetPosition);
        if (filledShapeWrap.children[0] && filledShapeWrap.children[0].getAttribute('title') === 'body') {
            this.renderer.setAttribute(filledShapeWrap.children[0], src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTRIBUTE"].stroke, this.primaryColor);
            this.renderer.setAttribute(filledShapeWrap.children[0], src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTRIBUTE"].fill, this.primaryColor);
        }
        this.undoRedoerService.saveCurrentState(this.drawStack.idStack);
    };
    ColorApplicatorToolService.prototype.changeStrokeColorOnFilledShape = function () {
        var filledShapeWrap = this.drawStack.getElementByPosition(this.currentStackTarget.targetPosition);
        if (filledShapeWrap.children[2] && filledShapeWrap.children[2].getAttribute('title') === 'stroke') {
            this.renderer.setAttribute(filledShapeWrap.children[2], src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTRIBUTE"].stroke, this.secondaryColor);
        }
        this.undoRedoerService.saveCurrentState(this.drawStack.idStack);
    };
    ColorApplicatorToolService.prototype.changeColorOnTrace = function () {
        var color = this.primaryColor.slice(0, 7);
        var opacity = (parseInt(this.primaryColor.slice(7, 9), 16) / 255).toFixed(1);
        this.renderer.setAttribute(this.drawStack.getElementByPosition(this.currentStackTarget.targetPosition), src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTRIBUTE"].stroke, color);
        this.renderer.setAttribute(this.drawStack.getElementByPosition(this.currentStackTarget.targetPosition), src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTRIBUTE"].fill, color);
        this.renderer.setAttribute(this.drawStack.getElementByPosition(this.currentStackTarget.targetPosition), src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTRIBUTE"].opacity, opacity);
        this.undoRedoerService.saveCurrentState(this.drawStack.idStack);
    };
    // tslint:disable-next-line: no-empty
    ColorApplicatorToolService.prototype.onMouseMove = function (event) { };
    ColorApplicatorToolService.prototype.onMouseDown = function (event) {
        var button = event.button;
        if (!this.isOnTarget ||
            this.drawStack.getElementByPosition(this.currentStackTarget.targetPosition) === undefined) {
            return;
        }
        switch (button) {
            case _constants_constants__WEBPACK_IMPORTED_MODULE_3__["MOUSE"].LeftButton:
                if (this.isFilledShape()) {
                    this.changeFillColorOnFilledShape();
                }
                else if (this.isStackTargetShape()) {
                    this.changeFillColorOnShape();
                }
                else {
                    this.changeColorOnTrace();
                }
                break;
            case _constants_constants__WEBPACK_IMPORTED_MODULE_3__["MOUSE"].RightButton:
                if (this.isFilledShape()) {
                    this.changeStrokeColorOnFilledShape();
                }
                else if (this.isStackTargetShape()) {
                    this.changeStrokeColorOnShape();
                }
                break;
            default:
                break;
        }
        this.isOnTarget = false;
    };
    // tslint:disable-next-line: no-empty
    ColorApplicatorToolService.prototype.onMouseUp = function (event) {
        this.isOnTarget = false;
    };
    // tslint:disable-next-line: no-empty
    ColorApplicatorToolService.prototype.onMouseEnter = function (event) { };
    // tslint:disable-next-line: no-empty
    ColorApplicatorToolService.prototype.onMouseLeave = function (event) { };
    // tslint:disable-next-line: no-empty
    ColorApplicatorToolService.prototype.onKeyDown = function (event) { };
    // tslint:disable-next-line: no-empty
    ColorApplicatorToolService.prototype.onKeyUp = function (event) { };
    // tslint:disable-next-line: no-empty
    ColorApplicatorToolService.prototype.cleanUp = function () { };
    ColorApplicatorToolService.ctorParameters = function () { return [
        { type: _color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_6__["ColorToolService"] },
        { type: _undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_4__["UndoRedoerService"] }
    ]; };
    ColorApplicatorToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_6__["ColorToolService"], _undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_4__["UndoRedoerService"]])
    ], ColorApplicatorToolService);
    return ColorApplicatorToolService;
}(_abstract_tools_abstract_tool_service__WEBPACK_IMPORTED_MODULE_5__["AbstractToolService"]));



/***/ }),

/***/ "./src/app/services/tools/color-tool/color-tool.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/tools/color-tool/color-tool.service.ts ***!
  \*****************************************************************/
/*! exports provided: ColorToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorToolService", function() { return ColorToolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_constants_color_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants/color-constants */ "./src/constants/color-constants.ts");




var ColorToolService = /** @class */ (function () {
    function ColorToolService() {
        this.previewColor = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](src_constants_color_constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_WHITE"]);
        this.backgroundColor = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](src_constants_color_constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_WHITE"]);
        this.primaryColor = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](src_constants_color_constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_GRAY_0"]);
        this.secondaryColor = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](src_constants_color_constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_GRAY_1"]);
        this.selectedColorType = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.showColorPalette = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.colorQueue = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([src_constants_color_constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_WHITE"]]);
    }
    ColorToolService.prototype.addColorToQueue = function (color) {
        if (this.colorQueue.value.length < src_constants_color_constants__WEBPACK_IMPORTED_MODULE_3__["MAX_NUMBER_OF_LAST_COLORS"]) {
            this.colorQueue.value.push(color);
        }
        else {
            this.colorQueue.value.shift();
            this.colorQueue.value.push(color);
        }
        this.colorQueue.next(this.colorQueue.value);
    };
    ColorToolService.prototype.changePrimaryColor = function (primaryColor) {
        this.primaryColor.next(primaryColor);
    };
    ColorToolService.prototype.changeSecondaryColor = function (secondaryColor) {
        this.secondaryColor.next(secondaryColor);
    };
    ColorToolService.prototype.changePreviewColor = function (previewColor) {
        this.previewColor.next(previewColor);
    };
    ColorToolService.prototype.changeBackgroundColor = function (backgroundColor) {
        this.backgroundColor.next(backgroundColor);
    };
    ColorToolService.prototype.changeColorOnFocus = function (colorOnFocus) {
        switch (this.selectedColorType.value) {
            case src_constants_color_constants__WEBPACK_IMPORTED_MODULE_3__["COLOR_TYPE"].backgroundColor:
                this.backgroundColor.next(colorOnFocus);
                break;
            case src_constants_color_constants__WEBPACK_IMPORTED_MODULE_3__["COLOR_TYPE"].primaryColor:
                this.primaryColor.next(colorOnFocus);
                break;
            case src_constants_color_constants__WEBPACK_IMPORTED_MODULE_3__["COLOR_TYPE"].secondaryColor:
                this.secondaryColor.next(colorOnFocus);
                break;
            default:
                break;
        }
    };
    ColorToolService.prototype.changeSelectedColorType = function (selectedColorType) {
        this.selectedColorType.next(selectedColorType);
    };
    ColorToolService.prototype.changeShowColorPalette = function (showColorPalette) {
        this.showColorPalette.next(showColorPalette);
    };
    ColorToolService.prototype.getColorOnFocus = function () {
        switch (this.selectedColorType.value) {
            case src_constants_color_constants__WEBPACK_IMPORTED_MODULE_3__["COLOR_TYPE"].backgroundColor:
                return this.backgroundColor.value;
            case src_constants_color_constants__WEBPACK_IMPORTED_MODULE_3__["COLOR_TYPE"].primaryColor:
                return this.primaryColor.value;
            case src_constants_color_constants__WEBPACK_IMPORTED_MODULE_3__["COLOR_TYPE"].secondaryColor:
                return this.secondaryColor.value;
            default:
                return src_constants_color_constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_WHITE"];
        }
    };
    ColorToolService.prototype.translateRGBToHex = function (R, G, B, A) {
        var r = this.decimalToHex(R);
        var g = this.decimalToHex(G);
        var b = this.decimalToHex(B);
        if (A !== undefined) {
            var a = this.decimalToHex(A * 255);
            return r + g + b + a;
        }
        return r + g + b;
    };
    ColorToolService.prototype.decimalToHex = function (RGBNumber) {
        var correctedRGBNumber = '';
        if (RGBNumber > src_constants_color_constants__WEBPACK_IMPORTED_MODULE_3__["MAX_RGB_NUMBER"]) {
            correctedRGBNumber = 'ff';
        }
        else if (RGBNumber < src_constants_color_constants__WEBPACK_IMPORTED_MODULE_3__["MIN_RGB_NUMBER"]) {
            correctedRGBNumber = '00';
        }
        else {
            correctedRGBNumber = Number(Math.ceil(RGBNumber)).toString(16);
            if (correctedRGBNumber.length === 1) {
                correctedRGBNumber = '0' + correctedRGBNumber;
            }
        }
        return correctedRGBNumber;
    };
    ColorToolService.prototype.getPreviewColorOpacityHex = function () {
        return this.previewColor.value.slice(6, 8);
    };
    ColorToolService.prototype.getPreviewColorOpacityDecimal = function () {
        var opacityHex = this.getPreviewColorOpacityHex();
        var opacity = (parseInt(opacityHex, 16) / 255).toFixed(1).toString();
        if (opacity === '1.0') {
            return '1';
        }
        else if (opacity === '0.0') {
            return '0';
        }
        return opacity;
    };
    ColorToolService.prototype.switchPrimarySecondary = function () {
        var temp = this.primaryColor.value;
        this.primaryColor.next(this.secondaryColor.value);
        this.secondaryColor.next(temp);
    };
    ColorToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], ColorToolService);
    return ColorToolService;
}());



/***/ }),

/***/ "./src/app/services/tools/dropper-tool/dropper-tool.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/tools/dropper-tool/dropper-tool.service.ts ***!
  \*********************************************************************/
/*! exports provided: DropperToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropperToolService", function() { return DropperToolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/classes/Coords2D */ "./src/classes/Coords2D.ts");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var _abstract_tools_abstract_tool_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abstract-tools/abstract-tool.service */ "./src/app/services/tools/abstract-tools/abstract-tool.service.ts");
/* harmony import */ var _color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../color-tool/color-tool.service */ "./src/app/services/tools/color-tool/color-tool.service.ts");






var DropperToolService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DropperToolService, _super);
    function DropperToolService(colorToolService) {
        var _this = _super.call(this) || this;
        _this.colorToolService = colorToolService;
        _this.currentMouseCoords = new src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__["Coords2D"](0, 0);
        return _this;
    }
    DropperToolService.prototype.initializeService = function (elementRef, renderer, drawStack) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.drawStack = drawStack;
        this.canvas = this.renderer.createElement('canvas');
        this.SVGImg = this.renderer.createElement('img');
        this.context2D = this.canvas.getContext('2d');
    };
    DropperToolService.prototype.updateSVGCopy = function () {
        var serializedSVG = new XMLSerializer().serializeToString(this.elementRef.nativeElement);
        this.renderer.setProperty(this.SVGImg, 'src', 'data:image/svg+xml,' + encodeURIComponent(serializedSVG));
        this.renderer.setProperty(this.canvas, 'width', this.elementRef.nativeElement.getBoundingClientRect().width);
        this.renderer.setProperty(this.canvas, 'height', this.elementRef.nativeElement.getBoundingClientRect().height);
        this.context2D = this.canvas.getContext('2d');
        this.context2D.drawImage(this.SVGImg, 0, 0);
    };
    DropperToolService.prototype.pickColor = function () {
        this.updateSVGCopy();
        return this.context2D.getImageData(this.currentMouseCoords.x, this.currentMouseCoords.y, 1, 1).data;
    };
    DropperToolService.prototype.onMouseMove = function (event) {
        this.currentMouseCoords.x = event.clientX - this.elementRef.nativeElement.getBoundingClientRect().left;
        this.currentMouseCoords.y = event.clientY - this.elementRef.nativeElement.getBoundingClientRect().top;
    };
    DropperToolService.prototype.onMouseDown = function (event) {
        this.getColor(event);
    };
    DropperToolService.prototype.onMouseUp = function (event) {
        var colorHex = this.getColor(event);
        var button = event.button;
        if (button === src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["MOUSE"].LeftButton && this.isMouseInRef(event, this.elementRef)) {
            this.colorToolService.changePrimaryColor(colorHex);
        }
        else if (button === src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["MOUSE"].RightButton && this.isMouseInRef(event, this.elementRef)) {
            this.colorToolService.changeSecondaryColor(colorHex);
        }
    };
    // tslint:disable-next-line: no-empty
    DropperToolService.prototype.onMouseEnter = function (event) { };
    // tslint:disable-next-line: no-empty
    DropperToolService.prototype.onMouseLeave = function (event) { };
    // tslint:disable-next-line: no-empty
    DropperToolService.prototype.onKeyDown = function (event) { };
    // tslint:disable-next-line: no-empty
    DropperToolService.prototype.onKeyUp = function (event) { };
    // tslint:disable-next-line: no-empty
    DropperToolService.prototype.cleanUp = function () { };
    DropperToolService.prototype.getColor = function (event) {
        this.currentMouseCoords.x = event.clientX - this.elementRef.nativeElement.getBoundingClientRect().left;
        this.currentMouseCoords.y = event.clientY - this.elementRef.nativeElement.getBoundingClientRect().top;
        var colorRGB = this.pickColor();
        return this.colorToolService.translateRGBToHex(colorRGB[0], colorRGB[1], colorRGB[2]);
    };
    DropperToolService.ctorParameters = function () { return [
        { type: _color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_5__["ColorToolService"] }
    ]; };
    DropperToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_5__["ColorToolService"]])
    ], DropperToolService);
    return DropperToolService;
}(_abstract_tools_abstract_tool_service__WEBPACK_IMPORTED_MODULE_4__["AbstractToolService"]));



/***/ }),

/***/ "./src/app/services/tools/ellipsis-tool/ellipsis-tool.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/services/tools/ellipsis-tool/ellipsis-tool.service.ts ***!
  \***********************************************************************/
/*! exports provided: EllipsisToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisToolService", function() { return EllipsisToolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _abstract_tools_abstract_shape_tool_abstract_shape_tool_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abstract-tools/abstract-shape-tool/abstract-shape-tool.service */ "./src/app/services/tools/abstract-tools/abstract-shape-tool/abstract-shape-tool.service.ts");
/* harmony import */ var _color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../color-tool/color-tool.service */ "./src/app/services/tools/color-tool/color-tool.service.ts");






var EllipsisToolService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EllipsisToolService, _super);
    function EllipsisToolService(colorToolService) {
        var _this = _super.call(this) || this;
        _this.colorToolService = colorToolService;
        _this.traceType = '';
        _this.userStrokeWidth = 0;
        _this.strokeWidth = 0;
        _this.userStrokeColor = '';
        _this.strokeColor = '';
        _this.userFillColor = '';
        _this.fillColor = '';
        _this.isCirclePreview = false;
        _this.colorToolService.primaryColor.subscribe(function (fillColor) {
            _this.fillColor = fillColor;
            _this.updateTraceType(_this.traceType);
        });
        _this.colorToolService.secondaryColor.subscribe(function (strokeColor) {
            _this.strokeColor = strokeColor;
            _this.updateTraceType(_this.traceType);
        });
        return _this;
    }
    EllipsisToolService.prototype.initializeService = function (elementRef, renderer, drawStack) {
        _super.prototype.initializeService.call(this, elementRef, renderer, drawStack);
        this.drawEllipse = this.renderer.createElement('ellipse', src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SVG_NS"]);
    };
    EllipsisToolService.prototype.initializeAttributesManagerService = function (attributesManagerService) {
        var _this = this;
        this.attributesManagerService = attributesManagerService;
        this.attributesManagerService.thickness.subscribe(function (thickness) {
            _this.strokeWidth = thickness;
            _this.updateTraceType(_this.traceType);
        });
        this.attributesManagerService.traceType.subscribe(function (traceType) {
            _this.updateTraceType(traceType);
        });
    };
    EllipsisToolService.prototype.isValidllipse = function () {
        var isValidRadiusX = this.previewRectangleWidth >= 2 * this.userStrokeWidth;
        var isValidRadiusY = this.previewRectangleHeight >= 2 * this.userStrokeWidth;
        return isValidRadiusX && isValidRadiusY && (this.drawEllipseRadiusX > 0 || this.drawEllipseRadiusY > 0);
    };
    EllipsisToolService.prototype.makeEllipseInvalid = function () {
        this.renderer.setAttribute(this.drawEllipse, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].rx, '0');
        this.renderer.setAttribute(this.drawEllipse, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].ry, '0');
    };
    EllipsisToolService.prototype.updateTraceType = function (traceType) {
        this.traceType = traceType;
        switch (traceType) {
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TRACE_TYPE"].Outline: {
                this.userFillColor = 'none';
                this.userStrokeColor = this.strokeColor;
                this.userStrokeWidth = this.strokeWidth;
                break;
            }
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TRACE_TYPE"].Full: {
                this.userFillColor = this.fillColor;
                this.userStrokeColor = 'none';
                this.userStrokeWidth = 0;
                break;
            }
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TRACE_TYPE"].Both: {
                this.userFillColor = this.fillColor;
                this.userStrokeColor = this.strokeColor;
                this.userStrokeWidth = this.strokeWidth;
                break;
            }
        }
    };
    EllipsisToolService.prototype.copyRectanglePreview = function () {
        this.renderer.setAttribute(this.drawEllipse, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].rx, Math.abs(this.previewRectangleWidth / 2 - this.userStrokeWidth / 2).toString());
        this.renderer.setAttribute(this.drawEllipse, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].ry, Math.abs(this.previewRectangleHeight / 2 - this.userStrokeWidth / 2).toString());
        this.renderer.setAttribute(this.drawEllipse, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].cx, (this.previewRectangleX + this.previewRectangleWidth / 2).toString());
        this.renderer.setAttribute(this.drawEllipse, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].cy, (this.previewRectangleY + this.previewRectangleHeight / 2).toString());
    };
    EllipsisToolService.prototype.updatePreviewCircle = function () {
        var deltaX = this.currentMouseCoords.x - this.initialMouseCoords.x;
        var deltaY = this.currentMouseCoords.y - this.initialMouseCoords.y;
        var minLength = Math.min(this.previewRectangleWidth, this.previewRectangleHeight);
        if (deltaX < 0) {
            this.renderer.setAttribute(this.drawEllipse, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].cx, (this.previewRectangleX + (this.previewRectangleWidth - minLength / 2)).toString());
        }
        else {
            this.renderer.setAttribute(this.drawEllipse, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].cx, (this.previewRectangleX + minLength / 2).toString());
        }
        if (deltaY < 0) {
            this.renderer.setAttribute(this.drawEllipse, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].cy, (this.previewRectangleY + (this.previewRectangleHeight - minLength / 2)).toString());
        }
        else {
            this.renderer.setAttribute(this.drawEllipse, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].cy, (this.previewRectangleY + minLength / 2).toString());
        }
        this.renderer.setAttribute(this.drawEllipse, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].rx, Math.abs(minLength / 2 - this.userStrokeWidth / 2).toString());
        this.renderer.setAttribute(this.drawEllipse, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].ry, Math.abs(minLength / 2 - this.userStrokeWidth / 2).toString());
    };
    EllipsisToolService.prototype.renderDrawEllipsis = function () {
        if (this.isValidllipse()) {
            this.userFillColor === 'none'
                ? this.renderer.setAttribute(this.drawEllipse, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].fill, this.userFillColor)
                : this.renderer.setAttribute(this.drawEllipse, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].fill, '#' + this.userFillColor);
            this.renderer.setAttribute(this.drawEllipse, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].stroke, '#' + this.userStrokeColor);
            this.renderer.setAttribute(this.drawEllipse, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].stroke_width, this.userStrokeWidth.toString());
        }
        else {
            this.renderer.setAttribute(this.drawEllipse, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].fill, 'none');
            this.renderer.setAttribute(this.drawEllipse, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].stroke, 'none');
            this.renderer.setAttribute(this.drawEllipse, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].stroke_width, '0');
        }
    };
    EllipsisToolService.prototype.updateDrawing = function () {
        this.updatePreviewRectangle();
        if (!this.isCirclePreview) {
            this.copyRectanglePreview();
        }
        else {
            this.updatePreviewCircle();
        }
        this.renderDrawEllipsis();
    };
    Object.defineProperty(EllipsisToolService.prototype, "drawEllipseCenterX", {
        get: function () {
            return this.drawEllipse.cx.baseVal.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EllipsisToolService.prototype, "drawEllipseCenterY", {
        get: function () {
            return this.drawEllipse.cy.baseVal.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EllipsisToolService.prototype, "drawEllipseRadiusX", {
        get: function () {
            return this.drawEllipse.rx.baseVal.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EllipsisToolService.prototype, "drawEllipseRadiusY", {
        get: function () {
            return this.drawEllipse.ry.baseVal.value;
        },
        enumerable: true,
        configurable: true
    });
    EllipsisToolService.prototype.onMouseMove = function (event) {
        this.currentMouseCoords.x = event.clientX - this.elementRef.nativeElement.getBoundingClientRect().left;
        this.currentMouseCoords.y = event.clientY - this.elementRef.nativeElement.getBoundingClientRect().top;
        if (this.isPreviewing) {
            this.updateDrawing();
        }
    };
    EllipsisToolService.prototype.onMouseDown = function (event) {
        var button = event.button;
        if (button === src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["MOUSE"].LeftButton) {
            this.initialMouseCoords.x = this.currentMouseCoords.x;
            this.initialMouseCoords.y = this.currentMouseCoords.y;
            this.isPreviewing = true;
            this.updateDrawing();
            this.renderer.appendChild(this.elementRef.nativeElement, this.drawEllipse);
            this.renderer.appendChild(this.elementRef.nativeElement, this.previewRectangle);
        }
    };
    EllipsisToolService.prototype.onMouseUp = function (event) {
        var button = event.button;
        if (button === src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["MOUSE"].LeftButton && this.isValidllipse() && this.isMouseInRef(event, this.elementRef)) {
            this.createSVG();
        }
        this.cleanUp();
    };
    // tslint:disable-next-line: no-empty
    EllipsisToolService.prototype.onMouseEnter = function (event) { };
    // tslint:disable-next-line: no-empty
    EllipsisToolService.prototype.onMouseLeave = function (event) { };
    EllipsisToolService.prototype.onKeyDown = function (event) {
        var key = event.key;
        if (key === src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["KEYS"].Shift) {
            this.isCirclePreview = true;
            this.updateDrawing();
        }
    };
    EllipsisToolService.prototype.onKeyUp = function (event) {
        var key = event.key;
        if (key === src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["KEYS"].Shift) {
            this.isCirclePreview = false;
            this.updateDrawing();
        }
    };
    EllipsisToolService.prototype.createSVG = function () {
        var _this = this;
        var el = this.renderer.createElement('g', src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SVG_NS"]);
        var drawEllipse = this.renderer.createElement('ellipse', src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SVG_NS"]);
        this.renderer.setAttribute(drawEllipse, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].cx, this.drawEllipseCenterX.toString());
        this.renderer.setAttribute(drawEllipse, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].cy, this.drawEllipseCenterY.toString());
        this.renderer.setAttribute(drawEllipse, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].rx, this.drawEllipseRadiusX.toString());
        this.renderer.setAttribute(drawEllipse, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].ry, this.drawEllipseRadiusY.toString());
        this.renderer.setAttribute(el, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].stroke_width, this.userStrokeWidth.toString());
        this.userFillColor === 'none'
            ? this.renderer.setAttribute(el, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].fill, this.userFillColor)
            : this.renderer.setAttribute(el, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].fill, '#' + this.userFillColor);
        this.renderer.setAttribute(el, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].stroke, '#' + this.userStrokeColor);
        this.renderer.setAttribute(el, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].title, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TOOL_NAME"].Ellipsis);
        this.renderer.appendChild(el, drawEllipse);
        this.renderer.appendChild(this.elementRef.nativeElement, el);
        setTimeout(function () {
            _this.drawStack.push(el);
        }, 0);
    };
    EllipsisToolService.prototype.cleanUp = function () {
        this.renderer.removeChild(this.elementRef, this.previewRectangle);
        this.renderer.removeChild(this.elementRef, this.drawEllipse);
        this.isPreviewing = false;
        this.makeEllipseInvalid();
    };
    EllipsisToolService.ctorParameters = function () { return [
        { type: _color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_5__["ColorToolService"] }
    ]; };
    EllipsisToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_5__["ColorToolService"]])
    ], EllipsisToolService);
    return EllipsisToolService;
}(_abstract_tools_abstract_shape_tool_abstract_shape_tool_service__WEBPACK_IMPORTED_MODULE_4__["AbstractShapeToolService"]));



/***/ }),

/***/ "./src/app/services/tools/eraser-tool/eraser-tool.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/tools/eraser-tool/eraser-tool.service.ts ***!
  \*******************************************************************/
/*! exports provided: EraserToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EraserToolService", function() { return EraserToolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/classes/Coords2D */ "./src/classes/Coords2D.ts");
/* harmony import */ var src_classes_StackTargetInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/classes/StackTargetInfo */ "./src/classes/StackTargetInfo.ts");
/* harmony import */ var src_classes_svggelement_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/classes/svggelement-info */ "./src/classes/svggelement-info.ts");
/* harmony import */ var src_constants_color_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/constants/color-constants */ "./src/constants/color-constants.ts");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../undo-redoer/undo-redoer.service */ "./src/app/services/undo-redoer/undo-redoer.service.ts");
/* harmony import */ var _abstract_tools_abstract_tool_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../abstract-tools/abstract-tool.service */ "./src/app/services/tools/abstract-tools/abstract-tool.service.ts");










var EraserToolService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EraserToolService, _super);
    function EraserToolService(undoRedoerService) {
        var _this = _super.call(this) || this;
        _this.undoRedoerService = undoRedoerService;
        _this.currentTarget = 0;
        _this.currentSize = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["ERASER_SIZE"].Default;
        _this.isOnTarget = false;
        _this.isLeftMouseDown = false;
        _this.isEraserAppended = false;
        _this.lastElementColoredNumber = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["RESET_POSITION_NUMBER"];
        _this.lastToolName = '';
        _this.erasedSomething = false;
        // the string represents the id_element
        _this.changedElements = new Map([]);
        _this.currentMouseCoords = new src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__["Coords2D"](0, 0);
        return _this;
    }
    EraserToolService.prototype.initializeService = function (elementRef, renderer, drawStack) {
        var _this = this;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.drawStack = drawStack;
        this.drawStack.currentStackTarget.subscribe(function (stackTarget) {
            _this.currentTarget = stackTarget.targetPosition;
            _this.isOnTarget = _this.currentTarget !== undefined;
        });
        this.eraser = this.renderer.createElement('rect', src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["SVG_NS"]);
        this.renderer.setAttribute(this.eraser, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].title, src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["TITLE_ELEMENT_TO_REMOVE"]);
        this.renderer.setAttribute(this.eraser, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].width, this.currentSize.toString());
        this.renderer.setAttribute(this.eraser, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].height, this.currentSize.toString());
        this.renderer.setAttribute(this.eraser, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].fill, '#' + src_constants_color_constants__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_WHITE"]);
        this.renderer.setAttribute(this.eraser, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].stroke, '#' + src_constants_color_constants__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_GRAY_0"]);
        this.renderer.setAttribute(this.eraser, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].stroke_width, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["ERASER_STROKE_WIDTH"]);
    };
    EraserToolService.prototype.initializeAttributesManagerService = function (attributesManagerService) {
        var _this = this;
        this.attributesManagerService = attributesManagerService;
        this.attributesManagerService.eraserSize.subscribe(function (newSize) {
            _this.currentSize = newSize;
            _this.renderer.setAttribute(_this.eraser, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].width, _this.currentSize.toString());
            _this.renderer.setAttribute(_this.eraser, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].height, _this.currentSize.toString());
        });
    };
    EraserToolService.prototype.onMouseMove = function (event) {
        if (this.isLeftMouseDown) {
            this.onMouseDown(event);
        }
        this.checkElementsToErase();
        this.setEraserToMouse(event);
    };
    EraserToolService.prototype.setEraserToMouse = function (event) {
        this.currentMouseCoords.x =
            event.clientX - this.elementRef.nativeElement.getBoundingClientRect().left - this.currentSize / 2;
        this.currentMouseCoords.y =
            event.clientY - this.elementRef.nativeElement.getBoundingClientRect().top - this.currentSize / 2;
        this.renderer.setAttribute(this.eraser, 'x', this.currentMouseCoords.x.toString());
        this.renderer.setAttribute(this.eraser, 'y', this.currentMouseCoords.y.toString());
        if (!this.isEraserAppended) {
            this.appendEraser();
        }
    };
    EraserToolService.prototype.appendEraser = function () {
        this.renderer.appendChild(this.elementRef.nativeElement, this.eraser);
        this.isEraserAppended = true;
    };
    EraserToolService.prototype.onMouseDown = function (event) {
        var button = event.button;
        if (button === src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["MOUSE"].LeftButton) {
            this.isLeftMouseDown = true;
        }
        this.checkElementsToErase();
        if (this.needToBeErased(button)) {
            this.renderer.removeChild(this.elementRef.nativeElement, this.drawStack.getElementByPosition(this.currentTarget));
            this.drawStack.delete(this.drawStack.drawStack[this.currentTarget]);
            this.erasedSomething = true;
            if (this.currentTarget + 1) {
                this.changedElements.set(this.currentTarget.toString(), this.changedElements.get((this.currentTarget + 1).toString()));
            }
            this.checkElementsToErase();
        }
        this.isOnTarget = false;
    };
    EraserToolService.prototype.needToBeErased = function (button) {
        return (this.isOnTarget &&
            this.drawStack.getElementByPosition(this.currentTarget) !== undefined &&
            button === src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["MOUSE"].LeftButton);
    };
    EraserToolService.prototype.isEraserTouchingElement = function (eraserBox, elementBox, strokeWidth) {
        var boxLeft = eraserBox.x + window.scrollX - src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["SIDEBAR_WIDTH"];
        var boxRight = eraserBox.x + window.scrollX - src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["SIDEBAR_WIDTH"] + eraserBox.width;
        var boxTop = eraserBox.y + window.scrollY;
        var boxBottom = eraserBox.y + window.scrollY + eraserBox.height;
        var elLeft = elementBox.x + window.scrollX - src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["SIDEBAR_WIDTH"];
        var elRight = elementBox.x + window.scrollX - src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["SIDEBAR_WIDTH"] + elementBox.width;
        var elTop = elementBox.y + window.scrollY;
        var elBottom = elementBox.y + window.scrollY + elementBox.height;
        if (strokeWidth) {
            var halfStrokeWidth = strokeWidth / 2;
            elLeft = elLeft - halfStrokeWidth;
            elRight = elRight + halfStrokeWidth;
            elTop = elTop - halfStrokeWidth;
            elBottom = elBottom + halfStrokeWidth;
        }
        // Check all cases where el and box don't touch each other
        if (elRight < boxLeft || boxRight < elLeft || elBottom < boxTop || boxBottom < elTop) {
            return false;
        }
        return true;
    };
    EraserToolService.prototype.checkElementsToErase = function () {
        var eraserBox = this.getDOMRect(this.eraser);
        var enteredInSelection = false;
        var topElement = this.drawStack.getDrawStackLength() - 1;
        for (var drawStackIndex = this.drawStack.getDrawStackLength() - 1; drawStackIndex >= 0; drawStackIndex--) {
            var svgGElement = this.drawStack.drawStack[drawStackIndex];
            var elBox = this.getDOMRect(svgGElement);
            if (this.isEraserTouchingElement(eraserBox, elBox, this.getStrokeWidth(svgGElement)) &&
                topElement <= drawStackIndex) {
                this.updateElementToColor(topElement, svgGElement, drawStackIndex);
                enteredInSelection = true;
                this.isOnTarget = true;
            }
            else {
                topElement--;
                this.removeBorder(svgGElement.getAttribute('id_element'), svgGElement.getAttribute('title'));
            }
        }
        if (!enteredInSelection) {
            this.isOnTarget = false;
            this.lastElementColoredNumber = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["RESET_POSITION_NUMBER"];
        }
    };
    EraserToolService.prototype.updateElementToColor = function (topElement, svgGElement, index) {
        if (this.lastElementColoredNumber !== topElement) {
            this.addElementToMap(svgGElement);
            this.lastToolName = svgGElement.getAttribute('title');
            this.drawStack.changeTargetElement(new src_classes_StackTargetInfo__WEBPACK_IMPORTED_MODULE_3__["StackTargetInfo"](parseInt(svgGElement.getAttribute('id_element'), src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_RADIX"]), this.lastToolName));
            this.lastElementColoredNumber = index;
            this.colorBorder(this.currentTarget, this.drawStack.drawStack[this.currentTarget].getAttribute(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].stroke_width), this.lastToolName);
        }
    };
    EraserToolService.prototype.addElementToMap = function (svgGElement) {
        if (!this.changedElements.get(svgGElement.getAttribute('id_element'))) {
            this.changedElements.set(svgGElement.getAttribute('id_element'), new src_classes_svggelement_info__WEBPACK_IMPORTED_MODULE_4__["SVGGElementInfo"](svgGElement.getAttribute(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].stroke), svgGElement.getAttribute(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].stroke_width)));
        }
    };
    EraserToolService.prototype.colorBorder = function (idElement, borderWidth, tool) {
        if (borderWidth !== '0' && borderWidth !== null) {
            borderWidth = (parseInt(borderWidth, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_RADIX"]) + src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["ADDITIONAL_BORDER_WIDTH"]).toString();
        }
        else {
            borderWidth = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["ADDITIONAL_BORDER_WIDTH"].toString();
        }
        this.checkIfPen(idElement, tool, '#' + src_constants_color_constants__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_RED"]);
        this.checkIfStamp(idElement, tool, '#' + src_constants_color_constants__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_RED"]);
        this.checkIfLine(idElement, tool, '#' + src_constants_color_constants__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_RED"]);
        this.renderer.setAttribute(this.drawStack.getElementByPosition(idElement), src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].stroke, '#' + src_constants_color_constants__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_RED"]);
        this.renderer.setAttribute(this.drawStack.getElementByPosition(idElement), src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].stroke_width, borderWidth);
    };
    EraserToolService.prototype.checkIfPen = function (idElement, tool, borderColor) {
        if (tool === src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["TOOL_NAME"].Pen) {
            var childrenCount = this.drawStack.getElementByPosition(idElement).childElementCount;
            this.renderer.setAttribute(this.drawStack.getElementByPosition(idElement).childNodes[childrenCount - 1 - src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["ELEMENTS_BEFORE_LAST_CIRCLE"]], src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].fill, borderColor);
        }
    };
    EraserToolService.prototype.checkIfStamp = function (idElement, tool, borderColor) {
        if (tool === src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["TOOL_NAME"].Stamp) {
            var childrenCount = this.drawStack.getElementByPosition(idElement).childElementCount;
            this.renderer.setAttribute(this.drawStack.getElementByPosition(idElement).childNodes[childrenCount - 1], src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].stroke, borderColor);
        }
    };
    EraserToolService.prototype.checkIfLine = function (idElement, tool, borderColor) {
        if (tool === src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["TOOL_NAME"].Line && this.drawStack.getElementByPosition(idElement).childElementCount > 1) {
            var childrenCount = this.drawStack.getElementByPosition(idElement).childElementCount;
            var children = this.drawStack.getElementByPosition(idElement).childNodes;
            for (var childIndex = 1; childIndex < childrenCount; childIndex++) {
                this.renderer.setAttribute(children[childIndex], src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].fill, borderColor);
            }
        }
    };
    EraserToolService.prototype.restoreBorder = function (idElement, borderColor, borderWidth, tool) {
        if (borderColor === null) {
            borderColor = '';
        }
        if (borderWidth === null) {
            borderWidth = '0';
        }
        this.checkIfPen(idElement, tool, borderColor);
        this.checkIfLine(idElement, tool, borderColor);
        this.renderer.setAttribute(this.drawStack.getElementByPosition(idElement), src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].stroke, borderColor);
        this.renderer.setAttribute(this.drawStack.getElementByPosition(idElement), src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].stroke_width, borderWidth);
    };
    EraserToolService.prototype.removeBorder = function (position, tool) {
        if (this.drawStack.drawStack[this.currentTarget] !== undefined) {
            var element = this.changedElements.get(position);
            if (element !== undefined) {
                this.restoreBorder(parseInt(position, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_RADIX"]), element.borderColor, element.borderWidth, tool);
                this.changedElements.delete(position);
            }
        }
    };
    EraserToolService.prototype.getDOMRect = function (el) {
        return el.getBoundingClientRect();
    };
    EraserToolService.prototype.getStrokeWidth = function (el) {
        if (el.getAttribute(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].stroke_width)) {
            return parseInt(el.getAttribute(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].stroke_width), src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_RADIX"]);
        }
        return 0;
    };
    EraserToolService.prototype.onMouseUp = function (event) {
        var _this = this;
        var button = event.button;
        if (button === src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["MOUSE"].LeftButton) {
            this.isLeftMouseDown = false;
        }
        this.isOnTarget = false;
        if (this.currentTarget !== undefined) {
            var currentChangedTargetIsValid = this.changedElements.get(this.currentTarget.toString()) !== undefined;
            if (this.erasedSomething && currentChangedTargetIsValid) {
                var currentChangedTarget_1 = this.changedElements.get(this.currentTarget.toString());
                this.renderer.removeChild(this.elementRef, this.eraser);
                this.restoreBorder(this.currentTarget, currentChangedTarget_1.borderColor, currentChangedTarget_1.borderWidth, this.lastToolName);
                setTimeout(function () {
                    _this.undoRedoerService.saveCurrentState(_this.drawStack.idStack);
                }, 0);
                setTimeout(function () {
                    _this.colorBorder(_this.currentTarget, currentChangedTarget_1.borderWidth, _this.lastToolName);
                    _this.appendEraser();
                }, 0);
            }
            else {
                this.undoRedoerService.saveCurrentState(this.drawStack.idStack);
            }
        }
        this.erasedSomething = false;
    };
    EraserToolService.prototype.onMouseEnter = function (event) {
        this.appendEraser();
    };
    // tslint:disable-next-line: no-empty
    EraserToolService.prototype.onMouseOver = function (event) { };
    EraserToolService.prototype.onMouseLeave = function (event) {
        this.cleanUp();
    };
    // tslint:disable-next-line: no-empty
    EraserToolService.prototype.onKeyDown = function (event) { };
    // tslint:disable-next-line: no-empty
    EraserToolService.prototype.onKeyUp = function (event) { };
    EraserToolService.prototype.cleanUp = function () {
        this.renderer.removeChild(this.elementRef, this.eraser);
        this.isEraserAppended = false;
        if (this.lastElementColoredNumber !== -1) {
            this.removeBorder(this.lastElementColoredNumber.toString(), this.lastToolName);
        }
        this.lastElementColoredNumber = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["RESET_POSITION_NUMBER"];
    };
    EraserToolService.ctorParameters = function () { return [
        { type: _undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_8__["UndoRedoerService"] }
    ]; };
    EraserToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_8__["UndoRedoerService"]])
    ], EraserToolService);
    return EraserToolService;
}(_abstract_tools_abstract_tool_service__WEBPACK_IMPORTED_MODULE_9__["AbstractToolService"]));



/***/ }),

/***/ "./src/app/services/tools/export-tool/export-tool.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/tools/export-tool/export-tool.service.ts ***!
  \*******************************************************************/
/*! exports provided: ExportToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportToolService", function() { return ExportToolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_classes_CanvasToBMP__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/classes/CanvasToBMP */ "./src/classes/CanvasToBMP.ts");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");





var ExportToolService = /** @class */ (function () {
    function ExportToolService() {
    }
    ExportToolService.prototype.launchDownload = function () {
        this.renderer.setAttribute(this.anchor, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].download, 'untitled.' + this.fileType);
        this.anchor.click();
    };
    ExportToolService.prototype.getXMLSVG = function () {
        return new XMLSerializer().serializeToString(this.svg);
    };
    ExportToolService.prototype.createSVGBlob = function () {
        this.renderer.setAttribute(this.svg, 'xmlns', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        return new Blob([this.getXMLSVG()], { type: 'image/svg+xml;charset=utf-8' });
    };
    ExportToolService.prototype.initializeService = function (ref, renderer) {
        this.svg = ref.nativeElement;
        this.renderer = renderer;
        this.canvas = this.renderer.createElement(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].canvas);
        this.anchor = this.renderer.createElement(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].a);
        this.img = this.renderer.createElement(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].img);
    };
    ExportToolService.prototype.saveFile = function (fileType) {
        this.fileType = fileType;
        this.resizeCanvas();
        this.canvasToBMP = new src_classes_CanvasToBMP__WEBPACK_IMPORTED_MODULE_2__["CanvasToBMP"]();
        if (this.fileType === src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["FILE_TYPE"].SVG) {
            this.saveAsSVG();
        }
        else {
            this.saveAsOther();
        }
    };
    ExportToolService.prototype.saveAsSVG = function () {
        var uri = 'data:image/svg+xml,' + encodeURIComponent(this.getXMLSVG());
        this.renderer.setAttribute(this.anchor, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].href, uri);
        this.launchDownload();
    };
    ExportToolService.prototype.saveAsOther = function () {
        var _this = this;
        var originalSvgSize = this.svg.getBoundingClientRect();
        if (src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["FILE_TYPE"].BMP === this.fileType) {
            setTimeout(function () {
                _this.compressSVG();
            }, 0);
        }
        var url = URL.createObjectURL(this.createSVGBlob());
        this.img.onload = function () {
            var uri = _this.setUri(url);
            _this.launchDownload();
            URL.revokeObjectURL(uri);
        };
        this.renderer.setAttribute(this.img, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].src, url);
        if (src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["FILE_TYPE"].BMP === this.fileType) {
            setTimeout(function () {
                _this.decompressSVG(originalSvgSize);
            }, 0);
        }
    };
    ExportToolService.prototype.resizeCanvas = function () {
        var svgSize = this.svg.getBoundingClientRect();
        this.canvas.width = svgSize.width;
        this.canvas.height = svgSize.height;
    };
    ExportToolService.prototype.compressSVG = function () {
        var svgSize = this.svg.getBoundingClientRect();
        this.renderer.setAttribute(this.svg, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].viewBox, "0,0," + svgSize.width + "," + svgSize.height);
        this.renderer.setAttribute(this.svg, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].width, "" + src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["MAX_BMP_SIZE"]);
        this.renderer.setAttribute(this.svg, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].height, "" + src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["MAX_BMP_SIZE"]);
        this.resizeCanvas();
    };
    ExportToolService.prototype.decompressSVG = function (svgSize) {
        this.renderer.removeAttribute(this.svg, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].viewBox);
        this.renderer.setAttribute(this.svg, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].width, "" + svgSize.width);
        this.renderer.setAttribute(this.svg, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].height, "" + svgSize.height);
    };
    ExportToolService.prototype.setUri = function (url) {
        this.canvas.getContext('2d').drawImage(this.img, 0, 0);
        URL.revokeObjectURL(url);
        var uri;
        if (this.fileType !== src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["FILE_TYPE"].BMP) {
            uri = this.canvas.toDataURL('image/' + this.fileType).replace('image/' + this.fileType, 'octet/stream');
        }
        else {
            uri = this.canvasToBMP.toDataURL(this.canvas);
        }
        this.renderer.setAttribute(this.anchor, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].href, uri);
        return uri;
    };
    ExportToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], ExportToolService);
    return ExportToolService;
}());



/***/ }),

/***/ "./src/app/services/tools/fill-tool/fill-tool.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/tools/fill-tool/fill-tool.service.ts ***!
  \***************************************************************/
/*! exports provided: FillToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillToolService", function() { return FillToolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/classes/Coords2D */ "./src/classes/Coords2D.ts");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _classes_BFSHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../classes/BFSHelper */ "./src/classes/BFSHelper.ts");
/* harmony import */ var _modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modal-manager/modal-manager.service */ "./src/app/services/modal-manager/modal-manager.service.ts");
/* harmony import */ var _abstract_tools_abstract_tool_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../abstract-tools/abstract-tool.service */ "./src/app/services/tools/abstract-tools/abstract-tool.service.ts");
/* harmony import */ var _color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../color-tool/color-tool.service */ "./src/app/services/tools/color-tool/color-tool.service.ts");









var FillToolService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FillToolService, _super);
    function FillToolService(modalManagerService, colorToolService) {
        var _this = _super.call(this) || this;
        _this.modalManagerService = modalManagerService;
        _this.colorToolService = colorToolService;
        _this.currentMouseCoords = new src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__["Coords2D"](0, 0);
        _this.traceType = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["TRACE_TYPE"].Full;
        _this.colorToolService.primaryColor.subscribe(function (fillColor) {
            _this.fillColor = '#' + fillColor;
        });
        _this.colorToolService.secondaryColor.subscribe(function (strokeColor) {
            _this.strokeColor = '#' + strokeColor;
        });
        return _this;
    }
    FillToolService.prototype.initializeService = function (elementRef, renderer, drawStack) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.drawStack = drawStack;
        this.canvas = this.renderer.createElement('canvas');
        this.SVGImg = this.renderer.createElement('img');
        this.context2D = this.canvas.getContext('2d');
    };
    FillToolService.prototype.initializeAttributesManagerService = function (attributesManagerService) {
        var _this = this;
        this.attributesManagerService = attributesManagerService;
        this.attributesManagerService.thickness.subscribe(function (thickness) {
            _this.strokeWidth = thickness;
        });
        this.attributesManagerService.traceType.subscribe(function (traceType) {
            _this.traceType = traceType;
        });
    };
    FillToolService.prototype.shouldNotFill = function (event) {
        return (!this.isMouseInRef(event, this.elementRef) ||
            this.modalManagerService.modalIsDisplayed.value ||
            !this.mouseDown);
    };
    FillToolService.prototype.onMouseDown = function (event) {
        if (this.isMouseInRef(event, this.elementRef)) {
            this.updateCanvas();
            this.mouseDown = true;
        }
    };
    FillToolService.prototype.onMouseUp = function (event) {
        if (this.shouldNotFill(event)) {
            return;
        }
        this.updateCanvas();
        this.updateMousePosition(event);
        this.createBFSHelper();
        this.bfsHelper.computeBFS(this.currentMouseCoords);
        this.fill();
        this.drawStack.push(this.svgWrap);
        this.mouseDown = false;
    };
    FillToolService.prototype.createBFSHelper = function () {
        this.bfsHelper = new _classes_BFSHelper__WEBPACK_IMPORTED_MODULE_5__["BFSHelper"](this.canvas.width, this.canvas.height, this.context2D, this.attributesManagerService);
    };
    FillToolService.prototype.updateMousePosition = function (event) {
        this.currentMouseCoords.x = event.clientX - this.elementRef.nativeElement.getBoundingClientRect().left;
        this.currentMouseCoords.y = event.clientY - this.elementRef.nativeElement.getBoundingClientRect().top;
    };
    FillToolService.prototype.fill = function () {
        this.createSVGWrapper();
        var d = this.createFillPath();
        switch (this.traceType) {
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["TRACE_TYPE"].Outline: {
                var bodyWrap = this.fillBody(d);
                this.renderer.setAttribute(bodyWrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].fill, 'none');
                this.renderer.setAttribute(bodyWrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke, 'none');
                this.renderer.setAttribute(bodyWrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].title, '');
                this.fillStroke(d, bodyWrap);
                break;
            }
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["TRACE_TYPE"].Full: {
                this.fillBody(d);
                break;
            }
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["TRACE_TYPE"].Both: {
                var bodyWrap = this.fillBody(d);
                this.fillStroke(d, bodyWrap);
                break;
            }
        }
        this.renderer.appendChild(this.elementRef.nativeElement, this.svgWrap);
    };
    FillToolService.prototype.fillBody = function (d) {
        var bodyWrap = this.renderer.createElement('g', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        this.renderer.setAttribute(bodyWrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].fill, this.fillColor);
        this.renderer.setAttribute(bodyWrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke, this.fillColor);
        this.renderer.setAttribute(bodyWrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke_width, '1');
        this.renderer.setAttribute(bodyWrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].title, 'body');
        var path = this.renderer.createElement('path', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        this.renderer.setAttribute(path, 'd', d);
        this.renderer.setAttribute(path, 'fill-rule', 'evenodd');
        this.renderer.setAttribute(path, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke_linejoin, 'round');
        this.renderer.setAttribute(path, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke_linecap, 'round');
        this.renderer.appendChild(bodyWrap, path);
        this.renderer.appendChild(this.svgWrap, bodyWrap);
        return bodyWrap;
    };
    FillToolService.prototype.fillStroke = function (d, bodyWrap) {
        var id = Date.now().toString();
        this.appendMask(d, bodyWrap.cloneNode(true), id);
        var strokeWrap = this.renderer.createElement('g', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        this.renderer.setAttribute(strokeWrap, 'mask', "url(#" + id + ")");
        this.renderer.setAttribute(strokeWrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].title, 'stroke');
        this.renderer.setAttribute(strokeWrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].fill, 'none');
        this.renderer.setAttribute(strokeWrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke, this.strokeColor);
        this.renderer.setAttribute(strokeWrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke_width, (this.strokeWidth * 2).toString());
        var path = this.renderer.createElement('path', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        this.renderer.setAttribute(path, 'd', d);
        this.renderer.setAttribute(path, 'fill-rule', 'evenodd');
        this.renderer.setAttribute(path, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke_linejoin, 'round');
        this.renderer.setAttribute(path, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke_linecap, 'round');
        this.renderer.appendChild(strokeWrap, path);
        this.renderer.appendChild(this.svgWrap, strokeWrap);
    };
    FillToolService.prototype.appendMask = function (d, bodyWrap, id) {
        var mask = this.renderer.createElement('mask', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        this.renderer.setAttribute(bodyWrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke, 'white');
        this.renderer.setAttribute(bodyWrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].fill, 'white');
        this.renderer.setAttribute(mask, 'id', id);
        this.renderer.appendChild(mask, bodyWrap);
        this.renderer.appendChild(this.svgWrap, mask);
    };
    FillToolService.prototype.createFillPath = function () {
        var d = '';
        this.bfsHelper.pathsToFill.forEach(function (el) {
            el.forEach(function (pixel, i) {
                d += i === 0 ? " M" + (pixel.x + 0.5) + " " + (pixel.y + 0.5) : " L" + (pixel.x + 0.5) + " " + (pixel.y + 0.5);
            });
            d += ' z';
        });
        return d;
    };
    FillToolService.prototype.updateCanvas = function () {
        var serializedSVG = new XMLSerializer().serializeToString(this.elementRef.nativeElement);
        this.renderer.setProperty(this.SVGImg, 'src', 'data:image/svg+xml,' + encodeURIComponent(serializedSVG));
        this.renderer.setProperty(this.canvas, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].width, this.elementRef.nativeElement.getBoundingClientRect().width);
        this.renderer.setProperty(this.canvas, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].height, this.elementRef.nativeElement.getBoundingClientRect().height);
        this.context2D = this.canvas.getContext('2d');
        this.context2D.drawImage(this.SVGImg, 0, 0);
    };
    FillToolService.prototype.createSVGWrapper = function () {
        var wrap = this.renderer.createElement('g', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        this.renderer.setAttribute(wrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].title, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["TOOL_NAME"].Fill);
        this.svgWrap = wrap;
    };
    // tslint:disable-next-line: no-empty
    FillToolService.prototype.onMouseMove = function (event) { };
    // tslint:disable-next-line: no-empty
    FillToolService.prototype.onMouseEnter = function (event) { };
    // tslint:disable-next-line: no-empty
    FillToolService.prototype.onMouseLeave = function (event) { };
    // tslint:disable-next-line: no-empty
    FillToolService.prototype.onKeyDown = function (event) { };
    // tslint:disable-next-line: no-empty
    FillToolService.prototype.onKeyUp = function (event) { };
    // tslint:disable-next-line: no-empty
    FillToolService.prototype.cleanUp = function () { };
    FillToolService.ctorParameters = function () { return [
        { type: _modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_6__["ModalManagerService"] },
        { type: _color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_8__["ColorToolService"] }
    ]; };
    FillToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_6__["ModalManagerService"], _color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_8__["ColorToolService"]])
    ], FillToolService);
    return FillToolService;
}(_abstract_tools_abstract_tool_service__WEBPACK_IMPORTED_MODULE_7__["AbstractToolService"]));



/***/ }),

/***/ "./src/app/services/tools/grid-tool/grid-tool.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/tools/grid-tool/grid-tool.service.ts ***!
  \***************************************************************/
/*! exports provided: GridToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridToolService", function() { return GridToolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../server/drawing-loader/drawing-loader.service */ "./src/app/services/server/drawing-loader/drawing-loader.service.ts");





var GridToolService = /** @class */ (function () {
    function GridToolService(drawingLoaderService) {
        this.drawingLoaderService = drawingLoaderService;
        this.state = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.size = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["GRID_SIZE"].Default);
        this.opacity = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["GRID_OPACITY"].Max);
        this.currentState = this.state.asObservable();
        this.currentSize = this.size.asObservable();
        this.currentOpacity = this.opacity.asObservable();
    }
    GridToolService.prototype.changeState = function (state) {
        if (!this.drawingLoaderService.untouchedWorkZone.value) {
            this.state.next(state);
        }
    };
    GridToolService.prototype.switchState = function () {
        this.state.value ? this.changeState(false) : this.changeState(true);
    };
    GridToolService.prototype.changeSize = function (size) {
        this.size.next(size);
    };
    GridToolService.prototype.incrementSize = function () {
        var gridSize = this.size.value;
        if (this.size.value + src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["GRID_SIZE_INCREMENT"] <= src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["GRID_SIZE"].Max) {
            this.changeSize(gridSize + src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["GRID_SIZE_INCREMENT"]);
        }
        else {
            this.changeSize(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["GRID_SIZE"].Max);
        }
    };
    GridToolService.prototype.decrementSize = function () {
        var gridSize = this.size.value;
        if (gridSize - src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["GRID_SIZE_DECREMENT"] >= src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["GRID_SIZE"].Min) {
            this.changeSize(gridSize - src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["GRID_SIZE_DECREMENT"]);
        }
        else {
            this.changeSize(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["GRID_SIZE"].Min);
        }
    };
    GridToolService.prototype.changeOpacity = function (opacity) {
        this.opacity.next(opacity);
    };
    GridToolService.ctorParameters = function () { return [
        { type: _server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_4__["DrawingLoaderService"] }
    ]; };
    GridToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_4__["DrawingLoaderService"]])
    ], GridToolService);
    return GridToolService;
}());



/***/ }),

/***/ "./src/app/services/tools/line-tool/line-tool.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/tools/line-tool/line-tool.service.ts ***!
  \***************************************************************/
/*! exports provided: LineToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineToolService", function() { return LineToolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _abstract_tools_abstract_tool_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abstract-tools/abstract-tool.service */ "./src/app/services/tools/abstract-tools/abstract-tool.service.ts");
/* harmony import */ var _color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../color-tool/color-tool.service */ "./src/app/services/tools/color-tool/color-tool.service.ts");






var LineToolService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LineToolService, _super);
    function LineToolService(colorToolService) {
        var _this = _super.call(this) || this;
        _this.colorToolService = colorToolService;
        _this.currentColorAndOpacity = '';
        _this.currentColor = '';
        _this.currentOpacity = '';
        _this.currentStrokeWidth = 0;
        _this.circleJointDiameter = 0;
        _this.currentStrokeType = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["LINE_STROKE_TYPE"].Continuous;
        _this.currentJointType = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["LINE_JOINT_TYPE"].Curvy;
        _this.pointsArray = new Array();
        _this.jointCircles = new Array();
        _this.currentMousePosition = '';
        _this.shouldCloseLine = false;
        _this.isDrawing = false;
        _this.isLineInStack = false;
        _this.isMouseDown = false;
        _this.getXPos = function (clientX) { return clientX - _this.elementRef.nativeElement.getBoundingClientRect().left; };
        _this.getYPos = function (clientY) { return clientY - _this.elementRef.nativeElement.getBoundingClientRect().top; };
        _this.colorToolService.primaryColor.subscribe(function (currentColor) {
            _this.currentColorAndOpacity = currentColor;
        });
        return _this;
    }
    LineToolService.prototype.initializeService = function (elementRef, renderer, drawStack) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.drawStack = drawStack;
    };
    LineToolService.prototype.initializeAttributesManagerService = function (attributesManagerService) {
        var _this = this;
        this.attributesManagerService = attributesManagerService;
        this.attributesManagerService.thickness.subscribe(function (thickness) {
            _this.currentStrokeWidth = thickness;
        });
        this.attributesManagerService.lineStrokeType.subscribe(function (strokeType) {
            _this.currentStrokeType = strokeType;
        });
        this.attributesManagerService.lineJointType.subscribe(function (jointType) {
            _this.currentJointType = jointType;
        });
        this.attributesManagerService.circleJointDiameter.subscribe(function (circleJointDiameter) {
            _this.circleJointDiameter = circleJointDiameter;
        });
    };
    LineToolService.prototype.getColorAndOpacity = function () {
        this.currentColor = this.currentColorAndOpacity.slice(0, 6);
        this.currentOpacity = (parseInt(this.currentColorAndOpacity.slice(-2), 16) / 255).toFixed(1).toString();
    };
    LineToolService.prototype.onMouseDown = function (event) {
        if (event.button === src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["MOUSE"].LeftButton) {
            this.getColorAndOpacity();
            var x = this.getXPos(event.clientX);
            var y = this.getYPos(event.clientY);
            if (!this.isDrawing) {
                this.isDrawing = true;
                this.startLine(x, y);
            }
            else {
                this.appendLine(x, y);
            }
            if (this.currentJointType === src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["LINE_JOINT_TYPE"].Circle) {
                this.appendCircle(x, y);
            }
        }
        this.isMouseDown = true;
    };
    LineToolService.prototype.onMouseUp = function (event) {
        this.isMouseDown = false;
    };
    LineToolService.prototype.onMouseMove = function (event) {
        if (this.isDrawing && !this.isMouseDown) {
            this.previewLine(this.getXPos(event.clientX), this.getYPos(event.clientY));
        }
    };
    LineToolService.prototype.onKeyDown = function (event) {
        if (event.key === src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["KEYS"].Shift) {
            this.shouldCloseLine = true;
        }
        else if (event.key === src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["KEYS"].Escape) {
            this.isDrawing = false;
            this.renderer.removeChild(this.elementRef, this.gWrap);
            this.currentMousePosition = '';
            this.pointsArray = new Array();
        }
        else if (event.key === src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["KEYS"].Backspace) {
            if (this.pointsArray.length > 1) {
                this.pointsArray.pop();
                this.renderer.setAttribute(this.currentLine, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].points, this.arrayToStringLine() + " " + this.currentMousePosition);
                if (this.currentJointType === src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["LINE_JOINT_TYPE"].Circle) {
                    var circle = this.jointCircles.pop();
                    this.renderer.removeChild(this.gWrap, circle);
                }
            }
        }
    };
    LineToolService.prototype.onKeyUp = function (event) {
        if (event.key === src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["KEYS"].Shift) {
            this.shouldCloseLine = false;
        }
    };
    LineToolService.prototype.onDblClick = function (event) {
        if (this.isDrawing) {
            this.isDrawing = false;
            if (this.shouldCloseLine && this.pointsArray.length > 3) {
                this.pointsArray.push(this.pointsArray[0]);
                this.renderer.setAttribute(this.currentLine, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].points, this.arrayToStringLine());
            }
            this.drawStack.push(this.gWrap);
            this.isLineInStack = true;
            this.pointsArray = new Array();
            this.currentMousePosition = '';
            this.gWrap = this.renderer.createElement('g', src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SVG_NS"]);
        }
    };
    LineToolService.prototype.startLine = function (x, y) {
        this.gWrap = this.renderer.createElement('g', src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SVG_NS"]);
        this.renderer.setAttribute(this.gWrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].title, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TOOL_NAME"].Line);
        this.currentLine = this.renderer.createElement('polyline', src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SVG_NS"]);
        this.isLineInStack = false;
        this.pointsArray.push(x.toString() + "," + y.toString());
        this.renderer.setAttribute(this.currentLine, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].points, this.arrayToStringLine());
        this.renderer.setAttribute(this.currentLine, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].fill, 'none');
        this.renderer.setAttribute(this.currentLine, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].stroke_width, this.currentStrokeWidth.toString());
        this.renderer.setAttribute(this.gWrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].stroke, "#" + this.currentColor);
        this.renderer.setAttribute(this.gWrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].fill, "#" + this.currentColor);
        this.renderer.setAttribute(this.gWrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].opacity, this.currentOpacity);
        switch (this.currentStrokeType) {
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["LINE_STROKE_TYPE"].Dotted_line:
                this.renderer.setAttribute(this.currentLine, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].stroke_dasharray, this.currentStrokeWidth + ", " + this.currentStrokeWidth / 2);
                break;
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["LINE_STROKE_TYPE"].Dotted_circle:
                this.renderer.setAttribute(this.currentLine, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].stroke_dasharray, "1, " + this.currentStrokeWidth * 1.5);
                this.renderer.setAttribute(this.currentLine, 'stroke-linecap', 'round');
                break;
        }
        switch (this.currentJointType) {
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["LINE_JOINT_TYPE"].Curvy:
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["LINE_JOINT_TYPE"].Circle:
                this.renderer.setAttribute(this.currentLine, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].stroke_linejoin, 'round');
                break;
        }
        this.renderer.appendChild(this.gWrap, this.currentLine);
        this.renderer.appendChild(this.elementRef.nativeElement, this.gWrap);
    };
    LineToolService.prototype.previewLine = function (x, y) {
        this.currentMousePosition = x.toString() + "," + y.toString();
        this.renderer.setAttribute(this.currentLine, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].points, this.arrayToStringLine() + " " + this.currentMousePosition);
    };
    LineToolService.prototype.appendLine = function (x, y) {
        this.pointsArray.push(" " + x.toString() + "," + y.toString());
        this.renderer.setAttribute(this.currentLine, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].points, "" + this.arrayToStringLine());
    };
    LineToolService.prototype.appendCircle = function (x, y) {
        var circle = this.renderer.createElement('circle', src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SVG_NS"]);
        this.renderer.setAttribute(circle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].cx, x.toString());
        this.renderer.setAttribute(circle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].cy, y.toString());
        this.renderer.setAttribute(circle, 'r', (this.circleJointDiameter / 2).toString());
        this.renderer.appendChild(this.gWrap, circle);
        this.jointCircles.push(circle);
    };
    LineToolService.prototype.arrayToStringLine = function () {
        return this.pointsArray.join(' ');
    };
    LineToolService.prototype.cleanUp = function () {
        if (!this.isLineInStack && this.gWrap !== undefined) {
            this.renderer.removeChild(this.elementRef, this.gWrap);
            this.pointsArray = new Array();
        }
        this.isDrawing = false;
    };
    // tslint:disable-next-line: no-empty
    LineToolService.prototype.onMouseEnter = function (event) { };
    // tslint:disable-next-line: no-empty
    LineToolService.prototype.onMouseLeave = function (event) { };
    LineToolService.ctorParameters = function () { return [
        { type: _color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_5__["ColorToolService"] }
    ]; };
    LineToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_5__["ColorToolService"]])
    ], LineToolService);
    return LineToolService;
}(_abstract_tools_abstract_tool_service__WEBPACK_IMPORTED_MODULE_4__["AbstractToolService"]));



/***/ }),

/***/ "./src/app/services/tools/magnetism-tool/magnetism-tool.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/services/tools/magnetism-tool/magnetism-tool.service.ts ***!
  \*************************************************************************/
/*! exports provided: MagnetismToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagnetismToolService", function() { return MagnetismToolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/classes/Coords2D */ "./src/classes/Coords2D.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../server/drawing-loader/drawing-loader.service */ "./src/app/services/server/drawing-loader/drawing-loader.service.ts");
/* harmony import */ var _grid_tool_grid_tool_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../grid-tool/grid-tool.service */ "./src/app/services/tools/grid-tool/grid-tool.service.ts");








var MagnetismToolService = /** @class */ (function () {
    function MagnetismToolService(gridToolService, drawingLoaderService, snackBar) {
        var _this = this;
        this.gridToolService = gridToolService;
        this.drawingLoaderService = drawingLoaderService;
        this.snackBar = snackBar;
        this.totalDeltaX = 0;
        this.totalDeltaY = 0;
        this.alignX = 0;
        this.alignY = 0;
        this.isMagnetic = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.currentPoint = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["CONTROL_POINTS"].TopLeft;
        this.currentPointPosition = new src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_4__["Coords2D"](0, 0);
        this.currentGridSize = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["GRID_SIZE"].Default;
        this.gridToolService.size.subscribe(function (size) {
            _this.currentGridSize = size;
        });
    }
    MagnetismToolService.prototype.initializeService = function (selection) {
        this.selection = selection;
    };
    MagnetismToolService.prototype.updateControlPointPosition = function () {
        if (this.currentPoint === src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["CONTROL_POINTS"].CenterMiddle) {
            var selectionBox = this.selection.selectionBox;
            var x = selectionBox.x.baseVal.value + selectionBox.width.baseVal.value / 2;
            var y = selectionBox.y.baseVal.value + selectionBox.height.baseVal.value / 2;
            this.currentPointPosition.x = x;
            this.currentPointPosition.y = y;
        }
        else {
            var x = this.selection.controlPoints[this.currentPoint].cx.baseVal.value;
            var y = this.selection.controlPoints[this.currentPoint].cy.baseVal.value;
            this.currentPointPosition.x = x;
            this.currentPointPosition.y = y;
        }
    };
    MagnetismToolService.prototype.changeState = function (state) {
        if (!this.drawingLoaderService.untouchedWorkZone.value) {
            this.isMagnetic.next(state);
        }
    };
    MagnetismToolService.prototype.switchState = function () {
        this.isMagnetic.value ? this.changeState(false) : this.changeState(true);
        var stateTranslation = this.isMagnetic.value ? src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["MAGNETISM_STATE"].active : src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["MAGNETISM_STATE"].inactive;
        this.snackBar.open("Le magn\u00E9tisme est " + stateTranslation, '', {
            duration: src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["SNACKBAR_DURATION"],
        });
    };
    MagnetismToolService.prototype.magnetizeXY = function (deltaX, deltaY) {
        this.updateControlPointPosition();
        var magnetizedCoords = new src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_4__["Coords2D"](0, 0);
        var remainderX = this.currentPointPosition.x % this.currentGridSize;
        var remainderY = this.currentPointPosition.y % this.currentGridSize;
        this.alignX = remainderX < this.currentGridSize / 2 ? -remainderX : this.currentGridSize - remainderX;
        this.alignY = remainderY < this.currentGridSize / 2 ? -remainderY : this.currentGridSize - remainderY;
        magnetizedCoords.x = this.magnetizeX(deltaX);
        magnetizedCoords.y = this.magnetizeY(deltaY);
        return magnetizedCoords;
    };
    MagnetismToolService.prototype.magnetizeX = function (deltaX) {
        this.totalDeltaX += deltaX;
        if (Math.round(this.alignX) !== 0) {
            return this.alignX;
        }
        if (Math.abs(this.totalDeltaX) < this.currentGridSize) {
            return 0;
        }
        else {
            var oldTotalDeltaX = this.totalDeltaX;
            var multipierX = Math.abs(Math.floor(this.totalDeltaX / this.currentGridSize));
            this.totalDeltaX =
                this.totalDeltaX < 0
                    ? this.totalDeltaX + this.currentGridSize * multipierX
                    : this.totalDeltaX - this.currentGridSize * multipierX;
            return oldTotalDeltaX > 0 ? this.currentGridSize * multipierX : -this.currentGridSize * multipierX;
        }
    };
    MagnetismToolService.prototype.magnetizeY = function (deltaY) {
        this.totalDeltaY += deltaY;
        if (Math.round(this.alignY) !== 0) {
            return this.alignY;
        }
        if (Math.abs(this.totalDeltaY) < this.currentGridSize) {
            return 0;
        }
        else {
            var oldTotalDeltaY = this.totalDeltaY;
            var multipierY = Math.abs(Math.floor(this.totalDeltaY / this.currentGridSize));
            this.totalDeltaY =
                this.totalDeltaY < 0
                    ? this.totalDeltaY + this.currentGridSize * multipierY
                    : this.totalDeltaY - this.currentGridSize * multipierY;
            return oldTotalDeltaY > 0 ? this.currentGridSize * multipierY : -this.currentGridSize * multipierY;
        }
    };
    MagnetismToolService.ctorParameters = function () { return [
        { type: _grid_tool_grid_tool_service__WEBPACK_IMPORTED_MODULE_7__["GridToolService"] },
        { type: _server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_6__["DrawingLoaderService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
    ]; };
    MagnetismToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_grid_tool_grid_tool_service__WEBPACK_IMPORTED_MODULE_7__["GridToolService"],
            _server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_6__["DrawingLoaderService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], MagnetismToolService);
    return MagnetismToolService;
}());



/***/ }),

/***/ "./src/app/services/tools/pen-tool/pen-tool.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/tools/pen-tool/pen-tool.service.ts ***!
  \*************************************************************/
/*! exports provided: PenToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PenToolService", function() { return PenToolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _abstract_tools_tracing_tool_tracing_tool_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstract-tools/tracing-tool/tracing-tool.service */ "./src/app/services/tools/abstract-tools/tracing-tool/tracing-tool.service.ts");
/* harmony import */ var _color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../color-tool/color-tool.service */ "./src/app/services/tools/color-tool/color-tool.service.ts");





var PenToolService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PenToolService, _super);
    function PenToolService(colorToolService) {
        var _this = _super.call(this) || this;
        _this.colorToolService = colorToolService;
        _this.oldTimeStamp = -1;
        _this.oldSpeedX = 0;
        _this.oldSpeedY = 0;
        _this.colorToolService.primaryColor.subscribe(function (currentColor) {
            _this.currentColorAndOpacity = currentColor;
        });
        return _this;
    }
    PenToolService.prototype.initializeService = function (elementRef, renderer, drawStack) {
        _super.prototype.initializeService.call(this, elementRef, renderer, drawStack);
    };
    PenToolService.prototype.createSVGCircle = function (x, y) {
        var circle = _super.prototype.createSVGCircle.call(this, x, y);
        return circle;
    };
    PenToolService.prototype.initializeAttributesManagerService = function (attributesManagerService) {
        var _this = this;
        this.attributesManagerService = attributesManagerService;
        this.attributesManagerService.thickness.subscribe(function (thickness) {
            _this.maxThickness = thickness;
            _this.currentWidth = thickness;
        });
        this.attributesManagerService.minThickness.subscribe(function (thickness) {
            _this.minThickness = thickness;
        });
    };
    PenToolService.prototype.onMouseMove = function (e) {
        _super.prototype.onMouseMove.call(this, e);
        this.calculateSpeed(e);
        if (this.isDrawing) {
            var x = this.getXPos(e.clientX);
            var y = this.getYPos(e.clientY);
            this.currentPath = "M" + x + " " + y;
            this.createSVGPath();
        }
        this.oldSpeedX = this.speedX;
        this.oldSpeedY = this.speedY;
        return;
    };
    PenToolService.prototype.calculateSpeed = function (e) {
        if (this.oldTimeStamp === -1) {
            this.speedX = 0;
            this.speedY = 0;
            this.oldTimeStamp = Date.now();
            this.lastMouseX = e.screenX;
            this.lastMouseY = e.screenY;
            return;
        }
        var now = Date.now();
        var dt = now - this.oldTimeStamp;
        var dx = e.screenX - this.lastMouseX;
        var dy = e.screenY - this.lastMouseY;
        this.speedX = Math.abs(Math.round(dx / dt));
        this.speedY = Math.abs(Math.round(dy / dt));
        this.oldTimeStamp = now;
        this.lastMouseX = e.screenX;
        this.lastMouseY = e.screenY;
        var totalSpeed = this.speedX + this.speedY > src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["PEN_WIDTH_FACTOR"] ? src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["PEN_WIDTH_FACTOR"] : this.speedX + this.speedY;
        var targetWidth = (this.maxThickness - this.minThickness) * (1 - totalSpeed / src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["PEN_WIDTH_FACTOR"]) + this.minThickness;
        this.currentWidth += (targetWidth - this.currentWidth) / (2 * src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["PEN_WIDTH_FACTOR"]);
        if (Number.isNaN(this.currentWidth)) {
            this.currentWidth = (this.maxThickness + this.minThickness) / 2;
        }
    };
    PenToolService.ctorParameters = function () { return [
        { type: _color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_4__["ColorToolService"] }
    ]; };
    PenToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_4__["ColorToolService"]])
    ], PenToolService);
    return PenToolService;
}(_abstract_tools_tracing_tool_tracing_tool_service__WEBPACK_IMPORTED_MODULE_3__["TracingToolService"]));



/***/ }),

/***/ "./src/app/services/tools/pencil-tool/pencil-tool.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/tools/pencil-tool/pencil-tool.service.ts ***!
  \*******************************************************************/
/*! exports provided: PencilToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PencilToolService", function() { return PencilToolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_tools_tracing_tool_tracing_tool_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-tools/tracing-tool/tracing-tool.service */ "./src/app/services/tools/abstract-tools/tracing-tool/tracing-tool.service.ts");
/* harmony import */ var _color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../color-tool/color-tool.service */ "./src/app/services/tools/color-tool/color-tool.service.ts");




var PencilToolService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PencilToolService, _super);
    function PencilToolService(colorToolService) {
        var _this = _super.call(this) || this;
        _this.colorToolService = colorToolService;
        _this.colorToolService.primaryColor.subscribe(function (currentColor) {
            _this.currentColorAndOpacity = currentColor;
        });
        return _this;
    }
    PencilToolService.prototype.initializeService = function (elementRef, renderer, drawStack) {
        _super.prototype.initializeService.call(this, elementRef, renderer, drawStack);
    };
    PencilToolService.prototype.createSVGCircle = function (x, y) {
        var circle = _super.prototype.createSVGCircle.call(this, x, y);
        return circle;
    };
    PencilToolService.ctorParameters = function () { return [
        { type: _color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_3__["ColorToolService"] }
    ]; };
    PencilToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_3__["ColorToolService"]])
    ], PencilToolService);
    return PencilToolService;
}(_abstract_tools_tracing_tool_tracing_tool_service__WEBPACK_IMPORTED_MODULE_2__["TracingToolService"]));



/***/ }),

/***/ "./src/app/services/tools/polygon-tool/polygon-tool.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/tools/polygon-tool/polygon-tool.service.ts ***!
  \*********************************************************************/
/*! exports provided: PolygonToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonToolService", function() { return PolygonToolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/classes/Coords2D */ "./src/classes/Coords2D.ts");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _abstract_tools_abstract_shape_tool_abstract_shape_tool_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../abstract-tools/abstract-shape-tool/abstract-shape-tool.service */ "./src/app/services/tools/abstract-tools/abstract-shape-tool/abstract-shape-tool.service.ts");
/* harmony import */ var _color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../color-tool/color-tool.service */ "./src/app/services/tools/color-tool/color-tool.service.ts");







var PolygonToolService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PolygonToolService, _super);
    function PolygonToolService(colorToolService) {
        var _this = _super.call(this) || this;
        _this.colorToolService = colorToolService;
        _this.fillColor = '';
        _this.strokeColor = '';
        _this.userFillColor = '';
        _this.userStrokeColor = '';
        _this.userStrokeWidth = 0;
        _this.traceType = '';
        _this.strokeWidth = 0;
        _this.nbVertices = 3;
        _this.radius = 0;
        _this.radiusCorrection = 0;
        _this.colorToolService.primaryColor.subscribe(function (fillColor) {
            _this.fillColor = fillColor;
            _this.updateTraceType(_this.traceType);
        });
        _this.colorToolService.secondaryColor.subscribe(function (strokeColor) {
            _this.strokeColor = strokeColor;
            _this.updateTraceType(_this.traceType);
        });
        return _this;
    }
    PolygonToolService.prototype.initializeService = function (elementRef, renderer, drawStack) {
        _super.prototype.initializeService.call(this, elementRef, renderer, drawStack);
        this.drawPolygon = this.renderer.createElement('polygon', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
    };
    PolygonToolService.prototype.initializeAttributesManagerService = function (attributesManagerService) {
        var _this = this;
        this.attributesManagerService = attributesManagerService;
        this.attributesManagerService.thickness.subscribe(function (thickness) {
            _this.strokeWidth = thickness;
            _this.updateTraceType(_this.traceType);
        });
        this.attributesManagerService.traceType.subscribe(function (traceType) {
            _this.updateTraceType(traceType);
        });
        this.attributesManagerService.nbVertices.subscribe(function (nbVertices) {
            _this.nbVertices = nbVertices;
        });
    };
    PolygonToolService.prototype.setRadiusCorrection = function () {
        var correction = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["POLYGON_RADIUS_CORRECTION"].get(this.nbVertices);
        this.radiusCorrection = this.radius * correction;
    };
    PolygonToolService.prototype.isValidPolygon = function () {
        var isValidHeight = this.previewRectangleHeight >= 2 * this.userStrokeWidth;
        var isValidWidth = this.previewRectangleWidth >= 2 * this.userStrokeWidth;
        return isValidWidth && isValidHeight && (this.previewRectangleWidth > 0 || this.previewRectangleHeight > 0);
    };
    PolygonToolService.prototype.makeInvalidPolygon = function () {
        this.renderer.setAttribute(this.previewRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].width, '0');
        this.renderer.setAttribute(this.previewRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].height, '0');
    };
    PolygonToolService.prototype.calculateVertex = function (n) {
        var r = this.radius;
        var deltaX = this.currentMouseCoords.x - this.initialMouseCoords.x;
        var deltaY = this.currentMouseCoords.y - this.initialMouseCoords.y;
        var xValue;
        var yValue;
        var polygonOffsetAngles = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["POLYGON_OFFSET_ANGLES"].get(this.nbVertices);
        var cos = (r + this.radiusCorrection - this.strokeWidth / 2) *
            Math.cos((2 * Math.PI * n) / this.nbVertices - polygonOffsetAngles);
        if (deltaX > 0) {
            xValue = cos + this.initialMouseCoords.x + r;
        }
        else {
            xValue = cos + this.initialMouseCoords.x - r;
        }
        var sin = (r + this.radiusCorrection - this.strokeWidth / 2) *
            Math.sin((2 * Math.PI * n) / this.nbVertices - polygonOffsetAngles);
        var nbVerticesIsEven = this.nbVertices % 2 === 0;
        if (deltaY > 0) {
            yValue = sin + this.initialMouseCoords.y + (r + (nbVerticesIsEven ? 0 : this.radiusCorrection));
        }
        else {
            yValue = sin + this.initialMouseCoords.y - (r - (nbVerticesIsEven ? 0 : this.radiusCorrection));
        }
        return new src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__["Coords2D"](xValue, yValue);
    };
    PolygonToolService.prototype.copyPreviewRectangleAttributes = function (drawPolygon) {
        if (drawPolygon === void 0) { drawPolygon = this.drawPolygon; }
        var vertices = '';
        for (var n = 1; n <= this.nbVertices; n++) {
            var vertex = this.calculateVertex(n);
            vertices += vertex.x + ',' + vertex.y + ' ';
        }
        this.renderer.setAttribute(drawPolygon, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].points, vertices);
    };
    PolygonToolService.prototype.updatePreviewRectangle = function () {
        var deltaX = this.currentMouseCoords.x - this.initialMouseCoords.x;
        var deltaY = this.currentMouseCoords.y - this.initialMouseCoords.y;
        var minLength = Math.min(Math.abs(deltaX), Math.abs(deltaY));
        this.radius = minLength / 2;
        this.setRadiusCorrection();
        if (deltaX < 0) {
            this.renderer.setAttribute(this.previewRectangle, 'x', (this.initialMouseCoords.x - minLength).toString());
            this.renderer.setAttribute(this.previewRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].width, minLength.toString());
        }
        else {
            this.renderer.setAttribute(this.previewRectangle, 'x', this.initialMouseCoords.x.toString());
            this.renderer.setAttribute(this.previewRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].width, minLength.toString());
        }
        if (deltaY < 0) {
            this.renderer.setAttribute(this.previewRectangle, 'y', (this.initialMouseCoords.y - minLength).toString());
            this.renderer.setAttribute(this.previewRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].height, minLength.toString());
        }
        else {
            this.renderer.setAttribute(this.previewRectangle, 'y', this.initialMouseCoords.y.toString());
            this.renderer.setAttribute(this.previewRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].height, minLength.toString());
        }
        this.renderer.setAttribute(this.previewRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].fill, 'white');
        this.renderer.setAttribute(this.previewRectangle, 'fill-opacity', '0.3');
        this.renderer.setAttribute(this.previewRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke, 'black');
        this.renderer.setAttribute(this.previewRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke_dasharray, '5 5');
    };
    PolygonToolService.prototype.renderdrawPolygon = function (drawPolygon) {
        if (drawPolygon === void 0) { drawPolygon = this.drawPolygon; }
        if (this.isValidPolygon()) {
            this.userFillColor === 'none'
                ? this.renderer.setAttribute(drawPolygon, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].fill, this.userFillColor)
                : this.renderer.setAttribute(drawPolygon, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].fill, '#' + this.userFillColor);
            this.renderer.setAttribute(drawPolygon, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke, '#' + this.userStrokeColor);
            this.renderer.setAttribute(drawPolygon, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke_width, this.userStrokeWidth.toString());
            this.renderer.setAttribute(drawPolygon, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke_linejoin, 'round');
        }
        else {
            this.renderer.setAttribute(drawPolygon, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].fill, 'none');
            this.renderer.setAttribute(drawPolygon, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke, 'none');
            this.renderer.setAttribute(drawPolygon, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke_width, '0');
        }
    };
    PolygonToolService.prototype.createSVG = function () {
        var _this = this;
        var el = this.renderer.createElement('g', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        var drawPolygon = this.renderer.createElement('polygon', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        this.copyPreviewRectangleAttributes(drawPolygon);
        this.renderer.setAttribute(el, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].title, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["TOOL_NAME"].Polygon);
        this.renderer.setAttribute(el, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke_width, this.userStrokeWidth.toString());
        this.renderer.setAttribute(el, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke_linejoin, 'round');
        this.renderer.setAttribute(el, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke, '#' + this.userStrokeColor);
        this.userFillColor === 'none'
            ? this.renderer.setAttribute(el, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].fill, this.userFillColor)
            : this.renderer.setAttribute(el, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].fill, '#' + this.userFillColor);
        this.renderer.appendChild(el, drawPolygon);
        this.renderer.appendChild(this.elementRef.nativeElement, el);
        setTimeout(function () {
            _this.drawStack.push(el);
        }, 0);
    };
    PolygonToolService.prototype.updateDrawing = function () {
        this.updatePreviewRectangle();
        this.copyPreviewRectangleAttributes();
        this.renderdrawPolygon();
    };
    PolygonToolService.prototype.updateTraceType = function (traceType) {
        this.traceType = traceType;
        switch (traceType) {
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["TRACE_TYPE"].Outline: {
                this.userFillColor = 'none';
                this.userStrokeColor = this.strokeColor;
                this.userStrokeWidth = this.strokeWidth;
                break;
            }
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["TRACE_TYPE"].Full: {
                this.userFillColor = this.fillColor;
                this.userStrokeColor = 'none';
                this.userStrokeWidth = 0;
                break;
            }
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["TRACE_TYPE"].Both: {
                this.userFillColor = this.fillColor;
                this.userStrokeColor = this.strokeColor;
                this.userStrokeWidth = this.strokeWidth;
                break;
            }
        }
    };
    PolygonToolService.prototype.onMouseMove = function (event) {
        this.currentMouseCoords.x = event.clientX - this.elementRef.nativeElement.getBoundingClientRect().left;
        this.currentMouseCoords.y = event.clientY - this.elementRef.nativeElement.getBoundingClientRect().top;
        if (this.isPreviewing) {
            this.updateDrawing();
        }
    };
    PolygonToolService.prototype.onMouseDown = function (event) {
        var button = event.button;
        if (button === src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["MOUSE"].LeftButton && this.isMouseInRef(event, this.elementRef)) {
            this.initialMouseCoords.x = this.currentMouseCoords.x;
            this.initialMouseCoords.y = this.currentMouseCoords.y;
            this.isPreviewing = true;
            this.updateDrawing();
            this.renderer.appendChild(this.elementRef.nativeElement, this.drawPolygon);
        }
    };
    PolygonToolService.prototype.onMouseUp = function (event) {
        var button = event.button;
        if (button === src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["MOUSE"].LeftButton && this.isMouseInRef(event, this.elementRef) && this.isValidPolygon()) {
            this.createSVG();
        }
        this.cleanUp();
    };
    // tslint:disable-next-line: no-empty
    PolygonToolService.prototype.onMouseEnter = function (event) { };
    // tslint:disable-next-line: no-empty
    PolygonToolService.prototype.onMouseLeave = function (event) { };
    // tslint:disable-next-line: no-empty
    PolygonToolService.prototype.onKeyDown = function (event) { };
    // tslint:disable-next-line: no-empty
    PolygonToolService.prototype.onKeyUp = function (event) { };
    PolygonToolService.prototype.cleanUp = function () {
        this.isPreviewing = false;
        this.renderer.removeChild(this.elementRef, this.drawPolygon);
        this.makeInvalidPolygon();
    };
    PolygonToolService.ctorParameters = function () { return [
        { type: _color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_6__["ColorToolService"] }
    ]; };
    PolygonToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_6__["ColorToolService"]])
    ], PolygonToolService);
    return PolygonToolService;
}(_abstract_tools_abstract_shape_tool_abstract_shape_tool_service__WEBPACK_IMPORTED_MODULE_5__["AbstractShapeToolService"]));



/***/ }),

/***/ "./src/app/services/tools/quill-tool/quill-tool.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/tools/quill-tool/quill-tool.service.ts ***!
  \*****************************************************************/
/*! exports provided: QuillToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuillToolService", function() { return QuillToolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/classes/Coords2D */ "./src/classes/Coords2D.ts");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _abstract_tools_tracing_tool_tracing_tool_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../abstract-tools/tracing-tool/tracing-tool.service */ "./src/app/services/tools/abstract-tools/tracing-tool/tracing-tool.service.ts");
/* harmony import */ var _color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../color-tool/color-tool.service */ "./src/app/services/tools/color-tool/color-tool.service.ts");







var QuillToolService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](QuillToolService, _super);
    function QuillToolService(colorToolService) {
        var _this = _super.call(this) || this;
        _this.colorToolService = colorToolService;
        _this.previousCoords = new Array(2);
        _this.currentCoords = new Array(2);
        _this.previewEnabled = false;
        _this.offsets = [
            { x: 0, y: 0 },
            { x: 0, y: 0 },
        ];
        _this.thickness = 80;
        _this.angle = 80;
        _this.currentMousePosition = new src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__["Coords2D"](0, 0);
        _this.counter = 0;
        _this.colorToolService.primaryColor.subscribe(function (currentColor) {
            _this.currentColorAndOpacity = currentColor;
            _this.setColorAndOpacity();
        });
        return _this;
    }
    QuillToolService.prototype.initializeService = function (elementRef, renderer, drawStack) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.drawStack = drawStack;
    };
    QuillToolService.prototype.initializeAttributesManagerService = function (attributeManagerService) {
        var _this = this;
        this.attributesManagerService = attributeManagerService;
        this.attributesManagerService.thickness.subscribe(function (value) {
            _this.thickness = value;
            _this.computeOffset();
        });
        this.attributesManagerService.angle.subscribe(function (value) {
            _this.angle = value;
            _this.computeOffset();
        });
    };
    QuillToolService.prototype.onMouseEnter = function (event) {
        this.appendPreview();
    };
    QuillToolService.prototype.onMouseLeave = function (event) {
        this.removePreview();
    };
    QuillToolService.prototype.onMouseDown = function (event) {
        if (event.button !== src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["MOUSE"].LeftButton) {
            return;
        }
        this.isDrawing = true;
        this.gWrap = this.renderer.createElement('g', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        this.previousCoords[0] = new src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__["Coords2D"](this.getXPos(event.clientX) + this.offsets[0].x, this.getYPos(event.clientY) + this.offsets[0].y);
        this.previousCoords[1] = new src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__["Coords2D"](this.getXPos(event.clientX) + this.offsets[1].x, this.getYPos(event.clientY) + this.offsets[1].y);
        this.setColorAndOpacity();
        this.renderer.setAttribute(this.gWrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke_width, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["QUILL_STROKE_WIDTH"].initialValue);
        this.renderer.setAttribute(this.gWrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke, '#' + this.currentColor);
        this.renderer.setAttribute(this.gWrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].fill, '#' + this.currentColor);
        this.renderer.setAttribute(this.gWrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].opacity, this.currentOpacity);
        this.renderer.appendChild(this.elementRef.nativeElement, this.gWrap);
    };
    QuillToolService.prototype.appendPreview = function () {
        this.previewEnabled = true;
        this.preview = this.renderer.createElement('line', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        this.renderer.setAttribute(this.preview, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].title, 'element-to-remove');
        this.renderer.setAttribute(this.preview, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke_width, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["QUILL_STROKE_WIDTH"].preview);
        this.renderer.setAttribute(this.preview, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke, '#' + this.currentColor);
        this.renderer.appendChild(this.elementRef.nativeElement, this.preview);
    };
    QuillToolService.prototype.removePreview = function () {
        this.previewEnabled = false;
        this.renderer.removeChild(this.elementRef.nativeElement, this.preview);
    };
    QuillToolService.prototype.updatePreview = function () {
        this.renderer.setAttribute(this.preview, 'x1', "" + (this.currentMousePosition.x + this.offsets[0].x));
        this.renderer.setAttribute(this.preview, 'y1', "" + (this.currentMousePosition.y + this.offsets[0].y));
        this.renderer.setAttribute(this.preview, 'x2', "" + (this.currentMousePosition.x + this.offsets[1].x));
        this.renderer.setAttribute(this.preview, 'y2', "" + (this.currentMousePosition.y + this.offsets[1].y));
    };
    QuillToolService.prototype.onMouseMove = function (event) {
        if (!this.previewEnabled) {
            this.appendPreview();
        }
        this.currentMousePosition.x = this.getXPos(event.clientX);
        this.currentMousePosition.y = this.getYPos(event.clientY);
        this.updatePreview();
        if (!this.isDrawing || this.takeOneOnTwoPoints()) {
            return;
        }
        this.currentCoords[0] = new src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__["Coords2D"](this.currentMousePosition.x + this.offsets[0].x, this.currentMousePosition.y + this.offsets[0].y);
        this.currentCoords[1] = new src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__["Coords2D"](this.currentMousePosition.x + this.offsets[1].x, this.currentMousePosition.y + this.offsets[1].y);
        this.tracePolygon();
        this.previousCoords = this.currentCoords.slice(0);
    };
    QuillToolService.prototype.takeOneOnTwoPoints = function () {
        this.counter++;
        return (this.counter % 2 === 1);
    };
    QuillToolService.prototype.onWheel = function (event) {
        var val = this.isAlterRotation ? src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["ROTATION_ANGLE"].Alter : src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["ROTATION_ANGLE"].Base;
        val = (event.deltaY < 0 ? -val : val);
        this.angle = (this.angle + val) % 360;
        this.computeOffset();
        this.updatePreview();
    };
    QuillToolService.prototype.onKeyDown = function (event) {
        if (event.key === src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["KEYS"].Alt) {
            this.isAlterRotation = true;
        }
    };
    QuillToolService.prototype.onKeyUp = function (event) {
        if (event.key === src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["KEYS"].Alt) {
            this.isAlterRotation = false;
        }
    };
    QuillToolService.prototype.onMouseUp = function () {
        if (!this.isDrawing) {
            return;
        }
        this.isDrawing = false;
        this.saveState();
    };
    QuillToolService.prototype.tracePolygon = function () {
        var polygon = this.renderer.createElement('polygon', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        var points = this.previousCoords[0].x + "," + this.previousCoords[0].y + " " +
            (this.previousCoords[1].x + "," + this.previousCoords[1].y + " ") +
            (this.currentCoords[1].x + "," + this.currentCoords[1].y + " ") +
            (this.currentCoords[0].x + "," + this.currentCoords[0].y + " ");
        this.renderer.setAttribute(polygon, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].points, points);
        this.renderer.appendChild(this.gWrap, polygon);
    };
    QuillToolService.prototype.computeOffset = function () {
        this.offsets[0].x = (this.thickness / 2) * Math.sin(this.degreesToRadians(this.angle));
        this.offsets[0].y = (this.thickness / 2) * Math.cos(this.degreesToRadians(this.angle));
        this.offsets[1].x = this.offsets[0].x === 0 ? 0 : -this.offsets[0].x;
        this.offsets[1].y = this.offsets[0].y === 0 ? 0 : -this.offsets[0].y;
    };
    QuillToolService.prototype.degreesToRadians = function (degrees) {
        return degrees * (Math.PI / 180);
    };
    QuillToolService.prototype.saveState = function () {
        this.drawStack.push(this.gWrap);
    };
    QuillToolService.prototype.cleanUp = function () {
        this.removePreview();
        if (this.isDrawing) {
            this.renderer.removeChild(this.elementRef.nativeElement, this.gWrap);
        }
    };
    QuillToolService.ctorParameters = function () { return [
        { type: _color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_6__["ColorToolService"] }
    ]; };
    QuillToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_6__["ColorToolService"]])
    ], QuillToolService);
    return QuillToolService;
}(_abstract_tools_tracing_tool_tracing_tool_service__WEBPACK_IMPORTED_MODULE_5__["TracingToolService"]));



/***/ }),

/***/ "./src/app/services/tools/rectangle-tool/rectangle-tool.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/services/tools/rectangle-tool/rectangle-tool.service.ts ***!
  \*************************************************************************/
/*! exports provided: RectangleToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleToolService", function() { return RectangleToolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _abstract_tools_abstract_shape_tool_abstract_shape_tool_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abstract-tools/abstract-shape-tool/abstract-shape-tool.service */ "./src/app/services/tools/abstract-tools/abstract-shape-tool/abstract-shape-tool.service.ts");
/* harmony import */ var _color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../color-tool/color-tool.service */ "./src/app/services/tools/color-tool/color-tool.service.ts");






var RectangleToolService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RectangleToolService, _super);
    function RectangleToolService(colorToolService) {
        var _this = _super.call(this) || this;
        _this.colorToolService = colorToolService;
        _this.fillColor = '';
        _this.strokeColor = '';
        _this.strokeWidth = 0;
        _this.userFillColor = '';
        _this.userStrokeColor = '';
        _this.userStrokeWidth = 0;
        _this.traceType = '';
        _this.isSquarePreview = false;
        _this.colorToolService.primaryColor.subscribe(function (fillColor) {
            _this.fillColor = fillColor;
            _this.updateTraceType(_this.traceType);
        });
        _this.colorToolService.secondaryColor.subscribe(function (strokeColor) {
            _this.strokeColor = strokeColor;
            _this.updateTraceType(_this.traceType);
        });
        return _this;
    }
    RectangleToolService.prototype.initializeService = function (elementRef, renderer, drawStack) {
        _super.prototype.initializeService.call(this, elementRef, renderer, drawStack);
        this.drawRectangle = this.renderer.createElement('rect', src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SVG_NS"]);
    };
    RectangleToolService.prototype.initializeAttributesManagerService = function (attributesManagerService) {
        var _this = this;
        this.attributesManagerService = attributesManagerService;
        this.attributesManagerService.thickness.subscribe(function (thickness) {
            _this.strokeWidth = thickness;
            _this.updateTraceType(_this.traceType);
        });
        this.attributesManagerService.traceType.subscribe(function (traceType) {
            _this.updateTraceType(traceType);
        });
    };
    RectangleToolService.prototype.isValidRectangle = function () {
        var isValidPreviewHeight = this.previewRectangleHeight >= 2 * this.userStrokeWidth;
        var isValidPreviewWidth = this.previewRectangleWidth >= 2 * this.userStrokeWidth;
        return (isValidPreviewWidth && isValidPreviewHeight && (this.drawRectangleWidth > 0 || this.drawRectangleHeight > 0));
    };
    RectangleToolService.prototype.copyPreviewRectangleAttributes = function () {
        this.renderer.setAttribute(this.drawRectangle, 'x', (this.previewRectangleX + this.userStrokeWidth / 2).toString());
        this.renderer.setAttribute(this.drawRectangle, 'y', (this.previewRectangleY + this.userStrokeWidth / 2).toString());
        if (this.previewRectangleWidth - this.userStrokeWidth < 0) {
            this.renderer.setAttribute(this.drawRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].width, (-(this.previewRectangleWidth - this.userStrokeWidth)).toString());
        }
        else {
            this.renderer.setAttribute(this.drawRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].width, (this.previewRectangleWidth - this.userStrokeWidth).toString());
        }
        if (this.previewRectangleHeight - this.userStrokeWidth < 0) {
            this.renderer.setAttribute(this.drawRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].height, (-(this.previewRectangleHeight - this.userStrokeWidth)).toString());
        }
        else {
            this.renderer.setAttribute(this.drawRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].height, (this.previewRectangleHeight - this.userStrokeWidth).toString());
        }
    };
    RectangleToolService.prototype.renderDrawRectangle = function () {
        if (this.isValidRectangle()) {
            this.userFillColor === 'none'
                ? this.renderer.setAttribute(this.drawRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].fill, this.userFillColor)
                : this.renderer.setAttribute(this.drawRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].fill, '#' + this.userFillColor);
            this.renderer.setAttribute(this.drawRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].stroke, '#' + this.userStrokeColor);
            this.renderer.setAttribute(this.drawRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].stroke_width, this.userStrokeWidth.toString());
        }
        else {
            this.renderer.setAttribute(this.drawRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].fill, 'none');
            this.renderer.setAttribute(this.drawRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].stroke, 'none');
            this.renderer.setAttribute(this.drawRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].stroke_width, '0');
        }
    };
    RectangleToolService.prototype.cleanUp = function () {
        this.isPreviewing = false;
        this.renderer.removeChild(this.elementRef.nativeElement, this.previewRectangle);
        this.renderer.removeChild(this.elementRef, this.drawRectangle);
        this.makeDrawRectangleInvalid();
    };
    RectangleToolService.prototype.makeDrawRectangleInvalid = function () {
        this.renderer.setAttribute(this.drawRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].width, '0');
        this.renderer.setAttribute(this.drawRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].height, '0');
    };
    RectangleToolService.prototype.createSVG = function () {
        var _this = this;
        var el = this.renderer.createElement('g', src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SVG_NS"]);
        var drawRectangle = this.renderer.createElement('rect', src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SVG_NS"]);
        this.renderer.setAttribute(drawRectangle, 'x', this.drawRectangleX.toString());
        this.renderer.setAttribute(drawRectangle, 'y', this.drawRectangleY.toString());
        this.renderer.setAttribute(drawRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].width, this.drawRectangleWidth.toString());
        this.renderer.setAttribute(drawRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].height, this.drawRectangleHeight.toString());
        this.userFillColor === 'none'
            ? this.renderer.setAttribute(el, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].fill, this.userFillColor)
            : this.renderer.setAttribute(el, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].fill, '#' + this.userFillColor);
        this.renderer.setAttribute(el, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].stroke_width, this.userStrokeWidth.toString());
        this.renderer.setAttribute(el, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].stroke, '#' + this.userStrokeColor);
        this.renderer.setAttribute(el, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].title, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TOOL_NAME"].Rectangle);
        this.renderer.appendChild(el, drawRectangle);
        this.renderer.appendChild(this.elementRef.nativeElement, el);
        setTimeout(function () {
            _this.drawStack.push(el);
        }, 0);
    };
    RectangleToolService.prototype.updateDrawing = function () {
        this.updatePreviewRectangle();
        if (this.isSquarePreview) {
            this.updatePreviewSquare();
        }
        else {
            this.copyPreviewRectangleAttributes();
        }
        this.renderDrawRectangle();
    };
    RectangleToolService.prototype.updatePreviewSquare = function () {
        var deltaX = this.currentMouseCoords.x - this.initialMouseCoords.x;
        var deltaY = this.currentMouseCoords.y - this.initialMouseCoords.y;
        var minLength = Math.min(Math.abs(deltaX), Math.abs(deltaY));
        if (deltaX < 0) {
            this.renderer.setAttribute(this.drawRectangle, 'x', (this.initialMouseCoords.x - minLength + this.userStrokeWidth / 2).toString());
        }
        else {
            this.renderer.setAttribute(this.drawRectangle, 'x', (this.initialMouseCoords.x + this.userStrokeWidth / 2).toString());
        }
        if (deltaY < 0) {
            this.renderer.setAttribute(this.drawRectangle, 'y', (this.initialMouseCoords.y - minLength + this.userStrokeWidth / 2).toString());
        }
        else {
            this.renderer.setAttribute(this.drawRectangle, 'y', (this.initialMouseCoords.y + this.userStrokeWidth / 2).toString());
        }
        this.renderer.setAttribute(this.drawRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].height, Math.abs(minLength - this.userStrokeWidth).toString());
        this.renderer.setAttribute(this.drawRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["HTML_ATTRIBUTE"].width, Math.abs(minLength - this.userStrokeWidth).toString());
    };
    RectangleToolService.prototype.updateTraceType = function (traceType) {
        this.traceType = traceType;
        switch (traceType) {
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TRACE_TYPE"].Outline: {
                this.userFillColor = 'none';
                this.userStrokeColor = this.strokeColor;
                this.userStrokeWidth = this.strokeWidth;
                break;
            }
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TRACE_TYPE"].Full: {
                this.userFillColor = this.fillColor;
                this.userStrokeColor = 'none';
                this.userStrokeWidth = 0;
                break;
            }
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["TRACE_TYPE"].Both: {
                this.userFillColor = this.fillColor;
                this.userStrokeColor = this.strokeColor;
                this.userStrokeWidth = this.strokeWidth;
                break;
            }
        }
    };
    Object.defineProperty(RectangleToolService.prototype, "drawRectangleX", {
        get: function () {
            return this.drawRectangle.x.baseVal.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleToolService.prototype, "drawRectangleY", {
        get: function () {
            return this.drawRectangle.y.baseVal.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleToolService.prototype, "drawRectangleWidth", {
        get: function () {
            return this.drawRectangle.width.baseVal.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleToolService.prototype, "drawRectangleHeight", {
        get: function () {
            return this.drawRectangle.height.baseVal.value;
        },
        enumerable: true,
        configurable: true
    });
    RectangleToolService.prototype.onMouseMove = function (event) {
        this.currentMouseCoords.x = event.clientX - this.elementRef.nativeElement.getBoundingClientRect().left;
        this.currentMouseCoords.y = event.clientY - this.elementRef.nativeElement.getBoundingClientRect().top;
        if (this.isPreviewing) {
            this.updateDrawing();
        }
    };
    RectangleToolService.prototype.onMouseDown = function (event) {
        var button = event.button;
        if (button === src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["MOUSE"].LeftButton && this.isMouseInRef(event, this.elementRef)) {
            this.initialMouseCoords.x = this.currentMouseCoords.x;
            this.initialMouseCoords.y = this.currentMouseCoords.y;
            this.isPreviewing = true;
            this.updateDrawing();
            this.renderer.appendChild(this.elementRef.nativeElement, this.previewRectangle);
            this.renderer.appendChild(this.elementRef.nativeElement, this.drawRectangle);
        }
    };
    RectangleToolService.prototype.onMouseUp = function (event) {
        var button = event.button;
        if (button === src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["MOUSE"].LeftButton && this.isMouseInRef(event, this.elementRef) && this.isValidRectangle()) {
            this.createSVG();
        }
        this.cleanUp();
    };
    // tslint:disable-next-line: no-empty
    RectangleToolService.prototype.onMouseEnter = function (event) { };
    // tslint:disable-next-line: no-empty
    RectangleToolService.prototype.onMouseLeave = function (event) { };
    RectangleToolService.prototype.onKeyDown = function (event) {
        var key = event.key;
        if (key === src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["KEYS"].Shift) {
            if (!this.isSquarePreview) {
                this.isSquarePreview = true;
                this.updateDrawing();
            }
        }
    };
    RectangleToolService.prototype.onKeyUp = function (event) {
        var key = event.key;
        if (key === src_constants_constants__WEBPACK_IMPORTED_MODULE_2__["KEYS"].Shift) {
            if (this.isSquarePreview) {
                this.isSquarePreview = false;
                this.updateDrawing();
            }
        }
    };
    RectangleToolService.ctorParameters = function () { return [
        { type: _color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_5__["ColorToolService"] }
    ]; };
    RectangleToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_5__["ColorToolService"]])
    ], RectangleToolService);
    return RectangleToolService;
}(_abstract_tools_abstract_shape_tool_abstract_shape_tool_service__WEBPACK_IMPORTED_MODULE_4__["AbstractShapeToolService"]));



/***/ }),

/***/ "./src/app/services/tools/selection-tool/selection-tool.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/services/tools/selection-tool/selection-tool.service.ts ***!
  \*************************************************************************/
/*! exports provided: SelectionToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionToolService", function() { return SelectionToolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/classes/Coords2D */ "./src/classes/Coords2D.ts");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _classes_selection_selection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../classes/selection/selection */ "./src/classes/selection/selection.ts");
/* harmony import */ var _clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../clipboard/clipboard.service */ "./src/app/services/clipboard/clipboard.service.ts");
/* harmony import */ var _manipulator_manipulator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../manipulator/manipulator.service */ "./src/app/services/manipulator/manipulator.service.ts");
/* harmony import */ var _undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../undo-redoer/undo-redoer.service */ "./src/app/services/undo-redoer/undo-redoer.service.ts");
/* harmony import */ var _abstract_tools_abstract_tool_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../abstract-tools/abstract-tool.service */ "./src/app/services/tools/abstract-tools/abstract-tool.service.ts");
/* harmony import */ var _magnetism_tool_magnetism_tool_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../magnetism-tool/magnetism-tool.service */ "./src/app/services/tools/magnetism-tool/magnetism-tool.service.ts");











var SelectionToolService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SelectionToolService, _super);
    function SelectionToolService(clipBoard, manipulator, undoRedoerService, magnetismService) {
        var _this = _super.call(this) || this;
        _this.clipBoard = clipBoard;
        _this.manipulator = manipulator;
        _this.undoRedoerService = undoRedoerService;
        _this.magnetismService = magnetismService;
        _this.currentMouseCoords = new src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__["Coords2D"](0, 0);
        _this.lastMouseCoords = new src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__["Coords2D"](0, 0);
        _this.initialMouseCoords = new src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__["Coords2D"](0, 0);
        _this.currentTarget = 0;
        _this.isSelecting = false;
        _this.isOnTarget = false;
        _this.isLeftMouseDown = false;
        _this.isRightMouseDown = false;
        _this.isLeftMouseDragging = false;
        _this.isTranslatingSelection = false;
        _this.isScalingSelection = false;
        _this.isRightMouseDragging = false;
        return _this;
    }
    SelectionToolService.prototype.selectAll = function () {
        var e_1, _a;
        this.clipBoard.restartDuplication();
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.drawStack.drawStack), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                this.selection.addToSelection(el);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.manipulator.updateOrigins(this.selection);
    };
    SelectionToolService.prototype.cleanUp = function () {
        this.selection.cleanUp();
        if (this.isSelecting) {
            this.renderer.removeChild(this.elementRef.nativeElement, this.selectionRectangle);
        }
        this.isLeftMouseDown = false;
        this.isRightMouseDown = false;
        this.isSelecting = false;
        this.isLeftMouseDragging = false;
        this.isRightMouseDragging = false;
        this.isTranslatingSelection = false;
        this.isScalingSelection = false;
        this.magnetismService.totalDeltaY = 0;
        this.magnetismService.totalDeltaX = 0;
    };
    SelectionToolService.prototype.initializeService = function (elementRef, renderer, drawStack) {
        var _this = this;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.drawStack = drawStack;
        this.manipulator.initializeService(this.renderer);
        this.selectionRectangle = this.renderer.createElement('rect', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        this.selection = new _classes_selection_selection__WEBPACK_IMPORTED_MODULE_5__["Selection"](this.renderer, this.elementRef);
        this.magnetismService.initializeService(this.selection);
        this.drawStack.currentStackTarget.subscribe(function (stackTarget) {
            if (stackTarget.targetPosition !== undefined) {
                _this.currentTarget = stackTarget.targetPosition;
                _this.isOnTarget = true;
            }
        });
        this.clipBoard.initializeService(this.elementRef, this.renderer, this.drawStack, this.selection);
    };
    SelectionToolService.prototype.updateSelectionRectangle = function () {
        var deltaX = this.currentMouseCoords.x - this.initialMouseCoords.x;
        var deltaY = this.currentMouseCoords.y - this.initialMouseCoords.y;
        // adjust x
        if (deltaX < 0) {
            deltaX *= -1;
            this.renderer.setAttribute(this.selectionRectangle, 'x', (this.initialMouseCoords.x - deltaX).toString());
        }
        else {
            this.renderer.setAttribute(this.selectionRectangle, 'x', this.initialMouseCoords.x.toString());
        }
        this.renderer.setAttribute(this.selectionRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].width, deltaX.toString());
        // adjust y
        if (deltaY < 0) {
            deltaY *= -1;
            this.renderer.setAttribute(this.selectionRectangle, 'y', (this.initialMouseCoords.y - deltaY).toString());
        }
        else {
            this.renderer.setAttribute(this.selectionRectangle, 'y', this.initialMouseCoords.y.toString());
        }
        this.renderer.setAttribute(this.selectionRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].height, deltaY.toString());
        this.renderer.setAttribute(this.selectionRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].fill, 'white');
        this.renderer.setAttribute(this.selectionRectangle, 'fill-opacity', '0.3');
        this.renderer.setAttribute(this.selectionRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke, 'black');
        this.renderer.setAttribute(this.selectionRectangle, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke_dasharray, '5 5');
    };
    SelectionToolService.prototype.getDOMRect = function (el) {
        return el.getBoundingClientRect();
    };
    SelectionToolService.prototype.getStrokeWidth = function (el) {
        if (el.getAttribute(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke_width)) {
            return parseInt(el.getAttribute(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke_width), src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_RADIX"]);
        }
        return 0;
    };
    SelectionToolService.prototype.isInSelection = function (selectionBox, elementBox, strokeWidth) {
        var boxLeft = selectionBox.x + window.scrollX - src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_WIDTH"];
        var boxRight = selectionBox.x + window.scrollX - src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_WIDTH"] + selectionBox.width;
        var boxTop = selectionBox.y + window.scrollY;
        var boxBottom = selectionBox.y + window.scrollY + selectionBox.height;
        var elLeft = elementBox.x + window.scrollX - src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_WIDTH"];
        var elRight = elementBox.x + window.scrollX - src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_WIDTH"] + elementBox.width;
        var elTop = elementBox.y + window.scrollY;
        var elBottom = elementBox.y + window.scrollY + elementBox.height;
        if (strokeWidth) {
            var halfStrokeWidth = strokeWidth / 2;
            elLeft = elLeft - halfStrokeWidth;
            elRight = elRight + halfStrokeWidth;
            elTop = elTop - halfStrokeWidth;
            elBottom = elBottom + halfStrokeWidth;
        }
        // Check all cases where el and box don't touch each other
        if (elRight < boxLeft || boxRight < elLeft || elBottom < boxTop || boxBottom < elTop) {
            return false;
        }
        return true;
    };
    SelectionToolService.prototype.isAbleToRotate = function () {
        return !this.isTranslatingSelection && !this.isSelecting && !this.isScalingSelection && this.selection.isAppended;
    };
    SelectionToolService.prototype.singlySelect = function (stackPosition) {
        this.selection.emptySelection();
        this.selection.addToSelection(this.drawStack.drawStack[stackPosition]);
        this.isOnTarget = false;
    };
    SelectionToolService.prototype.singlySelectInvert = function (stackPosition) {
        this.selection.invertAddToSelection(this.drawStack.drawStack[stackPosition]);
        this.isOnTarget = false;
    };
    SelectionToolService.prototype.startSelection = function () {
        this.isSelecting = true;
        this.updateSelectionRectangle();
        this.renderer.appendChild(this.elementRef.nativeElement, this.selectionRectangle);
    };
    SelectionToolService.prototype.checkSelection = function () {
        var e_2, _a;
        var selectionBox = this.getDOMRect(this.selectionRectangle);
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.drawStack.drawStack), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                var elBox = this.getDOMRect(el);
                this.selection.handleSelection(el, this.isInSelection(selectionBox, elBox, this.getStrokeWidth(el)));
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    SelectionToolService.prototype.checkSelectionInverse = function () {
        var e_3, _a;
        var selectionBox = this.getDOMRect(this.selectionRectangle);
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.drawStack.drawStack), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                var elBox = this.getDOMRect(el);
                this.selection.handleInvertSelection(el, this.isInSelection(selectionBox, elBox, this.getStrokeWidth(el)));
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    SelectionToolService.prototype.isAbleToScale = function () {
        return this.selection.mouseIsInControlPoint(this.currentMouseCoords) && !this.isSelecting && !this.isTranslatingSelection;
    };
    SelectionToolService.prototype.isAbleToTranslate = function () {
        return this.selection.mouseIsInSelectionBox(this.currentMouseCoords) && !this.isSelecting && !this.isScalingSelection;
    };
    SelectionToolService.prototype.handleLeftMouseDrag = function () {
        this.isLeftMouseDragging = true;
        if (this.isOnTarget && !this.selection.selectedElements.has(this.drawStack.drawStack[this.currentTarget])) {
            this.singlySelect(this.currentTarget);
        }
        else if (this.isScalingSelection || this.isAbleToScale()) {
            this.isScalingSelection = true;
            this.manipulator.scaleSelection(this.currentMouseCoords, this.selection.activeControlPoint, this.selection);
        }
        else if (this.isTranslatingSelection || this.isAbleToTranslate()) {
            this.isTranslatingSelection = true;
            var deltaX = this.currentMouseCoords.x - this.lastMouseCoords.x;
            var deltaY = this.currentMouseCoords.y - this.lastMouseCoords.y;
            if (this.magnetismService.isMagnetic.value) {
                var magnetizedCoords = this.magnetismService.magnetizeXY(deltaX, deltaY);
                this.manipulator.translateSelection(magnetizedCoords.x, magnetizedCoords.y, this.selection);
            }
            else {
                this.manipulator.translateSelection(deltaX, deltaY, this.selection);
            }
        }
        else {
            this.startSelection();
            this.updateSelectionRectangle();
            this.checkSelection();
        }
    };
    SelectionToolService.prototype.handleRightMouseDrag = function () {
        this.isRightMouseDragging = true;
        this.startSelection();
        this.updateSelectionRectangle();
        this.checkSelectionInverse();
    };
    SelectionToolService.prototype.onMouseMove = function (event) {
        this.lastMouseCoords.x = this.currentMouseCoords.x;
        this.lastMouseCoords.y = this.currentMouseCoords.y;
        this.currentMouseCoords.x = event.clientX - this.elementRef.nativeElement.getBoundingClientRect().left;
        this.currentMouseCoords.y = event.clientY - this.elementRef.nativeElement.getBoundingClientRect().top;
        if (this.isLeftMouseDown && !this.isRightMouseDown) {
            this.handleLeftMouseDrag();
        }
        else if (this.isRightMouseDown && !this.isLeftMouseDown) {
            this.handleRightMouseDrag();
        }
    };
    SelectionToolService.prototype.handleLeftMouseDown = function () {
        this.isLeftMouseDown = true;
        this.initialMouseCoords.x = this.currentMouseCoords.x;
        this.initialMouseCoords.y = this.currentMouseCoords.y;
        if (this.selection.mouseIsInControlPoint(this.currentMouseCoords)) {
            this.saveOriginalSelectionBoxState();
            this.manipulator.initTransformMatrix(this.selection);
        }
    };
    SelectionToolService.prototype.saveOriginalSelectionBoxState = function () {
        this.selection.ogSelectionBoxHeight = this.getDOMRect(this.selection.selectionBox).height;
        this.selection.ogSelectionBoxWidth = this.getDOMRect(this.selection.selectionBox).width;
        this.selection.ogSelectionBoxPositions = new src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__["Coords2D"](this.getDOMRect(this.selection.selectionBox).left - src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_WIDTH"] + window.scrollX, this.getDOMRect(this.selection.selectionBox).top + window.scrollY);
        this.selection.ogActiveControlPointCoords = new src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__["Coords2D"](this.selection.getControlPointCx(this.selection.activeControlPoint) + window.scrollX, this.selection.getControlPointCy(this.selection.activeControlPoint) + window.scrollY);
    };
    SelectionToolService.prototype.handleRightMouseDown = function () {
        this.isRightMouseDown = true;
        this.initialMouseCoords.x = this.currentMouseCoords.x;
        this.initialMouseCoords.y = this.currentMouseCoords.y;
        this.selection.invertSelectionBuffer.clear();
    };
    SelectionToolService.prototype.onMouseDown = function (event) {
        var button = event.button;
        switch (button) {
            case src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["MOUSE"].LeftButton:
                this.handleLeftMouseDown();
                break;
            case src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["MOUSE"].RightButton:
                this.handleRightMouseDown();
                break;
            default:
                break;
        }
    };
    SelectionToolService.prototype.handleLeftMouseUp = function () {
        this.renderer.removeChild(this.elementRef.nativeElement, this.selectionRectangle);
        if (this.isSelecting) {
            this.isSelecting = false;
        }
        else if (this.isOnTarget && (!this.isTranslatingSelection && !this.isScalingSelection)) {
            this.singlySelect(this.currentTarget);
        }
        else if (this.isTranslatingSelection) {
            this.isTranslatingSelection = false;
            this.saveState();
        }
        else if (this.isScalingSelection) {
            this.isScalingSelection = false;
            this.saveState();
        }
        else {
            this.selection.emptySelection();
        }
        this.isLeftMouseDown = false;
        this.isLeftMouseDragging = false;
        this.isOnTarget = false;
    };
    SelectionToolService.prototype.handleRightMouseUp = function () {
        this.renderer.removeChild(this.elementRef.nativeElement, this.selectionRectangle);
        if (this.isSelecting) {
            this.isSelecting = false;
        }
        else if (this.isOnTarget) {
            this.singlySelectInvert(this.currentTarget);
        }
        this.isRightMouseDown = false;
        this.isRightMouseDragging = false;
        this.isOnTarget = false;
    };
    SelectionToolService.prototype.onMouseUp = function (event) {
        if (!this.isMouseInRef(event, this.elementRef)) {
            return;
        }
        this.clipBoard.restartDuplication();
        var button = event.button;
        switch (button) {
            case src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["MOUSE"].LeftButton:
                this.handleLeftMouseUp();
                break;
            case src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["MOUSE"].RightButton:
                this.handleRightMouseUp();
                break;
            default:
                break;
        }
        this.manipulator.updateOrigins(this.selection);
    };
    SelectionToolService.prototype.saveState = function () {
        this.undoRedoerService.saveCurrentState(this.drawStack.idStack);
    };
    // tslint:disable-next-line: no-empty
    SelectionToolService.prototype.onMouseEnter = function (event) { };
    // tslint:disable-next-line: no-empty
    SelectionToolService.prototype.onMouseLeave = function (event) { };
    SelectionToolService.prototype.onKeyDown = function (event) {
        var key = event.key;
        if (key === src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["KEYS"].Shift) {
            event.preventDefault();
            this.manipulator.isShiftDown = true;
            this.manipulator.isRotateOnSelf = true;
            if (this.isScalingSelection) {
                this.manipulator.scaleSelection(this.currentMouseCoords, this.selection.activeControlPoint, this.selection);
            }
        }
        else if (key === src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["KEYS"].Alt) {
            event.preventDefault();
            this.manipulator.isAltDown = true;
            this.manipulator.rotationStep = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["ROTATION_ANGLE"].Alter;
            if (this.isScalingSelection) {
                this.manipulator.scaleSelection(this.currentMouseCoords, this.selection.activeControlPoint, this.selection);
            }
        }
    };
    SelectionToolService.prototype.onKeyUp = function (event) {
        var key = event.key;
        if (key === src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["KEYS"].Shift) {
            event.preventDefault();
            this.manipulator.isRotateOnSelf = false;
            this.manipulator.isShiftDown = false;
            if (this.isScalingSelection) {
                this.manipulator.scaleSelection(this.currentMouseCoords, this.selection.activeControlPoint, this.selection);
            }
        }
        else if (key === src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["KEYS"].Alt) {
            event.preventDefault();
            this.manipulator.rotationStep = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["ROTATION_ANGLE"].Base;
            this.manipulator.isAltDown = false;
            if (this.isScalingSelection) {
                this.manipulator.scaleSelection(this.currentMouseCoords, this.selection.activeControlPoint, this.selection);
            }
        }
    };
    SelectionToolService.prototype.onWheel = function (event) {
        if (this.isAbleToRotate()) {
            event.preventDefault();
            this.manipulator.rotateSelection(event, this.selection);
            this.clipBoard.restartDuplication();
            this.saveState();
        }
    };
    SelectionToolService.ctorParameters = function () { return [
        { type: _clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_6__["ClipboardService"] },
        { type: _manipulator_manipulator_service__WEBPACK_IMPORTED_MODULE_7__["ManipulatorService"] },
        { type: _undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_8__["UndoRedoerService"] },
        { type: _magnetism_tool_magnetism_tool_service__WEBPACK_IMPORTED_MODULE_10__["MagnetismToolService"] }
    ]; };
    SelectionToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_clipboard_clipboard_service__WEBPACK_IMPORTED_MODULE_6__["ClipboardService"],
            _manipulator_manipulator_service__WEBPACK_IMPORTED_MODULE_7__["ManipulatorService"],
            _undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_8__["UndoRedoerService"],
            _magnetism_tool_magnetism_tool_service__WEBPACK_IMPORTED_MODULE_10__["MagnetismToolService"]])
    ], SelectionToolService);
    return SelectionToolService;
}(_abstract_tools_abstract_tool_service__WEBPACK_IMPORTED_MODULE_9__["AbstractToolService"]));



/***/ }),

/***/ "./src/app/services/tools/spray-can-tool/spray-can-tool.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/services/tools/spray-can-tool/spray-can-tool.service.ts ***!
  \*************************************************************************/
/*! exports provided: SprayCanToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SprayCanToolService", function() { return SprayCanToolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/classes/Coords2D */ "./src/classes/Coords2D.ts");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _abstract_tools_tracing_tool_tracing_tool_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../abstract-tools/tracing-tool/tracing-tool.service */ "./src/app/services/tools/abstract-tools/tracing-tool/tracing-tool.service.ts");
/* harmony import */ var _color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../color-tool/color-tool.service */ "./src/app/services/tools/color-tool/color-tool.service.ts");







var SprayCanToolService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SprayCanToolService, _super);
    function SprayCanToolService(colorToolService) {
        var _this = _super.call(this) || this;
        _this.colorToolService = colorToolService;
        _this.radius = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["SPRAY_DIAMETER"].Default;
        _this.intervalTime = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["SPRAY_INTERVAL"].Default;
        _this.currentMouseCoords = new src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__["Coords2D"](0, 0);
        _this.isSprayerAppended = false;
        _this.colorToolService.primaryColor.subscribe(function (currentColor) {
            _this.currentColorAndOpacity = currentColor;
            if (_this.sprayer !== undefined) {
                _this.renderer.setAttribute(_this.sprayer, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke, '#' + _this.currentColorAndOpacity);
            }
        });
        return _this;
    }
    SprayCanToolService.prototype.initializeService = function (elementRef, renderer, drawStack) {
        _super.prototype.initializeService.call(this, elementRef, renderer, drawStack);
        this.sprayer = this.renderer.createElement('circle', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        this.renderer.setAttribute(this.sprayer, 'r', this.radius.toString());
        this.renderer.setAttribute(this.sprayer, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke, '#' + this.currentColorAndOpacity);
        this.renderer.setAttribute(this.sprayer, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke_width, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["SPRAYER_STROKE_WIDTH"]);
        this.renderer.setAttribute(this.sprayer, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].fill, 'none');
    };
    SprayCanToolService.prototype.initializeAttributesManagerService = function (attributesManagerService) {
        var _this = this;
        _super.prototype.initializeAttributesManagerService.call(this, attributesManagerService);
        this.attributesManagerService.sprayDiameter.subscribe(function (sprayDiameter) {
            _this.radius = sprayDiameter / 2;
            _this.renderer.setAttribute(_this.sprayer, 'r', _this.radius.toString());
        });
        this.attributesManagerService.sprayInterval.subscribe(function (intervalTime) {
            _this.intervalTime = intervalTime;
        });
    };
    SprayCanToolService.prototype.onMouseDown = function (event) {
        var _this = this;
        if (event.button === src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["MOUSE"].LeftButton) {
            this.setColorAndOpacity();
            this.event = event;
            this.isDrawing = true;
            this.createSVGWrapper();
            this.createSVGPath();
            this.spray();
            this.appendSprayer();
            clearInterval(this.interval);
            this.interval = setInterval(function () {
                _this.spray();
                _this.appendSprayer();
            }, this.intervalTime);
        }
    };
    SprayCanToolService.prototype.spray = function () {
        for (var i = 0; i < src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["CIRCLES_TO_APPEND"]; ++i) {
            var angle = Math.random() * (2 * Math.PI);
            var radius = Math.random() * this.radius;
            var x = Math.floor(this.getXPos(this.event.clientX) + radius * Math.cos(angle) - this.currentWidth / 2);
            var y = Math.floor(this.getYPos(this.event.clientY) + radius * Math.sin(angle));
            var upperArc = "a1 1 0 0 1 " + this.currentWidth + " 0";
            var lowerArc = "a1 1 0 0 1 -" + this.currentWidth + " 0";
            this.currentPath += "M" + x + " " + y + upperArc + lowerArc;
        }
        this.updateSVGPath();
    };
    SprayCanToolService.prototype.onMouseUp = function (event) {
        var _this = this;
        if (event.button === src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["MOUSE"].LeftButton && this.isDrawing) {
            this.isDrawing = false;
            this.currentPath = '';
            clearInterval(this.interval);
            setTimeout(function () {
                _this.drawStack.push(_this.svgWrap);
            }, 0);
            this.renderer.removeChild(this.elementRef, this.sprayer);
            setTimeout(function () {
                _this.appendSprayer();
            }, 0);
        }
    };
    SprayCanToolService.prototype.onMouseMove = function (event) {
        this.event = event;
        this.setSprayerToMouse(event);
    };
    SprayCanToolService.prototype.setSprayerToMouse = function (event) {
        this.currentMouseCoords.x = this.getXPos(event.clientX);
        this.currentMouseCoords.y = this.getYPos(event.clientY);
        this.renderer.setAttribute(this.sprayer, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].cx, this.currentMouseCoords.x.toString());
        this.renderer.setAttribute(this.sprayer, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].cy, this.currentMouseCoords.y.toString());
        if (!this.isSprayerAppended) {
            this.appendSprayer();
        }
    };
    SprayCanToolService.prototype.appendSprayer = function () {
        this.renderer.appendChild(this.elementRef.nativeElement, this.sprayer);
        this.isSprayerAppended = true;
    };
    SprayCanToolService.prototype.cleanUp = function () {
        _super.prototype.cleanUp.call(this);
        this.renderer.removeChild(this.elementRef, this.sprayer);
        this.isSprayerAppended = false;
    };
    SprayCanToolService.prototype.onMouseLeave = function (event) {
        _super.prototype.onMouseLeave.call(this, event);
        this.renderer.removeChild(this.elementRef, this.sprayer);
        this.isSprayerAppended = false;
    };
    SprayCanToolService.prototype.createSVGWrapper = function () {
        var wrap = this.renderer.createElement('g', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        this.renderer.setAttribute(wrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke, '#' + this.currentColor);
        this.renderer.setAttribute(wrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].opacity, this.currentOpacity);
        this.renderer.setAttribute(wrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].fill, '#' + this.currentColor);
        this.renderer.setAttribute(wrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].title, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["TOOL_NAME"].SprayCan);
        this.svgWrap = wrap;
        this.renderer.appendChild(this.elementRef.nativeElement, wrap);
    };
    SprayCanToolService.prototype.createSVGPath = function () {
        this.svgPath = this.renderer.createElement('path', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        this.renderer.setAttribute(this.svgPath, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].fill, '#' + this.currentColor);
        this.renderer.setAttribute(this.svgPath, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke_width, this.currentWidth.toString());
        this.renderer.appendChild(this.svgWrap, this.svgPath);
    };
    SprayCanToolService.prototype.updateSVGPath = function () {
        if (this.currentPath.length > src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["MAX_CHARS_IN_PATH"]) {
            this.currentPath = '';
            this.createSVGPath();
        }
        else {
            _super.prototype.updateSVGPath.call(this);
        }
    };
    SprayCanToolService.ctorParameters = function () { return [
        { type: _color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_6__["ColorToolService"] }
    ]; };
    SprayCanToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_6__["ColorToolService"]])
    ], SprayCanToolService);
    return SprayCanToolService;
}(_abstract_tools_tracing_tool_tracing_tool_service__WEBPACK_IMPORTED_MODULE_5__["TracingToolService"]));



/***/ }),

/***/ "./src/app/services/tools/stamp-tool/stamp-tool.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/tools/stamp-tool/stamp-tool.service.ts ***!
  \*****************************************************************/
/*! exports provided: StampToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StampToolService", function() { return StampToolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/classes/Coords2D */ "./src/classes/Coords2D.ts");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _abstract_tools_abstract_tool_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../abstract-tools/abstract-tool.service */ "./src/app/services/tools/abstract-tools/abstract-tool.service.ts");






var StampToolService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StampToolService, _super);
    function StampToolService() {
        var _this = _super.call(this) || this;
        _this.currentMouseCoords = new src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__["Coords2D"](0, 0);
        _this.stampCoords = new src_classes_Coords2D__WEBPACK_IMPORTED_MODULE_2__["Coords2D"](0, 0);
        _this.angle = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["ROTATION_ANGLE"].Default;
        _this.scaling = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["STAMP_SCALING"].Default;
        _this.stampLink = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["NO_STAMP"];
        _this.transform = '';
        _this.stampIsAppended = false;
        _this.isAlterRotation = false;
        _this.isStampLinkValid = false;
        return _this;
    }
    StampToolService.prototype.initializeService = function (elementRef, renderer, drawStack) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.drawStack = drawStack;
        this.stamp = this.renderer.createElement('image', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        this.stampWrapper = this.renderer.createElement('g', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        this.renderer.appendChild(this.stampWrapper, this.stamp);
    };
    StampToolService.prototype.initializeAttributesManagerService = function (attributesManagerService) {
        var _this = this;
        this.attributesManagerService = attributesManagerService;
        this.attributesManagerService.scaling.subscribe(function (newScaling) {
            _this.scaling = newScaling;
            _this.setStamp();
        });
        this.attributesManagerService.angle.subscribe(function (newAngle) {
            _this.angle = newAngle;
            _this.applyTransformation();
        });
        this.attributesManagerService.stampType.subscribe(function (newStamp) {
            if (newStamp === src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["NO_STAMP"]) {
                _this.cleanUp();
                _this.isStampLinkValid = false;
            }
            else {
                _this.stampLink = newStamp;
                _this.setStamp();
                _this.isStampLinkValid = true;
            }
        });
    };
    Object.defineProperty(StampToolService.prototype, "stampWidth", {
        get: function () {
            return this.stamp.width.baseVal.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StampToolService.prototype, "stampHeight", {
        get: function () {
            return this.stamp.height.baseVal.value;
        },
        enumerable: true,
        configurable: true
    });
    StampToolService.prototype.initStamp = function () {
        if (!this.stampIsAppended) {
            this.setStamp();
            this.renderer.appendChild(this.elementRef.nativeElement, this.stampWrapper);
            this.stampIsAppended = true;
        }
    };
    StampToolService.prototype.cleanUp = function () {
        if (this.stampIsAppended) {
            this.renderer.removeChild(this.elementRef.nativeElement, this.stampWrapper);
            this.stampIsAppended = false;
        }
    };
    StampToolService.prototype.setStamp = function () {
        this.renderer.setAttribute(this.stamp, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].width, (src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["STAMP_BASE_WIDTH"] * this.scaling).toString());
        this.renderer.setAttribute(this.stamp, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].height, (src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["STAMP_BASE_HEIGHT"] * this.scaling).toString());
        this.renderer.setAttribute(this.stamp, 'href', this.stampLink);
    };
    StampToolService.prototype.applyTransformation = function () {
        if (this.isStampLinkValid) {
            this.transform = "rotate(" + this.angle + ", " + this.currentMouseCoords.x + ",\n                " + this.currentMouseCoords.y + ") translate(" + this.stampCoords.x + ", " + this.stampCoords.y + ")";
            this.renderer.setAttribute(this.stampWrapper, 'transform', this.transform);
        }
    };
    StampToolService.prototype.positionStamp = function () {
        this.stampCoords.x = this.currentMouseCoords.x - this.stampWidth / 2;
        this.stampCoords.y = this.currentMouseCoords.y - this.stampHeight / 2;
        this.applyTransformation();
    };
    StampToolService.prototype.addStamp = function () {
        var _this = this;
        var el = this.renderer.createElement('g', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        this.renderer.setAttribute(el, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].title, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["TOOL_NAME"].Stamp);
        var stamp = this.renderer.createElement('image', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        this.renderer.setAttribute(stamp, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].width, (src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["STAMP_BASE_WIDTH"] * this.scaling).toString());
        this.renderer.setAttribute(stamp, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].height, (src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["STAMP_BASE_HEIGHT"] * this.scaling).toString());
        this.renderer.setAttribute(stamp, 'x', this.stampCoords.x.toString());
        this.renderer.setAttribute(stamp, 'y', this.stampCoords.y.toString());
        this.renderer.setAttribute(stamp, 'href', src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["BASE64_STAMPS_MAP"].get(this.stampLink));
        var rect = this.renderer.createElement('rect', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        this.renderer.setAttribute(rect, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].width, (src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["STAMP_BASE_WIDTH"] * this.scaling).toString());
        this.renderer.setAttribute(rect, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].height, (src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["STAMP_BASE_HEIGHT"] * this.scaling).toString());
        this.renderer.setAttribute(rect, 'x', this.stampCoords.x.toString());
        this.renderer.setAttribute(rect, 'y', this.stampCoords.y.toString());
        this.renderer.setAttribute(rect, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].fill, '#ffffff00');
        this.renderer.setAttribute(rect, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke, 'none');
        this.renderer.appendChild(el, stamp);
        this.renderer.appendChild(el, rect);
        this.renderer.setAttribute(el, 'transform', "translate(" + this.stampCoords.x + ", " + this.stampCoords.y + ")");
        this.renderer.setAttribute(el, 'transform', "rotate(" + this.angle + ", " + this.currentMouseCoords.x + ", " + this.currentMouseCoords.y + ")");
        var svg = this.renderer.createElement('svg', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        var rotateToZero = svg.createSVGTransform();
        rotateToZero.setRotate(0, this.currentMouseCoords.x, this.currentMouseCoords.y);
        el.transform.baseVal.insertItemBefore(rotateToZero, 0);
        this.renderer.appendChild(this.elementRef.nativeElement, el);
        setTimeout(function () {
            _this.drawStack.push(el);
        }, 0);
    };
    StampToolService.prototype.rotateStamp = function (direction) {
        this.angle += direction < 0 ? -src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["ROTATION_ANGLE"].Base : src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["ROTATION_ANGLE"].Base;
        this.angle = this.angle % 360;
    };
    StampToolService.prototype.alterRotateStamp = function (direction) {
        this.angle += direction < 0 ? -src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["ROTATION_ANGLE"].Alter : src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["ROTATION_ANGLE"].Alter;
        this.angle = this.angle % 360;
    };
    StampToolService.prototype.onMouseMove = function (event) {
        this.currentMouseCoords.x = event.clientX - this.elementRef.nativeElement.getBoundingClientRect().left;
        this.currentMouseCoords.y = event.clientY - this.elementRef.nativeElement.getBoundingClientRect().top;
        this.positionStamp();
    };
    StampToolService.prototype.isAbleToStamp = function (event) {
        return this.isMouseInRef(event, this.elementRef) && this.isStampLinkValid && this.stampIsAppended;
    };
    StampToolService.prototype.onMouseDown = function (event) {
        var button = event.button;
        if (button === src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["MOUSE"].LeftButton && this.isAbleToStamp(event)) {
            this.cleanUp();
            this.addStamp();
        }
    };
    StampToolService.prototype.onMouseUp = function (event) {
        var button = event.button;
        if (button === src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["MOUSE"].LeftButton && this.isAbleToStamp(event)) {
            this.initStamp();
        }
    };
    StampToolService.prototype.onMouseEnter = function (event) {
        if (this.isStampLinkValid) {
            this.initStamp();
        }
    };
    StampToolService.prototype.onMouseLeave = function (event) {
        if (this.isStampLinkValid) {
            this.cleanUp();
        }
    };
    StampToolService.prototype.onWheel = function (event) {
        if (!this.isStampLinkValid) {
            return;
        }
        if (this.isAlterRotation) {
            this.alterRotateStamp(event.deltaY);
        }
        else {
            this.rotateStamp(event.deltaY);
        }
        this.applyTransformation();
    };
    StampToolService.prototype.onKeyDown = function (event) {
        var key = event.key;
        if (key === src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["KEYS"].Alt) {
            event.preventDefault();
            this.isAlterRotation = true;
        }
    };
    StampToolService.prototype.onKeyUp = function (event) {
        var key = event.key;
        if (key === src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["KEYS"].Alt) {
            event.preventDefault();
            this.isAlterRotation = false;
        }
    };
    StampToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StampToolService);
    return StampToolService;
}(_abstract_tools_abstract_tool_service__WEBPACK_IMPORTED_MODULE_5__["AbstractToolService"]));



/***/ }),

/***/ "./src/app/services/tools/text-tool/text-tool.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/tools/text-tool/text-tool.service.ts ***!
  \***************************************************************/
/*! exports provided: TextToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextToolService", function() { return TextToolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_classes_FontInfos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/classes/FontInfos */ "./src/classes/FontInfos.ts");
/* harmony import */ var src_classes_textStyle_textCursor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/classes/textStyle/textCursor */ "./src/classes/textStyle/textCursor.ts");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shortcut-manager/shortcut-manager.service */ "./src/app/services/shortcut-manager/shortcut-manager.service.ts");
/* harmony import */ var _abstract_tools_abstract_tool_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../abstract-tools/abstract-tool.service */ "./src/app/services/tools/abstract-tools/abstract-tool.service.ts");
/* harmony import */ var _color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../color-tool/color-tool.service */ "./src/app/services/tools/color-tool/color-tool.service.ts");











var TextToolService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TextToolService, _super);
    function TextToolService(shortCutManagerService, colorToolService, snackBar) {
        var _this = _super.call(this) || this;
        _this.shortCutManagerService = shortCutManagerService;
        _this.colorToolService = colorToolService;
        _this.snackBar = snackBar;
        _this.fontInfo = new src_classes_FontInfos__WEBPACK_IMPORTED_MODULE_4__["FontInfo"]();
        _this.tspans = new Array();
        _this.currentText = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        _this.keyboardActions = new Map([
            [src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["KEYS"].Enter, _this.createNewLine],
            [src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["KEYS"].Backspace, _this.erase],
            [src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["KEYS"].ArrowLeft, _this.moveCursor],
            [src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["KEYS"].ArrowRight, _this.moveCursor],
            [src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["KEYS"].SmallerThan, _this.openSnackBar],
        ]);
        _this.getXPos = function (clientX) { return clientX - _this.elementRef.nativeElement.getBoundingClientRect().left; };
        _this.getYPos = function (clientY) { return clientY - _this.elementRef.nativeElement.getBoundingClientRect().top; };
        _this.colorToolService.primaryColor.subscribe(function (color) {
            _this.updateStyle(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].fill, '#' + color);
        });
        return _this;
    }
    Object.defineProperty(TextToolService.prototype, "text", {
        get: function () {
            return this.currentText.value;
        },
        set: function (text) {
            this.currentText.next(text);
        },
        enumerable: true,
        configurable: true
    });
    TextToolService.prototype.initializeService = function (elementRef, renderer, drawStack) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.drawStack = drawStack;
        this.textCursor = new src_classes_textStyle_textCursor__WEBPACK_IMPORTED_MODULE_5__["TextCursor"](renderer, this.currentText);
    };
    TextToolService.prototype.initializeAttributesManagerService = function (attributeManagerService) {
        var _this = this;
        this.attributesManagerService = attributeManagerService;
        this.attributesManagerService.font.subscribe(function (font) {
            _this.updateStyle(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].font_family, font);
        });
        this.attributesManagerService.fontSize.subscribe(function (size) {
            _this.updateStyle(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].font_size, size.toString());
        });
        this.attributesManagerService.fontAlign.subscribe(function (align) {
            _this.updateAlign(align);
        });
        this.attributesManagerService.italicState.subscribe(function (italic) {
            _this.updateItalic(italic);
        });
        this.attributesManagerService.boldState.subscribe(function (bold) {
            _this.updateBold(bold);
        });
        this.attributesManagerService.isWritingState.subscribe(function (isWriting) {
            _this.isWriting = isWriting;
        });
    };
    TextToolService.prototype.updateStyle = function (attribute, value) {
        switch (attribute) {
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].fill:
                this.fontInfo.fontColor = value;
                break;
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].font_family:
                this.fontInfo.fontFamily = value;
                break;
            case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].font_size:
                this.fontInfo.fontSize = value;
                break;
        }
        if (this.isWriting) {
            this.renderer.setAttribute(this.textBox, attribute, value);
            this.updatePreviewBox();
        }
    };
    TextToolService.prototype.updateAlign = function (align) {
        var _this = this;
        this.fontInfo.fontAlign = align;
        if (this.isWriting) {
            switch (align) {
                case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["FONT_ALIGN"].Middle: {
                    this.textBoxXPosition = this.bBoxAnchorLeft + this.bBoxWidth / 2;
                    break;
                }
                case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["FONT_ALIGN"].Start: {
                    this.textBoxXPosition = this.bBoxAnchorLeft;
                    break;
                }
                case src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["FONT_ALIGN"].End: {
                    this.textBoxXPosition = this.bBoxAnchorLeft + this.bBoxWidth;
                }
            }
            this.textBox.childNodes.forEach(function (tspan) {
                _this.renderer.setAttribute(tspan, 'x', _this.textBoxXPosition.toString());
            });
            this.renderer.setAttribute(this.textBox, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].text_anchor, this.fontInfo.fontAlign);
        }
    };
    TextToolService.prototype.updateItalic = function (isItalic) {
        this.fontInfo.fontStyle = isItalic ? src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["FONT_STYLE"].Italic : src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["FONT_STYLE"].Normal;
        if (this.isWriting) {
            this.renderer.setAttribute(this.textBox, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].font_style, this.fontInfo.fontStyle);
            this.updatePreviewBox();
        }
    };
    TextToolService.prototype.updateBold = function (isBold) {
        this.fontInfo.fontWeight = isBold ? src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["FONT_WEIGHT"].Bold : src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["FONT_WEIGHT"].Normal;
        if (this.isWriting) {
            this.renderer.setAttribute(this.textBox, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].font_weight, this.fontInfo.fontWeight);
            this.updatePreviewBox();
        }
    };
    TextToolService.prototype.ifClickInTextBox = function (x, y) {
        return (x >= this.bBoxAnchorLeft &&
            x <= this.bBoxAnchorLeft + this.bBoxWidth &&
            y >= this.textBoxYPosition &&
            y <= this.textBoxYPosition + this.bBoxHeight);
    };
    TextToolService.prototype.updatePreviewBox = function () {
        var textBBox = this.textBox.getBBox();
        this.bBoxAnchorLeft = textBBox.x;
        this.bBoxWidth = textBBox.width;
        this.bBoxHeight = textBBox.height;
        this.renderer.setAttribute(this.previewBox, 'x', this.bBoxAnchorLeft.toString());
        this.renderer.setAttribute(this.previewBox, 'y', textBBox.y.toString());
        this.renderer.setAttribute(this.previewBox, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].width, this.bBoxWidth.toString());
        this.renderer.setAttribute(this.previewBox, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].height, textBBox.height.toString());
    };
    TextToolService.prototype.initPreviewRect = function () {
        this.previewBox = this.renderer.createElement('rect', src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["SVG_NS"]);
        this.renderer.setAttribute(this.previewBox, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].title, src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["TITLE_ELEMENT_TO_REMOVE"]);
        this.renderer.setAttribute(this.previewBox, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].stroke, 'black');
        this.renderer.setAttribute(this.previewBox, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].stroke_width, '1');
        this.renderer.setAttribute(this.previewBox, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].fill, 'none');
        this.renderer.setAttribute(this.previewBox, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].stroke_dasharray, '5 5');
    };
    TextToolService.prototype.createTextBox = function (x, y) {
        this.textBox = this.renderer.createElement('text', src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["SVG_NS"]);
        this.renderer.setAttribute(this.textBox, 'x', x.toString());
        this.renderer.setAttribute(this.textBox, 'y', y.toString());
        this.renderer.setAttribute(this.textBox, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].font_family, this.fontInfo.fontFamily);
        this.renderer.setAttribute(this.textBox, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].font_size, this.fontInfo.fontSize);
        this.renderer.setAttribute(this.textBox, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].font_style, this.fontInfo.fontStyle);
        this.renderer.setAttribute(this.textBox, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].font_weight, this.fontInfo.fontWeight);
        this.renderer.setAttribute(this.textBox, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].text_anchor, this.fontInfo.fontAlign);
        this.renderer.setAttribute(this.textBox, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].fill, this.fontInfo.fontColor);
    };
    TextToolService.prototype.createNewLine = function () {
        var remainingRightText = this.textCursor.rightSideText();
        var tsSpanStackIsNotEmpty = this.tspans.length !== 0;
        var refChilpos = 0;
        if (tsSpanStackIsNotEmpty) {
            refChilpos = this.textCursor.findLinePosition(this.currentLine, this.tspans);
            this.text = this.textCursor.isAtStartOfLine() ? src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["TEXT_LINEBREAK"] : this.textCursor.leftSideText();
            this.renderer.setProperty(this.currentLine, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].innerHTML, this.text);
        }
        this.text = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["TEXT_CURSOR"] + remainingRightText;
        this.currentLine = this.renderer.createElement('tspan', src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["SVG_NS"]);
        this.renderer.setAttribute(this.currentLine, 'x', this.textBoxXPosition.toString());
        this.renderer.setAttribute(this.currentLine, 'dy', '1em');
        this.renderer.setProperty(this.currentLine, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].innerHTML, this.text);
        if (tsSpanStackIsNotEmpty) {
            this.renderer.insertBefore(this.textBox, this.currentLine, this.tspans[refChilpos + 1]);
            this.tspans.splice(refChilpos + 1, 0, this.currentLine);
        }
        else {
            this.renderer.appendChild(this.textBox, this.currentLine);
            this.tspans.push(this.currentLine);
        }
    };
    TextToolService.prototype.removeLine = function () {
        this.renderer.removeChild(this.textBox, this.currentLine);
        var toRemoveChildPos = this.textCursor.findLinePosition(this.currentLine, this.tspans);
        this.tspans.splice(toRemoveChildPos, 1);
        this.currentLine = this.tspans[toRemoveChildPos - 1];
        var textContent = this.currentLine.textContent;
        var lastLineText = this.textCursor.rightSideText();
        this.text =
            textContent === src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["TEXT_LINEBREAK"] ? src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["TEXT_CURSOR"] + lastLineText : textContent + src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["TEXT_CURSOR"] + lastLineText;
    };
    TextToolService.prototype.erase = function () {
        if (this.textCursor.isAtStartOfLine() && this.tspans[0] !== this.currentLine) {
            this.removeLine();
        }
        else {
            var newLeftSideText = this.textCursor.leftSideText().slice(0, -1);
            this.text = newLeftSideText + src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["TEXT_CURSOR"] + this.textCursor.rightSideText();
        }
    };
    TextToolService.prototype.onMouseDown = function (event) {
        var xClick = this.getXPos(event.clientX);
        var yClick = this.getYPos(event.clientY);
        var button = event.button;
        if (!this.isWriting && button === src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["MOUSE"].LeftButton) {
            this.shortCutManagerService.changeIsOnInput(true);
            this.attributesManagerService.isWritingState.next(true);
            this.textBoxXPosition = xClick;
            this.textBoxYPosition = yClick;
            this.createTextBox(this.textBoxXPosition, this.textBoxYPosition);
            this.initPreviewRect();
            this.createNewLine();
            this.gWrap = this.renderer.createElement('g', src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["SVG_NS"]);
            this.renderer.setAttribute(this.gWrap, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].title, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["TOOL_NAME"].Text);
            this.renderer.appendChild(this.gWrap, this.previewBox);
            this.renderer.appendChild(this.gWrap, this.textBox);
            this.renderer.appendChild(this.elementRef.nativeElement, this.gWrap);
            this.updatePreviewBox();
        }
        else if (!this.ifClickInTextBox(xClick, yClick)) {
            this.cleanUp();
        }
    };
    TextToolService.prototype.onKeyDown = function (event) {
        var _this = this;
        if (!this.isWriting || event.ctrlKey || event.altKey) {
            return;
        }
        event.preventDefault();
        this.textCursor.currentCursorIndex = this.text.indexOf(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["TEXT_CURSOR"]);
        if (this.keyboardActions.has(event.key)) {
            this.keyboardActions.get(event.key).apply(this, [event.key]);
        }
        else {
            this.addText(event.key);
        }
        this.renderer.setProperty(this.currentLine, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].innerHTML, this.text);
        setTimeout(function () {
            _this.updatePreviewBox();
        }, 0);
    };
    TextToolService.prototype.cleanUp = function () {
        var _this = this;
        if (this.gWrap !== undefined && this.tspans.length !== 0) {
            this.renderer.removeChild(this.gWrap, this.previewBox);
            if (this.tspans.length === 1 && this.text === src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["TEXT_CURSOR"]) {
                this.renderer.removeChild(this.elementRef, this.gWrap);
            }
            else {
                this.textCursor.currentCursorIndex = this.text.indexOf(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["TEXT_CURSOR"]);
                this.text = this.textCursor.erase();
                this.renderer.setProperty(this.currentLine, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["HTML_ATTRIBUTE"].innerHTML, this.text);
                setTimeout(function () {
                    _this.drawStack.push(_this.gWrap);
                }, 0);
            }
            this.tspans = new Array();
            this.text = '';
            this.attributesManagerService.isWritingState.next(false);
            this.shortCutManagerService.changeIsOnInput(false);
        }
    };
    TextToolService.prototype.moveCursor = function (key) {
        var currentLineRef = [this.currentLine];
        if (key === src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["KEYS"].ArrowLeft) {
            this.text = this.textCursor.isAtStartOfLine()
                ? this.textCursor.swapToAnotherLine(-1, currentLineRef, this.tspans)
                : this.textCursor.swapInCurrentLine(-1);
        }
        else {
            this.text = this.textCursor.isAtEndOfLine()
                ? this.textCursor.swapToAnotherLine(1, currentLineRef, this.tspans)
                : this.textCursor.swapInCurrentLine(1);
        }
        this.currentLine = currentLineRef[0];
    };
    TextToolService.prototype.addText = function (key) {
        if (key.length > 1) {
            return;
        }
        else if (key === src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["KEYS"].Space) {
            key = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["TEXT_SPACE"];
        }
        var newLeftSideText = (this.textCursor.leftSideText() + src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["TEXT_CURSOR"]).replace(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["TEXT_CURSOR"], key);
        this.text = newLeftSideText + src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["TEXT_CURSOR"] + this.textCursor.rightSideText();
    };
    TextToolService.prototype.openSnackBar = function () {
        this.snackBar.open("Le caract\u00E8re " + src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["KEYS"].SmallerThan + " n'est malheureusement pas disponible", '', {
            duration: src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_7__["SNACKBAR_DURATION"],
        });
    };
    // tslint:disable-next-line: no-empty
    TextToolService.prototype.onMouseUp = function (event) { };
    // tslint:disable-next-line: no-empty
    TextToolService.prototype.onMouseEnter = function (event) { };
    // tslint:disable-next-line: no-empty
    TextToolService.prototype.onMouseLeave = function (event) { };
    // tslint:disable-next-line: no-empty
    TextToolService.prototype.onKeyUp = function (event) { };
    // tslint:disable-next-line: no-empty
    TextToolService.prototype.onMouseMove = function (event) { };
    TextToolService.ctorParameters = function () { return [
        { type: _shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_8__["ShortcutManagerService"] },
        { type: _color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_10__["ColorToolService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
    ]; };
    TextToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shortcut_manager_shortcut_manager_service__WEBPACK_IMPORTED_MODULE_8__["ShortcutManagerService"],
            _color_tool_color_tool_service__WEBPACK_IMPORTED_MODULE_10__["ColorToolService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], TextToolService);
    return TextToolService;
}(_abstract_tools_abstract_tool_service__WEBPACK_IMPORTED_MODULE_9__["AbstractToolService"]));



/***/ }),

/***/ "./src/app/services/tools/tool-selector/tool-selector.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/services/tools/tool-selector/tool-selector.service.ts ***!
  \***********************************************************************/
/*! exports provided: ToolSelectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolSelectorService", function() { return ToolSelectorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_components_modal_windows_drawing_modal_window_drawing_modal_window_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/modal-windows/drawing-modal-window/drawing-modal-window.component */ "./src/app/components/modal-windows/drawing-modal-window/drawing-modal-window.component.ts");
/* harmony import */ var src_app_components_modal_windows_export_file_modal_window_export_file_modal_window_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/modal-windows/export-file-modal-window/export-file-modal-window.component */ "./src/app/components/modal-windows/export-file-modal-window/export-file-modal-window.component.ts");
/* harmony import */ var src_app_components_modal_windows_open_file_modal_window_open_file_modal_window_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/modal-windows/open-file-modal-window/open-file-modal-window.component */ "./src/app/components/modal-windows/open-file-modal-window/open-file-modal-window.component.ts");
/* harmony import */ var src_app_components_modal_windows_save_file_modal_window_save_file_modal_window_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/modal-windows/save-file-modal-window/save-file-modal-window.component */ "./src/app/components/modal-windows/save-file-modal-window/save-file-modal-window.component.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modal-manager/modal-manager.service */ "./src/app/services/modal-manager/modal-manager.service.ts");
/* harmony import */ var _undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../undo-redoer/undo-redoer.service */ "./src/app/services/undo-redoer/undo-redoer.service.ts");
/* harmony import */ var _brush_tool_brush_tool_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../brush-tool/brush-tool.service */ "./src/app/services/tools/brush-tool/brush-tool.service.ts");
/* harmony import */ var _color_applicator_tool_color_applicator_tool_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../color-applicator-tool/color-applicator-tool.service */ "./src/app/services/tools/color-applicator-tool/color-applicator-tool.service.ts");
/* harmony import */ var _dropper_tool_dropper_tool_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../dropper-tool/dropper-tool.service */ "./src/app/services/tools/dropper-tool/dropper-tool.service.ts");
/* harmony import */ var _ellipsis_tool_ellipsis_tool_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ellipsis-tool/ellipsis-tool.service */ "./src/app/services/tools/ellipsis-tool/ellipsis-tool.service.ts");
/* harmony import */ var _eraser_tool_eraser_tool_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../eraser-tool/eraser-tool.service */ "./src/app/services/tools/eraser-tool/eraser-tool.service.ts");
/* harmony import */ var _export_tool_export_tool_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../export-tool/export-tool.service */ "./src/app/services/tools/export-tool/export-tool.service.ts");
/* harmony import */ var _fill_tool_fill_tool_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../fill-tool/fill-tool.service */ "./src/app/services/tools/fill-tool/fill-tool.service.ts");
/* harmony import */ var _line_tool_line_tool_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../line-tool/line-tool.service */ "./src/app/services/tools/line-tool/line-tool.service.ts");
/* harmony import */ var _magnetism_tool_magnetism_tool_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../magnetism-tool/magnetism-tool.service */ "./src/app/services/tools/magnetism-tool/magnetism-tool.service.ts");
/* harmony import */ var _pen_tool_pen_tool_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../pen-tool/pen-tool.service */ "./src/app/services/tools/pen-tool/pen-tool.service.ts");
/* harmony import */ var _pencil_tool_pencil_tool_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../pencil-tool/pencil-tool.service */ "./src/app/services/tools/pencil-tool/pencil-tool.service.ts");
/* harmony import */ var _polygon_tool_polygon_tool_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../polygon-tool/polygon-tool.service */ "./src/app/services/tools/polygon-tool/polygon-tool.service.ts");
/* harmony import */ var _quill_tool_quill_tool_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../quill-tool/quill-tool.service */ "./src/app/services/tools/quill-tool/quill-tool.service.ts");
/* harmony import */ var _rectangle_tool_rectangle_tool_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../rectangle-tool/rectangle-tool.service */ "./src/app/services/tools/rectangle-tool/rectangle-tool.service.ts");
/* harmony import */ var _selection_tool_selection_tool_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../selection-tool/selection-tool.service */ "./src/app/services/tools/selection-tool/selection-tool.service.ts");
/* harmony import */ var _spray_can_tool_spray_can_tool_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../spray-can-tool/spray-can-tool.service */ "./src/app/services/tools/spray-can-tool/spray-can-tool.service.ts");
/* harmony import */ var _stamp_tool_stamp_tool_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../stamp-tool/stamp-tool.service */ "./src/app/services/tools/stamp-tool/stamp-tool.service.ts");
/* harmony import */ var _text_tool_text_tool_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../text-tool/text-tool.service */ "./src/app/services/tools/text-tool/text-tool.service.ts");





// tslint:disable-next-line: max-line-length
























var ToolSelectorService = /** @class */ (function () {
    function ToolSelectorService(dialog, modalManagerService, selectionTool, rectangleTool, ellipsisTool, pencilTool, penTool, quillTool, brushTool, stampTool, dropperTool, fillTool, colorApplicatorTool, polygonTool, lineTool, textTool, exportTool, eraserTool, undoRedoerService, magnetismTool, sprayCanTool) {
        var _this = this;
        this.dialog = dialog;
        this.modalManagerService = modalManagerService;
        this.selectionTool = selectionTool;
        this.rectangleTool = rectangleTool;
        this.ellipsisTool = ellipsisTool;
        this.pencilTool = pencilTool;
        this.penTool = penTool;
        this.quillTool = quillTool;
        this.brushTool = brushTool;
        this.stampTool = stampTool;
        this.dropperTool = dropperTool;
        this.fillTool = fillTool;
        this.colorApplicatorTool = colorApplicatorTool;
        this.polygonTool = polygonTool;
        this.lineTool = lineTool;
        this.textTool = textTool;
        this.exportTool = exportTool;
        this.eraserTool = eraserTool;
        this.undoRedoerService = undoRedoerService;
        this.magnetismTool = magnetismTool;
        this.sprayCanTool = sprayCanTool;
        this.toolName = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_8__["TOOL_NAME"].Selection);
        this.currentToolName = this.toolName.asObservable();
        this.modalIsDisplayed = false;
        this.modalManagerService.currentModalIsDisplayed.subscribe(function (modalIsDisplayed) {
            _this.modalIsDisplayed = modalIsDisplayed;
        });
    }
    ToolSelectorService.prototype.initTools = function (drawStack, ref, renderer) {
        var _this = this;
        this.selectionTool.initializeService(ref, renderer, drawStack);
        this.rectangleTool.initializeService(ref, renderer, drawStack);
        this.ellipsisTool.initializeService(ref, renderer, drawStack);
        this.pencilTool.initializeService(ref, renderer, drawStack);
        this.penTool.initializeService(ref, renderer, drawStack);
        this.quillTool.initializeService(ref, renderer, drawStack);
        this.brushTool.initializeService(ref, renderer, drawStack);
        this.stampTool.initializeService(ref, renderer, drawStack);
        this.dropperTool.initializeService(ref, renderer, drawStack);
        this.fillTool.initializeService(ref, renderer, drawStack);
        this.colorApplicatorTool.initializeService(ref, renderer, drawStack);
        this.polygonTool.initializeService(ref, renderer, drawStack);
        this.lineTool.initializeService(ref, renderer, drawStack);
        this.textTool.initializeService(ref, renderer, drawStack);
        this.exportTool.initializeService(ref, renderer);
        this.eraserTool.initializeService(ref, renderer, drawStack);
        this.sprayCanTool.initializeService(ref, renderer, drawStack);
        this.TOOLS_MAP = new Map([
            [src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_8__["TOOL_NAME"].Selection, this.selectionTool],
            [src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_8__["TOOL_NAME"].Rectangle, this.rectangleTool],
            [src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_8__["TOOL_NAME"].Ellipsis, this.ellipsisTool],
            [src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_8__["TOOL_NAME"].Pencil, this.pencilTool],
            [src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_8__["TOOL_NAME"].Brush, this.brushTool],
            [src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_8__["TOOL_NAME"].Stamp, this.stampTool],
            [src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_8__["TOOL_NAME"].ColorApplicator, this.colorApplicatorTool],
            [src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_8__["TOOL_NAME"].Polygon, this.polygonTool],
            [src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_8__["TOOL_NAME"].Line, this.lineTool],
            [src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_8__["TOOL_NAME"].Dropper, this.dropperTool],
            [src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_8__["TOOL_NAME"].Pen, this.penTool],
            [src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_8__["TOOL_NAME"].Quill, this.quillTool],
            [src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_8__["TOOL_NAME"].Eraser, this.eraserTool],
            [src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_8__["TOOL_NAME"].SprayCan, this.sprayCanTool],
            [src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_8__["TOOL_NAME"].Fill, this.fillTool],
            [src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_8__["TOOL_NAME"].Text, this.textTool],
        ]);
        this.WORKZONE_TOOLS_MAP = new Map([
            [
                src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_8__["TOOL_NAME"].NewDrawing,
                function () {
                    if (!_this.modalIsDisplayed) {
                        _this.displayNewDrawingModal();
                    }
                },
            ],
            [
                src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_8__["TOOL_NAME"].ArtGallery,
                function () {
                    if (!_this.modalIsDisplayed) {
                        _this.displayOpenFileModal();
                    }
                },
            ],
            [
                src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_8__["TOOL_NAME"].Save,
                function () {
                    if (!_this.modalIsDisplayed) {
                        _this.displaySaveFileModal();
                    }
                },
            ],
            [
                src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_8__["TOOL_NAME"].Export,
                function () {
                    if (!_this.modalIsDisplayed) {
                        _this.displayExportFileModal();
                    }
                },
            ],
            [
                src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_8__["TOOL_NAME"].Undo,
                function () {
                    if (!_this.modalIsDisplayed) {
                        _this.undoRedoerService.undo();
                    }
                },
            ],
            [
                src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_8__["TOOL_NAME"].Redo,
                function () {
                    if (!_this.modalIsDisplayed) {
                        _this.undoRedoerService.redo();
                    }
                },
            ],
        ]);
    };
    ToolSelectorService.prototype.displayNewDrawingModal = function () {
        var _this = this;
        var newDrawingDialogRef = this.dialog.open(src_app_components_modal_windows_drawing_modal_window_drawing_modal_window_component__WEBPACK_IMPORTED_MODULE_4__["DrawingModalWindowComponent"], {
            panelClass: 'myapp-max-width-dialog',
            autoFocus: false,
        });
        this.modalManagerService.setModalIsDisplayed(true);
        newDrawingDialogRef.afterClosed().subscribe(function () {
            _this.modalManagerService.setModalIsDisplayed(false);
        });
    };
    ToolSelectorService.prototype.displayOpenFileModal = function () {
        var _this = this;
        var openFileDialogRef = this.dialog.open(src_app_components_modal_windows_open_file_modal_window_open_file_modal_window_component__WEBPACK_IMPORTED_MODULE_6__["OpenFileModalWindowComponent"], {
            panelClass: 'myapp-open-file-modal-dialog',
            disableClose: true,
            autoFocus: false,
        });
        this.modalManagerService.setModalIsDisplayed(true);
        openFileDialogRef.afterClosed().subscribe(function () {
            _this.modalManagerService.setModalIsDisplayed(false);
        });
    };
    ToolSelectorService.prototype.displaySaveFileModal = function () {
        var _this = this;
        var saveFileDialogRef = this.dialog.open(src_app_components_modal_windows_save_file_modal_window_save_file_modal_window_component__WEBPACK_IMPORTED_MODULE_7__["SaveFileModalWindowComponent"], {
            panelClass: 'myapp-min-width-dialog',
            disableClose: true,
            autoFocus: false,
        });
        this.modalManagerService.setModalIsDisplayed(true);
        saveFileDialogRef.afterClosed().subscribe(function () {
            _this.modalManagerService.setModalIsDisplayed(false);
        });
    };
    ToolSelectorService.prototype.displayExportFileModal = function () {
        var _this = this;
        var exportFileDialogRef = this.dialog.open(src_app_components_modal_windows_export_file_modal_window_export_file_modal_window_component__WEBPACK_IMPORTED_MODULE_5__["ExportFileModalWindowComponent"], {
            panelClass: 'myapp-min-width-dialog',
            disableClose: true,
            autoFocus: false,
        });
        this.modalManagerService.setModalIsDisplayed(true);
        exportFileDialogRef.afterClosed().subscribe(function () {
            _this.modalManagerService.setModalIsDisplayed(false);
        });
    };
    ToolSelectorService.prototype.getSelectiontool = function () {
        return this.selectionTool;
    };
    ToolSelectorService.prototype.getPencilTool = function () {
        return this.pencilTool;
    };
    ToolSelectorService.prototype.getPenTool = function () {
        return this.penTool;
    };
    ToolSelectorService.prototype.getQuillTool = function () {
        return this.quillTool;
    };
    ToolSelectorService.prototype.getRectangleTool = function () {
        return this.rectangleTool;
    };
    ToolSelectorService.prototype.getEllipsisTool = function () {
        return this.ellipsisTool;
    };
    ToolSelectorService.prototype.getBrushTool = function () {
        return this.brushTool;
    };
    ToolSelectorService.prototype.getStampTool = function () {
        return this.stampTool;
    };
    ToolSelectorService.prototype.getDropperTool = function () {
        return this.dropperTool;
    };
    ToolSelectorService.prototype.getFillTool = function () {
        return this.fillTool;
    };
    ToolSelectorService.prototype.getColorApplicatorTool = function () {
        return this.colorApplicatorTool;
    };
    ToolSelectorService.prototype.getPolygonTool = function () {
        return this.polygonTool;
    };
    ToolSelectorService.prototype.getLineTool = function () {
        return this.lineTool;
    };
    ToolSelectorService.prototype.getTextTool = function () {
        return this.textTool;
    };
    ToolSelectorService.prototype.getEraserTool = function () {
        return this.eraserTool;
    };
    ToolSelectorService.prototype.getMagnetismTool = function () {
        return this.magnetismTool;
    };
    ToolSelectorService.prototype.getSprayCanTool = function () {
        return this.sprayCanTool;
    };
    ToolSelectorService.prototype.changeTool = function (tooltipName) {
        if (this.currentTool) {
            this.currentTool.cleanUp();
        }
        if (tooltipName === src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_8__["TOOL_NAME"].Grid) {
            this.changeCurrentToolName(tooltipName);
            return;
        }
        if (tooltipName === src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_8__["TOOL_NAME"].Magnetism) {
            this.changeCurrentToolName(tooltipName);
            return;
        }
        var tool = this.TOOLS_MAP.get(tooltipName);
        if (tool !== undefined) {
            this.currentTool = tool;
            this.changeCurrentToolName(tooltipName);
            return;
        }
        var workzoneTool = this.WORKZONE_TOOLS_MAP.get(tooltipName);
        if (workzoneTool !== undefined) {
            workzoneTool();
            return;
        }
    };
    ToolSelectorService.prototype.changeCurrentToolName = function (toolName) {
        this.toolName.next(toolName);
    };
    ToolSelectorService.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_9__["ModalManagerService"] },
        { type: _selection_tool_selection_tool_service__WEBPACK_IMPORTED_MODULE_25__["SelectionToolService"] },
        { type: _rectangle_tool_rectangle_tool_service__WEBPACK_IMPORTED_MODULE_24__["RectangleToolService"] },
        { type: _ellipsis_tool_ellipsis_tool_service__WEBPACK_IMPORTED_MODULE_14__["EllipsisToolService"] },
        { type: _pencil_tool_pencil_tool_service__WEBPACK_IMPORTED_MODULE_21__["PencilToolService"] },
        { type: _pen_tool_pen_tool_service__WEBPACK_IMPORTED_MODULE_20__["PenToolService"] },
        { type: _quill_tool_quill_tool_service__WEBPACK_IMPORTED_MODULE_23__["QuillToolService"] },
        { type: _brush_tool_brush_tool_service__WEBPACK_IMPORTED_MODULE_11__["BrushToolService"] },
        { type: _stamp_tool_stamp_tool_service__WEBPACK_IMPORTED_MODULE_27__["StampToolService"] },
        { type: _dropper_tool_dropper_tool_service__WEBPACK_IMPORTED_MODULE_13__["DropperToolService"] },
        { type: _fill_tool_fill_tool_service__WEBPACK_IMPORTED_MODULE_17__["FillToolService"] },
        { type: _color_applicator_tool_color_applicator_tool_service__WEBPACK_IMPORTED_MODULE_12__["ColorApplicatorToolService"] },
        { type: _polygon_tool_polygon_tool_service__WEBPACK_IMPORTED_MODULE_22__["PolygonToolService"] },
        { type: _line_tool_line_tool_service__WEBPACK_IMPORTED_MODULE_18__["LineToolService"] },
        { type: _text_tool_text_tool_service__WEBPACK_IMPORTED_MODULE_28__["TextToolService"] },
        { type: _export_tool_export_tool_service__WEBPACK_IMPORTED_MODULE_16__["ExportToolService"] },
        { type: _eraser_tool_eraser_tool_service__WEBPACK_IMPORTED_MODULE_15__["EraserToolService"] },
        { type: _undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_10__["UndoRedoerService"] },
        { type: _magnetism_tool_magnetism_tool_service__WEBPACK_IMPORTED_MODULE_19__["MagnetismToolService"] },
        { type: _spray_can_tool_spray_can_tool_service__WEBPACK_IMPORTED_MODULE_26__["SprayCanToolService"] }
    ]; };
    ToolSelectorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _modal_manager_modal_manager_service__WEBPACK_IMPORTED_MODULE_9__["ModalManagerService"],
            _selection_tool_selection_tool_service__WEBPACK_IMPORTED_MODULE_25__["SelectionToolService"],
            _rectangle_tool_rectangle_tool_service__WEBPACK_IMPORTED_MODULE_24__["RectangleToolService"],
            _ellipsis_tool_ellipsis_tool_service__WEBPACK_IMPORTED_MODULE_14__["EllipsisToolService"],
            _pencil_tool_pencil_tool_service__WEBPACK_IMPORTED_MODULE_21__["PencilToolService"],
            _pen_tool_pen_tool_service__WEBPACK_IMPORTED_MODULE_20__["PenToolService"],
            _quill_tool_quill_tool_service__WEBPACK_IMPORTED_MODULE_23__["QuillToolService"],
            _brush_tool_brush_tool_service__WEBPACK_IMPORTED_MODULE_11__["BrushToolService"],
            _stamp_tool_stamp_tool_service__WEBPACK_IMPORTED_MODULE_27__["StampToolService"],
            _dropper_tool_dropper_tool_service__WEBPACK_IMPORTED_MODULE_13__["DropperToolService"],
            _fill_tool_fill_tool_service__WEBPACK_IMPORTED_MODULE_17__["FillToolService"],
            _color_applicator_tool_color_applicator_tool_service__WEBPACK_IMPORTED_MODULE_12__["ColorApplicatorToolService"],
            _polygon_tool_polygon_tool_service__WEBPACK_IMPORTED_MODULE_22__["PolygonToolService"],
            _line_tool_line_tool_service__WEBPACK_IMPORTED_MODULE_18__["LineToolService"],
            _text_tool_text_tool_service__WEBPACK_IMPORTED_MODULE_28__["TextToolService"],
            _export_tool_export_tool_service__WEBPACK_IMPORTED_MODULE_16__["ExportToolService"],
            _eraser_tool_eraser_tool_service__WEBPACK_IMPORTED_MODULE_15__["EraserToolService"],
            _undo_redoer_undo_redoer_service__WEBPACK_IMPORTED_MODULE_10__["UndoRedoerService"],
            _magnetism_tool_magnetism_tool_service__WEBPACK_IMPORTED_MODULE_19__["MagnetismToolService"],
            _spray_can_tool_spray_can_tool_service__WEBPACK_IMPORTED_MODULE_26__["SprayCanToolService"]])
    ], ToolSelectorService);
    return ToolSelectorService;
}());



/***/ }),

/***/ "./src/app/services/undo-redoer/undo-redoer.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/undo-redoer/undo-redoer.service.ts ***!
  \*************************************************************/
/*! exports provided: UndoRedoerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UndoRedoerService", function() { return UndoRedoerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_classes_DrawingState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/classes/DrawingState */ "./src/classes/DrawingState.ts");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _drawing_modal_window_drawing_modal_window_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../drawing-modal-window/drawing-modal-window.service */ "./src/app/services/drawing-modal-window/drawing-modal-window.service.ts");
/* harmony import */ var _server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../server/drawing-loader/drawing-loader.service */ "./src/app/services/server/drawing-loader/drawing-loader.service.ts");








var UndoRedoerService = /** @class */ (function () {
    function UndoRedoerService(drawingLoaderService, drawingModalWindowService) {
        this.drawingLoaderService = drawingLoaderService;
        this.drawingModalWindowService = drawingModalWindowService;
        this.undos = new Array();
        this.redos = new Array();
        this.fromLoader = false;
        this.pasteOffset = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.duplicateOffset = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.clipping = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Set());
        this.currentPasteOffset = this.pasteOffset.asObservable();
        this.currentDuplicateOffset = this.duplicateOffset.asObservable();
        this.currentClipping = this.clipping.asObservable();
    }
    UndoRedoerService.prototype.initializeService = function (workzoneRef) {
        var _this = this;
        this.workzoneRef = workzoneRef;
        this.drawingModalWindowService.drawingInfo.subscribe(function (drawingInfo) {
            _this.currentDrawingInfo = drawingInfo;
        });
    };
    UndoRedoerService.prototype.initializeStacks = function () {
        this.undos = [];
        this.redos = [];
    };
    UndoRedoerService.prototype.getCleanInnerHTML = function () {
        var cloneWorkzone = this.workzoneRef.nativeElement.cloneNode(true);
        var elToRemove = new Array();
        cloneWorkzone.childNodes.forEach(function (childNode) {
            if (childNode.getAttribute(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_5__["HTML_ATTRIBUTE"].title) === src_constants_constants__WEBPACK_IMPORTED_MODULE_4__["TITLE_ELEMENT_TO_REMOVE"]) {
                elToRemove.push(childNode);
            }
        });
        elToRemove.forEach(function (el) {
            cloneWorkzone.removeChild(el);
        });
        return cloneWorkzone.innerHTML;
    };
    UndoRedoerService.prototype.createDrawing = function (idStackArray) {
        var cleanedInnerHTML = this.getCleanInnerHTML();
        var drawing = {
            svg: cleanedInnerHTML,
            drawingInfo: {
                name: '',
                labels: [],
                idStack: idStackArray,
                height: this.currentDrawingInfo.height,
                width: this.currentDrawingInfo.width,
                color: this.currentDrawingInfo.color,
                createdAt: 0,
                lastModified: 0,
            },
        };
        return drawing;
    };
    UndoRedoerService.prototype.saveStateAndDuplicateOffset = function (idStackArray, duplicateOffset) {
        var currentDrawing = this.createDrawing(idStackArray.slice(0));
        var currentState = new src_classes_DrawingState__WEBPACK_IMPORTED_MODULE_3__["DrawingState"](currentDrawing);
        currentState.duplicateOffset = duplicateOffset;
        this.saveState(currentState);
    };
    UndoRedoerService.prototype.saveStateFromPaste = function (idStackArray, pasteOffset, clippingState) {
        var currentDrawing = this.createDrawing(idStackArray.slice(0));
        var currentState = new src_classes_DrawingState__WEBPACK_IMPORTED_MODULE_3__["DrawingState"](currentDrawing);
        currentState.pasteOffset = pasteOffset;
        currentState.clippings = new Set(clippingState);
        this.saveState(currentState);
    };
    UndoRedoerService.prototype.saveCurrentState = function (idStackArray) {
        var currentDrawing = this.createDrawing(idStackArray.slice(0));
        var currentState = new src_classes_DrawingState__WEBPACK_IMPORTED_MODULE_3__["DrawingState"](currentDrawing);
        this.saveState(currentState);
    };
    UndoRedoerService.prototype.saveState = function (state) {
        this.undos.push(state);
        if (this.redos.length > 0) {
            this.redos = [];
        }
    };
    UndoRedoerService.prototype.undo = function () {
        if (this.undos.length > 1) {
            var currentState = this.undos.pop();
            this.redos.push(currentState);
            var stateToLoad = this.undos[this.undos.length - 1];
            if (stateToLoad.duplicateOffset !== undefined) {
                this.duplicateOffset.next(stateToLoad.duplicateOffset);
            }
            else if (stateToLoad.pasteOffset !== undefined && stateToLoad.clippings !== undefined) {
                this.pasteOffset.next(stateToLoad.pasteOffset);
                this.clipping.next(stateToLoad.clippings);
            }
            this.drawingLoaderService.currentDrawing.next(stateToLoad.drawing);
        }
    };
    UndoRedoerService.prototype.redo = function () {
        if (this.redos.length > 0) {
            var stateToLoad = this.redos.pop();
            this.undos.push(stateToLoad);
            if (stateToLoad.duplicateOffset !== undefined) {
                this.duplicateOffset.next(stateToLoad.duplicateOffset);
            }
            else if (stateToLoad.pasteOffset !== undefined) {
                this.pasteOffset.next(stateToLoad.pasteOffset);
            }
            this.drawingLoaderService.currentDrawing.next(stateToLoad.drawing);
        }
    };
    UndoRedoerService.ctorParameters = function () { return [
        { type: _server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_7__["DrawingLoaderService"] },
        { type: _drawing_modal_window_drawing_modal_window_service__WEBPACK_IMPORTED_MODULE_6__["DrawingModalWindowService"] }
    ]; };
    UndoRedoerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_server_drawing_loader_drawing_loader_service__WEBPACK_IMPORTED_MODULE_7__["DrawingLoaderService"],
            _drawing_modal_window_drawing_modal_window_service__WEBPACK_IMPORTED_MODULE_6__["DrawingModalWindowService"]])
    ], UndoRedoerService);
    return UndoRedoerService;
}());



/***/ }),

/***/ "./src/app/services/welcome-modal-window/welcome-modal-window.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/services/welcome-modal-window/welcome-modal-window.service.ts ***!
  \*******************************************************************************/
/*! exports provided: WelcomeModalWindowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeModalWindowService", function() { return WelcomeModalWindowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var WelcomeModalWindowService = /** @class */ (function () {
    function WelcomeModalWindowService() {
        this.storageKey = 'display welcome modal';
        this.displayWelcomeModalWindow = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this.currentDisplayWelcomeModalWindow = this.displayWelcomeModalWindow.asObservable();
    }
    WelcomeModalWindowService.prototype.getValueFromLocalStorage = function () {
        if (localStorage.getItem(this.storageKey)) {
            var key = localStorage.getItem(this.storageKey);
            if (key === 'true') {
                this.displayWelcomeModalWindow.next(true);
            }
            if (key === 'false') {
                this.displayWelcomeModalWindow.next(false);
            }
        }
        return this.displayWelcomeModalWindow.value;
    };
    WelcomeModalWindowService.prototype.setValueToLocalStorage = function (value) {
        localStorage.setItem(this.storageKey, value);
        if (value === 'true') {
            this.displayWelcomeModalWindow.next(true);
        }
        else if (value === 'false') {
            this.displayWelcomeModalWindow.next(false);
        }
    };
    WelcomeModalWindowService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], WelcomeModalWindowService);
    return WelcomeModalWindowService;
}());



/***/ }),

/***/ "./src/classes/BFSHelper.ts":
/*!**********************************!*\
  !*** ./src/classes/BFSHelper.ts ***!
  \**********************************/
/*! exports provided: BFSHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BFSHelper", function() { return BFSHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tools/attributes-manager/attributes-manager.service */ "./src/app/services/tools/attributes-manager/attributes-manager.service.ts");
/* harmony import */ var src_constants_color_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/constants/color-constants */ "./src/constants/color-constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");
/* harmony import */ var _Coords2D__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Coords2D */ "./src/classes/Coords2D.ts");





var BFSHelper = /** @class */ (function () {
    function BFSHelper(maxX, maxY, context2D, attributesManagerService) {
        var _this = this;
        this.maxX = maxX;
        this.maxY = maxY;
        this.context2D = context2D;
        this.visited = new Set([]);
        this.queue = [];
        this.strokes = [];
        this.strokesSet = new Set([]);
        attributesManagerService.tolerance.subscribe(function (tolerance) {
            _this.tolerance = tolerance;
        });
    }
    BFSHelper.prototype.computeBFS = function (clickPosition) {
        var e_1, _a;
        var imageData = this.context2D.getImageData(0, 0, this.maxX, this.maxY);
        this.data = imageData.data;
        var targetColor = this.getPixelColor(clickPosition);
        this.queue.push(clickPosition);
        while (this.queue.length > 0) {
            var pixel = this.queue.pop();
            if (!this.isSameColor(this.getPixelColor(pixel), targetColor)) {
                continue;
            }
            var neighborPixels = [
                new _Coords2D__WEBPACK_IMPORTED_MODULE_4__["Coords2D"](pixel.x - 1, pixel.y),
                new _Coords2D__WEBPACK_IMPORTED_MODULE_4__["Coords2D"](pixel.x + 1, pixel.y),
                new _Coords2D__WEBPACK_IMPORTED_MODULE_4__["Coords2D"](pixel.x, pixel.y - 1),
                new _Coords2D__WEBPACK_IMPORTED_MODULE_4__["Coords2D"](pixel.x, pixel.y + 1),
            ];
            try {
                for (var neighborPixels_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](neighborPixels), neighborPixels_1_1 = neighborPixels_1.next(); !neighborPixels_1_1.done; neighborPixels_1_1 = neighborPixels_1.next()) {
                    var neighborPixel = neighborPixels_1_1.value;
                    if (this.visited.has(neighborPixel.x + " " + neighborPixel.y)) {
                        continue;
                    }
                    if (!this.isValidPosition(neighborPixel)) {
                        this.strokes.push(pixel);
                        this.strokesSet.add(pixel.x + " " + pixel.y);
                        break;
                    }
                    if (this.isSameColor(this.getPixelColor(neighborPixel), targetColor)) {
                        this.queue.push(neighborPixel);
                        this.visited.add(neighborPixel.x + " " + neighborPixel.y);
                    }
                    else {
                        this.strokes.push(neighborPixel);
                        this.strokesSet.add(neighborPixel.x + " " + neighborPixel.y);
                        break;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (neighborPixels_1_1 && !neighborPixels_1_1.done && (_a = neighborPixels_1.return)) _a.call(neighborPixels_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        this.createPathToFill();
    };
    BFSHelper.prototype.searchIn = function (neighborPixels, closestNeighbor) {
        var _this = this;
        neighborPixels.forEach(function (neighborPixel) {
            if (_this.strokesSet.has(neighborPixel.x + " " + neighborPixel.y) &&
                !_this.visited.has(neighborPixel.x + " " + neighborPixel.y)) {
                closestNeighbor.setCoords(neighborPixel);
            }
        });
    };
    BFSHelper.prototype.searchInDirectNeighbors = function (pixel, closestNeighbor) {
        var neighborPixels = [
            new _Coords2D__WEBPACK_IMPORTED_MODULE_4__["Coords2D"](pixel.x - 1, pixel.y),
            new _Coords2D__WEBPACK_IMPORTED_MODULE_4__["Coords2D"](pixel.x + 1, pixel.y),
            new _Coords2D__WEBPACK_IMPORTED_MODULE_4__["Coords2D"](pixel.x, pixel.y - 1),
            new _Coords2D__WEBPACK_IMPORTED_MODULE_4__["Coords2D"](pixel.x, pixel.y + 1),
        ];
        this.searchIn(neighborPixels, closestNeighbor);
    };
    BFSHelper.prototype.searchInIndirectNeighbors = function (pixel, closestNeighbor) {
        var neighborPixels = [
            new _Coords2D__WEBPACK_IMPORTED_MODULE_4__["Coords2D"](pixel.x - 1, pixel.y - 1),
            new _Coords2D__WEBPACK_IMPORTED_MODULE_4__["Coords2D"](pixel.x - 1, pixel.y + 1),
            new _Coords2D__WEBPACK_IMPORTED_MODULE_4__["Coords2D"](pixel.x + 1, pixel.y - 1),
            new _Coords2D__WEBPACK_IMPORTED_MODULE_4__["Coords2D"](pixel.x + 1, pixel.y + 1),
        ];
        this.searchIn(neighborPixels, closestNeighbor);
    };
    BFSHelper.prototype.findClosestPixel = function (pixel, closestNeighbor) {
        var _this = this;
        var closestNeighborDistance = Number.MAX_SAFE_INTEGER;
        this.strokes.forEach(function (el) {
            if (!_this.visited.has(el.x + " " + el.y)) {
                var distance = el.distanceTo(pixel);
                if (distance < closestNeighborDistance) {
                    closestNeighborDistance = distance;
                    closestNeighbor.setCoords(el);
                }
            }
        });
        if (closestNeighborDistance > src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["MAX_PATH_DISTANCE"] && this.tmpPath.length > 0) {
            this.pathsToFill.push(this.tmpPath);
            this.tmpPath = [];
        }
    };
    BFSHelper.prototype.updateClosestNeighbor = function (pixel, closestNeighbor) {
        this.searchInDirectNeighbors(pixel, closestNeighbor);
        if (!closestNeighbor.isValid()) {
            this.searchInIndirectNeighbors(pixel, closestNeighbor);
        }
        if (!closestNeighbor.isValid()) {
            this.findClosestPixel(pixel, closestNeighbor);
        }
    };
    BFSHelper.prototype.createPathToFill = function () {
        if (this.strokes.length === 0) {
            return;
        }
        this.pathsToFill = [];
        this.visited = new Set([]);
        this.tmpPath = [];
        var pixel = this.strokes[0];
        this.visited.add(pixel.x + " " + pixel.y);
        while (pixel.isValid()) {
            this.tmpPath.push(pixel.clone());
            var closestNeighbor = new _Coords2D__WEBPACK_IMPORTED_MODULE_4__["Coords2D"](-1, -1);
            this.updateClosestNeighbor(pixel, closestNeighbor);
            this.visited.add(closestNeighbor.x + " " + closestNeighbor.y);
            pixel.setCoords(closestNeighbor);
        }
        this.pathsToFill.push(this.tmpPath);
        this.tmpPath = [];
    };
    BFSHelper.prototype.isSameColor = function (color1, color2) {
        if (this.tolerance === 0) {
            return color1[0] === color2[0] && color1[1] === color2[1] && color1[2] === color2[2];
        }
        else {
            var difference = Math.abs(color1[0] - color2[0]) + Math.abs(color1[1] - color2[1]) + Math.abs(color1[2] - color2[2]);
            var sum = src_constants_color_constants__WEBPACK_IMPORTED_MODULE_2__["MAX_RGB_NUMBER"] * color1.length;
            return difference <= (this.tolerance / src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_3__["MAX_PERCENTAGE"]) * sum;
        }
    };
    BFSHelper.prototype.isValidPosition = function (pixel) {
        return pixel.x >= 0 && pixel.x < this.maxX && pixel.y >= 0 && pixel.y < this.maxY;
    };
    BFSHelper.prototype.getPixelColor = function (pixel) {
        var index = src_constants_color_constants__WEBPACK_IMPORTED_MODULE_2__["RGBA_ARRAY_LENGTH"] * (pixel.x + pixel.y * this.maxX);
        var r = this.data[index++];
        var g = this.data[index++];
        var b = this.data[index];
        return [r, g, b];
    };
    BFSHelper.ctorParameters = function () { return [
        { type: Number },
        { type: Number },
        { type: CanvasRenderingContext2D },
        { type: src_app_services_tools_attributes_manager_attributes_manager_service__WEBPACK_IMPORTED_MODULE_1__["AttributesManagerService"] }
    ]; };
    return BFSHelper;
}());



/***/ }),

/***/ "./src/classes/CanvasToBMP.ts":
/*!************************************!*\
  !*** ./src/classes/CanvasToBMP.ts ***!
  \************************************/
/*! exports provided: CanvasToBMP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasToBMP", function() { return CanvasToBMP; });
// Source : https://stackoverflow.com/questions/29652307/canvas-unable-to-generate-bmp-image-dataurl-in-chrome
/* tslint:disable */
var CanvasToBMP = /** @class */ (function () {
    function CanvasToBMP() {
        this.view = new DataView(new ArrayBuffer(0));
        this.pos = 0;
    }
    CanvasToBMP.prototype.toArrayBuffer = function (canvas) {
        var w = canvas.width;
        var h = canvas.height;
        var w4 = w * 4;
        var idata = canvas.getContext('2d').getImageData(0, 0, w, h);
        var data32 = new Uint32Array(idata.data.buffer); // 32-bit representation of canvas
        var stride = Math.floor((32 * w + 31) / 32) * 4; // row length incl. padding
        var pixelArraySize = stride * h; // total bitmap size
        var fileLength = 122 + pixelArraySize; // header size is known + bitmap
        var file = new ArrayBuffer(fileLength); // raw byte buffer (returned)
        this.view = new DataView(file); // handle endian, reg. width etc.
        var x = 0;
        var y = 0;
        var p = 0;
        var s = 0;
        var alpha = 0;
        var abgr = 0;
        this.setU16(0x4d42); // BM
        this.setU32(fileLength); // total length
        this.pos += 4; // skip unused fields
        this.setU32(0x7a); // offset to pixels
        // DIB header
        this.setU32(108); // header size
        this.setU32(w);
        this.setU32(-h >>> 0); // negative = top-to-bottom
        this.setU16(1); // 1 plane
        this.setU16(32); // 32-bits (RGBA)
        this.setU32(3); // no compression (BI_BITFIELDS, 3)
        this.setU32(pixelArraySize); // bitmap size incl. padding (stride x height)
        this.setU32(2835); // pixels/meter h (~72 DPI x 39.3701 inch/m)
        this.setU32(2835); // pixels/meter v
        this.pos += 8; // skip color/important colors
        this.setU32(0xff0000); // red channel mask
        this.setU32(0xff00); // green channel mask
        this.setU32(0xff); // blue channel mask
        this.setU32(0xff000000); // alpha channel mask
        this.setU32(0x57696e20); // " win" color space
        // bitmap data, change order of ABGR to BGRA
        while (y < h) {
            p = 0x7a + y * stride; // offset + stride x height
            x = 0;
            while (x < w4) {
                abgr = data32[s++]; // get ABGR
                alpha = abgr >>> 24; // alpha channel
                this.view.setUint32(p + x, (abgr << 8) | alpha); // set BGRA
                x += 4;
            }
            y++;
        }
        return file;
    };
    // helper method to move current buffer position
    CanvasToBMP.prototype.setU16 = function (data) {
        this.view.setUint16(this.pos, data, true);
        this.pos += 2;
    };
    CanvasToBMP.prototype.setU32 = function (data) {
        this.view.setUint32(this.pos, data, true);
        this.pos += 4;
    };
    CanvasToBMP.prototype.toBlob = function (canvas) {
        return new Blob([this.toArrayBuffer(canvas)], {
            type: 'image/bmp',
        });
    };
    CanvasToBMP.prototype.toDataURL = function (canvas) {
        var buffer = new Uint8Array(this.toArrayBuffer(canvas));
        var bs = '';
        var i = 0;
        var length = buffer.length;
        while (i < length) {
            bs += String.fromCharCode(buffer[i++]);
        }
        return 'data:image/bmp;base64,' + btoa(bs);
    };
    return CanvasToBMP;
}());

/* tslint:enable */


/***/ }),

/***/ "./src/classes/Coords2D.ts":
/*!*********************************!*\
  !*** ./src/classes/Coords2D.ts ***!
  \*********************************/
/*! exports provided: Coords2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coords2D", function() { return Coords2D; });
var Coords2D = /** @class */ (function () {
    function Coords2D(x, y) {
        this.x = x;
        this.y = y;
    }
    Coords2D.prototype.distanceTo = function (point) {
        return Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2);
    };
    Coords2D.prototype.isValid = function () {
        return this.x >= 0 && this.y >= 0;
    };
    Coords2D.prototype.setCoords = function (coords2D) {
        this.x = coords2D.x;
        this.y = coords2D.y;
    };
    Coords2D.prototype.clone = function () {
        return new Coords2D(this.x, this.y);
    };
    Coords2D.ctorParameters = function () { return [
        { type: Number },
        { type: Number }
    ]; };
    return Coords2D;
}());



/***/ }),

/***/ "./src/classes/DrawingState.ts":
/*!*************************************!*\
  !*** ./src/classes/DrawingState.ts ***!
  \*************************************/
/*! exports provided: DrawingState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingState", function() { return DrawingState; });
var DrawingState = /** @class */ (function () {
    function DrawingState(drawing) {
        this.drawing = drawing;
    }
    DrawingState.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DrawingState;
}());



/***/ }),

/***/ "./src/classes/FontInfos.ts":
/*!**********************************!*\
  !*** ./src/classes/FontInfos.ts ***!
  \**********************************/
/*! exports provided: FontInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontInfo", function() { return FontInfo; });
var FontInfo = /** @class */ (function () {
    function FontInfo() {
    }
    return FontInfo;
}());



/***/ }),

/***/ "./src/classes/Predicate.ts":
/*!**********************************!*\
  !*** ./src/classes/Predicate.ts ***!
  \**********************************/
/*! exports provided: Predicate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Predicate", function() { return Predicate; });
var Predicate = /** @class */ (function () {
    function Predicate() {
    }
    Predicate.prototype.eventIsValid = function (event, range) {
        var value = event.value;
        // @ts-ignore
        return value !== null ? this.isBetween(value, range) : false;
    };
    Predicate.prototype.isBetween = function (value, range) {
        // @ts-ignore
        return value >= range.Min && value <= range.Max;
    };
    return Predicate;
}());



/***/ }),

/***/ "./src/classes/StackTargetInfo.ts":
/*!****************************************!*\
  !*** ./src/classes/StackTargetInfo.ts ***!
  \****************************************/
/*! exports provided: StackTargetInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackTargetInfo", function() { return StackTargetInfo; });
var StackTargetInfo = /** @class */ (function () {
    function StackTargetInfo(targetPosition, toolName) {
        if (targetPosition !== undefined) {
            this.targetPosition = targetPosition;
        }
        if (toolName !== undefined) {
            this.toolName = toolName;
        }
    }
    StackTargetInfo.ctorParameters = function () { return [
        { type: undefined },
        { type: undefined }
    ]; };
    return StackTargetInfo;
}());



/***/ }),

/***/ "./src/classes/pipes/labelFilter.ts":
/*!******************************************!*\
  !*** ./src/classes/pipes/labelFilter.ts ***!
  \******************************************/
/*! exports provided: LabelFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelFilter", function() { return LabelFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LabelFilter = /** @class */ (function () {
    function LabelFilter() {
    }
    LabelFilter.prototype.transform = function (drawings, labelFilter) {
        if (labelFilter === undefined || labelFilter.length === 0) {
            return drawings;
        }
        else {
            labelFilter = labelFilter.toLowerCase().replace(/\s/g, '');
            var labelsFromFilter_1 = labelFilter.split(',').map(String);
            return drawings.filter(function (drawing) {
                var checkLabels = false;
                labelsFromFilter_1.forEach(function (labelFromFilter) {
                    if (drawing.drawingInfo.labels.filter(function (label) {
                        return label
                            .toLowerCase()
                            .replace(/\s/g, '')
                            .includes(labelFromFilter);
                    }).length !== 0) {
                        checkLabels = true;
                    }
                });
                return checkLabels;
            });
        }
    };
    LabelFilter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'labelFilter',
            pure: false,
        })
    ], LabelFilter);
    return LabelFilter;
}());



/***/ }),

/***/ "./src/classes/pipes/mySlice.ts":
/*!**************************************!*\
  !*** ./src/classes/pipes/mySlice.ts ***!
  \**************************************/
/*! exports provided: MySlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySlice", function() { return MySlice; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MySlice = /** @class */ (function () {
    function MySlice() {
    }
    MySlice.prototype.transform = function (drawings, nameFilter) {
        return nameFilter === '$tout' ? drawings : drawings.slice(0, 5);
    };
    MySlice = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'mySlice',
            pure: false,
        })
    ], MySlice);
    return MySlice;
}());



/***/ }),

/***/ "./src/classes/pipes/nameFilter.ts":
/*!*****************************************!*\
  !*** ./src/classes/pipes/nameFilter.ts ***!
  \*****************************************/
/*! exports provided: NameFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameFilter", function() { return NameFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NameFilter = /** @class */ (function () {
    function NameFilter() {
    }
    NameFilter.prototype.transform = function (drawings, nameFilter) {
        if (nameFilter === '$tout') {
            return drawings;
        }
        if (nameFilter === undefined || nameFilter.length === 0) {
            return drawings;
        }
        else {
            nameFilter = nameFilter.toLowerCase();
            return drawings.filter(function (drawing) {
                return drawing.drawingInfo.name.toLowerCase().includes(nameFilter);
            });
        }
    };
    NameFilter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'nameFilter',
            pure: false,
        })
    ], NameFilter);
    return NameFilter;
}());



/***/ }),

/***/ "./src/classes/pipes/toTrustHtml.ts":
/*!******************************************!*\
  !*** ./src/classes/pipes/toTrustHtml.ts ***!
  \******************************************/
/*! exports provided: ToTrustHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToTrustHtmlPipe", function() { return ToTrustHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var ToTrustHtmlPipe = /** @class */ (function () {
    function ToTrustHtmlPipe(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    ToTrustHtmlPipe.prototype.transform = function (svg) {
        return this.domSanitizer.bypassSecurityTrustHtml(svg);
    };
    ToTrustHtmlPipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    ToTrustHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'toTrustHtml' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], ToTrustHtmlPipe);
    return ToTrustHtmlPipe;
}());



/***/ }),

/***/ "./src/classes/selection/selection.ts":
/*!********************************************!*\
  !*** ./src/classes/selection/selection.ts ***!
  \********************************************/
/*! exports provided: Selection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");





var Selection = /** @class */ (function () {
    function Selection(renderer, svgReference) {
        this.selectedElements = new Set();
        this.invertSelectionBuffer = new Set();
        this.controlPoints = new Array(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["CONTROL_POINTS_AMOUNT"]);
        this.isActiveSelection = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.isAppended = false;
        this.renderer = renderer;
        this.svgRef = svgReference;
        this.initFullSelectionBox();
    }
    Selection.prototype.cleanUp = function () {
        this.removeFullSelectionBox();
        this.emptySelection();
        this.isAppended = false;
    };
    Selection.prototype.initFullSelectionBox = function () {
        this.selectionBox = this.renderer.createElement('rect', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
        this.renderer.setAttribute(this.selectionBox, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].title, src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["TITLE_ELEMENT_TO_REMOVE"]);
        this.renderer.setAttribute(this.selectionBox, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["SELECTION_COLOR"]);
        this.renderer.setAttribute(this.selectionBox, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].fill, 'none');
        for (var i = 0; i < src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["CONTROL_POINTS_AMOUNT"]; i++) {
            this.controlPoints[i] = this.renderer.createElement('circle', src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SVG_NS"]);
            this.renderer.setAttribute(this.controlPoints[i], src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].title, src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["TITLE_ELEMENT_TO_REMOVE"]);
            this.renderer.setAttribute(this.controlPoints[i], 'r', src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["CONTROL_POINT_RADIUS"].toString());
            this.renderer.setAttribute(this.controlPoints[i], src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["SELECTION_COLOR"]);
            this.renderer.setAttribute(this.controlPoints[i], src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].fill, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["SELECTION_COLOR"]);
            this.renderer.setAttribute(this.controlPoints[i], 'controlPointId', i.toString());
        }
    };
    Selection.prototype.removeFullSelectionBox = function () {
        var e_1, _a;
        if (this.isAppended) {
            this.renderer.removeChild(this.svgRef.nativeElement, this.selectionBox);
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.controlPoints), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var ctrlPt = _c.value;
                    this.renderer.removeChild(this.svgRef.nativeElement, ctrlPt);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.isAppended = false;
            this.isActiveSelection.next(false);
        }
    };
    Selection.prototype.appendFullSelectionBox = function () {
        var e_2, _a;
        if (!this.isAppended) {
            this.renderer.appendChild(this.svgRef.nativeElement, this.selectionBox);
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.controlPoints), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var ctrlPt = _c.value;
                    this.renderer.appendChild(this.svgRef.nativeElement, ctrlPt);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            this.isAppended = true;
            this.isActiveSelection.next(true);
        }
    };
    Selection.prototype.getDOMRect = function (el) {
        return el.getBoundingClientRect();
    };
    Selection.prototype.getControlPointCx = function (ctrlPt) {
        return ctrlPt.cx.baseVal.value;
    };
    Selection.prototype.getControlPointCy = function (ctrlPt) {
        return ctrlPt.cy.baseVal.value;
    };
    Selection.prototype.getControlPointR = function (ctrlPt) {
        return ctrlPt.r.baseVal.value;
    };
    Selection.prototype.getStrokeWidth = function (el) {
        if (el.getAttribute(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke_width)) {
            return parseInt(el.getAttribute(src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].stroke_width), src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_RADIX"]);
        }
        return 0;
    };
    Selection.prototype.mouseIsInSelectionBox = function (currentMouseCoords) {
        var selectionBoxLeft = this.getDOMRect(this.selectionBox).x + window.scrollX - src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_WIDTH"];
        var selectionBoxRight = this.getDOMRect(this.selectionBox).x +
            window.scrollX -
            src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_WIDTH"] +
            this.getDOMRect(this.selectionBox).width;
        var selectionBoxTop = this.getDOMRect(this.selectionBox).y + window.scrollY;
        var selectionBoxBottom = this.getDOMRect(this.selectionBox).y + window.scrollY + this.getDOMRect(this.selectionBox).height;
        return (currentMouseCoords.x >= selectionBoxLeft &&
            currentMouseCoords.x <= selectionBoxRight &&
            currentMouseCoords.y >= selectionBoxTop &&
            currentMouseCoords.y <= selectionBoxBottom &&
            this.isAppended);
    };
    Selection.prototype.mouseIsInControlPoint = function (currentMouseCoords) {
        var e_3, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.controlPoints), _c = _b.next(); !_c.done; _c = _b.next()) {
                var ctrlPt = _c.value;
                var cx = this.getControlPointCx(ctrlPt);
                var cy = this.getControlPointCy(ctrlPt);
                var r = this.getControlPointR(ctrlPt);
                var distX = currentMouseCoords.x - cx;
                var distY = currentMouseCoords.y - cy;
                if (Math.abs(distX) <= r && Math.abs(distY) <= r && this.isAppended) {
                    this.activeControlPoint = ctrlPt;
                    return true;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return false;
    };
    Selection.prototype.findLeftMostCoord = function () {
        var e_4, _a;
        var leftCoords = new Array();
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.selectedElements), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                leftCoords.push(this.getDOMRect(el).x + window.scrollX - src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_WIDTH"] - this.getStrokeWidth(el) / 2);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return Math.min.apply(Math, leftCoords);
    };
    Selection.prototype.findRightMostCoord = function () {
        var e_5, _a;
        var rightCoords = new Array();
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.selectedElements), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                rightCoords.push(this.getDOMRect(el).x +
                    window.scrollX -
                    src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_WIDTH"] +
                    this.getDOMRect(el).width +
                    this.getStrokeWidth(el) / 2);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return Math.max.apply(Math, rightCoords);
    };
    Selection.prototype.findTopMostCoord = function () {
        var e_6, _a;
        var topCoords = new Array();
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.selectedElements), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                topCoords.push(this.getDOMRect(el).y + window.scrollY - this.getStrokeWidth(el) / 2);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return Math.min.apply(Math, topCoords);
    };
    Selection.prototype.findBottomMostCoord = function () {
        var e_7, _a;
        var bottomCoords = new Array();
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.selectedElements), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                bottomCoords.push(this.getDOMRect(el).y + window.scrollY + this.getDOMRect(el).height + this.getStrokeWidth(el) / 2);
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return Math.max.apply(Math, bottomCoords);
    };
    Selection.prototype.updateFullSelectionBox = function () {
        if (!(this.selectedElements.size > 0)) {
            this.removeFullSelectionBox();
            return;
        }
        var left = this.findLeftMostCoord();
        var right = this.findRightMostCoord();
        var top = this.findTopMostCoord();
        var bottom = this.findBottomMostCoord();
        this.renderer.setAttribute(this.selectionBox, 'x', left.toString());
        this.renderer.setAttribute(this.selectionBox, 'y', top.toString());
        this.renderer.setAttribute(this.selectionBox, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].width, (right - left).toString());
        this.renderer.setAttribute(this.selectionBox, src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].height, (bottom - top).toString());
        this.updateControlPoints();
    };
    Selection.prototype.updateControlPoints = function () {
        var positionMap = new Map();
        positionMap.set(0, [
            this.selectionBox.x.baseVal.value.toString(),
            this.selectionBox.y.baseVal.value.toString(),
        ]);
        positionMap.set(1, [
            (this.selectionBox.x.baseVal.value + this.selectionBox.width.baseVal.value / 2).toString(),
            this.selectionBox.y.baseVal.value.toString(),
        ]);
        positionMap.set(2, [
            (this.selectionBox.x.baseVal.value + this.selectionBox.width.baseVal.value).toString(),
            this.selectionBox.y.baseVal.value.toString(),
        ]);
        positionMap.set(3, [
            (this.selectionBox.x.baseVal.value + this.selectionBox.width.baseVal.value).toString(),
            (this.selectionBox.y.baseVal.value + this.selectionBox.height.baseVal.value / 2).toString(),
        ]);
        positionMap.set(4, [
            (this.selectionBox.x.baseVal.value + this.selectionBox.width.baseVal.value).toString(),
            (this.selectionBox.y.baseVal.value + this.selectionBox.height.baseVal.value).toString(),
        ]);
        positionMap.set(5, [
            (this.selectionBox.x.baseVal.value + this.selectionBox.width.baseVal.value / 2).toString(),
            (this.selectionBox.y.baseVal.value + this.selectionBox.height.baseVal.value).toString(),
        ]);
        positionMap.set(6, [
            this.selectionBox.x.baseVal.value.toString(),
            (this.selectionBox.y.baseVal.value + this.selectionBox.height.baseVal.value).toString(),
        ]);
        positionMap.set(7, [
            this.selectionBox.x.baseVal.value.toString(),
            (this.selectionBox.y.baseVal.value + this.selectionBox.height.baseVal.value / 2).toString(),
        ]);
        for (var index = 0; index < src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["CONTROL_POINTS_AMOUNT"]; ++index) {
            this.renderer.setAttribute(this.controlPoints[index], src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].cx, positionMap.get(index)[0]);
            this.renderer.setAttribute(this.controlPoints[index], src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_4__["HTML_ATTRIBUTE"].cy, positionMap.get(index)[1]);
        }
    };
    Selection.prototype.addToSelection = function (element) {
        this.selectedElements.add(element);
        this.updateFullSelectionBox();
        if (this.selectedElements.size > 0) {
            this.appendFullSelectionBox();
        }
    };
    Selection.prototype.invertAddToSelection = function (element) {
        if (this.selectedElements.has(element)) {
            this.selectedElements.delete(element);
        }
        else {
            this.selectedElements.add(element);
        }
        this.updateFullSelectionBox();
        if (this.selectedElements.size > 0) {
            this.appendFullSelectionBox();
        }
    };
    Selection.prototype.removeFromSelection = function (element) {
        this.selectedElements.delete(element);
        this.updateFullSelectionBox();
        if (this.selectedElements.size === 0) {
            this.removeFullSelectionBox();
        }
    };
    Selection.prototype.emptySelection = function () {
        this.removeFullSelectionBox();
        this.selectedElements.clear();
    };
    Selection.prototype.handleSelection = function (element, isInSelectionRect) {
        if (isInSelectionRect) {
            this.addToSelection(element);
        }
        else {
            this.removeFromSelection(element);
        }
    };
    Selection.prototype.handleInvertSelection = function (element, isInSelectionRect) {
        if (isInSelectionRect && this.selectedElements.has(element) && !this.invertSelectionBuffer.has(element)) {
            this.invertSelectionBuffer.add(element);
            this.removeFromSelection(element);
        }
        else if (isInSelectionRect &&
            !this.selectedElements.has(element) &&
            !this.invertSelectionBuffer.has(element)) {
            this.invertSelectionBuffer.add(element);
            this.addToSelection(element);
        }
        else if (!isInSelectionRect &&
            !this.selectedElements.has(element) &&
            this.invertSelectionBuffer.has(element)) {
            this.invertSelectionBuffer.delete(element);
            this.addToSelection(element);
        }
        else if (!isInSelectionRect &&
            this.selectedElements.has(element) &&
            this.invertSelectionBuffer.has(element)) {
            this.invertSelectionBuffer.delete(element);
            this.removeFromSelection(element);
        }
    };
    Selection.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    return Selection;
}());



/***/ }),

/***/ "./src/classes/svggelement-info.ts":
/*!*****************************************!*\
  !*** ./src/classes/svggelement-info.ts ***!
  \*****************************************/
/*! exports provided: SVGGElementInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGGElementInfo", function() { return SVGGElementInfo; });
var SVGGElementInfo = /** @class */ (function () {
    function SVGGElementInfo(borderColor, borderWidth) {
        if (borderColor !== undefined) {
            this.borderColor = borderColor;
        }
        if (borderWidth !== undefined) {
            this.borderWidth = borderWidth;
        }
    }
    SVGGElementInfo.ctorParameters = function () { return [
        { type: undefined },
        { type: undefined }
    ]; };
    return SVGGElementInfo;
}());



/***/ }),

/***/ "./src/classes/textStyle/textCursor.ts":
/*!*********************************************!*\
  !*** ./src/classes/textStyle/textCursor.ts ***!
  \*********************************************/
/*! exports provided: TextCursor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextCursor", function() { return TextCursor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/constants/tool-constants */ "./src/constants/tool-constants.ts");



var TextCursor = /** @class */ (function () {
    function TextCursor(renderer, textObservable) {
        var _this = this;
        this.renderer = renderer;
        this.currentCursorIndex = 0;
        textObservable.subscribe(function (text) {
            _this.text = text;
        });
    }
    TextCursor.prototype.swapInCurrentLine = function (offset) {
        var buffer = this.text.split('');
        buffer[this.currentCursorIndex] = buffer[this.currentCursorIndex + offset];
        buffer[this.currentCursorIndex + offset] = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["TEXT_CURSOR"];
        return buffer.join('').toString();
    };
    TextCursor.prototype.swapToAnotherLine = function (offset, currentLineRef, tspans) {
        var nextLinePosition = this.findLinePosition(currentLineRef[0], tspans) + offset;
        if (nextLinePosition > tspans.length - 1 || nextLinePosition < 0) {
            return this.text;
        }
        this.text = this.erase();
        if (this.text === '') {
            this.text += src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["TEXT_LINEBREAK"];
        }
        this.renderer.setProperty(currentLineRef[0], src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTRIBUTE"].innerHTML, this.text);
        currentLineRef[0] = tspans[nextLinePosition];
        this.text = currentLineRef[0].textContent;
        if (this.text === src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["TEXT_LINEBREAK"]) {
            this.text = '';
        }
        offset < 0 ? (this.text += src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["TEXT_CURSOR"]) : (this.text = src_constants_tool_constants__WEBPACK_IMPORTED_MODULE_2__["TEXT_CURSOR"] + this.text);
        return this.text;
    };
    TextCursor.prototype.erase = function () {
        var buffer = this.text.split('');
        buffer.splice(this.currentCursorIndex, 1);
        return buffer.join('').toString();
    };
    TextCursor.prototype.findLinePosition = function (currentLine, tspans) {
        return tspans.findIndex(function (el) {
            return el === currentLine;
        });
    };
    TextCursor.prototype.leftSideText = function () {
        return this.text.slice(0, this.currentCursorIndex);
    };
    TextCursor.prototype.rightSideText = function () {
        return this.text.slice(this.currentCursorIndex + 1);
    };
    TextCursor.prototype.isAtStartOfLine = function () {
        return this.currentCursorIndex === 0;
    };
    TextCursor.prototype.isAtEndOfLine = function () {
        return this.currentCursorIndex === this.text.length - 1;
    };
    TextCursor.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"] }
    ]; };
    return TextCursor;
}());



/***/ }),

/***/ "./src/constants/color-constants.ts":
/*!******************************************!*\
  !*** ./src/constants/color-constants.ts ***!
  \******************************************/
/*! exports provided: RGBA_ARRAY_LENGTH, DEFAULT_TRANSPARENT, DEFAULT_GRAY_0, DEFAULT_GRAY_1, DEFAULT_WHITE, COLOR_TYPE, MAX_RGB_NUMBER, MIN_RGB_NUMBER, MAX_NUMBER_OF_LAST_COLORS, DEFAULT_RED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGBA_ARRAY_LENGTH", function() { return RGBA_ARRAY_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TRANSPARENT", function() { return DEFAULT_TRANSPARENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_GRAY_0", function() { return DEFAULT_GRAY_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_GRAY_1", function() { return DEFAULT_GRAY_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_WHITE", function() { return DEFAULT_WHITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_TYPE", function() { return COLOR_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_RGB_NUMBER", function() { return MAX_RGB_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_RGB_NUMBER", function() { return MIN_RGB_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_NUMBER_OF_LAST_COLORS", function() { return MAX_NUMBER_OF_LAST_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RED", function() { return DEFAULT_RED; });
var COLOR_TYPE;
(function (COLOR_TYPE) {
    COLOR_TYPE["backgroundColor"] = "background-color";
    COLOR_TYPE["primaryColor"] = "primary-color";
    COLOR_TYPE["secondaryColor"] = "secondary-color";
})(COLOR_TYPE || (COLOR_TYPE = {}));
var DEFAULT_WHITE = 'ffffffff';
var DEFAULT_TRANSPARENT = 'ffffff00';
var DEFAULT_GRAY_0 = 'bbbbbbff';
var DEFAULT_GRAY_1 = '888888ff';
var DEFAULT_RED = 'ff0000ff';
var MAX_RGB_NUMBER = 255;
var MIN_RGB_NUMBER = 0;
var MAX_NUMBER_OF_LAST_COLORS = 10;
var RGBA_ARRAY_LENGTH = 4;



/***/ }),

/***/ "./src/constants/constants.ts":
/*!************************************!*\
  !*** ./src/constants/constants.ts ***!
  \************************************/
/*! exports provided: MAX_NB_LABELS, GIFS, MAX_DRAWING_LENGTH, SIDEBAR_WIDTH, SVG_NS, KEYS, MOUSE, PREDICATE, ELEMENTS_BEFORE_LAST_CIRCLE, NUMBER_OF_MS, TITLE_ELEMENT_TO_REMOVE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_NB_LABELS", function() { return MAX_NB_LABELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GIFS", function() { return GIFS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_DRAWING_LENGTH", function() { return MAX_DRAWING_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_WIDTH", function() { return SIDEBAR_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVG_NS", function() { return SVG_NS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYS", function() { return KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOUSE", function() { return MOUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREDICATE", function() { return PREDICATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEMENTS_BEFORE_LAST_CIRCLE", function() { return ELEMENTS_BEFORE_LAST_CIRCLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMBER_OF_MS", function() { return NUMBER_OF_MS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLE_ELEMENT_TO_REMOVE", function() { return TITLE_ELEMENT_TO_REMOVE; });
/* harmony import */ var src_classes_Predicate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/classes/Predicate */ "./src/classes/Predicate.ts");

var KEYS;
(function (KEYS) {
    KEYS["Shift"] = "Shift";
    KEYS["Control"] = "Control";
    KEYS["Alt"] = "Alt";
    KEYS["Digit1"] = "1";
    KEYS["Digit2"] = "2";
    KEYS["Digit3"] = "3";
    KEYS["a"] = "a";
    KEYS["b"] = "b";
    KEYS["c"] = "c";
    KEYS["e"] = "e";
    KEYS["g"] = "g";
    KEYS["i"] = "i";
    KEYS["l"] = "l";
    KEYS["m"] = "m";
    KEYS["o"] = "o";
    KEYS["p"] = "p";
    KEYS["r"] = "r";
    KEYS["s"] = "s";
    KEYS["t"] = "t";
    KEYS["w"] = "w";
    KEYS["y"] = "y";
    KEYS["z"] = "z";
    KEYS["Z"] = "Z";
    KEYS["x"] = "x";
    KEYS["v"] = "v";
    KEYS["d"] = "d";
    KEYS["plus"] = "+";
    KEYS["minus"] = "-";
    KEYS["delete"] = "Delete";
    KEYS["Escape"] = "Escape";
    KEYS["Backspace"] = "Backspace";
    KEYS["Enter"] = "Enter";
    KEYS["ArrowLeft"] = "ArrowLeft";
    KEYS["ArrowRight"] = "ArrowRight";
    KEYS["Space"] = " ";
    KEYS["SmallerThan"] = "<";
    KEYS["GreaterThan"] = ">";
})(KEYS || (KEYS = {}));
var MOUSE;
(function (MOUSE) {
    MOUSE[MOUSE["LeftButton"] = 0] = "LeftButton";
    MOUSE[MOUSE["MouseWheel"] = 1] = "MouseWheel";
    MOUSE[MOUSE["RightButton"] = 2] = "RightButton";
})(MOUSE || (MOUSE = {}));
var NUMBER_OF_MS;
(function (NUMBER_OF_MS) {
    NUMBER_OF_MS[NUMBER_OF_MS["day"] = 86400000] = "day";
    NUMBER_OF_MS[NUMBER_OF_MS["hours"] = 3600000] = "hours";
    NUMBER_OF_MS[NUMBER_OF_MS["minutes"] = 60000] = "minutes";
    NUMBER_OF_MS[NUMBER_OF_MS["seconds"] = 1000] = "seconds";
})(NUMBER_OF_MS || (NUMBER_OF_MS = {}));
var SIDEBAR_WIDTH = 360;
var ELEMENTS_BEFORE_LAST_CIRCLE = 1;
var MAX_DRAWING_LENGTH = 5;
var SVG_NS = 'http://www.w3.org/2000/svg';
var PREDICATE = new src_classes_Predicate__WEBPACK_IMPORTED_MODULE_0__["Predicate"]();
var GIFS = ['/assets/gifs/love.gif', '/assets/gifs/money.gif', '/assets/gifs/rolling.gif'];
var MAX_NB_LABELS = 6;
var TITLE_ELEMENT_TO_REMOVE = 'element-to-remove';



/***/ }),

/***/ "./src/constants/tool-constants.ts":
/*!*****************************************!*\
  !*** ./src/constants/tool-constants.ts ***!
  \*****************************************/
/*! exports provided: MAX_PERCENTAGE, MAX_PATH_DISTANCE, TOLERANCE, FILL_STROKE_WIDTH, MAX_NORMAL_LENGTH, CONTROL_SHORTCUTS, TOOL_NAME_SHORTCUTS, HTML_ATTRIBUTE, TOOLS_BUTTON_INFO, TRACING_BUTTON_INFO, SHAPE_BUTTON_INFO, FILES_BUTTON_INFO, BRUSH_STYLE, BRUSH_STYLES, CLIPBOARD_BUTTON_INFO, THICKNESS, TRACE_TYPE, TOOL_NAME, OFFSET_STEP, POLYGONE_FORM_TYPE, POLYGON_SIDES, POLYGON_RADIUS_CORRECTION, POLYGON_OFFSET_ANGLES, STAMP_SCALING, STAMP_TYPES, STAMPS_MAP, NO_STAMP, BASE64_STAMPS_MAP, STAMP_NAMES, LINE_STROKE_TYPE, LINE_JOINT_TYPE, GRID_SIZE, GRID_OPACITY, GRID_SIZE_INCREMENT, GRID_SIZE_DECREMENT, FILE_TYPE, PEN_WIDTH_FACTOR, ERASER_SIZE, TRACING_TOOL_POSITION, FONTS, FONT_SIZE, FONT_ALIGN, FONT_STYLE, FONT_WEIGHT, TEXT_CURSOR, TEXT_SPACE, TEXT_LINEBREAK, ERASER_STROKE_WIDTH, ADDITIONAL_BORDER_WIDTH, RESET_POSITION_NUMBER, DEFAULT_RADIX, MAX_BMP_SIZE, SHAPE_TOOL_POSITION, SNACKBAR_DURATION, STAMP_BASE_HEIGHT, STAMP_BASE_WIDTH, CONTROL_POINTS_AMOUNT, CONTROL_POINT_RADIUS, SELECTION_COLOR, CONTROL_POINTS, TOP_CONTROL_POINTS, CENTER_CONTROL_POINTS, BOTTOM_CONTROL_POINTS, MAGNETISM_STATE, ROTATION_ANGLE, QUILL_STROKE_WIDTH, SPRAY_DIAMETER, SPRAY_INTERVAL, SPRAYER_STROKE_WIDTH, SPRAY_PARTICLE_THICKNESS, MAX_CHARS_IN_PATH, CIRCLES_TO_APPEND */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_PERCENTAGE", function() { return MAX_PERCENTAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_PATH_DISTANCE", function() { return MAX_PATH_DISTANCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOLERANCE", function() { return TOLERANCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILL_STROKE_WIDTH", function() { return FILL_STROKE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_NORMAL_LENGTH", function() { return MAX_NORMAL_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROL_SHORTCUTS", function() { return CONTROL_SHORTCUTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOL_NAME_SHORTCUTS", function() { return TOOL_NAME_SHORTCUTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTRIBUTE", function() { return HTML_ATTRIBUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLS_BUTTON_INFO", function() { return TOOLS_BUTTON_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRACING_BUTTON_INFO", function() { return TRACING_BUTTON_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHAPE_BUTTON_INFO", function() { return SHAPE_BUTTON_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILES_BUTTON_INFO", function() { return FILES_BUTTON_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BRUSH_STYLE", function() { return BRUSH_STYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BRUSH_STYLES", function() { return BRUSH_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIPBOARD_BUTTON_INFO", function() { return CLIPBOARD_BUTTON_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THICKNESS", function() { return THICKNESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRACE_TYPE", function() { return TRACE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOL_NAME", function() { return TOOL_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OFFSET_STEP", function() { return OFFSET_STEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POLYGONE_FORM_TYPE", function() { return POLYGONE_FORM_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POLYGON_SIDES", function() { return POLYGON_SIDES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POLYGON_RADIUS_CORRECTION", function() { return POLYGON_RADIUS_CORRECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POLYGON_OFFSET_ANGLES", function() { return POLYGON_OFFSET_ANGLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STAMP_SCALING", function() { return STAMP_SCALING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STAMP_TYPES", function() { return STAMP_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STAMPS_MAP", function() { return STAMPS_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO_STAMP", function() { return NO_STAMP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE64_STAMPS_MAP", function() { return BASE64_STAMPS_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STAMP_NAMES", function() { return STAMP_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINE_STROKE_TYPE", function() { return LINE_STROKE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINE_JOINT_TYPE", function() { return LINE_JOINT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRID_SIZE", function() { return GRID_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRID_OPACITY", function() { return GRID_OPACITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRID_SIZE_INCREMENT", function() { return GRID_SIZE_INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRID_SIZE_DECREMENT", function() { return GRID_SIZE_DECREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILE_TYPE", function() { return FILE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PEN_WIDTH_FACTOR", function() { return PEN_WIDTH_FACTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERASER_SIZE", function() { return ERASER_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRACING_TOOL_POSITION", function() { return TRACING_TOOL_POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONTS", function() { return FONTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_SIZE", function() { return FONT_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_ALIGN", function() { return FONT_ALIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_STYLE", function() { return FONT_STYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_WEIGHT", function() { return FONT_WEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_CURSOR", function() { return TEXT_CURSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_SPACE", function() { return TEXT_SPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_LINEBREAK", function() { return TEXT_LINEBREAK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERASER_STROKE_WIDTH", function() { return ERASER_STROKE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDITIONAL_BORDER_WIDTH", function() { return ADDITIONAL_BORDER_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_POSITION_NUMBER", function() { return RESET_POSITION_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RADIX", function() { return DEFAULT_RADIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_BMP_SIZE", function() { return MAX_BMP_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHAPE_TOOL_POSITION", function() { return SHAPE_TOOL_POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SNACKBAR_DURATION", function() { return SNACKBAR_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STAMP_BASE_HEIGHT", function() { return STAMP_BASE_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STAMP_BASE_WIDTH", function() { return STAMP_BASE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROL_POINTS_AMOUNT", function() { return CONTROL_POINTS_AMOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROL_POINT_RADIUS", function() { return CONTROL_POINT_RADIUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTION_COLOR", function() { return SELECTION_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROL_POINTS", function() { return CONTROL_POINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOP_CONTROL_POINTS", function() { return TOP_CONTROL_POINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CENTER_CONTROL_POINTS", function() { return CENTER_CONTROL_POINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOTTOM_CONTROL_POINTS", function() { return BOTTOM_CONTROL_POINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAGNETISM_STATE", function() { return MAGNETISM_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROTATION_ANGLE", function() { return ROTATION_ANGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUILL_STROKE_WIDTH", function() { return QUILL_STROKE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPRAY_DIAMETER", function() { return SPRAY_DIAMETER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPRAY_INTERVAL", function() { return SPRAY_INTERVAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPRAYER_STROKE_WIDTH", function() { return SPRAYER_STROKE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPRAY_PARTICLE_THICKNESS", function() { return SPRAY_PARTICLE_THICKNESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_CHARS_IN_PATH", function() { return MAX_CHARS_IN_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CIRCLES_TO_APPEND", function() { return CIRCLES_TO_APPEND; });
var CONTROL_POINTS_AMOUNT = 8;
var CONTROL_POINT_RADIUS = 10;
var SELECTION_COLOR = '#ff5722';
var NO_STAMP = '';
var STAMP_BASE_WIDTH = 50;
var STAMP_BASE_HEIGHT = 50;
var ROTATION_ANGLE;
(function (ROTATION_ANGLE) {
    ROTATION_ANGLE[ROTATION_ANGLE["Base"] = 15] = "Base";
    ROTATION_ANGLE[ROTATION_ANGLE["Alter"] = 1] = "Alter";
    ROTATION_ANGLE[ROTATION_ANGLE["Min"] = -360] = "Min";
    ROTATION_ANGLE[ROTATION_ANGLE["Default"] = 0] = "Default";
    ROTATION_ANGLE[ROTATION_ANGLE["Max"] = 360] = "Max";
})(ROTATION_ANGLE || (ROTATION_ANGLE = {}));
var QUILL_STROKE_WIDTH;
(function (QUILL_STROKE_WIDTH) {
    QUILL_STROKE_WIDTH["initialValue"] = "1";
    QUILL_STROKE_WIDTH["preview"] = "2";
})(QUILL_STROKE_WIDTH || (QUILL_STROKE_WIDTH = {}));
var OFFSET_STEP = 10;
var TOOL_NAME;
(function (TOOL_NAME) {
    TOOL_NAME["TracingTool"] = "Outil de tra\u00E7age";
    TOOL_NAME["ShapeTool"] = "Outil de forme";
    TOOL_NAME["Selection"] = "S\u00E9lection";
    TOOL_NAME["SelectAll"] = "Tout s\u00E9lectionner";
    TOOL_NAME["Copy"] = "Copier";
    TOOL_NAME["Cut"] = "Couper";
    TOOL_NAME["Duplicate"] = "Dupliquer";
    TOOL_NAME["Paste"] = "Coller";
    TOOL_NAME["Delete"] = "Supprimer";
    TOOL_NAME["Pencil"] = "Crayon";
    TOOL_NAME["Brush"] = "Pinceau";
    TOOL_NAME["Quill"] = "Plume";
    TOOL_NAME["Pen"] = "Stylo";
    TOOL_NAME["SprayCan"] = "A\u00E9rosol";
    TOOL_NAME["Line"] = "Ligne";
    TOOL_NAME["Rectangle"] = "Rectangle";
    TOOL_NAME["Polygon"] = "Polygone";
    TOOL_NAME["Ellipsis"] = "Ellipse";
    TOOL_NAME["ColorApplicator"] = "Applicateur de couleur";
    TOOL_NAME["Fill"] = "Sceau de peinture";
    TOOL_NAME["Dropper"] = "S\u00E9lecteur de couleur";
    TOOL_NAME["Eraser"] = "Efface";
    TOOL_NAME["Text"] = "Zone de texte";
    TOOL_NAME["Stamp"] = "\u00C9tampe";
    TOOL_NAME["Grid"] = "Grille";
    TOOL_NAME["Undo"] = "Annuler";
    TOOL_NAME["Redo"] = "Refaire";
    TOOL_NAME["NewDrawing"] = "Nouveau dessin";
    TOOL_NAME["Save"] = "Sauvegarder";
    TOOL_NAME["ArtGallery"] = "Gallerie de dessin";
    TOOL_NAME["Export"] = "Exporter";
    TOOL_NAME["Magnetism"] = "Magn\u00E9tisme";
})(TOOL_NAME || (TOOL_NAME = {}));
var THICKNESS;
(function (THICKNESS) {
    THICKNESS[THICKNESS["Min"] = 2] = "Min";
    THICKNESS[THICKNESS["Default"] = 10] = "Default";
    THICKNESS[THICKNESS["Max"] = 100] = "Max";
})(THICKNESS || (THICKNESS = {}));
var TOLERANCE;
(function (TOLERANCE) {
    TOLERANCE[TOLERANCE["Min"] = 0] = "Min";
    TOLERANCE[TOLERANCE["Default"] = 0] = "Default";
    TOLERANCE[TOLERANCE["Max"] = 100] = "Max";
})(TOLERANCE || (TOLERANCE = {}));
var PEN_WIDTH_FACTOR = 5;
var TRACE_TYPE;
(function (TRACE_TYPE) {
    TRACE_TYPE["Outline"] = "Contour";
    TRACE_TYPE["Full"] = "Plein";
    TRACE_TYPE["Both"] = "Plein avec contour";
})(TRACE_TYPE || (TRACE_TYPE = {}));
var POLYGONE_FORM_TYPE = new Map([
    [3, 'Triangle'],
    [4, 'Quadrilatère'],
    [5, 'Pentagone'],
    [6, 'Hexagone'],
    [7, 'Heptagone'],
    [8, 'Octogone'],
    [9, 'Nonagone'],
    [10, 'Décagone'],
    [11, 'Hendécagone'],
    [12, 'Dodécagone'],
]);
var POLYGON_SIDES;
(function (POLYGON_SIDES) {
    POLYGON_SIDES[POLYGON_SIDES["Min"] = 3] = "Min";
    POLYGON_SIDES[POLYGON_SIDES["Default"] = 3] = "Default";
    POLYGON_SIDES[POLYGON_SIDES["Max"] = 12] = "Max";
})(POLYGON_SIDES || (POLYGON_SIDES = {}));
var GRID_SIZE;
(function (GRID_SIZE) {
    GRID_SIZE[GRID_SIZE["Min"] = 5] = "Min";
    GRID_SIZE[GRID_SIZE["Default"] = 10] = "Default";
    GRID_SIZE[GRID_SIZE["Max"] = 100] = "Max";
})(GRID_SIZE || (GRID_SIZE = {}));
var GRID_OPACITY;
(function (GRID_OPACITY) {
    GRID_OPACITY[GRID_OPACITY["Min"] = 0.2] = "Min";
    GRID_OPACITY[GRID_OPACITY["Max"] = 1] = "Max";
})(GRID_OPACITY || (GRID_OPACITY = {}));
var GRID_SIZE_INCREMENT = 5;
var GRID_SIZE_DECREMENT = 5;
var TOOLS_BUTTON_INFO = [
    { iconName: 'fas fa-mouse-pointer', tooltipName: TOOL_NAME.Selection, shortcut: '(S)' },
    { iconName: 'fas fa-pencil-alt', tooltipName: TOOL_NAME.TracingTool, shortcut: '(clique droit)' },
    { iconName: 'far fa-square', tooltipName: TOOL_NAME.ShapeTool, shortcut: '(clique droit)' },
    { iconName: 'fas fa-slash', tooltipName: TOOL_NAME.Line, shortcut: '(L)' },
    { iconName: 'fas fa-font', tooltipName: TOOL_NAME.Text, shortcut: '(T)' },
    { iconName: 'fas fa-fill', tooltipName: TOOL_NAME.ColorApplicator, shortcut: '(R)' },
    { iconName: 'fas fa-fill-drip', tooltipName: TOOL_NAME.Fill, shortcut: '(B)' },
    { iconName: 'fas fa-eraser', tooltipName: TOOL_NAME.Eraser, shortcut: '(E)' },
    { iconName: 'fas fa-eye-dropper', tooltipName: TOOL_NAME.Dropper, shortcut: '(I)' },
    { iconName: 'fas fa-stamp', tooltipName: TOOL_NAME.Stamp, shortcut: '' },
    { iconName: 'fas fa-border-all', tooltipName: TOOL_NAME.Grid, shortcut: '' },
    { iconName: 'fas fa-magnet', tooltipName: TOOL_NAME.Magnetism, shortcut: '(M)' },
];
var TRACING_BUTTON_INFO = [
    { iconName: 'fas fa-pencil-alt', tooltipName: TOOL_NAME.Pencil, shortcut: '(C)' },
    { iconName: 'fas fa-paint-brush', tooltipName: TOOL_NAME.Brush, shortcut: '(W)' },
    { iconName: 'fas fa-pen-nib', tooltipName: TOOL_NAME.Quill, shortcut: '(P)' },
    { iconName: 'fas fa-pen-alt', tooltipName: TOOL_NAME.Pen, shortcut: '(Y)' },
    { iconName: 'fas fa-spray-can', tooltipName: TOOL_NAME.SprayCan, shortcut: '(A)' },
];
var SHAPE_BUTTON_INFO = [
    { iconName: 'far fa-square', tooltipName: TOOL_NAME.Rectangle, shortcut: '(1)' },
    { iconName: 'far fa-circle', tooltipName: TOOL_NAME.Ellipsis, shortcut: '(2)' },
    { iconName: 'fas fa-draw-polygon', tooltipName: TOOL_NAME.Polygon, shortcut: '(3)' },
];
var CLIPBOARD_BUTTON_INFO = [
    { iconName: 'fas fa-object-group', tooltipName: TOOL_NAME.SelectAll, shortcut: '(Ctrl-A)' },
    { iconName: 'fas fa-paste', tooltipName: TOOL_NAME.Paste, shortcut: '(Ctrl-V)' },
    { iconName: 'fas fa-clone', tooltipName: TOOL_NAME.Duplicate, shortcut: '(Ctrl-D)' },
    { iconName: 'fas fa-cut', tooltipName: TOOL_NAME.Cut, shortcut: '(Ctrl-X)' },
    { iconName: 'fas fa-copy', tooltipName: TOOL_NAME.Copy, shortcut: '(Ctrl-C)' },
    { iconName: 'fas fa-trash-alt', tooltipName: TOOL_NAME.Delete, shortcut: '(Supprimer)' },
];
var FILES_BUTTON_INFO = [
    { iconName: 'fas fa-undo-alt', tooltipName: TOOL_NAME.Undo, shortcut: '(Ctrl-Z)' },
    { iconName: 'fas fa-redo-alt', tooltipName: TOOL_NAME.Redo, shortcut: '(Ctrl-Shift-Z)' },
    { iconName: 'fas fa-plus', tooltipName: TOOL_NAME.NewDrawing, shortcut: '(Ctrl-O)' },
    { iconName: 'far fa-save', tooltipName: TOOL_NAME.Save, shortcut: '(Ctrl-S)' },
    { iconName: 'fas fa-folder-open', tooltipName: TOOL_NAME.ArtGallery, shortcut: '(Ctrl-G)' },
    { iconName: 'fas fa-file-export', tooltipName: TOOL_NAME.Export, shortcut: '(Ctrl-E)' },
];
var BRUSH_STYLE;
(function (BRUSH_STYLE) {
    BRUSH_STYLE[BRUSH_STYLE["type1"] = 1] = "type1";
    BRUSH_STYLE[BRUSH_STYLE["type2"] = 2] = "type2";
    BRUSH_STYLE[BRUSH_STYLE["type3"] = 3] = "type3";
    BRUSH_STYLE[BRUSH_STYLE["type4"] = 4] = "type4";
    BRUSH_STYLE[BRUSH_STYLE["type5"] = 5] = "type5";
})(BRUSH_STYLE || (BRUSH_STYLE = {}));
var BRUSH_STYLES = [BRUSH_STYLE.type1, BRUSH_STYLE.type2, BRUSH_STYLE.type3, BRUSH_STYLE.type4, BRUSH_STYLE.type5];
var POLYGON_RADIUS_CORRECTION = new Map([
    [3, 0.13],
    [4, 0.33],
    [5, 0.05],
    [6, 0.025],
    [7, 0.035],
    [8, 0.08],
    [9, 0.025],
    [10, 0.015],
    [11, 0.02],
    [12, 0.04],
]);
var POLYGON_OFFSET_ANGLES = new Map([
    [3, 3 * (360 / 3 / 4) * (Math.PI / 180)],
    [4, Math.PI / 4],
    [5, (360 / 5 / 4) * (Math.PI / 180)],
    [6, 0],
    [7, 3 * (360 / 7 / 4) * (Math.PI / 180)],
    [8, (360 / 8 / 2) * (Math.PI / 180)],
    [9, (360 / 9 / 4) * (Math.PI / 180)],
    [10, 0],
    [11, 3 * (360 / 11 / 4) * (Math.PI / 180)],
    [12, (360 / 12 / 2) * (Math.PI / 180)],
]);
var STAMP_SCALING;
(function (STAMP_SCALING) {
    STAMP_SCALING[STAMP_SCALING["Min"] = 0.1] = "Min";
    STAMP_SCALING[STAMP_SCALING["Default"] = 1] = "Default";
    STAMP_SCALING[STAMP_SCALING["Max"] = 10] = "Max";
})(STAMP_SCALING || (STAMP_SCALING = {}));
var ERASER_SIZE;
(function (ERASER_SIZE) {
    ERASER_SIZE[ERASER_SIZE["Min"] = 1] = "Min";
    ERASER_SIZE[ERASER_SIZE["Default"] = 50] = "Default";
    ERASER_SIZE[ERASER_SIZE["Max"] = 100] = "Max";
})(ERASER_SIZE || (ERASER_SIZE = {}));
var ERASER_STROKE_WIDTH = '3';
var ADDITIONAL_BORDER_WIDTH = 5;
var RESET_POSITION_NUMBER = -1;
var DEFAULT_RADIX = 10;
var STAMP_TYPES = [
    '',
    '/assets/stamps/iconmonstr-smiley-14.svg',
    '/assets/stamps/iconmonstr-cat-7.svg',
    '/assets/stamps/iconmonstr-coin-3.svg',
    '/assets/stamps/iconmonstr-home-8.svg',
    '/assets/stamps/iconmonstr-glasses-12.svg',
];
var STAMP_NAMES = ['Aucun', 'Smiley', 'Chat', 'Argent', 'Maison', 'Hipster'];
var STAMPS_MAP = new Map([
    [0, NO_STAMP],
    [1, '/assets/stamps/iconmonstr-smiley-14.svg'],
    [2, '/assets/stamps/iconmonstr-cat-7.svg'],
    [3, '/assets/stamps/iconmonstr-coin-3.svg'],
    [4, '/assets/stamps/iconmonstr-home-8.svg'],
    [5, '/assets/stamps/iconmonstr-glasses-12.svg'],
]);
var BASE64_STAMPS_MAP = new Map();
BASE64_STAMPS_MAP.set('/assets/stamps/iconmonstr-smiley-14.svg', 
// tslint:disable-next-line: max-line-length
'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMmM1LjUxNCAwIDEwIDQuNDg2IDEwIDEwcy00LjQ4NiAxMC0xMCAxMC0xMC00LjQ4Ni0xMC0xMCA0LjQ4Ni0xMCAxMC0xMHptMC0yYy02LjYyNyAwLTEyIDUuMzczLTEyIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyem0tMy41IDhjLS44MjggMC0xLjUuNjcxLTEuNSAxLjVzLjY3MiAxLjUgMS41IDEuNSAxLjUtLjY3MSAxLjUtMS41LS42NzItMS41LTEuNS0xLjV6bTcgMGMtLjgyOCAwLTEuNS42NzEtMS41IDEuNXMuNjcyIDEuNSAxLjUgMS41IDEuNS0uNjcxIDEuNS0xLjUtLjY3Mi0xLjUtMS41LTEuNXptLTMuNDk5IDRjLTEuNjU4IDAtMy4wMDEgMS41NjctMy4wMDEgMy41MDEgMCAxLjkzMiAxLjM0MyAzLjQ5OSAzLjAwMSAzLjQ5OSAxLjY1NiAwIDIuOTk5LTEuNTY3IDIuOTk5LTMuNDk5IDAtMS45MzQtMS4zNDMtMy41MDEtMi45OTktMy41MDF6Ii8+PC9zdmc+');
BASE64_STAMPS_MAP.set('/assets/stamps/iconmonstr-cat-7.svg', 
// tslint:disable-next-line: max-line-length
'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMS45NTQgMTFjMy4zMyAwIDcuMDU3IDYuMTIzIDcuNjMyIDguNzE2LjU3NSAyLjU5NC0uOTk2IDQuNzI5LTMuNDg0IDQuMTEyLTEuMDkyLS4yNzEtMy4yNTItMS4zMDctNC4xMDItMS4yOTEtLjkyNS4wMTYtMi4zNzkuODM2LTMuNTg3IDEuMjUyLTIuNjU3LjkxNi00LjcxNy0xLjI4My00LjAxLTQuMDczLjc3NC0zLjA1MSA0LjQ4LTguNzE2IDcuNTUxLTguNzE2em0xMC43OTMtNC4zOWMxLjE4OC41MzkgMS42MjkgMi44Mi44OTQgNS4yNy0uNzA0IDIuMzQxLTIuMzMgMy44MDYtNC41NTYgMi43OTYtMS45MzEtLjg3Ny0yLjE1OC0zLjE3OC0uODk0LTUuMjcgMS4yNzQtMi4xMDcgMy4zNjctMy4zMzYgNC41NTYtMi43OTZ6bS0yMS45NjguNzA2Yy0xLjA0NC43MjktMS4wNiAyLjk5Ni4wODIgNS4yMTUgMS4wOTIgMi4xMiAyLjkxMyAzLjIzNiA0Ljg2OCAxLjg3IDEuNjk2LTEuMTg1IDEuNTA0LTMuNDMzLS4wODItNS4yMTUtMS41OTYtMS43OTMtMy44MjQtMi41OTktNC44NjgtMS44N3ptMTUuNjQzLTcuMjkyYzEuMzIzLjI1MSAyLjMyMSAyLjQyOCAyLjE4MiA1LjA2Mi0uMTM0IDIuNTE3LTEuNDA1IDQuMzgyLTMuODgyIDMuOTEyLTIuMTQ5LS40MDctMi45MzgtMi42NTctMi4xODEtNS4wNjEuNzYxLTIuNDIxIDIuNTU5LTQuMTY0IDMuODgxLTMuOTEzem0tMTAuMjk1LjA1OGMtMS4yNjguNDUxLTEuOTIgMi43NTYtMS4zNzcgNS4zMzcuNTE5IDIuNDY3IDIuMDYyIDQuMTE0IDQuNDM3IDMuMjY5IDIuMDYtLjczMiAyLjQ5NC0zLjA3NyAxLjM3Ny01LjMzNi0xLjEyNS0yLjI3Ni0zLjE2OS0zLjcyMS00LjQzNy0zLjI3eiIvPjwvc3ZnPg==');
BASE64_STAMPS_MAP.set('/assets/stamps/iconmonstr-coin-3.svg', 
// tslint:disable-next-line: max-line-length
'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMmM1LjUxNCAwIDEwIDQuNDg2IDEwIDEwcy00LjQ4NiAxMC0xMCAxMC0xMC00LjQ4Ni0xMC0xMCA0LjQ4Ni0xMCAxMC0xMHptMC0yYy02LjYyNyAwLTEyIDUuMzczLTEyIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyem0wIDNjLTQuOTcxIDAtOSA0LjAyOS05IDlzNC4wMjkgOSA5IDkgOS00LjAyOSA5LTktNC4wMjktOS05LTl6bTEgMTMuOTQ3djEuMDUzaC0xdi0uOTk4Yy0xLjAzNS0uMDE4LTIuMTA2LS4yNjUtMy0uNzI3bC40NTUtMS42NDRjLjk1Ni4zNzEgMi4yMjkuNzY1IDMuMjI1LjU0IDEuMTQ5LS4yNiAxLjM4NS0xLjQ0Mi4xMTQtMi4wMTEtLjkzMS0uNDM0LTMuNzc4LS44MDUtMy43NzgtMy4yNDMgMC0xLjM2MyAxLjAzOS0yLjU4MyAyLjk4NC0yLjg1di0xLjA2N2gxdjEuMDE4Yy43MjUuMDE5IDEuNTM1LjE0NSAyLjQ0Mi40MmwtLjM2MiAxLjY0OGMtLjc2OC0uMjctMS42MTYtLjUxNS0yLjQ0Mi0uNDY1LTEuNDg5LjA4Ny0xLjYyIDEuMzc2LS41ODEgMS45MTYgMS43MTEuODA0IDMuOTQzIDEuNDAxIDMuOTQzIDMuNTQ2LjAwMiAxLjcxOC0xLjM0NCAyLjYzMi0zIDIuODY0eiIvPjwvc3ZnPg==');
BASE64_STAMPS_MAP.set('/assets/stamps/iconmonstr-home-8.svg', 
// tslint:disable-next-line: max-line-length
'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjAgNy4wOTNsLTMtM3YtMi4wOTNoM3Y1LjA5M3ptNCA1LjkwN2gtM3YxMGgtMTh2LTEwaC0zbDEyLTEyIDEyIDEyem0tMTAgMmgtNHY2aDR2LTZ6Ii8+PC9zdmc+');
BASE64_STAMPS_MAP.set('/assets/stamps/iconmonstr-glasses-12.svg', 
// tslint:disable-next-line: max-line-length
'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTcuOTQ0IDVjLTEuMTM4IDAtMi4zNzYuMTI5LTMuMzk0LjQ5MS0yLjI4My44MjgtMi43OTIuODM4LTUuMTAzIDAtMS4wMTUtLjM2Mi0yLjI1Ni0uNDkxLTMuMzkyLS40OTEtMS45NzEgMC00LjE3LjM4Ny02LjA1NS44Nzh2MS43ODljLjg0Ny4yNTUgMS4wNjguNjI3IDEuMjAzIDEuNDkzLjM4MSAyLjQ0MyAxLjI1NSA0Ljg0IDUuMDY4IDQuODQgMy4wMzcgMCA0LjA1MS0yLjI1OSA0LjcyMi00LjM0NS4zNDEtMS4wNiAxLjY2My0xLjA4NyAyLjAwOS0uMDE1LjY3MyAyLjA4OSAxLjY4MiA0LjM2IDQuNzI1IDQuMzYgMy44MTQgMCA0LjY4OS0yLjM5NyA1LjA2OS00Ljg0MS4xMzUtLjg2Ni4zNTYtMS4yMzcgMS4yMDQtMS40OTJ2LTEuNzg5Yy0xLjg4Ny0uNDkxLTQuMDg1LS44NzgtNi4wNTYtLjg3OHptLTcuNjgyIDMuODE0Yy0uNTE4IDIuMTc0LTEuMzYgNC4xODYtMy45OTEgNC4xODYtMy4zMDEgMC0zLjk3NC0xLjkwMy00LjI3NS00Ljk3My0uMDcyLS43NDcuMDkyLTEuMDQuMjIxLTEuMTk1Ljk0Ny0xLjEzNCA1Ljk1Mi0xLjA4OCA3LjYxMS0uMDkyLjQ3NS4yODUuNzgzLjYwMS40MzQgMi4wNzR6bTExLjc0LS43ODdjLS4zMDEgMy4wNy0uOTc1IDQuOTczLTQuMjc1IDQuOTczLTIuNjI5IDAtMy40NzItMi4wMTItMy45ODktNC4xODYtLjM1MS0xLjQ3My0uMDQyLTEuNzg5LjQzNC0yLjA3NCAxLjY2NS0xIDYuNjY3LTEuMDM4IDcuNjExLjA5Mi4xMjkuMTU2LjI5My40NDkuMjE5IDEuMTk1em0tNC44MzgtMS4xMjFjMS41MzktLjIzNCAzLjMxOC0uMDMgMy43OTEuNTM3LjEwNC4xMjQuMjM0LjM1OC4xNzYuOTU2LS4wMzEuMzE2LS4wNjcuNjE2LS4xMTIuOS0uNDEtMS40ODctMS40NTctMi4yODMtMy44NTUtMi4zOTN6bS0xNC4xODQgMi4zOTNjLS4wNDUtLjI4NC0uMDgyLS41ODQtLjExMy0uOS0uMDU4LS41OTguMDczLS44MzIuMTc3LS45NTYuNDc0LS41NjcgMi4yNTMtLjc3MSAzLjc5Mi0uNTM3LTIuMzk4LjExLTMuNDQ1LjkwNi0zLjg1NiAyLjM5M3ptMTYuMDIgNy43NjRjLTEuMTUgMi44NjktNi4wMzEgMi4xNjYtNyAuMzY5LS45NyAxLjc5Ny01Ljg1IDIuNS03LS4zNjkuNTc4LjUwNiAxLjU2NS42NjkgMi4zMTguNTU5IDIuMjItLjMyNSAyLjA0Mi0yLjQyMyAzLjU5NC0yLjQyMy40MjUgMCAuODEuMTc3IDEuMDg4LjQ2NC4yNzgtLjI4Ny42NjItLjQ2NCAxLjA4Ny0uNDY0IDEuNTUyIDAgMS4zNzUgMi4wOTkgMy41OTQgMi40MjMuNzUzLjExIDEuNzQtLjA1MyAyLjMxOS0uNTU5eiIvPjwvc3ZnPg==');
var LINE_STROKE_TYPE;
(function (LINE_STROKE_TYPE) {
    LINE_STROKE_TYPE[LINE_STROKE_TYPE["Continuous"] = 1] = "Continuous";
    LINE_STROKE_TYPE[LINE_STROKE_TYPE["Dotted_line"] = 2] = "Dotted_line";
    LINE_STROKE_TYPE[LINE_STROKE_TYPE["Dotted_circle"] = 3] = "Dotted_circle";
})(LINE_STROKE_TYPE || (LINE_STROKE_TYPE = {}));
var LINE_JOINT_TYPE;
(function (LINE_JOINT_TYPE) {
    LINE_JOINT_TYPE[LINE_JOINT_TYPE["Curvy"] = 1] = "Curvy";
    LINE_JOINT_TYPE[LINE_JOINT_TYPE["Straight"] = 2] = "Straight";
    LINE_JOINT_TYPE[LINE_JOINT_TYPE["Circle"] = 3] = "Circle";
})(LINE_JOINT_TYPE || (LINE_JOINT_TYPE = {}));
var HTML_ATTRIBUTE;
(function (HTML_ATTRIBUTE) {
    HTML_ATTRIBUTE["width"] = "width";
    HTML_ATTRIBUTE["height"] = "height";
    HTML_ATTRIBUTE["fill"] = "fill";
    HTML_ATTRIBUTE["stroke"] = "stroke";
    HTML_ATTRIBUTE["opacity"] = "opacity";
    HTML_ATTRIBUTE["stroke_width"] = "stroke-width";
    HTML_ATTRIBUTE["cx"] = "cx";
    HTML_ATTRIBUTE["cy"] = "cy";
    HTML_ATTRIBUTE["rx"] = "rx";
    HTML_ATTRIBUTE["ry"] = "ry";
    HTML_ATTRIBUTE["numOctaves"] = "numOctaves";
    HTML_ATTRIBUTE["baseFrequency"] = "baseFrequency";
    HTML_ATTRIBUTE["filter"] = "filter";
    HTML_ATTRIBUTE["points"] = "points";
    HTML_ATTRIBUTE["stroke_dasharray"] = "stroke-dasharray";
    HTML_ATTRIBUTE["stroke_linejoin"] = "stroke-linejoin";
    HTML_ATTRIBUTE["stroke_linecap"] = "stroke-linecap";
    HTML_ATTRIBUTE["title"] = "title";
    HTML_ATTRIBUTE["canvas"] = "canvas";
    HTML_ATTRIBUTE["a"] = "a";
    HTML_ATTRIBUTE["img"] = "img";
    HTML_ATTRIBUTE["download"] = "download";
    HTML_ATTRIBUTE["href"] = "href";
    HTML_ATTRIBUTE["src"] = "src";
    HTML_ATTRIBUTE["viewBox"] = "viewBox";
    HTML_ATTRIBUTE["font_family"] = "font-family";
    HTML_ATTRIBUTE["font_size"] = "font-size";
    HTML_ATTRIBUTE["font_weight"] = "font-weight";
    HTML_ATTRIBUTE["font_style"] = "font-style";
    HTML_ATTRIBUTE["text_anchor"] = "text-anchor";
    HTML_ATTRIBUTE["innerHTML"] = "innerHTML";
})(HTML_ATTRIBUTE || (HTML_ATTRIBUTE = {}));
var TOOL_NAME_SHORTCUTS = new Map([
    ['c', TOOL_NAME.Pencil],
    ['w', TOOL_NAME.Brush],
    ['p', TOOL_NAME.Quill],
    ['y', TOOL_NAME.Pen],
    ['a', TOOL_NAME.SprayCan],
    ['1', TOOL_NAME.Rectangle],
    ['2', TOOL_NAME.Ellipsis],
    ['3', TOOL_NAME.Polygon],
    ['l', TOOL_NAME.Line],
    ['t', TOOL_NAME.Text],
    ['r', TOOL_NAME.ColorApplicator],
    ['b', TOOL_NAME.Fill],
    ['e', TOOL_NAME.Eraser],
    ['i', TOOL_NAME.Dropper],
    ['s', TOOL_NAME.Selection],
]);
var CONTROL_SHORTCUTS = new Map([
    ['o', TOOL_NAME.NewDrawing],
    ['s', TOOL_NAME.Save],
    ['g', TOOL_NAME.ArtGallery],
    ['e', TOOL_NAME.Export],
]);
var FILE_TYPE;
(function (FILE_TYPE) {
    FILE_TYPE["SVG"] = "svg";
    FILE_TYPE["PNG"] = "png";
    FILE_TYPE["BMP"] = "bmp";
    FILE_TYPE["JPG"] = "jpeg";
})(FILE_TYPE || (FILE_TYPE = {}));
var MAX_BMP_SIZE = 620;
var TRACING_TOOL_POSITION = 1;
var SHAPE_TOOL_POSITION = 2;
var FONTS = [
    { fontName: 'Times', fontFamily: 'Times, serif' },
    { fontName: 'Times New Roman', fontFamily: 'Times New Roman, serif' },
    { fontName: 'Georgia', fontFamily: 'Georgia, serif' },
    { fontName: 'Verdana', fontFamily: 'Verdana, sans-serif' },
    { fontName: 'Arial', fontFamily: 'Arial, sans-serif' },
    { fontName: 'Helvetica', fontFamily: 'Helvetica, sans-serif' },
    { fontName: 'Lucida', fontFamily: 'Lucida, monospace' },
    { fontName: 'Console', fontFamily: 'Console, monospace' },
    { fontName: 'Courier', fontFamily: 'Courier, monospace' },
];
var FONT_SIZE;
(function (FONT_SIZE) {
    FONT_SIZE[FONT_SIZE["Min"] = 10] = "Min";
    FONT_SIZE[FONT_SIZE["Default"] = 15] = "Default";
    FONT_SIZE[FONT_SIZE["Max"] = 72] = "Max";
})(FONT_SIZE || (FONT_SIZE = {}));
var TEXT_CURSOR = '█';
var TEXT_SPACE = '\xa0';
var TEXT_LINEBREAK = '⠀';
var SNACKBAR_DURATION = 1000;
var FONT_ALIGN;
(function (FONT_ALIGN) {
    FONT_ALIGN["Middle"] = "middle";
    FONT_ALIGN["Start"] = "start";
    FONT_ALIGN["End"] = "end";
})(FONT_ALIGN || (FONT_ALIGN = {}));
var FONT_STYLE;
(function (FONT_STYLE) {
    FONT_STYLE["Italic"] = "italic";
    FONT_STYLE["Normal"] = "normal";
})(FONT_STYLE || (FONT_STYLE = {}));
var FONT_WEIGHT;
(function (FONT_WEIGHT) {
    FONT_WEIGHT["Bold"] = "bold";
    FONT_WEIGHT["Normal"] = "normal";
})(FONT_WEIGHT || (FONT_WEIGHT = {}));
var CONTROL_POINTS;
(function (CONTROL_POINTS) {
    CONTROL_POINTS[CONTROL_POINTS["TopLeft"] = 0] = "TopLeft";
    CONTROL_POINTS[CONTROL_POINTS["TopMiddle"] = 1] = "TopMiddle";
    CONTROL_POINTS[CONTROL_POINTS["TopRight"] = 2] = "TopRight";
    CONTROL_POINTS[CONTROL_POINTS["CenterLeft"] = 7] = "CenterLeft";
    CONTROL_POINTS[CONTROL_POINTS["CenterMiddle"] = 8] = "CenterMiddle";
    CONTROL_POINTS[CONTROL_POINTS["CenterRight"] = 3] = "CenterRight";
    CONTROL_POINTS[CONTROL_POINTS["BottomLeft"] = 6] = "BottomLeft";
    CONTROL_POINTS[CONTROL_POINTS["BottomMiddle"] = 5] = "BottomMiddle";
    CONTROL_POINTS[CONTROL_POINTS["BottomRight"] = 4] = "BottomRight";
})(CONTROL_POINTS || (CONTROL_POINTS = {}));
var TOP_CONTROL_POINTS = [
    { point: CONTROL_POINTS.TopLeft, img_src: '../../../assets/controlPoints/topleft.png' },
    { point: CONTROL_POINTS.TopMiddle, img_src: '../../../assets/controlPoints/top.png' },
    { point: CONTROL_POINTS.TopRight, img_src: '../../../assets/controlPoints/topright.png' },
];
var CENTER_CONTROL_POINTS = [
    { point: CONTROL_POINTS.CenterLeft, img_src: '../../../assets/controlPoints/left.png' },
    { point: CONTROL_POINTS.CenterMiddle, img_src: '../../../assets/controlPoints/center.png' },
    { point: CONTROL_POINTS.CenterRight, img_src: '../../../assets/controlPoints/right.png' },
];
var BOTTOM_CONTROL_POINTS = [
    { point: CONTROL_POINTS.BottomLeft, img_src: '../../../assets/controlPoints/bottomleft.png' },
    { point: CONTROL_POINTS.BottomMiddle, img_src: '../../../assets/controlPoints/bottom.png' },
    { point: CONTROL_POINTS.BottomRight, img_src: '../../../assets/controlPoints/bottomright.png' },
];
var MAGNETISM_STATE;
(function (MAGNETISM_STATE) {
    MAGNETISM_STATE["active"] = "maintenant activ\u00E9";
    MAGNETISM_STATE["inactive"] = "d\u00E9sactiv\u00E9";
})(MAGNETISM_STATE || (MAGNETISM_STATE = {}));
var MAX_NORMAL_LENGTH = 5;
var FILL_STROKE_WIDTH = '4';
var MAX_PERCENTAGE = 100;
var MAX_PATH_DISTANCE = 100;
var SPRAY_DIAMETER;
(function (SPRAY_DIAMETER) {
    SPRAY_DIAMETER[SPRAY_DIAMETER["Min"] = 20] = "Min";
    SPRAY_DIAMETER[SPRAY_DIAMETER["Default"] = 30] = "Default";
    SPRAY_DIAMETER[SPRAY_DIAMETER["Max"] = 100] = "Max";
})(SPRAY_DIAMETER || (SPRAY_DIAMETER = {}));
var SPRAY_INTERVAL;
(function (SPRAY_INTERVAL) {
    SPRAY_INTERVAL[SPRAY_INTERVAL["Min"] = 0] = "Min";
    SPRAY_INTERVAL[SPRAY_INTERVAL["Default"] = 20] = "Default";
    SPRAY_INTERVAL[SPRAY_INTERVAL["Max"] = 1000] = "Max";
})(SPRAY_INTERVAL || (SPRAY_INTERVAL = {}));
var SPRAY_PARTICLE_THICKNESS;
(function (SPRAY_PARTICLE_THICKNESS) {
    SPRAY_PARTICLE_THICKNESS[SPRAY_PARTICLE_THICKNESS["Min"] = 1] = "Min";
    SPRAY_PARTICLE_THICKNESS[SPRAY_PARTICLE_THICKNESS["Default"] = 2.5] = "Default";
    SPRAY_PARTICLE_THICKNESS[SPRAY_PARTICLE_THICKNESS["Max"] = 5] = "Max";
})(SPRAY_PARTICLE_THICKNESS || (SPRAY_PARTICLE_THICKNESS = {}));
var SPRAYER_STROKE_WIDTH = '3';
var MAX_CHARS_IN_PATH = 10000;
var CIRCLES_TO_APPEND = 20;



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    BASE_URL: 'http://localhost:3000',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nehcix/Dev/Github/P9/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map