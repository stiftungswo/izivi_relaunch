<?php
namespace IZiviPlanningBundle\Controller;

use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use FOS\RestBundle\Controller\Annotations;
use FOS\RestBundle\Request\ParamFetcherInterface;
use FOS\RestBundle\View\View;
use Symfony\Component\HttpFoundation\Response;

class RegistrationCenterController extends BaseController
{
    private $handlerSerivce = 'izivi.registration_center.handler';

    /**
     * List all Entities.
     *
     * @ApiDoc(
     * resource = true,
     * description="Gets a Collection of Registration Centers",
     * output = "IZiviPlanningBundle\Entity\RegistrationCenter",
     * section="registration_center",
     * statusCodes = {
     * 200 = "Returned when successful"
     * }
     * )
     *
     * @Annotations\View(
     * serializerEnableMaxDepthChecks=true,
     * serializerGroups={"List"}
     * )
     *
     * @Annotations\Route(requirements={"_format"="json"})
     *
     * @param ParamFetcherInterface $paramFetcher
     *            param fetcher codes
     *
     * @return array
     */
    public function getRegistrationcentersAction(ParamFetcherInterface $paramFetcher)
    {
        return $this->view($this->container->get($this->handlerSerivce)->all($paramFetcher->all()), Response::HTTP_OK);
    }
}