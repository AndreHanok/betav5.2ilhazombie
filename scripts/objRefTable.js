const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Behaviors.Platform,
		C3.Behaviors.Flash,
		C3.Plugins.Touch,
		C3.Behaviors.Sin,
		C3.Plugins.Particles,
		C3.Plugins.Audio,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Touch.Cnds.OnTouchEnd,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.System.Exps.choose,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.System.Cnds.Compare,
		C3.Behaviors.Sin.Exps.CyclePosition,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Acts.SubVar,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.Text.Acts.SetFontColor,
		C3.Plugins.System.Cnds.Every
	];
};
self.C3_JsPropNameTable = [
	{Sólido: 0},
	{Chao: 0},
	{CentrarEm: 0},
	{Plataforma: 0},
	{Piscar: 0},
	{Chaves: 0},
	{Direita: 0},
	{Esquerda: 0},
	{Pulo: 0},
	{Toque: 0},
	{Senóide: 0},
	{PlanoDeFundoEmBlocos2: 0},
	{PontaPlataformaEsquerdo: 0},
	{PontaPlataformadireita: 0},
	{Limite: 0},
	{PlanoDeFundoEmBlocos: 0},
	{PlacaFim: 0},
	{PlacaInicio: 0},
	{caixa: 0},
	{Partículas: 0},
	{Cogumelo: 0},
	{PontaPlataformadireita2: 0},
	{Zombie: 0},
	{Partículas2: 0},
	{Fundo: 0},
	{BotaoPlay: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{imageremovebgpreview: 0},
	{Áudio: 0},
	{coracao: 0},
	{Texto: 0},
	{Cogumelo2: 0},
	{Texto2: 0},
	{Chao2: 0},
	{Cogumelo3: 0},
	{Sprite: 0},
	{Estado: 0},
	{criaPremio: 0},
	{Vidas: 0},
	{cogumelo: 0}
];

self.InstanceType = {
	Chao: class extends self.ITiledBackgroundInstance {},
	Chaves: class extends self.ISpriteInstance {},
	Direita: class extends self.ISpriteInstance {},
	Esquerda: class extends self.ISpriteInstance {},
	Pulo: class extends self.ISpriteInstance {},
	Toque: class extends self.IInstance {},
	PlanoDeFundoEmBlocos2: class extends self.ITiledBackgroundInstance {},
	PontaPlataformaEsquerdo: class extends self.ISpriteInstance {},
	PontaPlataformadireita: class extends self.ISpriteInstance {},
	Limite: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos: class extends self.ITiledBackgroundInstance {},
	PlacaFim: class extends self.ISpriteInstance {},
	PlacaInicio: class extends self.ISpriteInstance {},
	caixa: class extends self.ISpriteInstance {},
	Partículas: class extends self.IParticlesInstance {},
	Cogumelo: class extends self.ISpriteInstance {},
	PontaPlataformadireita2: class extends self.ISpriteInstance {},
	Zombie: class extends self.ISpriteInstance {},
	Partículas2: class extends self.IParticlesInstance {},
	Fundo: class extends self.ISpriteInstance {},
	BotaoPlay: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	imageremovebgpreview: class extends self.ISpriteInstance {},
	Áudio: class extends self.IInstance {},
	coracao: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Cogumelo2: class extends self.ISpriteInstance {},
	Texto2: class extends self.ITextInstance {},
	Chao2: class extends self.ITiledBackgroundInstance {},
	Cogumelo3: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {}
}