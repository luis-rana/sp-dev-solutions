import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import * as React from 'react';

import { DropdownSort } from '../../../helpers/Utilities';

export interface IIconsDropdownProps {
	label: string;
	selectedKey?: string;
	color?: string;
	onChanged: (color:string) => void;
}

export interface IIconsDropdownState {
	
}

export class IconsDropdown extends React.Component<IIconsDropdownProps, IIconsDropdownState> {

	constructor(props: IIconsDropdownProps) {
		super(props);
	}

	public render(): React.ReactElement<IIconsDropdownProps> {
		return (
			<Dropdown
			 label={this.props.label}
			 selectedKey={this.props.selectedKey}
			 options={this.iconOptions()}
			 onChanged={this.onChanged}
			 onRenderOption={this.onRenderOption}/>
		);
	}

	@autobind
	public onChanged(item: IDropdownOption) {
		this.props.onChanged(item.key.toString());
	}

	private iconOptions(): Array<IDropdownOption> {
		let items:Array<IDropdownOption> = [
			{key:"12PointStar"},
			{key:"6PointStar"},
			{key:"AADLogo"},
			{key:"Accept"},
			{key:"AccessLogo"},
			{key:"AccessLogoFill"},
			{key:"AccountManagement"},
			{key:"Accounts"},
			{key:"ActivateOrders"},
			{key:"ActivityFeed"},
			{key:"Add"},
			{key:"AddEvent"},
			{key:"AddFavorite"},
			{key:"AddFavoriteFill"},
			{key:"AddFriend"},
			{key:"AddGroup"},
			{key:"AddNotes"},
			{key:"AddOnlineMeeting"},
			{key:"AddPhone"},
			{key:"AddTo"},
			{key:"Admin"},
			{key:"AdminALogo32"},
			{key:"AdminALogoFill32"},
			{key:"AdminALogoInverse32"},
			{key:"AdminCLogoInverse32"},
			{key:"AdminDLogoInverse32"},
			{key:"AdminELogoInverse32"},
			{key:"AdminLLogoInverse32"},
			{key:"AdminMLogoInverse32"},
			{key:"AdminOLogoInverse32"},
			{key:"AdminPLogoInverse32"},
			{key:"AdminSLogoInverse32"},
			{key:"AdminYLogoInverse32"},
			{key:"Airplane"},
			{key:"AirplaneSolid"},
			{key:"AirTickets"},
			{key:"AlarmClock"},
			{key:"Album"},
			{key:"AlbumRemove"},
			{key:"AlertSolid"},
			{key:"AlignCenter"},
			{key:"AlignHorizontalCenter"},
			{key:"AlignHorizontalLeft"},
			{key:"AlignHorizontalRight"},
			{key:"AlignJustify"},
			{key:"AlignLeft"},
			{key:"AlignRight"},
			{key:"AlignVerticalBottom"},
			{key:"AlignVerticalCenter"},
			{key:"AlignVerticalTop"},
			{key:"AnalyticsLogo"},
			{key:"AnalyticsQuery"},
			{key:"AnalyticsReport"},
			{key:"AnchorLock"},
			{key:"Annotation"},
			{key:"AppIconDefault"},
			{key:"Archive"},
			{key:"AreaChart"},
			{key:"ArrangeBringForward"},
			{key:"ArrangeBringToFront"},
			{key:"ArrangeSendBackward"},
			{key:"ArrangeSendToBack"},
			{key:"Arrivals"},
			{key:"ArrowDownRight8"},
			{key:"ArrowDownRightMirrored8"},
			{key:"ArrowTallDownLeft"},
			{key:"ArrowTallDownRight"},
			{key:"ArrowTallUpLeft"},
			{key:"ArrowTallUpRight"},
			{key:"ArrowUpRight8"},
			{key:"ArrowUpRightMirrored8"},
			{key:"Articles"},
			{key:"Ascending"},
			{key:"AspectRatio"},
			{key:"AssessmentGroup"},
			{key:"AssessmentGroupTemplate"},
			{key:"AssetLibrary"},
			{key:"Assign"},
			{key:"Asterisk"},
			{key:"AsteriskSolid"},
			{key:"ATPLogo"},
			{key:"Attach"},
			{key:"AustralianRules"},
			{key:"AutoEnhanceOff"},
			{key:"AutoEnhanceOn"},
			{key:"AutoFillTemplate"},
			{key:"AutoHeight"},
			{key:"AutoRacing"},
			{key:"AwayStatus"},
			{key:"AzureAPIManagement"},
			{key:"AzureKeyVault"},
			{key:"AzureLogo"},
			{key:"AzureServiceEndpoint"},
			{key:"Back"},
			{key:"BackgroundColor"},
			{key:"Backlog"},
			{key:"BacklogBoard"},
			{key:"BackToWindow"},
			{key:"Badge"},
			{key:"Balloons"},
			{key:"BankSolid"},
			{key:"BarChart4"},
			{key:"BarChartHorizontal"},
			{key:"BarChartVertical"},
			{key:"Baseball"},
			{key:"BeerMug"},
			{key:"BIDashboard"},
			{key:"BidiLtr"},
			{key:"BidiRtl"},
			{key:"BingLogo"},
			{key:"BirthdayCake"},
			{key:"BlockContact"},
			{key:"Blocked"},
			{key:"Blocked2"},
			{key:"BlockedSolid"},
			{key:"BlowingSnow"},
			{key:"Blur"},
			{key:"Boards"},
			{key:"Bold"},
			{key:"BookingsLogo"},
			{key:"Bookmarks"},
			{key:"BookmarksMirrored"},
			{key:"BorderDash"},
			{key:"BorderDot"},
			{key:"BoxAdditionSolid"},
			{key:"BoxCheckmarkSolid"},
			{key:"BoxMultiplySolid"},
			{key:"BoxPlaySolid"},
			{key:"BoxSubtractSolid"},
			{key:"BranchCommit"},
			{key:"BranchCompare"},
			{key:"BranchFork"},
			{key:"BranchFork2"},
			{key:"BranchLocked"},
			{key:"BranchMerge"},
			{key:"BranchPullRequest"},
			{key:"BranchSearch"},
			{key:"BranchShelveset"},
			{key:"Breadcrumb"},
			{key:"Breakfast"},
			{key:"Brightness"},
			{key:"Broom"},
			{key:"Brunch"},
			{key:"BucketColor"},
			{key:"BucketColorFill"},
			{key:"BufferTimeAfter"},
			{key:"BufferTimeBefore"},
			{key:"BufferTimeBoth"},
			{key:"Bug"},
			{key:"BugSolid"},
			{key:"Build"},
			{key:"BuildIssue"},
			{key:"BuildQueue"},
			{key:"BuildQueueNew"},
			{key:"BulkUpload"},
			{key:"BulletedList"},
			{key:"BulletedList2"},
			{key:"BulletedList2Mirrored"},
			{key:"BulletedListMirrored"},
			{key:"Bullseye"},
			{key:"Bus"},
			{key:"BusinessCenterLogo"},
			{key:"BusinessHoursSign"},
			{key:"BusSolid"},
			{key:"Cafe"},
			{key:"Cake"},
			{key:"Calculator"},
			{key:"CalculatorAddition"},
			{key:"CalculatorEqualTo"},
			{key:"CalculatorMultiply"},
			{key:"CalculatorNotEqualTo"},
			{key:"CalculatorSubtract"},
			{key:"Calendar"},
			{key:"CalendarAgenda"},
			{key:"CalendarDay"},
			{key:"CalendarMirrored"},
			{key:"CalendarReply"},
			{key:"CalendarSettings"},
			{key:"CalendarSettingsMirrored"},
			{key:"CalendarWeek"},
			{key:"CalendarWorkWeek"},
			{key:"CaloriesAdd"},
			{key:"Camera"},
			{key:"Cancel"},
			{key:"CannedChat"},
			{key:"Car"},
			{key:"CaretBottomLeftCenter8"},
			{key:"CaretBottomLeftSolid8"},
			{key:"CaretBottomRightCenter8"},
			{key:"CaretBottomRightSolid8"},
			{key:"CaretDown8"},
			{key:"CaretDownSolid8"},
			{key:"CaretHollow"},
			{key:"CaretHollowMirrored"},
			{key:"CaretLeft8"},
			{key:"CaretLeftSolid8"},
			{key:"CaretRight"},
			{key:"CaretRight8"},
			{key:"CaretRightSolid8"},
			{key:"CaretSolid"},
			{key:"CaretSolid16"},
			{key:"CaretSolidDown"},
			{key:"CaretSolidLeft"},
			{key:"CaretSolidMirrored"},
			{key:"CaretSolidRight"},
			{key:"CaretSolidUp"},
			{key:"CaretTopLeftCenter8"},
			{key:"CaretTopLeftSolid8"},
			{key:"CaretTopRightCenter8"},
			{key:"CaretTopRightSolid8"},
			{key:"CaretUp8"},
			{key:"CaretUpSolid8"},
			{key:"Cat"},
			{key:"CellPhone"},
			{key:"Certificate"},
			{key:"Chart"},
			{key:"ChartSeries"},
			{key:"ChartXAngle"},
			{key:"ChartYAngle"},
			{key:"Chat"},
			{key:"ChatInviteFriend"},
			{key:"ChatSolid"},
			{key:"Checkbox"},
			{key:"CheckboxComposite"},
			{key:"CheckboxCompositeReversed"},
			{key:"CheckboxIndeterminate"},
			{key:"CheckList"},
			{key:"CheckMark"},
			{key:"ChevronDown"},
			{key:"ChevronDownEnd6"},
			{key:"ChevronDownMed"},
			{key:"ChevronDownSmall"},
			{key:"ChevronFold10"},
			{key:"ChevronLeft"},
			{key:"ChevronLeftEnd6"},
			{key:"ChevronLeftMed"},
			{key:"ChevronLeftSmall"},
			{key:"ChevronRight"},
			{key:"ChevronRightEnd6"},
			{key:"ChevronRightMed"},
			{key:"ChevronRightSmall"},
			{key:"ChevronUnfold10"},
			{key:"ChevronUp"},
			{key:"ChevronUpEnd6"},
			{key:"ChevronUpMed"},
			{key:"ChevronUpSmall"},
			{key:"Chopsticks"},
			{key:"ChromeBack"},
			{key:"ChromeBackMirrored"},
			{key:"ChromeClose"},
			{key:"ChromeMinimize"},
			{key:"CircleAddition"},
			{key:"CircleAdditionSolid"},
			{key:"CircleFill"},
			{key:"CircleHalfFull"},
			{key:"CirclePause"},
			{key:"CirclePauseSolid"},
			{key:"CirclePlus"},
			{key:"CircleRing"},
			{key:"CircleStop"},
			{key:"CircleStopSolid"},
			{key:"CityNext"},
			{key:"ClassNotebookLogo16"},
			{key:"ClassNotebookLogo32"},
			{key:"ClassNotebookLogoFill16"},
			{key:"ClassNotebookLogoFill32"},
			{key:"ClassNotebookLogoInverse"},
			{key:"ClassNotebookLogoInverse16"},
			{key:"ClassNotebookLogoInverse32"},
			{key:"ClassroomLogo"},
			{key:"Clear"},
			{key:"ClearFilter"},
			{key:"ClearFormatting"},
			{key:"ClearNight"},
			{key:"Clock"},
			{key:"CloneToDesktop"},
			{key:"ClosedCaption"},
			{key:"ClosePane"},
			{key:"ClosePaneMirrored"},
			{key:"Cloud"},
			{key:"CloudAdd"},
			{key:"CloudDownload"},
			{key:"CloudUpload"},
			{key:"CloudWeather"},
			{key:"Cloudy"},
			{key:"Cocktails"},
			{key:"Code"},
			{key:"CodeEdit"},
			{key:"Coffee"},
			{key:"CoffeeScript"},
			{key:"CollapseContent"},
			{key:"CollapseContentSingle"},
			{key:"CollapseMenu"},
			{key:"CollegeFootball"},
			{key:"CollegeHoops"},
			{key:"Color"},
			{key:"ColorSolid"},
			{key:"ColumnLeftTwoThirds"},
			{key:"ColumnLeftTwoThirdsEdit"},
			{key:"ColumnOptions"},
			{key:"ColumnRightTwoThirds"},
			{key:"ColumnRightTwoThirdsEdit"},
			{key:"Combine"},
			{key:"Combobox"},
			{key:"CommandPrompt"},
			{key:"Comment"},
			{key:"CommentAdd"},
			{key:"CommentNext"},
			{key:"CommentPrevious"},
			{key:"CommentUrgent"},
			{key:"Commitments"},
			{key:"Communications"},
			{key:"CompanyDirectory"},
			{key:"CompanyDirectoryMirrored"},
			{key:"CompassNW"},
			{key:"Completed"},
			{key:"CompletedSolid"},
			{key:"ConfigurationSolid"},
			{key:"ConstructionCone"},
			{key:"ConstructionConeSolid"},
			{key:"Contact"},
			{key:"ContactCard"},
			{key:"ContactCardSettings"},
			{key:"ContactCardSettingsMirrored"},
			{key:"ContactInfo"},
			{key:"ContactLink"},
			{key:"ContextMenu"},
			{key:"Contrast"},
			{key:"Copy"},
			{key:"Cotton"},
			{key:"CPlusPlus"},
			{key:"CPlusPlusLanguage"},
			{key:"Cricket"},
			{key:"CRMReport"},
			{key:"Crop"},
			{key:"Crown"},
			{key:"CrownSolid"},
			{key:"CSharp"},
			{key:"CSharpLanguage"},
			{key:"CSS"},
			{key:"CustomList"},
			{key:"CustomListMirrored"},
			{key:"Cut"},
			{key:"Cycling"},
			{key:"DashboardAdd"},
			{key:"Database"},
			{key:"DataConnectionLibrary"},
			{key:"DateTime"},
			{key:"DateTime2"},
			{key:"DateTimeMirrored"},
			{key:"DeactivateOrders"},
			{key:"DecisionSolid"},
			{key:"DeclineCall"},
			{key:"DecreaseIndentLegacy"},
			{key:"DefaultRatio"},
			{key:"DefectSolid"},
			{key:"Delete"},
			{key:"DeliveryTruck"},
			{key:"DelveAnalytics"},
			{key:"DelveAnalyticsLogo"},
			{key:"DelveLogo"},
			{key:"DelveLogoFill"},
			{key:"DelveLogoInverse"},
			{key:"Deploy"},
			{key:"Descending"},
			{key:"Design"},
			{key:"DeveloperTools"},
			{key:"Devices3"},
			{key:"Devices4"},
			{key:"Diagnostic"},
			{key:"Dialpad"},
			{key:"DiamondSolid"},
			{key:"Dictionary"},
			{key:"DietPlanNotebook"},
			{key:"DiffInline"},
			{key:"DiffSideBySide"},
			{key:"DisableUpdates"},
			{key:"Dislike"},
			{key:"DislikeSolid"},
			{key:"DockLeft"},
			{key:"DockLeftMirrored"},
			{key:"DockRight"},
			{key:"DocLibrary"},
			{key:"DocsLogoInverse"},
			{key:"Document"},
			{key:"DocumentApproval"},
			{key:"Documentation"},
			{key:"DocumentManagement"},
			{key:"DocumentReply"},
			{key:"DocumentSearch"},
			{key:"DocumentSet"},
			{key:"DonutChart"},
			{key:"Door"},
			{key:"DoubleBookmark"},
			{key:"DoubleChevronDown"},
			{key:"DoubleChevronDown12"},
			{key:"DoubleChevronDown8"},
			{key:"DoubleChevronLeft"},
			{key:"DoubleChevronLeft12"},
			{key:"DoubleChevronLeft8"},
			{key:"DoubleChevronLeftMed"},
			{key:"DoubleChevronLeftMedMirrored"},
			{key:"DoubleChevronRight"},
			{key:"DoubleChevronRight12"},
			{key:"DoubleChevronRight8"},
			{key:"DoubleChevronUp"},
			{key:"DoubleChevronUp12"},
			{key:"DoubleChevronUp8"},
			{key:"DoubleColumn"},
			{key:"DoubleColumnEdit"},
			{key:"Down"},
			{key:"Download"},
			{key:"DownloadDocument"},
			{key:"DragObject"},
			{key:"DrillDown"},
			{key:"DrillDownSolid"},
			{key:"DrillExpand"},
			{key:"DrillShow"},
			{key:"DRM"},
			{key:"Drop"},
			{key:"Dropdown"},
			{key:"Duststorm"},
			{key:"Dynamics365Logo"},
			{key:"DynamicSMBLogo"},
			{key:"EatDrink"},
			{key:"EdgeLogo"},
			{key:"Edit"},
			{key:"EditContact"},
			{key:"EditMail"},
			{key:"EditMirrored"},
			{key:"EditNote"},
			{key:"EditPhoto"},
			{key:"EditSolid12"},
			{key:"EditSolidMirrored12"},
			{key:"EditStyle"},
			{key:"Education"},
			{key:"Ellipse"},
			{key:"Embed"},
			{key:"EMI"},
			{key:"Emoji"},
			{key:"Emoji2"},
			{key:"EmojiDisappointed"},
			{key:"EmojiNeutral"},
			{key:"EmojiTabSymbols"},
			{key:"EmptyRecycleBin"},
			{key:"EngineeringGroup"},
			{key:"EntryDecline"},
			{key:"EntryView"},
			{key:"Equalizer"},
			{key:"EraseTool"},
			{key:"Error"},
			{key:"ErrorBadge"},
			{key:"Event"},
			{key:"EventAccepted"},
			{key:"EventDate"},
			{key:"EventDeclined"},
			{key:"EventInfo"},
			{key:"EventTentative"},
			{key:"EventTentativeMirrored"},
			{key:"ExcelDocument"},
			{key:"ExcelLogo"},
			{key:"ExcelLogo16"},
			{key:"ExcelLogoFill"},
			{key:"ExcelLogoFill16"},
			{key:"ExcelLogoInverse"},
			{key:"ExcelLogoInverse16"},
			{key:"ExchangeLogo"},
			{key:"ExchangeLogoFill"},
			{key:"ExchangeLogoInverse"},
			{key:"ExerciseTracker"},
			{key:"ExpandMenu"},
			{key:"ExploreContent"},
			{key:"ExploreContentSingle"},
			{key:"Export"},
			{key:"ExportMirrored"},
			{key:"ExternalBuild"},
			{key:"ExternalTFVC"},
			{key:"ExternalXAML"},
			{key:"F12DevTools"},
			{key:"FabricAssetLibrary"},
			{key:"FabricDataConnectionLibrary"},
			{key:"FabricDocLibrary"},
			{key:"FabricFolder"},
			{key:"FabricFolderFill"},
			{key:"FabricFolderSearch"},
			{key:"FabricFormLibrary"},
			{key:"FabricFormLibraryMirrored"},
			{key:"FabricMovetoFolder"},
			{key:"FabricNewFolder"},
			{key:"FabricOpenFolderHorizontal"},
			{key:"FabricPictureLibrary"},
			{key:"FabricPublicFolder"},
			{key:"FabricReportLibrary"},
			{key:"FabricReportLibraryMirrored"},
			{key:"FabricSyncFolder"},
			{key:"FabricUnsyncFolder"},
			{key:"Family"},
			{key:"FangBody"},
			{key:"FastForward"},
			{key:"FastMode"},
			{key:"Favicon"},
			{key:"FavoriteList"},
			{key:"FavoriteStar"},
			{key:"FavoriteStarFill"},
			{key:"Fax"},
			{key:"Feedback"},
			{key:"FeedbackRequestMirroredSolid"},
			{key:"FeedbackRequestSolid"},
			{key:"FeedbackResponseSolid"},
			{key:"Ferry"},
			{key:"FerrySolid"},
			{key:"FieldChanged"},
			{key:"FieldEmpty"},
			{key:"FieldFilled"},
			{key:"FieldNotChanged"},
			{key:"FieldReadOnly"},
			{key:"FieldRequired"},
			{key:"FileASPX"},
			{key:"FileBug"},
			{key:"FileCode"},
			{key:"FileComment"},
			{key:"FileCSS"},
			{key:"FileHTML"},
			{key:"FileImage"},
			{key:"FileJAVA"},
			{key:"FileLess"},
			{key:"FilePDB"},
			{key:"FileSass"},
			{key:"FileSQL"},
			{key:"FileSymlink"},
			{key:"FileTemplate"},
			{key:"FileTypeSolution"},
			{key:"Filter"},
			{key:"Filters"},
			{key:"FilterSolid"},
			{key:"FiltersSolid"},
			{key:"Financial"},
			{key:"FinancialMirroredSolid"},
			{key:"FinancialSolid"},
			{key:"Fingerprint"},
			{key:"FiveTileGrid"},
			{key:"Flag"},
			{key:"FlameSolid"},
			{key:"FlickDown"},
			{key:"FlickLeft"},
			{key:"FlickRight"},
			{key:"FlickUp"},
			{key:"Flow"},
			{key:"FocalPoint"},
			{key:"Fog"},
			{key:"Folder"},
			{key:"FolderFill"},
			{key:"FolderHorizontal"},
			{key:"FolderList"},
			{key:"FolderListMirrored"},
			{key:"FolderOpen"},
			{key:"FolderQuery"},
			{key:"FolderSearch"},
			{key:"FollowUser"},
			{key:"Font"},
			{key:"FontColor"},
			{key:"FontColorA"},
			{key:"FontColorSwatch"},
			{key:"FontDecrease"},
			{key:"FontIncrease"},
			{key:"FontSize"},
			{key:"FormLibrary"},
			{key:"FormLibraryMirrored"},
			{key:"Forward"},
			{key:"ForwardEvent"},
			{key:"Freezing"},
			{key:"Frigid"},
			{key:"FSharp"},
			{key:"FSharpLanguage"},
			{key:"FullCircleMask"},
			{key:"FullHistory"},
			{key:"FullScreen"},
			{key:"FullWidth"},
			{key:"FullWidthEdit"},
			{key:"FunctionalManagerDashboard"},
			{key:"GallatinLogo"},
			{key:"Generate"},
			{key:"GenericScan"},
			{key:"Giftbox"},
			{key:"GiftboxOpen"},
			{key:"GiftBoxSolid"},
			{key:"GiftCard"},
			{key:"GitGraph"},
			{key:"Glasses"},
			{key:"Glimmer"},
			{key:"GlobalNavButton"},
			{key:"Globe"},
			{key:"Globe2"},
			{key:"GlobeFavorite"},
			{key:"Golf"},
			{key:"GotoToday"},
			{key:"GridViewLarge"},
			{key:"GridViewMedium"},
			{key:"GridViewSmall"},
			{key:"GripperBarHorizontal"},
			{key:"GripperBarVertical"},
			{key:"GripperTool"},
			{key:"Group"},
			{key:"GroupedAscending"},
			{key:"GroupedDescending"},
			{key:"GroupedList"},
			{key:"GroupObject"},
			{key:"GUID"},
			{key:"Guitar"},
			{key:"HailDay"},
			{key:"HailNight"},
			{key:"HalfAlpha"},
			{key:"HalfCircle"},
			{key:"Handwriting"},
			{key:"HardDrive"},
			{key:"HardDriveGroup"},
			{key:"HardDriveLock"},
			{key:"HardDriveUnlock"},
			{key:"Header1"},
			{key:"Header2"},
			{key:"Header3"},
			{key:"Header4"},
			{key:"Headset"},
			{key:"HeadsetSolid"},
			{key:"Health"},
			{key:"HealthSolid"},
			{key:"Heart"},
			{key:"HeartBroken"},
			{key:"HeartFill"},
			{key:"Help"},
			{key:"HelpMirrored"},
			{key:"Hexagon"},
			{key:"Hide"},
			{key:"Hide2"},
			{key:"Highlight"},
			{key:"HighlightMappedShapes"},
			{key:"HintText"},
			{key:"History"},
			{key:"Home"},
			{key:"HomeSolid"},
			{key:"HorizontalDistributeCenter"},
			{key:"Hospital"},
			{key:"Hotel"},
			{key:"HourGlass"},
			{key:"HumanResources"},
			{key:"IconSetsFlag"},
			{key:"IDBadge"},
			{key:"ImageCrosshair"},
			{key:"ImageDiff"},
			{key:"ImagePixel"},
			{key:"ImageSearch"},
			{key:"Import"},
			{key:"Important"},
			{key:"ImportMirrored"},
			{key:"Inbox"},
			{key:"InboxCheck"},
			{key:"IncidentTriangle"},
			{key:"IncreaseIndentLegacy"},
			{key:"Info"},
			{key:"Info2"},
			{key:"InfoSolid"},
			{key:"InsertTextBox"},
			{key:"InstallToDrive"},
			{key:"InternetSharing"},
			{key:"IRMForward"},
			{key:"IRMForwardMirrored"},
			{key:"IRMReply"},
			{key:"IRMReplyMirrored"},
			{key:"IssueSolid"},
			{key:"IssueTracking"},
			{key:"IssueTrackingMirrored"},
			{key:"Italic"},
			{key:"JavaScriptLanguage"},
			{key:"JoinOnlineMeeting"},
			{key:"JS"},
			{key:"KaizalaLogo"},
			{key:"Label"},
			{key:"LadybugSolid"},
			{key:"Lamp"},
			{key:"LandscapeOrientation"},
			{key:"LaptopSecure"},
			{key:"LaptopSelected"},
			{key:"LargeGrid"},
			{key:"Library"},
			{key:"Lifesaver"},
			{key:"LifesaverLock"},
			{key:"Light"},
			{key:"Lightbulb"},
			{key:"LightningBolt"},
			{key:"LightWeight"},
			{key:"Like"},
			{key:"LikeSolid"},
			{key:"Line"},
			{key:"LineChart"},
			{key:"LineSpacing"},
			{key:"LineStyle"},
			{key:"LineThickness"},
			{key:"Link"},
			{key:"LinkedInLogo"},
			{key:"List"},
			{key:"ListMirrored"},
			{key:"LocaleLanguage"},
			{key:"Location"},
			{key:"LocationCircle"},
			{key:"LocationDot"},
			{key:"LocationFill"},
			{key:"LocationOutline"},
			{key:"Lock"},
			{key:"LockSolid"},
			{key:"LogRemove"},
			{key:"LowerBrightness"},
			{key:"LyncLogo"},
			{key:"Mail"},
			{key:"MailAlert"},
			{key:"MailCheck"},
			{key:"MailFill"},
			{key:"MailForward"},
			{key:"MailForwardMirrored"},
			{key:"MailLowImportance"},
			{key:"MailPause"},
			{key:"MailReminder"},
			{key:"MailRepeat"},
			{key:"MailReply"},
			{key:"MailReplyAll"},
			{key:"MailReplyAllMirrored"},
			{key:"MailReplyMirrored"},
			{key:"MailSolid"},
			{key:"MailTentative"},
			{key:"MailTentativeMirrored"},
			{key:"MailUndelivered"},
			{key:"ManagerSelfService"},
			{key:"MapDirections"},
			{key:"MapPin"},
			{key:"MapPinSolid"},
			{key:"MarkDownLanguage"},
			{key:"Market"},
			{key:"MarketDown"},
			{key:"Medal"},
			{key:"MediaAdd"},
			{key:"Medical"},
			{key:"Megaphone"},
			{key:"MegaphoneSolid"},
			{key:"Memo"},
			{key:"Merge"},
			{key:"MergeDuplicate"},
			{key:"Message"},
			{key:"MessageFill"},
			{key:"MicOff"},
			{key:"Microphone"},
			{key:"MicrosoftFlowLogo"},
			{key:"MicrosoftStaffhubLogo"},
			{key:"MiniContract"},
			{key:"MiniExpand"},
			{key:"MiniLink"},
			{key:"MobileReport"},
			{key:"MobileSelected"},
			{key:"Money"},
			{key:"More"},
			{key:"MoreSports"},
			{key:"MoreVertical"},
			{key:"Move"},
			{key:"Movers"},
			{key:"MoveToFolder"},
			{key:"MSNLogo"},
			{key:"MSNVideos"},
			{key:"MSNVideosSolid"},
			{key:"MTMLogo"},
			{key:"MultiSelect"},
			{key:"MultiSelectMirrored"},
			{key:"MusicInCollection"},
			{key:"MusicInCollectionFill"},
			{key:"MusicNote"},
			{key:"MyMoviesTV"},
			{key:"Nav2DMapView"},
			{key:"NavigateBack"},
			{key:"NavigateBackMirrored"},
			{key:"NavigateExternalInline"},
			{key:"NavigateForward"},
			{key:"NavigateForwardMirrored"},
			{key:"NavigationFlipper"},
			{key:"NetworkTower"},
			{key:"NewAnalyticsQuery"},
			{key:"NewFolder"},
			{key:"News"},
			{key:"NewsSearch"},
			{key:"NewTeamProject"},
			{key:"Next"},
			{key:"NonprofitLogo32"},
			{key:"NormalWeight"},
			{key:"NoteForward"},
			{key:"NotePinned"},
			{key:"NoteReply"},
			{key:"NotExecuted"},
			{key:"NotImpactedSolid"},
			{key:"NugetLogo"},
			{key:"NumberedList"},
			{key:"NumberField"},
			{key:"NumberSequence"},
			{key:"Octagon"},
			{key:"OEM"},
			{key:"OfficeAddinsLogo"},
			{key:"OfficeAssistantLogo"},
			{key:"OfficeFormsLogo"},
			{key:"OfficeFormsLogo16"},
			{key:"OfficeFormsLogo24"},
			{key:"OfficeFormsLogoFill"},
			{key:"OfficeFormsLogoFill16"},
			{key:"OfficeFormsLogoFill24"},
			{key:"OfficeFormsLogoInverse"},
			{key:"OfficeFormsLogoInverse16"},
			{key:"OfficeFormsLogoInverse24"},
			{key:"OfficeLogo"},
			{key:"OfficeStoreLogo"},
			{key:"OfficeVideoLogo"},
			{key:"OfficeVideoLogoFill"},
			{key:"OfficeVideoLogoInverse"},
			{key:"OfflineOneDriveParachute"},
			{key:"OfflineOneDriveParachuteDisabled"},
			{key:"OfflineStorageSolid"},
			{key:"OneDrive"},
			{key:"OneDriveAdd"},
			{key:"OneDriveFolder16"},
			{key:"OneNoteEduLogoInverse"},
			{key:"OneNoteLogo"},
			{key:"OneNoteLogo16"},
			{key:"OneNoteLogoFill"},
			{key:"OneNoteLogoFill16"},
			{key:"OneNoteLogoInverse"},
			{key:"OneNoteLogoInverse16"},
			{key:"OpenFile"},
			{key:"OpenFolderHorizontal"},
			{key:"OpenInNewWindow"},
			{key:"OpenPane"},
			{key:"OpenPaneMirrored"},
			{key:"OpenSource"},
			{key:"Org"},
			{key:"Orientation"},
			{key:"OutlookLogo"},
			{key:"OutlookLogo16"},
			{key:"OutlookLogoFill"},
			{key:"OutlookLogoFill16"},
			{key:"OutlookLogoInverse"},
			{key:"OutlookLogoInverse16"},
			{key:"OutOfOffice"},
			{key:"Package"},
			{key:"Packages"},
			{key:"Padding"},
			{key:"PaddingBottom"},
			{key:"PaddingLeft"},
			{key:"PaddingRight"},
			{key:"PaddingTop"},
			{key:"Page"},
			{key:"PageAdd"},
			{key:"PageCheckedin"},
			{key:"PageCheckedOut"},
			{key:"PageEdit"},
			{key:"PageLeft"},
			{key:"PageListMirroredSolid"},
			{key:"PageListSolid"},
			{key:"PageLock"},
			{key:"PageRemove"},
			{key:"PageRight"},
			{key:"PageSolid"},
			{key:"PanoIndicator"},
			{key:"Parachute"},
			{key:"ParachuteSolid"},
			{key:"Parameter"},
			{key:"ParkingLocation"},
			{key:"ParkingLocationMirrored"},
			{key:"ParkingMirroredSolid"},
			{key:"ParkingSolid"},
			{key:"PartlyCloudyDay"},
			{key:"PartlyCloudyNight"},
			{key:"PartyLeader"},
			{key:"Paste"},
			{key:"Pause"},
			{key:"PaymentCard"},
			{key:"PC1"},
			{key:"PDF"},
			{key:"PencilReply"},
			{key:"Pentagon"},
			{key:"People"},
			{key:"PeopleAdd"},
			{key:"PeopleAlert"},
			{key:"PeopleBlock"},
			{key:"PeoplePause"},
			{key:"PeopleRepeat"},
			{key:"Permissions"},
			{key:"PermissionsSolid"},
			{key:"Personalize"},
			{key:"Phone"},
			{key:"Photo2"},
			{key:"Photo2Add"},
			{key:"Photo2Remove"},
			{key:"PhotoCollection"},
			{key:"Picture"},
			{key:"PictureCenter"},
			{key:"PictureFill"},
			{key:"PictureLibrary"},
			{key:"PicturePosition"},
			{key:"PictureStretch"},
			{key:"PictureTile"},
			{key:"PieDouble"},
			{key:"PieSingle"},
			{key:"PieSingleSolid"},
			{key:"Pill"},
			{key:"Pin"},
			{key:"Pinned"},
			{key:"PinnedFill"},
			{key:"PivotChart"},
			{key:"PlannerLogo"},
			{key:"PlanView"},
			{key:"Play"},
			{key:"PlayerSettings"},
			{key:"PlayResume"},
			{key:"Plug"},
			{key:"PlugConnected"},
			{key:"PlugDisconnected"},
			{key:"PlugSolid"},
			{key:"POI"},
			{key:"POISolid"},
			{key:"PostUpdate"},
			{key:"PowerApps"},
			{key:"PowerApps2Logo"},
			{key:"PowerAppsLogo"},
			{key:"PowerBILogo"},
			{key:"PowerPointDocument"},
			{key:"PowerPointLogo"},
			{key:"PowerPointLogo16"},
			{key:"PowerPointLogoFill"},
			{key:"PowerPointLogoFill16"},
			{key:"PowerPointLogoInverse"},
			{key:"PowerPointLogoInverse16"},
			{key:"Precipitation"},
			{key:"PresenceChickletVideo"},
			{key:"Preview"},
			{key:"PreviewLink"},
			{key:"Previous"},
			{key:"PrimaryCalendar"},
			{key:"Print"},
			{key:"PrintfaxPrinterFile"},
			{key:"Processing"},
			{key:"ProcessMetaTask"},
			{key:"Product"},
			{key:"ProfileSearch"},
			{key:"ProFootball"},
			{key:"ProgressLoopInner"},
			{key:"ProgressLoopOuter"},
			{key:"ProgressRingDots"},
			{key:"ProHockey"},
			{key:"ProjectCollection"},
			{key:"ProjectLogo16"},
			{key:"ProjectLogo32"},
			{key:"ProjectLogoFill16"},
			{key:"ProjectLogoFill32"},
			{key:"ProjectLogoInverse"},
			{key:"ProtectedDocument"},
			{key:"ProtectionCenterLogo32"},
			{key:"ProtectRestrict"},
			{key:"PublicCalendar"},
			{key:"PublicContactCard"},
			{key:"PublicContactCardMirrored"},
			{key:"PublicEmail"},
			{key:"PublicFolder"},
			{key:"PublisherLogo"},
			{key:"PublisherLogo16"},
			{key:"PublisherLogoFill"},
			{key:"PublisherLogoFill16"},
			{key:"PublisherLogoInverse16"},
			{key:"Puzzle"},
			{key:"PY"},
			{key:"PythonLanguage"},
			{key:"QuarterCircle"},
			{key:"QueryList"},
			{key:"Questionnaire"},
			{key:"QuestionnaireMirrored"},
			{key:"QuickNote"},
			{key:"QuickNoteSolid"},
			{key:"R"},
			{key:"RadioBtnOff"},
			{key:"RadioBtnOn"},
			{key:"RadioBullet"},
			{key:"Rain"},
			{key:"RainShowersDay"},
			{key:"RainShowersNight"},
			{key:"RainSnow"},
			{key:"RawSource"},
			{key:"Read"},
			{key:"ReadingMode"},
			{key:"ReadingModeSolid"},
			{key:"ReceiptCheck"},
			{key:"ReceiptForward"},
			{key:"ReceiptReply"},
			{key:"ReceiptTentative"},
			{key:"ReceiptTentativeMirrored"},
			{key:"ReceiptUndelivered"},
			{key:"Recent"},
			{key:"Record2"},
			{key:"RectangularClipping"},
			{key:"RecurringEvent"},
			{key:"RecurringTask"},
			{key:"RecycleBin"},
			{key:"Redeploy"},
			{key:"RedEye"},
			{key:"Redo"},
			{key:"Refresh"},
			{key:"ReminderGroup"},
			{key:"ReminderPerson"},
			{key:"Remote"},
			{key:"Remove"},
			{key:"RemoveEvent"},
			{key:"RemoveFilter"},
			{key:"RemoveLink"},
			{key:"RemoveOccurrence"},
			{key:"Rename"},
			{key:"RenewalCurrent"},
			{key:"RenewalFuture"},
			{key:"ReopenPages"},
			{key:"Repair"},
			{key:"Reply"},
			{key:"ReplyAll"},
			{key:"ReplyAllAlt"},
			{key:"ReplyAllMirrored"},
			{key:"ReplyAlt"},
			{key:"ReplyMirrored"},
			{key:"Repo"},
			{key:"ReportAdd"},
			{key:"ReportHacked"},
			{key:"ReportLibrary"},
			{key:"ReportLibraryMirrored"},
			{key:"RepoSolid"},
			{key:"ReturnToSession"},
			{key:"ReviewRequestMirroredSolid"},
			{key:"ReviewRequestSolid"},
			{key:"ReviewResponseSolid"},
			{key:"ReviewSolid"},
			{key:"RevToggleKey"},
			{key:"Rewind"},
			{key:"Ribbon"},
			{key:"RibbonSolid"},
			{key:"RightDoubleQuote"},
			{key:"RightTriangle"},
			{key:"Ringer"},
			{key:"RingerOff"},
			{key:"Robot"},
			{key:"Rocket"},
			{key:"Room"},
			{key:"Rotate"},
			{key:"RowsChild"},
			{key:"RowsGroup"},
			{key:"Rugby"},
			{key:"Running"},
			{key:"Sad"},
			{key:"SadSolid"},
			{key:"Save"},
			{key:"SaveAll"},
			{key:"SaveAndClose"},
			{key:"SaveAs"},
			{key:"Savings"},
			{key:"ScaleUp"},
			{key:"ScheduleEventAction"},
			{key:"ScopeTemplate"},
			{key:"Script"},
			{key:"ScrollUpDown"},
			{key:"Search"},
			{key:"SearchAndApps"},
			{key:"SearchCalendar"},
			{key:"SearchIssue"},
			{key:"SearchIssueMirrored"},
			{key:"Section"},
			{key:"Sections"},
			{key:"SecurityGroup"},
			{key:"Sell"},
			{key:"SemiboldWeight"},
			{key:"Send"},
			{key:"SendMirrored"},
			{key:"Separator"},
			{key:"Server"},
			{key:"ServerEnviroment"},
			{key:"ServerProcesses"},
			{key:"SetAction"},
			{key:"Settings"},
			{key:"Share"},
			{key:"ShareiOS"},
			{key:"SharepointLogo"},
			{key:"SharepointLogoFill"},
			{key:"SharepointLogoInverse"},
			{key:"Shield"},
			{key:"ShieldSolid"},
			{key:"Shop"},
			{key:"ShoppingCart"},
			{key:"ShoppingCartSolid"},
			{key:"ShopServer"},
			{key:"ShowResults"},
			{key:"ShowResultsMirrored"},
			{key:"SidePanel"},
			{key:"SidePanelMirrored"},
			{key:"SignOut"},
			{key:"SingleBookmark"},
			{key:"SingleColumn"},
			{key:"SingleColumnEdit"},
			{key:"SIPMove"},
			{key:"SiteScan"},
			{key:"SizeLegacy"},
			{key:"SkiResorts"},
			{key:"SkypeCheck"},
			{key:"SkypeCircleCheck"},
			{key:"SkypeCircleClock"},
			{key:"SkypeCircleMinus"},
			{key:"SkypeClock"},
			{key:"SkypeForBusinessLogo"},
			{key:"SkypeForBusinessLogo16"},
			{key:"SkypeForBusinessLogoFill"},
			{key:"SkypeForBusinessLogoFill16"},
			{key:"SkypeLogo"},
			{key:"SkypeLogo16"},
			{key:"SkypeMessage"},
			{key:"SkypeMinus"},
			{key:"Slider"},
			{key:"SliderHandleSize"},
			{key:"SliderThumb"},
			{key:"Snooze"},
			{key:"Snow"},
			{key:"Snowflake"},
			{key:"SnowShowerDay"},
			{key:"SnowShowerNight"},
			{key:"Soccer"},
			{key:"SocialListeningLogo"},
			{key:"Sort"},
			{key:"SortDown"},
			{key:"SortLines"},
			{key:"SortUp"},
			{key:"Spacer"},
			{key:"Speakers"},
			{key:"SpeedHigh"},
			{key:"Split"},
			{key:"SplitObject"},
			{key:"Sprint"},
			{key:"Squalls"},
			{key:"Stack"},
			{key:"StackedBarChart"},
			{key:"StackedLineChart"},
			{key:"StackIndicator"},
			{key:"StaffNotebookLogo16"},
			{key:"StaffNotebookLogo32"},
			{key:"StaffNotebookLogoFill16"},
			{key:"StaffNotebookLogoFill32"},
			{key:"StaffNotebookLogoInverted16"},
			{key:"StaffNotebookLogoInverted32"},
			{key:"Starburst"},
			{key:"StarburstSolid"},
			{key:"StatusCircleCheckmark"},
			{key:"StatusCircleInner"},
			{key:"StatusCircleOuter"},
			{key:"StatusErrorFull"},
			{key:"StatusTriangle"},
			{key:"Step"},
			{key:"StepInsert"},
			{key:"StepShared"},
			{key:"StepSharedAdd"},
			{key:"StepSharedInsert"},
			{key:"StockDown"},
			{key:"StockUp"},
			{key:"Stop"},
			{key:"StopSolid"},
			{key:"Stopwatch"},
			{key:"StoreLogo16"},
			{key:"StoreLogoMed20"},
			{key:"Storyboard"},
			{key:"Streaming"},
			{key:"StreamingOff"},
			{key:"StreamLogo"},
			{key:"Strikethrough"},
			{key:"Subscribe"},
			{key:"Subscript"},
			{key:"SubstitutionsIn"},
			{key:"Suitcase"},
			{key:"SunAdd"},
			{key:"Sunny"},
			{key:"SunQuestionMark"},
			{key:"Superscript"},
			{key:"SurveyQuestions"},
			{key:"SwayLogo16"},
			{key:"SwayLogo32"},
			{key:"SwayLogoFill16"},
			{key:"SwayLogoFill32"},
			{key:"SwayLogoInverse"},
			{key:"Switch"},
			{key:"SwitcherStartEnd"},
			{key:"Sync"},
			{key:"SyncFolder"},
			{key:"SyncOccurence"},
			{key:"SyncToPC"},
			{key:"System"},
			{key:"Tab"},
			{key:"Table"},
			{key:"Tablet"},
			{key:"TabletMode"},
			{key:"TabletSelected"},
			{key:"Tag"},
			{key:"Taskboard"},
			{key:"TaskGroup"},
			{key:"TaskGroupMirrored"},
			{key:"TaskLogo"},
			{key:"TaskManager"},
			{key:"TaskManagerMirrored"},
			{key:"TaskSolid"},
			{key:"Taxi"},
			{key:"TeamFavorite"},
			{key:"TeamsLogo"},
			{key:"TeamsLogoFill"},
			{key:"TeamsLogoInverse"},
			{key:"Teamwork"},
			{key:"Teeth"},
			{key:"TemporaryUser"},
			{key:"Tennis"},
			{key:"TestAutoSolid"},
			{key:"TestBeaker"},
			{key:"TestBeakerSolid"},
			{key:"TestCase"},
			{key:"TestExploreSolid"},
			{key:"TestImpactSolid"},
			{key:"TestParameter"},
			{key:"TestPlan"},
			{key:"TestStep"},
			{key:"TestSuite"},
			{key:"TestUserSolid"},
			{key:"TextBox"},
			{key:"TextCallout"},
			{key:"TextDocument"},
			{key:"TextField"},
			{key:"TextOverflow"},
			{key:"TFVCLogo"},
			{key:"ThisPC"},
			{key:"ThreeQuarterCircle"},
			{key:"ThumbnailView"},
			{key:"ThumbnailViewMirrored"},
			{key:"Thunderstorms"},
			{key:"Ticket"},
			{key:"Tiles"},
			{key:"Tiles2"},
			{key:"TimeEntry"},
			{key:"Timeline"},
			{key:"TimelineDelivery"},
			{key:"TimelineMatrixView"},
			{key:"TimelineProgress"},
			{key:"Timer"},
			{key:"TimeSheet"},
			{key:"ToDoLogoBottom"},
			{key:"ToDoLogoInverse"},
			{key:"ToDoLogoTop"},
			{key:"ToggleBorder"},
			{key:"ToggleFilled"},
			{key:"ToggleOff"},
			{key:"ToggleThumb"},
			{key:"Touch"},
			{key:"TouchPointer"},
			{key:"Train"},
			{key:"TrainSolid"},
			{key:"TransferCall"},
			{key:"Transition"},
			{key:"TriangleDown12"},
			{key:"TriangleLeft12"},
			{key:"TriangleRight12"},
			{key:"TriangleSolid"},
			{key:"TriangleSolidDown12"},
			{key:"TriangleSolidLeft12"},
			{key:"TriangleSolidRight12"},
			{key:"TriangleSolidUp12"},
			{key:"TriangleUp12"},
			{key:"TriggerApproval"},
			{key:"TriggerAuto"},
			{key:"TriggerUser"},
			{key:"TripleColumn"},
			{key:"TripleColumnEdit"},
			{key:"Trophy"},
			{key:"Trophy2"},
			{key:"Trophy2Solid"},
			{key:"TurnRight"},
			{key:"TVMonitor"},
			{key:"TVMonitorSelected"},
			{key:"TypeScriptLanguage"},
			{key:"Umbrella"},
			{key:"Underline"},
			{key:"Undo"},
			{key:"Uneditable"},
			{key:"UneditableMirrored"},
			{key:"UneditableSolid12"},
			{key:"UneditableSolidMirrored12"},
			{key:"Unfavorite"},
			{key:"UngroupObject"},
			{key:"Unknown"},
			{key:"UnknownCall"},
			{key:"UnknownMirrored"},
			{key:"UnknownMirroredSolid"},
			{key:"UnknownSolid"},
			{key:"Unlock"},
			{key:"UnlockSolid"},
			{key:"Unpin"},
			{key:"Unsubscribe"},
			{key:"UnsyncFolder"},
			{key:"UnsyncOccurence"},
			{key:"Up"},
			{key:"Upload"},
			{key:"UserFollowed"},
			{key:"UserPause"},
			{key:"UserSync"},
			{key:"Vacation"},
			{key:"Variable"},
			{key:"VariableGroup"},
			{key:"VB"},
			{key:"VennDiagram"},
			{key:"VerticalDistributeCenter"},
			{key:"Video"},
			{key:"VideoOff"},
			{key:"VideoSearch"},
			{key:"VideoSolid"},
			{key:"View"},
			{key:"ViewAll"},
			{key:"ViewAll2"},
			{key:"ViewDashboard"},
			{key:"ViewList"},
			{key:"ViewListGroup"},
			{key:"ViewListTree"},
			{key:"VisioDiagram"},
			{key:"VisioDocument"},
			{key:"VisioLogo"},
			{key:"VisioLogo16"},
			{key:"VisioLogoFill"},
			{key:"VisioLogoFill16"},
			{key:"VisioLogoInverse"},
			{key:"VisioLogoInverse16"},
			{key:"VisualBasicLanguage"},
			{key:"VisualsFolder"},
			{key:"VisualsStore"},
			{key:"VisualStudioLogo"},
			{key:"VoicemailForward"},
			{key:"VoicemailIRM"},
			{key:"VoicemailReply"},
			{key:"Volume0"},
			{key:"Volume1"},
			{key:"Volume2"},
			{key:"Volume3"},
			{key:"VolumeDisabled"},
			{key:"VSTSAltLogo1"},
			{key:"VSTSAltLogo2"},
			{key:"VSTSLogo"},
			{key:"Waffle"},
			{key:"WaffleOffice365"},
			{key:"WaitlistConfirm"},
			{key:"WaitlistConfirmMirrored"},
			{key:"Warning"},
			{key:"WebPublish"},
			{key:"Website"},
			{key:"Weights"},
			{key:"WifiEthernet"},
			{key:"WindDirection"},
			{key:"WindowEdit"},
			{key:"WindowsLogo"},
			{key:"Wines"},
			{key:"WipePhone"},
			{key:"WordDocument"},
			{key:"WordLogo"},
			{key:"WordLogo16"},
			{key:"WordLogoFill"},
			{key:"WordLogoFill16"},
			{key:"WordLogoInverse"},
			{key:"WordLogoInverse16"},
			{key:"Work"},
			{key:"WorkFlow"},
			{key:"WorkforceManagement"},
			{key:"WorkItem"},
			{key:"WorkItemBar"},
			{key:"WorkItemBarSolid"},
			{key:"WorkItemBug"},
			{key:"World"},
			{key:"WorldClock"},
			{key:"YammerLogo"},
			{key:"ZipFolder"},
			{key:"Zoom"},
			{key:"ZoomIn"},
			{key:"ZoomOut"}
		].map((value:{key:string;}):IDropdownOption => {
			return {key:value.key, text:value.key.split(/(?=[A-Z])/).join(" ")};
		});
		return items.sort(DropdownSort);
	  }

	  @autobind
	  private onRenderOption(option:IDropdownOption): JSX.Element {
		  return (
			<div style={{
				whiteSpace: 'nowrap'
			}}>
				<Icon
				 style={{marginRight:'6px',color:this.props.color?this.props.color:'inherit'}}
				 iconName={option.key.toString()}
				 aria-hidden={true}
				 title={option.text}/>
				<span>{option.text}</span>
			</div>
		  );
	  }
}