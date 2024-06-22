import * as esbuild from 'esbuild';

const ctx = await esbuild.context({
	entryPoints: ['src/index.tsx'],
	bundle: true,
	minify: true,
	sourcemap: true,
	outdir: 'build/',
	allowOverwrite: true,
});

await ctx.watch();

const { host, port } = await ctx.serve({
	servedir: 'build',
});
