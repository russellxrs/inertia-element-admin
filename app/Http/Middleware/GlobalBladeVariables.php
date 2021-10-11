<?php

namespace App\Http\Middleware;

use App\Models\Menu;
use Closure;
use Illuminate\Http\Request;

class GlobalBladeVariables
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        view()->share('_menu', $this->menu());
        return $next($request);
    }

    protected function menu(){
        $model = new Menu();
        return $model->toTree();
    }
}
